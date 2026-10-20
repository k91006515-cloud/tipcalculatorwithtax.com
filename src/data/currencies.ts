export interface Currency {
	code: string;
	name: string;
	symbol: string;
	locale: string;
	region: string;
}

export const CURRENCIES: Currency[] = [
	{ code: 'USD', name: 'US Dollar', symbol: '$', locale: 'en-US', region: 'Americas' },
	{ code: 'CAD', name: 'Canadian Dollar', symbol: '$', locale: 'en-CA', region: 'Americas' },
	{ code: 'MXN', name: 'Mexican Peso', symbol: '$', locale: 'es-MX', region: 'Americas' },
	{ code: 'BRL', name: 'Brazilian Real', symbol: 'R$', locale: 'pt-BR', region: 'Americas' },
	{ code: 'ARS', name: 'Argentine Peso', symbol: '$', locale: 'es-AR', region: 'Americas' },
	{ code: 'CLP', name: 'Chilean Peso', symbol: '$', locale: 'es-CL', region: 'Americas' },
	{ code: 'COP', name: 'Colombian Peso', symbol: '$', locale: 'es-CO', region: 'Americas' },
	{ code: 'END', name: 'Peruvian Sol', symbol: 'S/', locale: 'es-PE', region: 'Americas' },
	{ code: 'EUR', name: 'Euro', symbol: '€', locale: 'de-DE', region: 'Europe' },
	{ code: 'GBP', name: 'British Pound', symbol: '£', locale: 'en-GB', region: 'Europe' },
	{ code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', locale: 'de-CH', region: 'Europe' },
	{ code: 'SEK', name: 'Swedish Krona', symbol: 'kr', locale: 'sv-SE', region: 'Europe' },
	{ code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', locale: 'nb-NO', region: 'Europe' },
	{ code: 'DKK', name: 'Danish Krone', symbol: 'kr', locale: 'da-DK', region: 'Europe' },
	{ code: 'PLN', name: 'Polish Zloty', symbol: 'zł', locale: 'pl-PL', region: 'Europe' },
	{ code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', locale: 'cs-CZ', region: 'Europe' },
	{ code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', locale: 'hu-HU', region: 'Europe' },
	{ code: 'RON', name: 'Romanian Leu', symbol: 'lei', locale: 'ro-RO', region: 'Europe' },
	{ code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴', locale: 'uk-UA', region: 'Europe' },
	{ code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', locale: 'ar-AE', region: 'Middle East & Africa' },
	{ code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', locale: 'ar-SA', region: 'Middle East & Africa' },
	{ code: 'QAR', name: 'Qatari Riyal', symbol: 'ر.ق', locale: 'ar-QA', region: 'Middle East & Africa' },
	{ code: 'ILS', name: 'Israeli New Shekel', symbol: '₪', locale: 'he-IL', region: 'Middle East & Africa' },
	{ code: 'TRY', name: 'Turkish Lira', symbol: '₺', locale: 'tr-TR', region: 'Middle East & Africa' },
	{ code: 'ZAR', name: 'South African Rand', symbol: 'R', locale: 'en-ZA', region: 'Middle East & Africa' },
	{ code: 'NGN', name: 'Nigerian Naira', symbol: '₦', locale: 'en-NG', region: 'Middle East & Africa' },
	{ code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', locale: 'en-EG', region: 'Middle East & Africa' },
	{ code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', locale: 'en-KE', region: 'Middle East & Africa' },
	{ code: 'MAD', name: 'Moroccan Dirham', symbol: 'د.م.', locale: 'fr-MA', region: 'Middle East & Africa' },
	{ code: 'JPY', name: 'Japanese Yen', symbol: '¥', locale: 'ja-JP', region: 'Asia Pacific' },
	{ code: 'CNY', name: 'Chinese Yuan', symbol: '¥', locale: 'zh-CN', region: 'Asia Pacific' },
	{ code: 'HKD', name: 'Hong Kong Dollar', symbol: '$', locale: 'en-HK', region: 'Asia Pacific' },
	{ code: 'SGD', name: 'Singapore Dollar', symbol: '$', locale: 'en-SG', region: 'Asia Pacific' },
	{ code: 'KRW', name: 'South Korean Won', symbol: '₩', locale: 'ko-KR', region: 'Asia Pacific' },
	{ code: 'INR', name: 'Indian Rupee', symbol: '₹', locale: 'en-IN', region: 'Asia Pacific' },
	{ code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', locale: 'en-PK', region: 'Asia Pacific' },
	{ code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', locale: 'en-BD', region: 'Asia Pacific' },
	{ code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs', locale: 'en-LK', region: 'Asia Pacific' },
	{ code: 'NPR', name: 'Nepalese Rupee', symbol: '₨', locale: 'ne-NP', region: 'Asia Pacific' },
	{ code: 'THB', name: 'Thai Baht', symbol: '฿', locale: 'th-TH', region: 'Asia Pacific' },
	{ code: 'VND', name: 'Vietnamese Dong', symbol: '₫', locale: 'vi-VN', region: 'Asia Pacific' },
	{ code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', locale: 'id-ID', region: 'Asia Pacific' },
	{ code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', locale: 'ms-MY', region: 'Asia Pacific' },
	{ code: 'PHP', name: 'Philippine Peso', symbol: '₱', locale: 'en-PH', region: 'Asia Pacific' },
	{ code: 'AUD', name: 'Australian Dollar', symbol: '$', locale: 'en-AU', region: 'Asia Pacific' },
	{ code: 'NZD', name: 'New Zealand Dollar', symbol: '$', locale: 'en-NZ', region: 'Asia Pacific' },
	{ code: 'FJD', name: 'Fijian Dollar', symbol: '$', locale: 'en-FJ', region: 'Asia Pacific' },
	{ code: 'ISK', name: 'Icelandic Krona', symbol: 'kr', locale: 'is-IS', region: 'Europe' },
	{ code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв', locale: 'bg-BG', region: 'Europe' },
];

export const CURRENCY_REGIONS = Array.from(new Set(CURRENCIES.map((c) => c.region)));

export const DEFAULT_CURRENCY = 'USD';

export function getCurrency(code: string): Currency {
	return CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0];
}

export function currencyDecimals(code: string): number {
	try {
		return new Intl.NumberFormat(getCurrency(code).locale, {
			style: 'currency',
			currency: code,
		}).resolvedOptions().maximumFractionDigits ?? 2;
	} catch {
		return 2;
	}
}
