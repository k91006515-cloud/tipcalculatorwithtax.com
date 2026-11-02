import {
	CURRENCIES,
	DEFAULT_CURRENCY,
	getCurrency,
	currencyDecimals,
	type Currency,
} from '../data/currencies';
import {
	DEFAULT_LANG,
	SUPPORTED_LANGUAGES,
	getTranslation,
	type TranslationDictionary,
} from '../data/i18n';

type RoundingMode = 'off' | 'up' | 'down' | 'nearest';

interface AppState {
	bill: number;
	tipPct: number;
	taxPct: number;
	people: number;
	currency: string;
	rounding: RoundingMode;
	currentLang: string;
}

const STORAGE_KEYS = {
	theme: 'stc-theme',
	currency: 'stc-currency',
	rounding: 'stc-rounding',
	tax: 'stc-tax',
	lang: 'stc-lang',
} as const;

const URL_KEYS = ['bill', 'tip', 'people', 'currency', 'tax', 'lang'] as const;

const urlParams = new URLSearchParams(window.location.search);

const MIN_PEOPLE = 1;
const MAX_PEOPLE = 999;
const MAX_TIP = 500;
const DEFAULT_TIP = 20;
const MAX_SPLIT_SEGMENTS = 24;

const state: AppState = {
	bill: 0,
	tipPct: DEFAULT_TIP,
	taxPct: 0,
	people: 1,
	currency: DEFAULT_CURRENCY,
	rounding: 'off',
	currentLang: DEFAULT_LANG,
};

const listeners = new Set<(state: AppState) => void>();

function notify() {
	for (const listener of listeners) listener(state);
}

function setState(patch: Partial<AppState>) {
	Object.assign(state, patch);
	notify();
}

function readStorage(key: string): string | null {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}

function writeStorage(key: string, value: string) {
	try {
		localStorage.setItem(key, value);
	} catch {
		/* Storage might be disabled in private mode */
	}
}

/* ---------------------------------------------------------------- i18n Translation */

function translatePage(lang: string) {
	const i18n: TranslationDictionary = getTranslation(lang);
	const isRtl = lang === 'ar';

	document.documentElement.lang = lang;
	document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

	// Translate text content
	document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
		const key = el.getAttribute('data-i18n') as keyof TranslationDictionary;
		if (key && i18n[key] !== undefined) {
			el.textContent = i18n[key];
		}
	});

	// Translate placeholders
	document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
		const key = el.getAttribute('data-i18n-placeholder') as keyof TranslationDictionary;
		if (key && i18n[key] !== undefined) {
			el.placeholder = i18n[key];
		}
	});

	// Translate aria labels
	document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
		const key = el.getAttribute('data-i18n-aria') as keyof TranslationDictionary;
		if (key && i18n[key] !== undefined) {
			el.setAttribute('aria-label', i18n[key]);
		}
	});
}

function syncLanguageSelects(lang: string) {
	document.querySelectorAll<HTMLSelectElement>('[data-stc-language]').forEach((select) => {
		if (select.value !== lang) select.value = lang;
	});
}

function setLanguage(lang: string) {
	if (!SUPPORTED_LANGUAGES.some((l) => l.code === lang)) return;
	state.currentLang = lang;
	writeStorage(STORAGE_KEYS.lang, lang);
	syncLanguageSelects(lang);
	translatePage(lang);
	notify();
	scheduleUrlSync();
}

function initI18n() {
	const stored = readStorage(STORAGE_KEYS.lang);
	const fromUrl = urlParams.get('lang');
	let candidate = fromUrl ?? stored;

	if (!candidate) {
		const browserLang = navigator.language?.split('-')[0]?.toLowerCase();
		if (browserLang && SUPPORTED_LANGUAGES.some((l) => l.code === browserLang)) {
			candidate = browserLang;
		}
	}

	const activeLang =
		candidate && SUPPORTED_LANGUAGES.some((l) => l.code === candidate)
			? candidate
			: DEFAULT_LANG;

	state.currentLang = activeLang;
	syncLanguageSelects(activeLang);
	translatePage(activeLang);

	document.querySelectorAll<HTMLSelectElement>('[data-stc-language]').forEach((select) => {
		select.addEventListener('change', () => {
			setLanguage(select.value);
		});
	});
}

/* ---------------------------------------------------------------- formatting */

function getFormatter(currency: Currency): Intl.NumberFormat {
	try {
		return new Intl.NumberFormat(currency.locale, {
			style: 'currency',
			currency: currency.code,
		});
	} catch {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	}
}

function formatMoney(value: number, currency: Currency): string {
	if (!Number.isFinite(value)) value = 0;
	try {
		return getFormatter(currency).format(value);
	} catch {
		const decimals = currencyDecimals(currency.code);
		return `${currency.symbol}${value.toFixed(decimals)}`;
	}
}

function formatPercent(value: number): string {
	return `${new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value)}%`;
}

function countDigits(value: string): number {
	return (value.match(/\d/g) ?? []).length;
}

function caretAfterDigits(value: string, digits: number): number {
	if (digits <= 0) return 0;
	let seen = 0;
	for (let i = 0; i < value.length; i++) {
		if (/\d/.test(value[i])) {
			seen += 1;
			if (seen === digits) return i + 1;
		}
	}
	return value.length;
}

function groupDigits(raw: string): string {
	let cleaned = raw.replace(/[^\d.]/g, '');
	const firstDot = cleaned.indexOf('.');
	if (firstDot !== -1) {
		cleaned = cleaned.slice(0, firstDot + 1) + cleaned.slice(firstDot + 1).replace(/\./g, '');
	}
	if (cleaned === '' || cleaned === '.') return cleaned === '.' ? '0.' : '';
	const [intRaw, decimals] = cleaned.split('.');
	const int = intRaw.replace(/^0+(?=\d)/, '');
	const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return decimals !== undefined ? `${grouped}.${decimals}` : grouped;
}

function parseAmount(raw: string): number {
	const parsed = parseFloat(raw.replace(/,/g, ''));
	return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function trimNumber(value: number): string {
	return String(Math.round(value * 100) / 100);
}

function applyRounding(value: number, mode: RoundingMode, currency: Currency): number {
	if (mode === 'off') return value;
	const decimals = currencyDecimals(currency.code);

	if (decimals === 0) {
		if (mode === 'up') return Math.ceil(value);
		if (mode === 'down') return Math.floor(value);
		return Math.round(value);
	}

	// For standard currencies with cents, round to nearest whole currency unit
	if (mode === 'up') return Math.ceil(value);
	if (mode === 'down') return Math.floor(value);
	return Math.round(value);
}

/* --------------------------------------------------------------------- theme */

function currentTheme(): 'light' | 'dark' {
	return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function updateThemeColorMeta(theme: 'light' | 'dark') {
	const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
	if (meta) meta.setAttribute('content', theme === 'dark' ? '#090d16' : '#2563eb');
}

function syncThemeButtons(theme: 'light' | 'dark') {
	document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((button) => {
		button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
	});
}

function setTheme(theme: 'light' | 'dark') {
	document.documentElement.dataset.theme = theme;
	writeStorage(STORAGE_KEYS.theme, theme);
	updateThemeColorMeta(theme);
	syncThemeButtons(theme);
}

function initTheme() {
	syncThemeButtons(currentTheme());
	updateThemeColorMeta(currentTheme());

	document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((button) => {
		button.addEventListener('click', () => {
			setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
		});
	});
}

/* ----------------------------------------------------------------- currency */

function syncCurrencyElements(code: string) {
	const currency = getCurrency(code);

	document.querySelectorAll<HTMLSelectElement>('[data-stc-currency]').forEach((select) => {
		if (select.value !== code) select.value = code;
	});

	document.querySelectorAll<HTMLElement>('[data-out="currency-symbol"]').forEach((el) => {
		el.textContent = currency.symbol;
	});

	document.querySelectorAll<HTMLElement>('[data-quick-amount]').forEach((button) => {
		const amount = button.dataset.quickAmount;
		if (amount) button.textContent = `${currency.symbol}${amount}`;
	});
}

function initCurrencySelects() {
	const fromUrl = urlParams.get('currency');
	const stored = readStorage(STORAGE_KEYS.currency);
	const candidate = fromUrl ?? stored;

	if (candidate && CURRENCIES.some((currency) => currency.code === candidate)) {
		state.currency = candidate;
	}
	syncCurrencyElements(state.currency);

	document.querySelectorAll<HTMLElement>('[data-stc-currency]').forEach((select) => {
		select.addEventListener('change', (e) => {
			const code = (e.target as HTMLSelectElement).value;
			if (!CURRENCIES.some((currency) => currency.code === code)) return;
			setState({ currency: code });
			writeStorage(STORAGE_KEYS.currency, code);
			syncCurrencyElements(code);
		});
	});
}

/* --------------------------------------------------------------- url state */

function stateParams(): URLSearchParams {
	const params = new URLSearchParams();
	if (state.bill > 0) params.set('bill', trimNumber(state.bill));
	if (state.tipPct !== DEFAULT_TIP) params.set('tip', trimNumber(state.tipPct));
	if (state.people !== 1) params.set('people', String(state.people));
	if (state.currency !== DEFAULT_CURRENCY) params.set('currency', state.currency);
	if (state.taxPct !== 0) params.set('tax', trimNumber(state.taxPct));
	if (state.currentLang !== DEFAULT_LANG) params.set('lang', state.currentLang);
	return params;
}

function syncUrl() {
	const params = new URLSearchParams(window.location.search);
	for (const key of URL_KEYS) params.delete(key);
	for (const [key, value] of stateParams()) params.set(key, value);

	const query = params.toString();
	const url = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
	window.history.replaceState(null, '', url);
}

let urlTimer = 0;
function scheduleUrlSync() {
	window.clearTimeout(urlTimer);
	urlTimer = window.setTimeout(syncUrl, 300);
}

function shareUrl(): string {
	const params = new URLSearchParams(window.location.search);
	for (const key of URL_KEYS) params.delete(key);
	for (const [key, value] of stateParams()) params.set(key, value);

	const query = params.toString();
	return `${window.location.origin}${window.location.pathname}${query ? `?${query}` : ''}`;
}

/* ------------------------------------------------------------------ clipboard */

async function copyText(text: string): Promise<boolean> {
	try {
		if (navigator.clipboard?.writeText) {
			await navigator.clipboard.writeText(text);
			return true;
		}
	} catch {
		/* Fall through to fallback */
	}

	try {
		const field = document.createElement('textarea');
		field.value = text;
		field.setAttribute('readonly', '');
		field.style.position = 'fixed';
		field.style.top = '0';
		field.style.opacity = '0';
		document.body.appendChild(field);
		field.select();

		const legacyExec = (
			document as unknown as { execCommand?: (command: string) => boolean }
		).execCommand;

		if (!legacyExec) {
			document.body.removeChild(field);
			return false;
		}

		const copied = legacyExec.call(document, 'copy');
		document.body.removeChild(field);
		return copied;
	} catch {
		return false;
	}
}

function flashButton(button: HTMLElement, message: string, restoreText: string) {
	button.classList.add('is-copied');
	const labelEl = button.querySelector('[data-out="copy-label"]') ?? button;
	const original = labelEl.textContent;
	labelEl.textContent = message;

	window.setTimeout(() => {
		button.classList.remove('is-copied');
		labelEl.textContent = restoreText || original || 'Copy';
	}, 1800);
}

/* --------------------------------------------------------------- calculator */

function initCalculator() {
	const root = document.querySelector<HTMLElement>('[data-stc-calculator]');
	if (!root) return;

	const billInput = root.querySelector<HTMLInputElement>('[data-field="bill"]');
	const tipInput = root.querySelector<HTMLInputElement>('[data-field="tip"]');
	const taxInput = root.querySelector<HTMLInputElement>('[data-field="tax"]');
	const peopleInput = root.querySelector<HTMLInputElement>('[data-field="people"]');
	const peopleDec = root.querySelector<HTMLButtonElement>('[data-action="people-dec"]');
	const peopleInc = root.querySelector<HTMLButtonElement>('[data-action="people-inc"]');
	const resetButton = root.querySelector<HTMLButtonElement>('[data-action="reset"]');
	const copyButton = root.querySelector<HTMLButtonElement>('[data-action="copy"]');
	const copyLinkButton = root.querySelector<HTMLButtonElement>('[data-action="copy-link"]');

	const outPerPerson = root.querySelector<HTMLElement>('[data-out="per-person"]');
	const outPerPersonCaption = root.querySelector<HTMLElement>('[data-out="per-person-caption"]');
	const outBillDisplay = root.querySelector<HTMLElement>('[data-out="bill-display"]');
	const outTip = root.querySelector<HTMLElement>('[data-out="tip"]');
	const outTipPct = root.querySelector<HTMLElement>('[data-out="tip-pct"]');
	const outTotal = root.querySelector<HTMLElement>('[data-out="total"]');
	const outTax = root.querySelector<HTMLElement>('[data-out="tax"]');
	const outTaxPct = root.querySelector<HTMLElement>('[data-out="tax-pct"]');
	const outTipPerPerson = root.querySelector<HTMLElement>('[data-out="tip-per-person"]');
	const outTipPerPersonRow = root.querySelector<HTMLElement>('[data-out="tip-per-person-row"]');
	const outFormula = root.querySelector<HTMLElement>('[data-out="formula"]');
	const outRoundingNote = root.querySelector<HTMLElement>('[data-out="rounding-note"]');
	const outSplit = root.querySelector<HTMLElement>('[data-out="split"]');
	const outSplitBar = root.querySelector<HTMLElement>('[data-out="split-bar"]');
	const outSplitLegend = root.querySelector<HTMLElement>('[data-out="split-legend"]');

	const tipPresets = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-tip-preset]'));
	const roundingInputs = Array.from(
		root.querySelectorAll<HTMLInputElement>('[name="stc-rounding"]'),
	);

	// Restore stored preferences
	const storedRounding = readStorage(STORAGE_KEYS.rounding);
	if (
		storedRounding === 'off' ||
		storedRounding === 'up' ||
		storedRounding === 'down' ||
		storedRounding === 'nearest'
	) {
		state.rounding = storedRounding;
	}

	const storedTax = readStorage(STORAGE_KEYS.tax);
	if (storedTax !== null && Number.isFinite(Number(storedTax))) {
		state.taxPct = Math.min(100, Math.max(0, Number(storedTax)));
		if (taxInput) taxInput.value = String(state.taxPct);
	}

	// Restore from URL query string
	const billFromUrl = Number(urlParams.get('bill'));
	if (urlParams.has('bill') && Number.isFinite(billFromUrl) && billFromUrl >= 0) {
		state.bill = billFromUrl;
		if (billInput) billInput.value = groupDigits(trimNumber(billFromUrl));
	}

	const tipFromUrl = Number(urlParams.get('tip'));
	if (
		urlParams.has('tip') &&
		Number.isFinite(tipFromUrl) &&
		tipFromUrl >= 0 &&
		tipFromUrl <= MAX_TIP
	) {
		state.tipPct = tipFromUrl;
		if (tipInput) tipInput.value = String(tipFromUrl);
	}

	const taxFromUrl = Number(urlParams.get('tax'));
	if (
		urlParams.has('tax') &&
		Number.isFinite(taxFromUrl) &&
		taxFromUrl >= 0 &&
		taxFromUrl <= 100
	) {
		state.taxPct = taxFromUrl;
		if (taxInput) taxInput.value = String(taxFromUrl); // Bug fixed: now taxInput, not tipInput
	}

	const peopleFromUrl = Number(urlParams.get('people'));
	if (
		urlParams.has('people') &&
		Number.isFinite(peopleFromUrl) &&
		peopleFromUrl >= MIN_PEOPLE
	) {
		state.people = Math.min(MAX_PEOPLE, Math.round(peopleFromUrl));
		if (peopleInput) peopleInput.value = String(state.people);
	}

	const setPeople = (value: number) => {
		const people = Math.min(MAX_PEOPLE, Math.max(MIN_PEOPLE, Math.round(value)));
		state.people = people;
		if (peopleInput) peopleInput.value = String(people);
		render();
	};

	const setTip = (value: number) => {
		const tip = Math.min(MAX_TIP, Math.max(0, value));
		state.tipPct = tip;
		if (tipInput && document.activeElement !== tipInput) tipInput.value = String(tip);
		render();
	};

	const setTax = (value: number) => {
		const tax = Math.min(100, Math.max(0, value));
		state.taxPct = tax;
		if (taxInput && document.activeElement !== taxInput) taxInput.value = String(tax);
		writeStorage(STORAGE_KEYS.tax, String(tax));
		render();
	};

	const renderSplit = () => {
		if (!outSplit || !outSplitBar || !outSplitLegend) return;
		const count = state.people;
		const i18n = getTranslation(state.currentLang);

		if (count < 2 || count > MAX_SPLIT_SEGMENTS) {
			outSplit.hidden = true;
			return;
		}

		outSplit.hidden = false;
		outSplitBar.replaceChildren(
			...Array.from({ length: count }, () => {
				const segment = document.createElement('span');
				segment.className = 'split__segment';
				return segment;
			}),
		);
		outSplitLegend.textContent = i18n.splitEqually.replace('{count}', String(count));
	};

	const render = () => {
		const currency = getCurrency(state.currency);
		const i18n = getTranslation(state.currentLang);
		const taxAmount = state.bill * (state.taxPct / 100);
		const tipAmount = state.bill * (state.tipPct / 100);
		const total = state.bill + taxAmount + tipAmount;

		let perPerson: number;
		let tipPerPerson: number;
		let perPersonCaption: string;

		if (state.people <= 1) {
			perPerson = total;
			tipPerPerson = tipAmount;
			perPersonCaption = i18n.totalToPay;
			if (outTipPerPersonRow) outTipPerPersonRow.hidden = true;
		} else {
			const perPersonRaw = total / state.people;
			perPerson = applyRounding(perPersonRaw, state.rounding, currency);
			tipPerPerson = tipAmount / state.people;
			perPersonCaption = i18n.eachOfPeoplePays.replace('{people}', String(state.people));
			if (outTipPerPersonRow) outTipPerPersonRow.hidden = false;
		}

		if (outPerPerson) outPerPerson.textContent = formatMoney(perPerson, currency);
		if (outBillDisplay) outBillDisplay.textContent = formatMoney(state.bill, currency);
		if (outTip) outTip.textContent = formatMoney(tipAmount, currency);
		if (outTipPct) outTipPct.textContent = `(${formatPercent(state.tipPct)})`;
		if (outTotal) outTotal.textContent = formatMoney(total, currency);
		if (outTax) outTax.textContent = formatMoney(taxAmount, currency);
		if (outTaxPct) outTaxPct.textContent = `(${formatPercent(state.taxPct)})`;
		if (outTipPerPerson) outTipPerPerson.textContent = formatMoney(tipPerPerson, currency);

		if (outPerPersonCaption) {
			outPerPersonCaption.textContent = perPersonCaption;
		}

		if (outFormula) {
			outFormula.textContent = `${formatMoney(state.bill, currency)} + ${formatMoney(
				taxAmount,
				currency,
			)} tax + ${formatMoney(tipAmount, currency)} tip = ${formatMoney(total, currency)}`;
		}

		if (outRoundingNote) {
			const active = state.rounding !== 'off';
			outRoundingNote.hidden = !active;
			if (active) {
				const noteText =
					state.rounding === 'up'
						? i18n.roundedNoteUp
						: state.rounding === 'down'
							? i18n.roundedNoteDown
							: i18n.roundedNoteNearest;
				outRoundingNote.textContent = noteText;
			}
		}

		renderSplit();

		tipPresets.forEach((preset) => {
			const value = Number(preset.dataset.tipPreset);
			const isActive = Math.abs(value - state.tipPct) < 0.001;
			preset.classList.toggle('is-active', isActive);
			preset.setAttribute('aria-pressed', isActive ? 'true' : 'false');
		});

		roundingInputs.forEach((input) => {
			input.checked = input.value === state.rounding;
		});

		syncCurrencyElements(state.currency);
		scheduleUrlSync();
	};

	// Bill Input Events
	billInput?.addEventListener('input', () => {
		const caret = billInput.selectionStart ?? billInput.value.length;
		const digitsBefore = countDigits(billInput.value.slice(0, caret));
		const formatted = groupDigits(billInput.value);
		billInput.value = formatted;
		const position = caretAfterDigits(formatted, digitsBefore);
		billInput.setSelectionRange(position, position);
		state.bill = parseAmount(formatted);
		render();
	});

	billInput?.addEventListener('blur', () => {
		if (billInput.value === '' || billInput.value === '.') {
			billInput.value = '';
			state.bill = 0;
			render();
		}
	});

	billInput?.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			billInput.blur();
		}
	});

	// Tip Input Events
	tipInput?.addEventListener('input', () => {
		const parsed = parseFloat(tipInput.value);
		setTip(Number.isFinite(parsed) ? parsed : 0);
	});

	tipInput?.addEventListener('blur', () => {
		tipInput.value = String(state.tipPct);
	});

	// Tax Input Events
	taxInput?.addEventListener('input', () => {
		const parsed = parseFloat(taxInput.value);
		setTax(Number.isFinite(parsed) ? parsed : 0);
	});

	taxInput?.addEventListener('blur', () => {
		taxInput.value = String(state.taxPct);
	});

	// Tip Presets
	tipPresets.forEach((preset) => {
		preset.addEventListener('click', () => {
			const value = Number(preset.dataset.tipPreset);
			setTip(value);
		});
	});

	// Tax Presets
	root.querySelectorAll<HTMLButtonElement>('[data-tax-preset]').forEach((btn) => {
		btn.addEventListener('click', () => {
			const val = parseFloat(btn.dataset.taxPreset ?? '0');
			setTax(val);
		});
	});

	// People Presets
	root.querySelectorAll<HTMLButtonElement>('[data-people-preset]').forEach((btn) => {
		btn.addEventListener('click', () => {
			const count = parseInt(btn.dataset.peoplePreset ?? '1', 10);
			setPeople(count);
		});
	});

	// People Input & Steppers
	peopleInput?.addEventListener('input', () => {
		const parsed = parseInt(peopleInput.value, 10);
		setPeople(Number.isFinite(parsed) ? parsed : MIN_PEOPLE);
	});

	peopleInput?.addEventListener('blur', () => {
		peopleInput.value = String(state.people);
	});

	peopleDec?.addEventListener('click', () => {
		setPeople(state.people - 1);
	});

	peopleInc?.addEventListener('click', () => {
		setPeople(state.people + 1);
	});

	// Rounding Radio Controls
	roundingInputs.forEach((input) => {
		input.addEventListener('change', () => {
			if (!input.checked) return;
			const mode = input.value as RoundingMode;
			state.rounding = mode;
			writeStorage(STORAGE_KEYS.rounding, mode);
			render();
		});
	});

	// Reset Button
	resetButton?.addEventListener('click', () => {
		state.bill = 0;
		state.rounding = 'off';
		state.tipPct = DEFAULT_TIP;
		state.taxPct = 0;
		state.people = 1;
		writeStorage(STORAGE_KEYS.rounding, 'off');

		if (billInput) billInput.value = '';
		if (tipInput) tipInput.value = String(DEFAULT_TIP);
		if (taxInput) taxInput.value = '0';
		if (peopleInput) peopleInput.value = '1';

		render();
	});

	// Copy Main Result
	copyButton?.addEventListener('click', async () => {
		if (!outPerPerson) return;
		const i18n = getTranslation(state.currentLang);
		const currency = getCurrency(state.currency);
		const taxAmount = state.bill * (state.taxPct / 100);
		const tipAmount = state.bill * (state.tipPct / 100);
		const total = state.bill + taxAmount + tipAmount;

		let summary = '';
		if (state.people > 1) {
			summary = `${outPerPerson.textContent} each (${state.people} people)\nTotal: ${formatMoney(total, currency)} (Bill: ${formatMoney(state.bill, currency)}, Tax: ${formatMoney(taxAmount, currency)}, Tip: ${formatMoney(tipAmount, currency)})\nCalculated at https://tipcalculatorwithtax.com`;
		} else {
			summary = `Total: ${outPerPerson.textContent} (Bill: ${formatMoney(state.bill, currency)}, Tax: ${formatMoney(taxAmount, currency)}, Tip: ${formatMoney(tipAmount, currency)})\nCalculated at https://tipcalculatorwithtax.com`;
		}

		const copied = await copyText(summary);
		flashButton(copyButton, copied ? i18n.copied : i18n.copyFailed, i18n.copyResult);
	});

	// Copy Shareable Link
	copyLinkButton?.addEventListener('click', async () => {
		const i18n = getTranslation(state.currentLang);
		const copied = await copyText(shareUrl());
		flashButton(copyLinkButton, copied ? i18n.linkCopied : i18n.copyFailed, i18n.copyLink);
	});

	// Quick Amount Buttons
	root.querySelectorAll<HTMLButtonElement>('[data-quick-amount]').forEach((button) => {
		button.addEventListener('click', () => {
			const amount = button.dataset.quickAmount;
			if (!amount || !billInput) return;
			billInput.value = groupDigits(amount);
			state.bill = parseAmount(amount);
			render();
			billInput.focus();
		});
	});

	listeners.add(render);
	render();
}

/* --------------------------------------------------------------------- boot */

function boot() {
	initTheme();
	initCurrencySelects();
	initCalculator();
	initI18n();
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot);
} else {
	boot();
}
