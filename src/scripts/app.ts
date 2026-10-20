import { CURRENCIES, DEFAULT_CURRENCY, getCurrency, type Currency } from '../data/currencies';

type RoundingMode = 'off' | 'up' | 'down' | 'nearest';

interface AppState {
	bill: number;
	tipPct: number;
	taxPct: number;
	people: number;
	currency: string;
	rounding: RoundingMode;
}

const STORAGE_KEYS = {
	theme: 'stc-theme',
	currency: 'stc-currency',
	rounding: 'stc-rounding',
	tax: 'stc-tax',
} as const;

const URL_KEYS = ['bill', 'tip', 'people', 'currency', 'tax'] as const;

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
		/* storage unavailable — the app still works, it just will not remember settings */
	}
}

/* ---------------------------------------------------------------- formatting */

function getFormatter(currency: Currency): Intl.NumberFormat {
	return new Intl.NumberFormat(currency.locale, {
		style: 'currency',
		currency: currency.code,
	});
}

function formatMoney(value: number, currency: Currency): string {
	if (!Number.isFinite(value)) return getFormatter(currency).format(0);
	return getFormatter(currency).format(value);
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
	const decimals = getFormatter(currency).resolvedOptions().maximumFractionDigits ?? 2;
	const unit = 10 ** -decimals;
	const scaled = value / unit;
	if (mode === 'up') return Math.ceil(scaled) * unit;
	if (mode === 'down') return Math.floor(scaled) * unit;
	return Math.round(scaled) * unit;
}

/* --------------------------------------------------------------------- theme */

function currentTheme(): 'light' | 'dark' {
	return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function updateThemeColorMeta(theme: 'light' | 'dark') {
	const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
	if (meta) meta.setAttribute('content', theme === 'dark' ? '#000000' : '#fafafa');
}

function setTheme(theme: 'light' | 'dark') {
	document.documentElement.dataset.theme = theme;
	writeStorage(STORAGE_KEYS.theme, theme);
	updateThemeColorMeta(theme);
	syncThemeButtons(theme);
}

function syncThemeButtons(theme: 'light' | 'dark') {
	document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((button) => {
		button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
	});
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

function syncCurrencySelects(code: string) {
	document.querySelectorAll<HTMLSelectElement>('[data-stc-currency]').forEach((select) => {
		if (select.value !== code) select.value = code;
	});
}

function initCurrencySelects() {
	const fromUrl = urlParams.get('currency');
	const stored = readStorage(STORAGE_KEYS.currency);
	const candidate = fromUrl ?? stored;

	if (candidate && CURRENCIES.some((currency) => currency.code === candidate)) {
		state.currency = candidate;
	}
	syncCurrencySelects(state.currency);

	document.querySelectorAll<HTMLSelectElement>('[data-stc-currency]').forEach((select) => {
		select.addEventListener('change', () => {
			const code = select.value;
			if (!CURRENCIES.some((currency) => currency.code === code)) return;
			setState({ currency: code });
			writeStorage(STORAGE_KEYS.currency, code);
			syncCurrencySelects(code);
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
	return params;
}

/**
 * Mirrors the calculator state into the query string so a split can be shared
 * as a link. Params we do not own (utm_*, ref, …) are left untouched.
 */
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
		/* fall through to the legacy path */
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

		// Legacy fallback for browsers without the async clipboard API (non-secure contexts).
		// Typed loosely on purpose: the standard signature is deprecated, but the method
		// is still the only synchronous copy path when the page is served over plain HTTP.
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

function flashButton(button: HTMLButtonElement, message: string, restore = 'Copy') {
	button.classList.add('is-copied');
	button.textContent = message;
	window.setTimeout(() => {
		button.classList.remove('is-copied');
		button.textContent = restore;
	}, 1600);
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
	const outTip = root.querySelector<HTMLElement>('[data-out="tip"]');
	const outTotal = root.querySelector<HTMLElement>('[data-out="total"]');
	const outTax = root.querySelector<HTMLElement>('[data-out="tax"]');
	const outTipPerPerson = root.querySelector<HTMLElement>('[data-out="tip-per-person"]');
	const outFormula = root.querySelector<HTMLElement>('[data-out="formula"]');
	const outRoundingNote = root.querySelector<HTMLElement>('[data-out="rounding-note"]');
	const outSplit = root.querySelector<HTMLElement>('[data-out="split"]');
	const outSplitBar = root.querySelector<HTMLElement>('[data-out="split-bar"]');
	const outSplitLegend = root.querySelector<HTMLElement>('[data-out="split-legend"]');
	const tipPresets = Array.from(
		root.querySelectorAll<HTMLButtonElement>('[data-tip-preset]'),
	);
	const roundingInputs = Array.from(
		root.querySelectorAll<HTMLInputElement>('[name="stc-rounding"]'),
	);

	const storedRounding = readStorage(STORAGE_KEYS.rounding);
	if (storedRounding === 'off' || storedRounding === 'up' || storedRounding === 'down' || storedRounding === 'nearest') {
		state.rounding = storedRounding;
	}
	const storedTax = readStorage(STORAGE_KEYS.tax);
	if (storedTax !== null && Number.isFinite(Number(storedTax))) {
		state.taxPct = Math.min(100, Math.max(0, Number(storedTax)));
	}

	/* Restore a shared split from the query string. */
	const billFromUrl = Number(urlParams.get('bill'));
	if (urlParams.has('bill') && Number.isFinite(billFromUrl) && billFromUrl >= 0) {
		state.bill = billFromUrl;
		if (billInput) billInput.value = groupDigits(trimNumber(billFromUrl));
	}

	const tipFromUrl = Number(urlParams.get('tip'));
	if (urlParams.has('tip') && Number.isFinite(tipFromUrl) && tipFromUrl >= 0 && tipFromUrl <= MAX_TIP) {
		state.tipPct = tipFromUrl;
		if (tipInput) tipInput.value = String(tipFromUrl);
	}

	const taxFromUrl = Number(urlParams.get('tax'));
	if (urlParams.has('tax') && Number.isFinite(taxFromUrl) && taxFromUrl >= 0 && taxFromUrl <= 100) {
		state.taxPct = taxFromUrl;
		if (tipInput) tipInput.value = String(taxFromUrl);
	}

	const peopleFromUrl = Number(urlParams.get('people'));
	if (urlParams.has('people') && Number.isFinite(peopleFromUrl) && peopleFromUrl >= MIN_PEOPLE) {
		state.people = Math.min(MAX_PEOPLE, Math.round(peopleFromUrl));
		if (peopleInput) peopleInput.value = String(state.people);
	}

	const setPeople = (value: number) => {
		const people = Math.min(MAX_PEOPLE, Math.max(MIN_PEOPLE, Math.round(value) || MIN_PEOPLE));
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
		state.taxPct = Math.min(100, Math.max(0, value));
		if (taxInput) taxInput.value = String(state.taxPct);
		writeStorage(STORAGE_KEYS.tax, String(state.taxPct));
		render();
	};

	const renderSplit = () => {
		if (!outSplit || !outSplitBar || !outSplitLegend) return;
		const count = state.people;

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
		outSplitLegend.textContent = `Split equally between ${count} people`;
	};

	const render = () => {
		const currency = getCurrency(state.currency);
		const taxAmount = state.bill * (state.taxPct / 100);
		const tipAmount = state.bill * (state.tipPct / 100);
		const total = state.bill + taxAmount + tipAmount;
		const perPersonRaw = total / state.people;
		const perPerson = applyRounding(perPersonRaw, state.rounding, currency);
		const tipPerPerson = tipAmount / state.people;

		if (outPerPerson) outPerPerson.textContent = formatMoney(perPerson, currency);
		if (outTip) outTip.textContent = formatMoney(tipAmount, currency);
		if (outTotal) outTotal.textContent = formatMoney(total, currency);
		if (outTax) outTax.textContent = formatMoney(taxAmount, currency);
		if (outTipPerPerson) outTipPerPerson.textContent = formatMoney(tipPerPerson, currency);

		if (outPerPersonCaption) {
			outPerPersonCaption.textContent =
				state.people === 1 ? 'Total to pay' : `Each of ${state.people} people pays`;
		}

		if (outFormula) {
			outFormula.textContent = `${formatMoney(state.bill, currency)} bill + ${formatMoney(
				taxAmount,
				currency,
			)} tax + ${formatMoney(tipAmount, currency)} tip (${formatPercent(state.tipPct)}) = ${formatMoney(total, currency)}`;
		}

		if (outRoundingNote) {
			const active = state.rounding !== 'off';
			outRoundingNote.hidden = !active;
			if (active) {
				const label =
					state.rounding === 'up'
						? 'up'
						: state.rounding === 'down'
							? 'down'
							: 'to the nearest';
				outRoundingNote.textContent = `Per-person total rounded ${label}.`;
			}
		}

		renderSplit();

		tipPresets.forEach((preset) => {
			const value = Number(preset.dataset.tipPreset);
			const isActive = value === state.tipPct;
			preset.classList.toggle('is-active', isActive);
			preset.setAttribute('aria-pressed', isActive ? 'true' : 'false');
		});

		roundingInputs.forEach((input) => {
			input.checked = input.value === state.rounding;
		});

		root.querySelectorAll<HTMLElement>('[data-quick-amount]').forEach((button) => {
			const amount = button.dataset.quickAmount;
			if (amount) button.textContent = `${currency.symbol}${amount}`;
		});

		scheduleUrlSync();
	};

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

	tipInput?.addEventListener('input', () => {
		const parsed = parseFloat(tipInput.value);
		setTip(Number.isFinite(parsed) ? parsed : 0);
	});

	tipInput?.addEventListener('blur', () => {
		tipInput.value = String(state.tipPct);
	});

	taxInput?.addEventListener('input', () => {
		const parsed = parseFloat(taxInput.value);
		setTax(Number.isFinite(parsed) ? parsed : 0);
	});

	taxInput?.addEventListener('blur', () => {
		taxInput.value = String(state.taxPct);
	});

	tipPresets.forEach((preset) => {
		preset.addEventListener('click', () => {
			const value = Number(preset.dataset.tipPreset);
			setTip(value);
			if (tipInput) tipInput.value = String(value);
		});
	});

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

	roundingInputs.forEach((input) => {
		input.addEventListener('change', () => {
			if (!input.checked) return;
			const mode = input.value as RoundingMode;
			state.rounding = mode;
			writeStorage(STORAGE_KEYS.rounding, mode);
			render();
		});
	});

	resetButton?.addEventListener('click', () => {
		state.bill = 0;
		state.rounding = 'off';
		writeStorage(STORAGE_KEYS.rounding, 'off');
		if (billInput) billInput.value = '';
		if (tipInput) tipInput.value = String(DEFAULT_TIP);
		if (peopleInput) peopleInput.value = '1';
		setTip(DEFAULT_TIP);
		setPeople(1);
		render();
	});

	copyButton?.addEventListener('click', async () => {
		if (!outPerPerson) return;
		const text = outPerPerson.textContent ?? '';
		const copied = await copyText(text);
		flashButton(copyButton, copied ? 'Copied' : 'Copy failed');
	});

	copyLinkButton?.addEventListener('click', async () => {
		const copied = await copyText(shareUrl());
		flashButton(copyLinkButton, copied ? 'Link copied' : 'Copy failed', 'Copy link');
	});

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
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot);
} else {
	boot();
}
