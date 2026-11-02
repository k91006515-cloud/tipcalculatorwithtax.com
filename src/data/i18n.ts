export interface TranslationDictionary {
	// Navigation
	navBrand: string;
	navCalculator: string;
	navHowItWorks: string;
	navTipGuide: string;
	navFaq: string;
	navCurrency: string;
	navLanguage: string;
	navTheme: string;
	openMenu: string;
	closeMenu: string;

	// Hero
	heroBadge: string;
	heroTitle: string;
	heroSubtitle: string;

	// Calculator
	calcHeading: string;
	billAmount: string;
	quickAmounts: string;
	tipPercentage: string;
	customTip: string;
	taxRate: string;
	taxHint: string;
	numberOfPeople: string;
	peopleFewerAria: string;
	peopleMoreAria: string;
	roundingLabel: string;
	roundOff: string;
	roundUp: string;
	roundDown: string;
	roundNearest: string;

	// Results
	totalToPay: string;
	eachOfPeoplePays: string;
	tipLabel: string;
	taxLabel: string;
	totalLabel: string;
	tipPerPersonLabel: string;
	copyResult: string;
	copyLink: string;
	reset: string;
	copied: string;
	copyFailed: string;
	linkCopied: string;
	splitEqually: string;
	roundedNoteUp: string;
	roundedNoteDown: string;
	roundedNoteNearest: string;

	// How it works
	howItWorksEyebrow: string;
	howItWorksTitle: string;
	howItWorksLead: string;
	step1Title: string;
	step1Desc: string;
	step2Title: string;
	step2Desc: string;
	step3Title: string;
	step3Desc: string;

	// Features
	featuresEyebrow: string;
	featuresTitle: string;
	featuresLead: string;
	feat1Title: string;
	feat1Desc: string;
	feat2Title: string;
	feat2Desc: string;
	feat3Title: string;
	feat3Desc: string;
	feat4Title: string;
	feat4Desc: string;
	feat5Title: string;
	feat5Desc: string;
	feat6Title: string;
	feat6Desc: string;

	// Tip Guide
	guideEyebrow: string;
	guideTitle: string;
	guideLead: string;
	guideUsServicesTitle: string;
	guideInternationalTitle: string;
	guideServiceCol: string;
	guideStandardCol: string;
	serviceSitDown: string;
	serviceBuffet: string;
	serviceBar: string;
	serviceDelivery: string;
	serviceCoffee: string;
	serviceTaxi: string;
	serviceSalon: string;
	serviceHousekeeping: string;
	serviceValet: string;
	serviceTourGuide: string;

	// International Regions
	intlRegionCol: string;
	intlNormCol: string;
	intlDetailsCol: string;
	regionUsCanada: string;
	normUsCanada: string;
	detailsUsCanada: string;
	regionEuropeUk: string;
	normEuropeUk: string;
	detailsEuropeUk: string;
	regionAsiaJapan: string;
	normAsiaJapan: string;
	detailsAsiaJapan: string;
	regionIndiaSouthAsia: string;
	normIndiaSouthAsia: string;
	detailsIndiaSouthAsia: string;
	regionAustraliaNz: string;
	normAustraliaNz: string;
	detailsAustraliaNz: string;
	regionLatinAmerica: string;
	normLatinAmerica: string;
	detailsLatinAmerica: string;

	// FAQ
	faqEyebrow: string;
	faqTitle: string;
	faq1Q: string;
	faq1A: string;
	faq2Q: string;
	faq2A: string;
	faq3Q: string;
	faq3A: string;
	faq4Q: string;
	faq4A: string;
	faq5Q: string;
	faq5A: string;
	faq6Q: string;
	faq6A: string;
	faq7Q: string;
	faq7A: string;
	faq8Q: string;
	faq8A: string;

	// CTA
	ctaTitle: string;
	ctaText: string;
	ctaButton: string;

	// Footer
	footerBlurb: string;
	footerColCalc: string;
	footerColTools: string;
	footerColLegal: string;
	footerColCompany: string;
	footerBillSplitter: string;
	footerCurrencies: string;
	footerDarkMode: string;
	footerPrivacy: string;
	footerTerms: string;
	footerAbout: string;
	footerContact: string;
	footerRights: string;
	footerNote: string;
}

export interface LanguageOption {
	code: string;
	label: string;
	dir?: 'ltr' | 'rtl';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
	{ code: 'en', label: 'English' },
	{ code: 'es', label: 'Español' },
	{ code: 'fr', label: 'Français' },
	{ code: 'de', label: 'Deutsch' },
	{ code: 'hi', label: 'हिन्दी' },
	{ code: 'pt', label: 'Português' },
	{ code: 'it', label: 'Italiano' },
	{ code: 'ja', label: '日本語' },
	{ code: 'zh', label: '简体中文' },
	{ code: 'ar', label: 'العربية', dir: 'rtl' },
];

export const TRANSLATIONS: Record<string, TranslationDictionary> = {
	en: {
		navBrand: 'Tip Calculator With Tax',
		navCalculator: 'Calculator',
		navHowItWorks: 'How it works',
		navTipGuide: 'Tip guide',
		navFaq: 'FAQ',
		navCurrency: 'Currency',
		navLanguage: 'Language',
		navTheme: 'Theme',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',

		heroBadge: 'Free • Fast • 40+ Currencies • Bill Splitter',
		heroTitle: 'Tip Calculator With Tax',
		heroSubtitle:
			'Calculate tips, include sales tax, split the bill evenly, and round per-person totals accurately in any currency.',

		calcHeading: 'Tip Calculator',
		billAmount: 'Bill amount',
		quickAmounts: 'Quick amounts',
		tipPercentage: 'Tip percentage',
		customTip: 'Custom tip',
		taxRate: 'Tax rate',
		taxHint: '(Optional percentage)',
		numberOfPeople: 'Number of people',
		peopleFewerAria: 'One person fewer',
		peopleMoreAria: 'One person more',
		roundingLabel: 'Round per-person total',
		roundOff: 'Off',
		roundUp: 'Up',
		roundDown: 'Down',
		roundNearest: 'Nearest',

		totalToPay: 'Total to pay',
		eachOfPeoplePays: 'Each of {people} people pays',
		tipLabel: 'Tip',
		taxLabel: 'Tax',
		totalLabel: 'Total',
		tipPerPersonLabel: 'Tip per person',
		copyResult: 'Copy',
		copyLink: 'Copy link',
		reset: 'Reset',
		copied: 'Copied!',
		copyFailed: 'Copy failed',
		linkCopied: 'Link copied!',
		splitEqually: 'Split equally between {count} people',
		roundedNoteUp: 'Per-person total rounded up to whole unit.',
		roundedNoteDown: 'Per-person total rounded down to whole unit.',
		roundedNoteNearest: 'Per-person total rounded to nearest whole unit.',

		howItWorksEyebrow: 'How it works',
		howItWorksTitle: 'Three steps, instant answers',
		howItWorksLead:
			'No complex mental math or awkward table calculations. The calculator updates instantly as you adjust any field.',
		step1Title: '1. Enter bill & tax',
		step1Desc:
			'Type your subtotal from the receipt, or tap a quick amount. Add your local sales tax rate if your bill is pre-tax.',
		step2Title: '2. Choose your tip',
		step2Desc:
			'Pick a standard preset (10%, 15%, 18%, 20%, 25%) or type any exact custom percentage you prefer.',
		step3Title: '3. Split & settle up',
		step3Desc:
			'Set the number of people sharing the check. See exactly what each person owes, with optional clean rounding.',

		featuresEyebrow: 'Built for every table',
		featuresTitle: 'Everything you need, nothing you don’t',
		featuresLead:
			'Designed to be lightning fast, 100% private, accessible offline, and easy to use anywhere in the world.',
		feat1Title: '40+ World Currencies',
		feat1Desc:
			'Switch between USD, EUR, GBP, INR, CAD, AUD, JPY and dozens more with authentic locale currency formatting.',
		feat2Title: 'Flexible Tip Options',
		feat2Desc:
			'Quick preset buttons from 0% to 50% plus a custom percentage field for exact custom tip amounts.',
		feat3Title: 'Accurate Bill Splitting',
		feat3Desc:
			'Divide food, tax, and tip fairly among solo diners or large parties with visual split indicators.',
		feat4Title: 'Clean Rounding Options',
		feat4Desc:
			'Avoid annoying pocket coins by rounding per-person totals cleanly up, down, or to the nearest whole currency unit.',
		feat5Title: 'Light & Dark Mode',
		feat5Desc:
			'Modern high-contrast theme designed for bright outdoor lunches or dim evening restaurant lighting.',
		feat6Title: '100% Private & Offline',
		feat6Desc:
			'Calculations run entirely in your browser. No sign-up, no analytics tracking your dollar amounts, works offline.',

		guideEyebrow: 'Tip guide',
		guideTitle: 'What to tip by service & destination',
		guideLead:
			'Tipping norms vary widely by service type and country. Use these benchmarks to tip with confidence.',
		guideUsServicesTitle: 'United States Service Benchmarks',
		guideInternationalTitle: 'International Tipping Norms',
		guideServiceCol: 'Service',
		guideStandardCol: 'Typical Tip',
		serviceSitDown: 'Sit-down restaurant dining',
		serviceBuffet: 'Buffet / Casual dining',
		serviceBar: 'Cocktail bar & Bartender',
		serviceDelivery: 'Food delivery (DoorDash, Uber Eats)',
		serviceCoffee: 'Coffee shop / Counter service',
		serviceTaxi: 'Taxi or Rideshare (Uber, Lyft)',
		serviceSalon: 'Hair salon, Barber, Spa',
		serviceHousekeeping: 'Hotel housekeeping (per night)',
		serviceValet: 'Valet parking (upon car return)',
		serviceTourGuide: 'Tour guide (daily excursions)',

		intlRegionCol: 'Country / Region',
		intlNormCol: 'Tipping Custom',
		intlDetailsCol: 'Etiquette Details',
		regionUsCanada: 'United States & Canada',
		normUsCanada: '15% – 20%',
		detailsUsCanada: 'Expected. Servers depend on tips as the majority of their income. 18-20% is standard.',
		regionEuropeUk: 'UK & European Union',
		normEuropeUk: '10% – 12.5%',
		detailsEuropeUk: 'Discretionary. Many European restaurants include a service charge (service compris).',
		regionAsiaJapan: 'Japan & South Korea',
		normAsiaJapan: '0% (No tipping)',
		detailsAsiaJapan: 'Do not tip. Exceptional service is included. Leaving cash can cause confusion or be politely refused.',
		regionIndiaSouthAsia: 'India & South Asia',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: 'Customary in restaurants unless a mandatory "Service Charge" (typically 10%) is already on the bill.',
		regionAustraliaNz: 'Australia & New Zealand',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: 'Not expected because hospitality staff earn fair living wages. 5-10% is appreciated for outstanding service.',
		regionLatinAmerica: 'Mexico & Latin America',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: 'Customary (called "propina"). Some restaurants print suggested amounts on the ticket.',

		faqEyebrow: 'FAQ',
		faqTitle: 'Frequently Asked Questions',
		faq1Q: 'How much should I tip at a restaurant?',
		faq1A:
			'In the United States and Canada, 18% to 20% is the standard for good sit-down table service, with 15% as a minimum for acceptable service and 22–25% for exceptional hospitality. In the UK and Europe, 10% to 12.5% is customary if a service charge is not already included on the receipt.',
		faq2Q: 'Should I calculate tip before or after tax?',
		faq2A:
			'Proper etiquette suggests tipping on the pre-tax food and beverage total, because tax is a government fee rather than hospitality service. However, many diners tip on the final total for convenience. Our calculator lets you enter both the subtotal and your tax percentage so you can see exact numbers both ways.',
		faq3Q: 'How does the per-person split work with tax and tip?',
		faq3A:
			'The calculator takes your bill amount, adds the calculated sales tax and tip amount to get the grand total, and divides that grand total equally by the number of people. If rounding is enabled, it cleanly rounds each person’s share to a whole currency unit.',
		faq4Q: 'How does rounding up or down work?',
		faq4A:
			'When splitting bills among multiple friends, decimals can create awkward coin amounts. "Round up" raises each person’s share to the next whole currency unit (e.g., $18.35 becomes $19.00), leaving a slight positive tip surplus. "Round down" drops down to the whole unit, and "Nearest" rounds to the closest whole unit.',
		faq5Q: 'Which world currencies are supported?',
		faq5A:
			'We support 40+ major global currencies including USD ($), EUR (€), GBP (£), INR (₹), CAD ($), AUD ($), JPY (¥), CHF, MXN ($), BRL (R$), AED (د.إ), and more. Zero-decimal currencies like Japanese Yen are handled natively without unnecessary cents.',
		faq6Q: 'Can I share the calculated split with friends?',
		faq6A:
			'Yes! Click the "Copy link" button to generate a clean shareable link with your bill, tip percentage, tax, and party size pre-filled. Anyone who opens the link will see the exact same calculation.',
		faq7Q: 'Does this calculator work offline?',
		faq7A:
			'Yes. The application runs 100% client-side in your mobile or desktop browser. Once loaded, it works without an active internet connection, making it perfect for international travel, flights, and restaurants with poor cell reception.',
		faq8Q: 'Is my financial data or receipt info saved on your servers?',
		faq8A:
			'No. We respect your complete privacy. Calculations happen exclusively inside your device memory. We do not store or transmit your bill totals, party size, or payment details. Only your chosen preferences (currency, language, theme) are remembered locally in your own browser.',

		ctaTitle: 'The bill is ready. You know the exact number.',
		ctaText:
			'Bookmark this tool on your phone for quick, accurate calculations at every meal and trip.',
		ctaButton: 'Calculate My Tip',

		footerBlurb:
			'Free, private, and accurate tip calculator with sales tax support and multi-person bill splitting for 40+ world currencies.',
		footerColCalc: 'Calculator',
		footerColTools: 'Tools & Features',
		footerColLegal: 'Legal',
		footerColCompany: 'About',
		footerBillSplitter: 'Bill Splitter',
		footerCurrencies: '40+ Currencies',
		footerDarkMode: 'Dark Mode',
		footerPrivacy: 'Privacy Policy',
		footerTerms: 'Terms of Use',
		footerAbout: 'About Us',
		footerContact: 'Contact Us',
		footerRights: 'All rights reserved.',
		footerNote: 'Free to use. 100% private — no sign-up, no tracking of amounts.',
	},

	es: {
		navBrand: 'Calculadora de Propinas',
		navCalculator: 'Calculadora',
		navHowItWorks: 'Cómo funciona',
		navTipGuide: 'Guía de propinas',
		navFaq: 'Preguntas frecuentes',
		navCurrency: 'Moneda',
		navLanguage: 'Idioma',
		navTheme: 'Tema',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',

		heroBadge: 'Gratis • Rápido • 40+ Monedas • Dividir Cuenta',
		heroTitle: 'Calculadora de Propinas con Impuestos',
		heroSubtitle:
			'Calcula propinas, incluye impuestos, divide la cuenta entre amigos y redondea montos con total precisión.',

		calcHeading: 'Calculadora de Propinas',
		billAmount: 'Monto de la cuenta',
		quickAmounts: 'Montos rápidos',
		tipPercentage: 'Porcentaje de propina',
		customTip: 'Propina personalizada',
		taxRate: 'Tasa de impuestos',
		taxHint: '(Porcentaje opcional)',
		numberOfPeople: 'Número de personas',
		peopleFewerAria: 'Una persona menos',
		peopleMoreAria: 'Una persona más',
		roundingLabel: 'Redondear total por persona',
		roundOff: 'Desactivado',
		roundUp: 'Hacia arriba',
		roundDown: 'Hacia abajo',
		roundNearest: 'Al más cercano',

		totalToPay: 'Total a pagar',
		eachOfPeoplePays: 'Cada una de {people} personas paga',
		tipLabel: 'Propina',
		taxLabel: 'Impuesto',
		totalLabel: 'Total',
		tipPerPersonLabel: 'Propina por persona',
		copyResult: 'Copiar',
		copyLink: 'Copiar enlace',
		reset: 'Restablecer',
		copied: '¡Copiado!',
		copyFailed: 'Error al copiar',
		linkCopied: '¡Enlace copiado!',
		splitEqually: 'Dividido en partes iguales entre {count} personas',
		roundedNoteUp: 'Total por persona redondeado hacia arriba.',
		roundedNoteDown: 'Total por persona redondeado hacia abajo.',
		roundedNoteNearest: 'Total por persona redondeado a la unidad más cercana.',

		howItWorksEyebrow: 'Cómo funciona',
		howItWorksTitle: 'Tres pasos, cálculo instantáneo',
		howItWorksLead:
			'Sin cálculos mentales confusos ni dudas en la mesa. Todo se actualiza automáticamente al escribir.',
		step1Title: '1. Ingresa la cuenta e impuesto',
		step1Desc:
			'Escribe el subtotal del recibo o pulsa un monto rápido. Agrega el porcentaje de impuesto si la cuenta es antes de impuestos.',
		step2Title: '2. Selecciona la propina',
		step2Desc:
			'Elige porcentajes habituales (10%, 15%, 18%, 20%) o ingresa cualquier porcentaje personalizado.',
		step3Title: '3. Divide y comparte',
		step3Desc:
			'Indica cuántas personas van a pagar para ver al instante lo que debe pagar cada una.',

		featuresEyebrow: 'Diseñado para el mundo real',
		featuresTitle: 'Todo lo necesario, sin complicaciones',
		featuresLead:
			'Ultrarrápido, 100% privado, disponible sin conexión y preparado para su uso en cualquier país.',
		feat1Title: 'Más de 40 monedas',
		feat1Desc:
			'Cambia fácilmente entre USD, EUR, GBP, MXN, ARS, COP, CLP y muchas más con formato oficial.',
		feat2Title: 'Propinas a tu medida',
		feat2Desc:
			'Botones directos de 0% a 50% y opción personalizada para cualquier porcentaje exacto.',
		feat3Title: 'División exacta de cuentas',
		feat3Desc:
			'Divide consumos, impuestos y propinas de manera justa tanto en parejas como en grupos grandes.',
		feat4Title: 'Redondeo inteligente',
		feat4Desc:
			'Evita fracciones y monedas sueltas redondeando el total por persona hacia arriba o abajo.',
		feat5Title: 'Modo Claro y Oscuro',
		feat5Desc:
			'Interfaz con excelente contraste para restaurantes oscuros o comidas al aire libre.',
		feat6Title: 'Privado y sin conexión',
		feat6Desc:
			'Funciona por completo en tu navegador. Sin registros ni envío de datos a servidores externos.',

		guideEyebrow: 'Guía de propinas',
		guideTitle: 'Cuánto dejar de propina según el servicio y país',
		guideLead:
			'Las costumbres varían en cada país y tipo de servicio. Consulta estas referencias prácticas.',
		guideUsServicesTitle: 'Estándares en Estados Unidos',
		guideInternationalTitle: 'Costumbres Internacionales',
		guideServiceCol: 'Servicio',
		guideStandardCol: 'Propina habitual',
		serviceSitDown: 'Restaurante con servicio a la mesa',
		serviceBuffet: 'Buffet / Comida casual',
		serviceBar: 'Bares y coctelería',
		serviceDelivery: 'Entrega de comida a domicilio',
		serviceCoffee: 'Cafeterías / Mostrador',
		serviceTaxi: 'Taxi o aplicaciones (Uber, Cabify)',
		serviceSalon: 'Peluquería, barbería y spa',
		serviceHousekeeping: 'Limpieza de hotel (por noche)',
		serviceValet: 'Aparcacoches / Valet parking',
		serviceTourGuide: 'Guía turístico',

		intlRegionCol: 'País / Región',
		intlNormCol: 'Costumbre',
		intlDetailsCol: 'Detalles y etiqueta',
		regionUsCanada: 'Estados Unidos y Canadá',
		normUsCanada: '15% – 20%',
		detailsUsCanada: 'Casi obligatoria. Los meseros dependen de la propina como parte esencial de su salario.',
		regionEuropeUk: 'Reino Unido y Unión Europea',
		normEuropeUk: '10% – 12.5%',
		detailsEuropeUk: 'Opcional. Muchos restaurantes ya incluyen el servicio en la cuenta (servicio incluido).',
		regionAsiaJapan: 'Japón y Corea del Sur',
		normAsiaJapan: '0% (No se da propina)',
		detailsAsiaJapan: 'No dejes propina. El excelente servicio está incluido y dejar dinero puede causar incomodidad.',
		regionIndiaSouthAsia: 'India y Sur de Asia',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: 'Habitual en restaurantes si no incluyen ya un cargo por servicio del 10%.',
		regionAustraliaNz: 'Australia y Nueva Zelanda',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: 'No se espera porque los sueldos son justos. Se aprecia un 5-10% por servicio destacado.',
		regionLatinAmerica: 'México y Latinoamérica',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: 'Tradicional en restaurantes y cafeterías. A menudo se sugiere en el ticket.',

		faqEyebrow: 'Preguntas frecuentes',
		faqTitle: 'Preguntas frecuentes',
		faq1Q: '¿Cuánto se debe dejar de propina en un restaurante?',
		faq1A:
			'En Estados Unidos y Canadá, del 18% al 20% es lo estándar para un buen servicio, siendo 15% el mínimo habitual. En Europa y Latinoamérica, entre el 10% y el 15% es común.',
		faq2Q: '¿La propina se calcula antes o después de impuestos?',
		faq2A:
			'Lo formal es calcular la propina sobre el subtotal antes de impuestos, pues los impuestos van al gobierno. Nuestra calculadora te muestra los importes de forma transparente.',
		faq3Q: '¿Cómo funciona la división de cuenta entre varias personas?',
		faq3A:
			'Suma el importe de la cuenta, impuestos y propinas, y divide el total entre el número de comensales. Si activas el redondeo, ajusta la cifra a unidades enteras.',
		faq4Q: '¿Para qué sirve el redondeo?',
		faq4A:
			'Facilita el pago en efectivo o transferencias sin monedas fraccionarias, subiendo o bajando la cuota individual a un número entero.',
		faq5Q: '¿Qué monedas están disponibles?',
		faq5A:
			'Soporta más de 40 monedas mundiales como USD, EUR, MXN, GBP, ARS, COP, CLP, PEN y muchas más con su formato local correcto.',
		faq6Q: '¿Puedo compartir el cálculo con mis amigos?',
		faq6A:
			'Sí, pulsa "Copiar enlace" para enviar un link con todos los datos listos para abrir en cualquier teléfono.',
		faq7Q: '¿La calculadora funciona sin internet?',
		faq7A:
			'Sí, se ejecuta por completo en tu navegador y no necesita conexión tras cargarse, ideal para viajes internacionales.',
		faq8Q: '¿Se guardan mis importes o datos financieros?',
		faq8A:
			'No, tus datos nunca salen de tu dispositivo. No guardamos cuentas, números de tarjetas ni recibos.',

		ctaTitle: 'La cuenta está lista. Ya conoces tu número.',
		ctaText:
			'Guarda esta página en tus marcadores para dividir cuentas fácilmente en cualquier comida o viaje.',
		ctaButton: 'Calcular mi propina',

		footerBlurb:
			'Calculadora de propinas gratuita y privada con soporte para impuestos y división de cuentas en más de 40 monedas.',
		footerColCalc: 'Calculadora',
		footerColTools: 'Herramientas',
		footerColLegal: 'Legal',
		footerColCompany: 'Nosotros',
		footerBillSplitter: 'Dividir cuenta',
		footerCurrencies: '40+ Monedas',
		footerDarkMode: 'Modo oscuro',
		footerPrivacy: 'Política de privacidad',
		footerTerms: 'Términos de uso',
		footerAbout: 'Sobre nosotros',
		footerContact: 'Contacto',
		footerRights: 'Todos los derechos reservados.',
		footerNote: 'Uso gratuito. 100% privado — sin registro ni rastreo de montos.',
	},

	fr: {
		navBrand: 'Calculateur de Pourboire',
		navCalculator: 'Calculateur',
		navHowItWorks: 'Fonctionnement',
		navTipGuide: 'Guide pourboire',
		navFaq: 'FAQ',
		navCurrency: 'Devise',
		navLanguage: 'Langue',
		navTheme: 'Thème',
		openMenu: 'Ouvrir menu',
		closeMenu: 'Fermer menu',

		heroBadge: 'Gratuit • Rapide • 40+ Devises • Partage d’addition',
		heroTitle: 'Calculateur de Pourboire avec Taxes',
		heroSubtitle:
			'Calculez vos pourboires, intégrez les taxes locales, partagez l’addition avec précision et arrondissez le total par personne.',

		calcHeading: 'Calculateur de Pourboire',
		billAmount: 'Montant de l’addition',
		quickAmounts: 'Montants rapides',
		tipPercentage: 'Pourcentage de pourboire',
		customTip: 'Pourboire personnalisé',
		taxRate: 'Taux de taxe',
		taxHint: '(Pourcentage optionnel)',
		numberOfPeople: 'Nombre de personnes',
		peopleFewerAria: 'Une personne de moins',
		peopleMoreAria: 'Une personne de plus',
		roundingLabel: 'Arrondir le total par personne',
		roundOff: 'Désactivé',
		roundUp: 'Vers le haut',
		roundDown: 'Vers le bas',
		roundNearest: 'Au plus proche',

		totalToPay: 'Total à payer',
		eachOfPeoplePays: 'Chacune des {people} personnes paie',
		tipLabel: 'Pourboire',
		taxLabel: 'Taxe',
		totalLabel: 'Total',
		tipPerPersonLabel: 'Pourboire par personne',
		copyResult: 'Copier',
		copyLink: 'Copier le lien',
		reset: 'Réinitialiser',
		copied: 'Copié !',
		copyFailed: 'Échec de la copie',
		linkCopied: 'Lien copié !',
		splitEqually: 'Partagé équitablement entre {count} personnes',
		roundedNoteUp: 'Total par personne arrondi au chiffre supérieur.',
		roundedNoteDown: 'Total par personne arrondi au chiffre inférieur.',
		roundedNoteNearest: 'Total par personne arrondi au plus proche.',

		howItWorksEyebrow: 'Fonctionnement',
		howItWorksTitle: 'Trois étapes, calcul instantané',
		howItWorksLead:
			'Fini les calculs mentaux fastidieux à table. Tous les montants se mettent à jour en temps réel.',
		step1Title: '1. Entrez l’addition et les taxes',
		step1Desc:
			'Saisissez le sous-total ou cliquez sur un montant rapide. Ajoutez le taux de taxe si nécessaire.',
		step2Title: '2. Choisissez le pourboire',
		step2Desc:
			'Sélectionnez un pourcentage prédéfini (10%, 15%, 18%, 20%) ou indiquez votre montant personnalisé.',
		step3Title: '3. Partagez et réglez',
		step3Desc:
			'Définissez le nombre de convives et découvrez exactement la part de chacun en un instant.',

		featuresEyebrow: 'Pensé pour vos sorties',
		featuresTitle: 'L’essentiel, sans fioritures',
		featuresLead:
			'Ultra rapide, 100% privé, fonctionne sans connexion et adapté aux voyageurs du monde entier.',
		feat1Title: 'Plus de 40 devises',
		feat1Desc:
			'Passez en un clic de l’EUR à l’USD, GBP, CAD, CHF, JPY et bien d’autres avec le format monétaire adapté.',
		feat2Title: 'Pourboire sur mesure',
		feat2Desc:
			'Boutons rapides de 0% à 50% et saisie personnalisée pour un contrôle total de votre générosité.',
		feat3Title: 'Partage d’addition équitable',
		feat3Desc:
			'Divisez les repas, taxes et pourboires en toute transparence, que vous soyez 2 ou 20.',
		feat4Title: 'Arrondi intelligent',
		feat4Desc:
			'Évitez la petite monnaie embarrassante en arrondissant la part de chacun à l’euro ou dollar supérieur.',
		feat5Title: 'Modes Clair & Sombre',
		feat5Desc:
			'Contraste soigné idéal pour les terrasses ensoleillées comme pour les restaurants tamisés.',
		feat6Title: '100% Privé et Hors-ligne',
		feat6Desc:
			'Tous les calculs s’effectuent dans votre navigateur. Aucune donnée n’est transmise ni enregistrée.',

		guideEyebrow: 'Guide pourboire',
		guideTitle: 'Combien laisser selon le service et le pays',
		guideLead:
			'Les coutumes diffèrent grandement selon les pays et les activités. Voici les règles d’usage.',
		guideUsServicesTitle: 'Standards aux États-Unis',
		guideInternationalTitle: 'Coutumes Internationales',
		guideServiceCol: 'Service',
		guideStandardCol: 'Pourboire standard',
		serviceSitDown: 'Restaurant avec service à table',
		serviceBuffet: 'Buffet / Restauration rapide',
		serviceBar: 'Barman & Cocktails',
		serviceDelivery: 'Livraison de repas (Uber Eats, Deliveroo)',
		serviceCoffee: 'Café / Service au comptoir',
		serviceTaxi: 'Taxi ou VTC (Uber, Bolt)',
		serviceSalon: 'Coiffure, barbier, spa',
		serviceHousekeeping: 'Entretien de chambre d’hôtel (par nuit)',
		serviceValet: 'Voiturier',
		serviceTourGuide: 'Guide touristique',

		intlRegionCol: 'Pays / Région',
		intlNormCol: 'Usage',
		intlDetailsCol: 'Détails d’étiquette',
		regionUsCanada: 'États-Unis et Canada',
		normUsCanada: '15% – 20%',
		detailsUsCanada: 'Quasi indispensable. Les serveurs dépendent des pourboires pour vivre.',
		regionEuropeUk: 'France, Europe & Royaume-Uni',
		normEuropeUk: '5% – 10% ou arrondi',
		detailsEuropeUk: 'Le service est généralement inclus par la loi. Un pourboire récompense un service attentif.',
		regionAsiaJapan: 'Japon et Corée du Sud',
		normAsiaJapan: '0% (Pas de pourboire)',
		detailsAsiaJapan: 'Ne donnez pas de pourboire. Un service impeccable est la norme et donner de l’argent peut gêner.',
		regionIndiaSouthAsia: 'Inde et Asie du Sud',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: 'Courant dans les restaurants si des frais de service de 10% ne sont pas déjà facturés.',
		regionAustraliaNz: 'Australie et Nouvelle-Zélande',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: 'Non requis grâce aux salaires justes, mais 5-10% est bienvenu pour un repas d’exception.',
		regionLatinAmerica: 'Amérique Latine',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: 'Traditionnel (appelé propina). Souvent suggéré sur la note.',

		faqEyebrow: 'FAQ',
		faqTitle: 'Foire Aux Questions',
		faq1Q: 'Combien donner de pourboire au restaurant ?',
		faq1A:
			'En Amérique du Nord (USA/Canada), 18% à 20% est la norme. En France et en Europe, le service est inclus mais laisser quelques euros ou 5 à 10% est apprécié pour un service de qualité.',
		faq2Q: 'Doit-on calculer le pourboire avant ou après taxes ?',
		faq2A:
			'La règle veut qu’on calcule le pourboire sur le montant hors taxe. Notre outil vous permet de distinguer les deux pour une précision totale.',
		faq3Q: 'Comment fonctionne le partage d’addition ?',
		faq3A:
			'L’outil calcule la somme globale (addition + taxe + pourboire) et la divise par le nombre de personnes en ajustant l’arrondi selon votre choix.',
		faq4Q: 'À quoi sert l’option d’arrondi ?',
		faq4A:
			'Elle évite d’avoir à manipuler des centimes en espèces ou lors de virements entre amis.',
		faq5Q: 'Quelles devises sont prises en charge ?',
		faq5A:
			'Plus de 40 devises dont l’EUR, USD, GBP, CHF, CAD, MAD, JPY avec un formatage respectant les normes monétaires.',
		faq6Q: 'Puis-je partager ce calcul à mes amis ?',
		faq6A:
			'Oui, le bouton « Copier le lien » génère une URL directe intégrant vos paramètres.',
		faq7Q: 'Le calculateur fonctionne-t-il hors-ligne ?',
		faq7A:
			'Absolument. Une fois la page chargée, tous les calculs se font localement sans requérir de connexion réseau.',
		faq8Q: 'Mes montants sont-ils conservés sur vos serveurs ?',
		faq8A:
			'Aucune information financière ne quitte votre appareil. La confidentialité est totale.',

		ctaTitle: 'L’addition est là. Réglez en toute sérénité.',
		ctaText:
			'Ajoutez cette page à vos favoris pour vos prochains repas entre amis ou voyages.',
		ctaButton: 'Calculer mon pourboire',

		footerBlurb:
			'Calculateur de pourboire gratuit, rapide et confidentiel avec prise en charge des taxes et partage d’addition en plus de 40 devises.',
		footerColCalc: 'Calculateur',
		footerColTools: 'Outils',
		footerColLegal: 'Légal',
		footerColCompany: 'À propos',
		footerBillSplitter: 'Partage d’addition',
		footerCurrencies: '40+ Devises',
		footerDarkMode: 'Mode Sombre',
		footerPrivacy: 'Politique de confidentialité',
		footerTerms: 'Conditions d’utilisation',
		footerAbout: 'À propos',
		footerContact: 'Contact',
		footerRights: 'Tous droits réservés.',
		footerNote: 'Gratuit et sans inscription. Confidentialité garantie.',
	},

	de: {
		navBrand: 'Trinkgeld-Rechner mit Steuer',
		navCalculator: 'Rechner',
		navHowItWorks: 'So funktioniert’s',
		navTipGuide: 'Trinkgeld-Guide',
		navFaq: 'FAQ',
		navCurrency: 'Währung',
		navLanguage: 'Sprache',
		navTheme: 'Design',
		openMenu: 'Menü öffnen',
		closeMenu: 'Menü schließen',

		heroBadge: 'Kostenlos • Schnell • 40+ Währungen • Rechnung teilen',
		heroTitle: 'Trinkgeld-Rechner mit Steuer',
		heroSubtitle:
			'Trinkgeld berechnen, Steuern berücksichtigen, Rechnungen fair aufteilen und Beträge pro Person exakt runden.',

		calcHeading: 'Trinkgeld-Rechner',
		billAmount: 'Rechnungsbetrag',
		quickAmounts: 'Schnellbeträge',
		tipPercentage: 'Trinkgeld-Prozentsatz',
		customTip: 'Individuelles Trinkgeld',
		taxRate: 'Steuersatz',
		taxHint: '(Optionaler Prozentsatz)',
		numberOfPeople: 'Anzahl Personen',
		peopleFewerAria: 'Eine Person weniger',
		peopleMoreAria: 'Eine Person mehr',
		roundingLabel: 'Betrag pro Person runden',
		roundOff: 'Aus',
		roundUp: 'Aufrunden',
		roundDown: 'Abrunden',
		roundNearest: 'Nächste Zahl',

		totalToPay: 'Gesamtbetrag',
		eachOfPeoplePays: 'Jede(r) von {people} Personen zahlt',
		tipLabel: 'Trinkgeld',
		taxLabel: 'Steuer',
		totalLabel: 'Gesamt',
		tipPerPersonLabel: 'Trinkgeld pro Person',
		copyResult: 'Kopieren',
		copyLink: 'Link kopieren',
		reset: 'Zurücksetzen',
		copied: 'Kopiert!',
		copyFailed: 'Kopieren fehlgeschlagen',
		linkCopied: 'Link kopiert!',
		splitEqually: 'Gleichmäßig geteilt durch {count} Personen',
		roundedNoteUp: 'Betrag pro Person aufgerundet.',
		roundedNoteDown: 'Betrag pro Person abgerundet.',
		roundedNoteNearest: 'Betrag pro Person auf die nächste Einheit gerundet.',

		howItWorksEyebrow: 'So funktioniert’s',
		howItWorksTitle: 'Drei Schritte zum Ergebnis',
		howItWorksLead:
			'Kein Kopfrechnen mehr am Tisch. Alle Ergebnisse werden in Echtzeit berechnet.',
		step1Title: '1. Betrag & Steuern eingeben',
		step1Desc:
			'Geben Sie den Betrag vom Beleg ein. Falls noch keine Steuer enthalten ist, tragen Sie den Steuersatz ein.',
		step2Title: '2. Trinkgeld wählen',
		step2Desc:
			'Wählen Sie Standard-Prozentsätze (10%, 15%, 20%) oder geben Sie ein beliebiges individuelles Trinkgeld ein.',
		step3Title: '3. Aufteilen & Abrechnen',
		step3Desc:
			'Geben Sie die Anzahl der Personen an und sehen Sie sofort, wer wie viel zahlen muss.',

		featuresEyebrow: 'Praktisch für jeden Tisch',
		featuresTitle: 'Alles, was Sie brauchen',
		featuresLead:
			'Blitzschnell, 100% datenschutzfreundlich, offline nutzbar und weltweit einsetzbar.',
		feat1Title: 'Über 40 Währungen',
		feat1Desc:
			'Wechseln Sie nahtlos zwischen EUR, USD, GBP, CHF, JPY und Dutzenden weiteren Währungen.',
		feat2Title: 'Beliebige Trinkgelder',
		feat2Desc:
			'Schnellwahltasten von 0% bis 50% plus freies Eingabefeld für exakte Cent-Beträge.',
		feat3Title: 'Rechnungen fair teilen',
		feat3Desc:
			'Teilen Sie Speisen, Getränke, Steuern und Trinkgelder unkompliziert unter Freunden auf.',
		feat4Title: 'Praktisches Runden',
		feat4Desc:
			'Vermeiden Sie Kleingeldprobleme, indem Sie Beträge pro Person einfach aufrunden.',
		feat5Title: 'Helles & Dunkles Design',
		feat5Desc:
			'Optimale Lesbarkeit bei strahlendem Sonnenschein oder gemütlicher Restaurantbeleuchtung.',
		feat6Title: '100% Privat & Offline',
		feat6Desc:
			'Berechnungen finden lokal im Browser statt. Keine Registrierung, keine Serverübertragung.',

		guideEyebrow: 'Trinkgeld-Guide',
		guideTitle: 'Trinkgeld-Bräuche nach Service & Land',
		guideLead:
			'Gewohnheiten unterscheiden sich stark. Nutzen Sie diesen Leitfaden für entspannte Restaurantbesuche.',
		guideUsServicesTitle: 'Standards in den USA',
		guideInternationalTitle: 'Internationale Gepflogenheiten',
		guideServiceCol: 'Service',
		guideStandardCol: 'Übliches Trinkgeld',
		serviceSitDown: 'Bedientes Restaurant',
		serviceBuffet: 'Buffet / Schnellrestaurant',
		serviceBar: 'Bar & Cocktails',
		serviceDelivery: 'Lieferdienst (Lieferando etc.)',
		serviceCoffee: 'Café / Thekenverkauf',
		serviceTaxi: 'Taxi oder Fahrdienst (Uber)',
		serviceSalon: 'Friseur, Kosmetik, Wellness',
		serviceHousekeeping: 'Zimmerreinigung Hotel (pro Nacht)',
		serviceValet: 'Parkservice / Valet',
		serviceTourGuide: 'Reiseleiter / Tourguide',

		intlRegionCol: 'Land / Region',
		intlNormCol: 'Gewohnheit',
		intlDetailsCol: 'Etikette',
		regionUsCanada: 'USA & Kanada',
		normUsCanada: '15% – 20%',
		detailsUsCanada: 'Wird erwartet. Servicekräfte bestreiten ihren Lebensunterhalt maßgeblich aus Trinkgeld.',
		regionEuropeUk: 'Deutschland & Europa',
		normEuropeUk: '5% – 10% (Aufrunden)',
		detailsEuropeUk: 'Freiwillig als Anerkennung für guten Service, da Bedienung gesetzlich im Preis enthalten ist.',
		regionAsiaJapan: 'Japan & Südkorea',
		normAsiaJapan: '0% (Kein Trinkgeld)',
		detailsAsiaJapan: 'Bitte kein Trinkgeld geben. Höchste Servicequalität ist selbstverständlich; Geld kann kränken.',
		regionIndiaSouthAsia: 'Indien & Südasien',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: 'Üblich in Restaurants, sofern keine 10% Servicegebühr auf der Rechnung steht.',
		regionAustraliaNz: 'Australien & Neuseeland',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: 'Nicht erwartet wegen fairer Mindestlöhne. 5-10% bei außergewöhnlich gutem Service geschätzt.',
		regionLatinAmerica: 'Lateinamerika',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: 'Üblich (Propina). Oft auf der Quittung vermerkt.',

		faqEyebrow: 'FAQ',
		faqTitle: 'Häufig gestellte Fragen',
		faq1Q: 'Wie viel Trinkgeld gibt man im Restaurant?',
		faq1A:
			'In Deutschland und Österreich sind 5% bis 10% oder ein Runden auf den nächsten passenden Eurobetrag üblich. In den USA sind 18% bis 20% Standard.',
		faq2Q: 'Wird Trinkgeld vor oder nach Steuern berechnet?',
		faq2A:
			'Klassisch wird das Trinkgeld auf den Nettobetrag ohne Steuern berechnet. Unser Rechner zeigt beides übersichtlich an.',
		faq3Q: 'Wie funktioniert das Aufteilen der Rechnung?',
		faq3A:
			'Der Rechner addiert Zwischensumme, Steuer und Trinkgeld und teilt den Betrag exakt durch die Personenzahl.',
		faq4Q: 'Was bewirkt die Rundungsfunktion?',
		faq4A:
			'Sie runden ungerade Cent-Beträge pro Person glatt auf oder ab, um das Bezahlen mit Bargeld oder PayPal zu vereinfachen.',
		faq5Q: 'Welche Währungen werden unterstützt?',
		faq5A:
			'Über 40 Währungen wie EUR, USD, GBP, CHF, JPY mit landestypischen Dezimalstellen.',
		faq6Q: 'Kann ich die Rechnung mit Freunden teilen?',
		faq6A:
			'Ja, mit „Link kopieren“ erstellen Sie einen fertigen Link zum Versenden in Messenger-Gruppen.',
		faq7Q: 'Funktioniert der Rechner offline?',
		faq7A:
			'Ja, nach dem Aufrufen läuft alles ohne aktive Internetverbindung direkt auf Ihrem Smartphone.',
		faq8Q: 'Werden meine Daten gespeichert?',
		faq8A:
			'Nein. Es werden weder Rechnungsbeträge noch persönliche Daten an Server übertragen.',

		ctaTitle: 'Die Rechnung ist da. Zahlen Sie stressfrei.',
		ctaText:
			'Setzen Sie ein Lesezeichen für Ihren nächsten Restaurantbesuch oder Ihre nächste Reise.',
		ctaButton: 'Trinkgeld berechnen',

		footerBlurb:
			'Kostenloser, sicherer Trinkgeld-Rechner mit Steuerunterstützung und Rechnungsaufteilung in über 40 Währungen.',
		footerColCalc: 'Rechner',
		footerColTools: 'Funktionen',
		footerColLegal: 'Rechtliches',
		footerColCompany: 'Über uns',
		footerBillSplitter: 'Rechnung teilen',
		footerCurrencies: '40+ Währungen',
		footerDarkMode: 'Dark Mode',
		footerPrivacy: 'Datenschutz',
		footerTerms: 'Nutzungsbedingungen',
		footerAbout: 'Über uns',
		footerContact: 'Kontakt',
		footerRights: 'Alle Rechte vorbehalten.',
		footerNote: 'Kostenlos nutzbar. 100% datenschutzfreundlich ohne Tracking.',
	},

	hi: {
		navBrand: 'टिप कैलकुलेटर',
		navCalculator: 'कैलकुलेटर',
		navHowItWorks: 'यह कैसे काम करता है',
		navTipGuide: 'टिप गाइड',
		navFaq: 'अक्सर पूछे जाने वाले सवाल',
		navCurrency: 'मुद्रा (Currency)',
		navLanguage: 'भाषा',
		navTheme: 'थीम',
		openMenu: 'मेनू खोलें',
		closeMenu: 'मेनू बंद करें',

		heroBadge: 'मुफ्त • तेज • 40+ मुद्राएं • बिल विभाजन',
		heroTitle: 'टैक्स सहित टिप कैलकुलेटर',
		heroSubtitle:
			'आसानी से टिप की गणना करें, टैक्स जोड़ें, दोस्तों के बीच बिल विभाजित करें और प्रति व्यक्ति राशि को सटीक रूप से राउंड करें।',

		calcHeading: 'टिप कैलकुलेटर',
		billAmount: 'बिल की कुल राशि',
		quickAmounts: 'त्वरित राशि',
		tipPercentage: 'टिप प्रतिशत (%)',
		customTip: 'कस्टम टिप',
		taxRate: 'टैक्स दर (%)',
		taxHint: '(वैकल्पिक टैक्स प्रतिशत)',
		numberOfPeople: 'व्यक्तियों की संख्या',
		peopleFewerAria: 'एक व्यक्ति कम',
		peopleMoreAria: 'एक व्यक्ति अधिक',
		roundingLabel: 'प्रति व्यक्ति कुल राउंड करें',
		roundOff: 'बंद',
		roundUp: 'ऊपर (Up)',
		roundDown: 'नीचे (Down)',
		roundNearest: 'निकटतम (Nearest)',

		totalToPay: 'कुल देय राशि',
		eachOfPeoplePays: 'प्रत्येक {people} व्यक्ति देता है',
		tipLabel: 'टिप',
		taxLabel: 'टैक्स',
		totalLabel: 'कुल बिल',
		tipPerPersonLabel: 'प्रति व्यक्ति टिप',
		copyResult: 'कॉपी करें',
		copyLink: 'लिंक कॉपी करें',
		reset: 'रीसेट करें',
		copied: 'कॉपी हो गया!',
		copyFailed: 'कॉपी विफल',
		linkCopied: 'लिंक कॉपी हो गया!',
		splitEqually: '{count} लोगों में बराबर विभाजित',
		roundedNoteUp: 'प्रति व्यक्ति राशि ऊपर की ओर राउंड की गई है।',
		roundedNoteDown: 'प्रति व्यक्ति राशि नीचे की ओर राउंड की गई है।',
		roundedNoteNearest: 'प्रति व्यक्ति राशि निकटतम पूर्णांक पर राउंड की गई है।',

		howItWorksEyebrow: 'प्रक्रिया',
		howItWorksTitle: 'तीन आसान चरण',
		howItWorksLead:
			'अब रेस्तरां में बैठकर हिसाब लगाने की चिंता नहीं। कोई भी मान बदलते ही तुरंत सटीक परिणाम देखें।',
		step1Title: '1. बिल और टैक्स दर्ज करें',
		step1Desc:
			'अपनी रसीद से बिल राशि टाइप करें। यदि टैक्स अलग से है, तो टैक्स प्रतिशत दर्ज करें।',
		step2Title: '2. टिप प्रतिशत चुनें',
		step2Desc:
			'लोकप्रिय विकल्प (10%, 15%, 20%) चुनें या अपनी पसंद का कोई भी कस्टम टिप प्रतिशत डालें।',
		step3Title: '3. विभाजित करें और साझा करें',
		step3Desc:
			'भुगतान करने वाले लोगों की संख्या दर्ज करें और तुरंत जानें कि प्रत्येक व्यक्ति को कितना देना है।',

		featuresEyebrow: 'सभी के लिए उपयोगी',
		featuresTitle: 'सरल, सटीक और सुरक्षित',
		featuresLead:
			'सुपर फास्ट, पूरी तरह से निजी, ऑफलाइन सक्षम और दुनिया के किसी भी देश में उपयोग के लिए तैयार।',
		feat1Title: '40+ वैश्विक मुद्राएं',
		feat1Desc:
			'INR (₹), USD ($), EUR (€), GBP (£), AED और दर्जनों अन्य मुद्राओं के बीच आसानी से बदलें।',
		feat2Title: 'लचीला टिप विकल्प',
		feat2Desc:
			'0% से 50% तक त्वरित बटन और कस्टम राशि का सीधा विकल्प।',
		feat3Title: 'सटीक बिल बंटवारा',
		feat3Desc:
			'चाहे दो लोग हों या बड़ी पार्टी, बिना किसी उलझन के बिल को बराबर बांटें।',
		feat4Title: 'स्मार्ट राउंडिंग',
		feat4Desc:
			'छुट्टे पैसों की झंझट खत्म करने के लिए प्रति व्यक्ति राशि को सीधे राउंड करें।',
		feat5Title: 'लाइट और डार्क मोड',
		feat5Desc:
			'दिन के उजाले या रात के डिनर में आंखों के लिए आरामदायक आधुनिक डिजाइन।',
		feat6Title: '100% निजी और ऑफलाइन',
		feat6Desc:
			'सभी गणनाएं आपके फोन के ब्राउज़र में होती हैं। कोई डेटा किसी सर्वर पर नहीं भेजा जाता।',

		guideEyebrow: 'टिप गाइड',
		guideTitle: 'सेवा और देश के अनुसार टिप गाइड',
		guideLead:
			'विभिन्न देशों और सेवाओं में टिप के नियम अलग होते हैं। जानिए कहां कितना टिप देना उचित है।',
		guideUsServicesTitle: 'संयुक्त राज्य अमेरिका में मानक',
		guideInternationalTitle: 'अंतर्राष्ट्रीय शिष्टाचार',
		guideServiceCol: 'सेवा',
		guideStandardCol: 'सामान्य टिप',
		serviceSitDown: 'रेस्तरां में बैठकर भोजन',
		serviceBuffet: 'बुफे / सामान्य डाइनिंग',
		serviceBar: 'बार और कॉकटेल',
		serviceDelivery: 'फूड डिलीवरी (Zomato, Swiggy)',
		serviceCoffee: 'कॉफी शॉप / काउंटर',
		serviceTaxi: 'टैक्सी या राइडशेयर (Ola, Uber)',
		serviceSalon: 'सैलून, नाई या स्पा',
		serviceHousekeeping: 'होटल रूम सफाई (प्रति रात)',
		serviceValet: 'वैले पार्किंग',
		serviceTourGuide: 'टूर गाइड',

		intlRegionCol: 'देश / क्षेत्र',
		intlNormCol: 'टिप प्रथा',
		intlDetailsCol: 'विवरण',
		regionUsCanada: 'अमेरिका और कनाडा',
		normUsCanada: '15% – 20%',
		detailsUsCanada: 'अपेक्षित। वेटर की अधिकांश कमाई ग्राहकों के टिप पर निर्भर करती है।',
		regionEuropeUk: 'यूके और यूरोप',
		normEuropeUk: '10% – 12.5%',
		detailsEuropeUk: 'ऐच्छिक। अधिकांश रेस्तरां में सेवा शुल्क पहले से जुड़ा होता है।',
		regionAsiaJapan: 'जापान और दक्षिण कोरिया',
		normAsiaJapan: '0% (टिप न दें)',
		detailsAsiaJapan: 'टिप न दें। उत्कृष्ट सेवा शामिल है; पैसे छोड़ना असभ्य माना जा सकता है।',
		regionIndiaSouthAsia: 'भारत और दक्षिण एशिया',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: 'रेस्तरां में सामान्य है यदि बिल में 10% सर्विस चार्ज पहले से न जुड़ा हो।',
		regionAustraliaNz: 'ऑस्ट्रेलिया और न्यूजीलैंड',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: 'अनिवार्य नहीं है क्योंकि कर्मचारियों को उचित वेतन मिलता है। विशेष सेवा के लिए 5-10% दे सकते हैं।',
		regionLatinAmerica: 'लैटिन अमेरिका',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: 'रेस्तरां में सामान्य (प्रोपाइना)। रसीद पर अक्सर सुझाया जाता है।',

		faqEyebrow: 'सामान्य प्रश्न',
		faqTitle: 'अक्सर पूछे जाने वाले सवाल',
		faq1Q: 'रेस्तरां में कितना टिप देना चाहिए?',
		faq1A:
			'भारत में 5% से 10% सामान्य है। अमेरिका में 18% से 20% मानक है। यदि बिल में सर्विस चार्ज जुड़ा है, तो अतिरिक्त टिप देना आवश्यक नहीं है।',
		faq2Q: 'टिप टैक्स से पहले या बाद में जोड़ना चाहिए?',
		faq2A:
			'टिप हमेशा टैक्स से पहले के कुल भोजन मूल्य पर देना चाहिए, क्योंकि टैक्स सरकार का शुल्क होता है सेवा का नहीं।',
		faq3Q: 'दोस्तों में बिल कैसे बांटें?',
		faq3A:
			'कैलकुलेटर भोजन, टैक्स और टिप को जोड़कर कुल राशि को सभी लोगों में बराबर बांट देता है।',
		faq4Q: 'राउंडिंग सुविधा क्या है?',
		faq4A:
			'यह प्रति व्यक्ति राशि को पूरे रुपये या डॉलर में बदल देती है ताकि छुट्टे पैसों की समस्या न हो।',
		faq5Q: 'कौन-सी मुद्राएं समर्थित हैं?',
		faq5A:
			'भारतीय रुपया (₹), यूएस डॉलर ($), यूरो (€), पाउंड (£) सहित 40 से अधिक प्रमुख मुद्राएं समर्थित हैं।',
		faq6Q: 'क्या मैं दोस्तों के साथ लिंक साझा कर सकता हूँ?',
		faq6A:
			'हाँ, "लिंक कॉपी करें" पर क्लिक करके आप पूरी गणना सीधे व्हाट्सएप या एसएमएस पर साझा कर सकते हैं।',
		faq7Q: 'क्या यह बिना इंटरनेट काम करता है?',
		faq7A:
			'हाँ! एक बार लोड होने के बाद यह पूरी तरह से ऑफलाइन काम करता है।',
		faq8Q: 'क्या मेरी वित्तीय जानकारी सुरक्षित है?',
		faq8A:
			'हाँ, यह 100% सुरक्षित है। कोई भी डेटा सर्वर पर स्टोर नहीं किया जाता।',

		ctaTitle: 'बिल आ गया है? तुरंत हिसाब लगाएं।',
		ctaText:
			'अगली बार दोस्तों के साथ बाहर जाने पर आसान हिसाब के लिए इस पेज को बुकमार्क करें।',
		ctaButton: 'टिप की गणना करें',

		footerBlurb:
			'मुफ्त, सुरक्षित और सटीक टिप कैलकुलेटर। 40 से अधिक मुद्राओं में टैक्स और बिल विभाजन की सुविधा।',
		footerColCalc: 'कैलकुलेटर',
		footerColTools: 'उपकरण',
		footerColLegal: 'कानूनी',
		footerColCompany: 'हमारे बारे में',
		footerBillSplitter: 'बिल विभाजन',
		footerCurrencies: '40+ मुद्राएं',
		footerDarkMode: 'डार्क मोड',
		footerPrivacy: 'गोपनीयता नीति',
		footerTerms: 'उपयोग की शर्तें',
		footerAbout: 'हमारे बारे में',
		footerContact: 'संपर्क करें',
		footerRights: 'सर्वाधिकार सुरक्षित।',
		footerNote: 'उपयोग के लिए पूर्णतः निःशुल्क और 100% निजी।',
	},

	pt: {
		navBrand: 'Calculadora de Gorjeta',
		navCalculator: 'Calculadora',
		navHowItWorks: 'Como funciona',
		navTipGuide: 'Guia de gorjetas',
		navFaq: 'Perguntas frequentes',
		navCurrency: 'Moeda',
		navLanguage: 'Idioma',
		navTheme: 'Tema',
		openMenu: 'Abrir menu',
		closeMenu: 'Fechar menu',

		heroBadge: 'Grátis • Rápido • 40+ Moedas • Dividir Conta',
		heroTitle: 'Calculadora de Gorjeta com Impostos',
		heroSubtitle:
			'Calcule gorjetas, adicione taxas locais, divida a conta entre amigos e arredonde os valores por pessoa com total facilidade.',

		calcHeading: 'Calculadora de Gorjeta',
		billAmount: 'Valor da conta',
		quickAmounts: 'Valores rápidos',
		tipPercentage: 'Porcentagem de gorjeta',
		customTip: 'Gorjeta personalizada',
		taxRate: 'Taxa de imposto',
		taxHint: '(Porcentagem opcional)',
		numberOfPeople: 'Número de pessoas',
		peopleFewerAria: 'Uma pessoa a menos',
		peopleMoreAria: 'Uma pessoa a mais',
		roundingLabel: 'Arredondar total por pessoa',
		roundOff: 'Desativado',
		roundUp: 'Para cima',
		roundDown: 'Para baixo',
		roundNearest: 'Mais próximo',

		totalToPay: 'Total a pagar',
		eachOfPeoplePays: 'Cada uma das {people} pessoas paga',
		tipLabel: 'Gorjeta',
		taxLabel: 'Imposto',
		totalLabel: 'Total',
		tipPerPersonLabel: 'Gorjeta por pessoa',
		copyResult: 'Copiar',
		copyLink: 'Copiar link',
		reset: 'Redefinir',
		copied: 'Copiado!',
		copyFailed: 'Falha ao copiar',
		linkCopied: 'Link copiado!',
		splitEqually: 'Dividido igualmente entre {count} pessoas',
		roundedNoteUp: 'Total por pessoa arredondado para cima.',
		roundedNoteDown: 'Total por pessoa arredondado para baixo.',
		roundedNoteNearest: 'Total por pessoa arredondado para a unidade mais próxima.',

		howItWorksEyebrow: 'Como funciona',
		howItWorksTitle: 'Três passos simples',
		howItWorksLead:
			'Sem contas de cabeça complicadas na mesa. Tudo é atualizado instantaneamente conforme você digita.',
		step1Title: '1. Digite a conta e o imposto',
		step1Desc:
			'Insira o subtotal da comanda ou clique em um valor rápido. Se houver imposto separado, informe a taxa.',
		step2Title: '2. Escolha a gorjeta',
		step2Desc:
			'Selecione porcentagens usuais (10%, 15%, 18%, 20%) ou informe o percentual que desejar.',
		step3Title: '3. Divida e acerte a conta',
		step3Desc:
			'Defina o número de pessoas e veja na hora o valor exato a ser pago por cada uma.',

		featuresEyebrow: 'Feito para o dia a dia',
		featuresTitle: 'Tudo o que você precisa',
		featuresLead:
			'Super rápido, 100% privado, funciona sem internet e pronto para uso em qualquer lugar do mundo.',
		feat1Title: 'Mais de 40 moedas',
		feat1Desc:
			'Alterne entre BRL (R$), USD ($), EUR (€), GBP (£) e dezenas de outras moedas com formatação correta.',
		feat2Title: 'Gorjeta flexível',
		feat2Desc:
			'Atalhos rápidos de 0% a 50% e campo personalizado para qualquer taxa específica.',
		feat3Title: 'Divisão exata de contas',
		feat3Desc:
			'Divida comida, bebidas, taxas e gorjeta de forma justa para grupos de qualquer tamanho.',
		feat4Title: 'Arredondamento prático',
		feat4Desc:
			'Evite moedas e trocados chatos arredondando o valor individual para cima ou para baixo.',
		feat5Title: 'Modo Claro e Escuro',
		feat5Desc:
			'Excelente contraste para ambientes ensolarados ou jantares com iluminação suave.',
		feat6Title: '100% Privado e Offline',
		feat6Desc:
			'Tudo roda direto no navegador do seu celular. Sem cadastro e sem envio de dados a servidores.',

		guideEyebrow: 'Guia de gorjetas',
		guideTitle: 'Quanto dar de gorjeta por serviço e destino',
		guideLead:
			'O costume varia bastante por país e tipo de atendimento. Veja os padrões recomendados.',
		guideUsServicesTitle: 'Padrões nos Estados Unidos',
		guideInternationalTitle: 'Costumes Internacionais',
		guideServiceCol: 'Serviço',
		guideStandardCol: 'Gorjeta típica',
		serviceSitDown: 'Restaurante com garçom',
		serviceBuffet: 'Buffet / Comida rápida',
		serviceBar: 'Bar e coquetéis',
		serviceDelivery: 'Entrega de comida (iFood, Uber Eats)',
		serviceCoffee: 'Cafeteria / Balcão',
		serviceTaxi: 'Táxi ou aplicativo (Uber, 99)',
		serviceSalon: 'Salão de beleza, barbearia',
		serviceHousekeeping: 'Camareira de hotel (por noite)',
		serviceValet: 'Manobrista / Valet',
		serviceTourGuide: 'Guia de turismo',

		intlRegionCol: 'País / Região',
		intlNormCol: 'Costume',
		intlDetailsCol: 'Etiqueta',
		regionUsCanada: 'EUA e Canadá',
		normUsCanada: '15% – 20%',
		detailsUsCanada: 'Esperada. Os garçons dependem das gorjetas como principal renda.',
		regionEuropeUk: 'Reino Unido e Europa',
		normEuropeUk: '10% – 12.5%',
		detailsEuropeUk: 'Opcional. Muitos restaurantes já incluem a taxa de serviço na conta.',
		regionAsiaJapan: 'Japão e Coreia do Sul',
		normAsiaJapan: '0% (Não dar gorjeta)',
		detailsAsiaJapan: 'Não dê gorjeta. O serviço impecável é padrão; deixar dinheiro pode constranger.',
		regionIndiaSouthAsia: 'Índia e Sul da Ásia',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: 'Comum em restaurantes caso não haja taxa de serviço de 10% já inclusa.',
		regionAustraliaNz: 'Austrália e Nova Zelândia',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: 'Não obrigatória devido aos bons salários. 5 a 10% é bem-vindo por um ótimo atendimento.',
		regionLatinAmerica: 'Brasil e América Latina',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: 'No Brasil, os 10% geralmente vêm inclusos na conta como taxa opcional.',

		faqEyebrow: 'FAQ',
		faqTitle: 'Perguntas Frequentes',
		faq1Q: 'Quanto devo dar de gorjeta no restaurante?',
		faq1A:
			'No Brasil, a taxa de serviço padrão é de 10% sugerida na conta. Nos Estados Unidos, o padrão para bom atendimento é de 18% a 20%.',
		faq2Q: 'A gorjeta deve ser calculada antes ou depois do imposto?',
		faq2A:
			'O ideal é calcular a gorjeta sobre o valor dos produtos consumidos antes dos tributos. A calculadora mostra tudo com clareza.',
		faq3Q: 'Como funciona a divisão da conta entre amigos?',
		faq3A:
			'O total com comida, imposto e gorjeta é somado e dividido pelo número de pessoas que você definir.',
		faq4Q: 'Para que serve a opção de arredondar?',
		faq4A:
			'Facilita pagamentos em dinheiro ou Pix, eliminando centavos quebrados.',
		faq5Q: 'Quais moedas são aceitas?',
		faq5A:
			'Mais de 40 moedas mundiais, incluindo Real (R$), Dólar ($), Euro (€), Libra (£) e muitas outras.',
		faq6Q: 'Posso compartilhar o cálculo com amigos?',
		faq6A:
			'Sim! O botão "Copiar link" gera um link pronto para compartilhar no WhatsApp.',
		faq7Q: 'A ferramenta funciona sem internet?',
		faq7A:
			'Sim. Depois de aberta, ela roda 100% localmente no navegador do seu smartphone.',
		faq8Q: 'Meus dados são gravados?',
		faq8A:
			'Não. Nenhuma informação de valores ou consumo sai do seu dispositivo.',

		ctaTitle: 'A conta chegou. Divida sem complicação.',
		ctaText:
			'Salve esta página nos favoritos para usar no próximo jantar ou em suas viagens.',
		ctaButton: 'Calcular minha gorjeta',

		footerBlurb:
			'Calculadora de gorjeta grátis, rápida e privativa com divisão de conta e suporte a impostos em mais de 40 moedas.',
		footerColCalc: 'Calculadora',
		footerColTools: 'Recursos',
		footerColLegal: 'Legal',
		footerColCompany: 'Sobre',
		footerBillSplitter: 'Dividir Conta',
		footerCurrencies: '40+ Moedas',
		footerDarkMode: 'Modo Escuro',
		footerPrivacy: 'Política de Privacidade',
		footerTerms: 'Termos de Uso',
		footerAbout: 'Sobre Nós',
		footerContact: 'Contato',
		footerRights: 'Todos os direitos reservados.',
		footerNote: 'Gratuito e sem cadastro. 100% privativo.',
	},

	it: {
		navBrand: 'Calcolatore di Mancia',
		navCalculator: 'Calcolatore',
		navHowItWorks: 'Come funziona',
		navTipGuide: 'Guida alla mancia',
		navFaq: 'FAQ',
		navCurrency: 'Valuta',
		navLanguage: 'Lingua',
		navTheme: 'Tema',
		openMenu: 'Apri menu',
		closeMenu: 'Chiudi menu',

		heroBadge: 'Gratis • Rapido • 40+ Valute • Dividi il Conto',
		heroTitle: 'Calcolatore di Mancia con Tasse',
		heroSubtitle:
			'Calcola mance, includi le tasse, dividi il conto tra amici e arrotonda l’importo per persona con la massima semplicità.',

		calcHeading: 'Calcolatore di Mancia',
		billAmount: 'Importo del conto',
		quickAmounts: 'Importi rapidi',
		tipPercentage: 'Percentuale mancia',
		customTip: 'Mancia personalizzata',
		taxRate: 'Aliquota fiscale',
		taxHint: '(Percentuale facoltativa)',
		numberOfPeople: 'Numero di persone',
		peopleFewerAria: 'Una persona in meno',
		peopleMoreAria: 'Una persona in più',
		roundingLabel: 'Arrotonda totale per persona',
		roundOff: 'No',
		roundUp: 'Per eccesso',
		roundDown: 'Per difetto',
		roundNearest: 'Al più vicino',

		totalToPay: 'Totale da pagare',
		eachOfPeoplePays: 'Ciascuna delle {people} persone paga',
		tipLabel: 'Mancia',
		taxLabel: 'Tassa',
		totalLabel: 'Totale',
		tipPerPersonLabel: 'Mancia a persona',
		copyResult: 'Copia',
		copyLink: 'Copia link',
		reset: 'Azzera',
		copied: 'Copiato!',
		copyFailed: 'Copia fallita',
		linkCopied: 'Link copiato!',
		splitEqually: 'Diviso equamente tra {count} persone',
		roundedNoteUp: 'Totale per persona arrotondato per eccesso.',
		roundedNoteDown: 'Totale per persona arrotondato per difetto.',
		roundedNoteNearest: 'Totale per persona arrotondato all’unità più vicina.',

		howItWorksEyebrow: 'Come funziona',
		howItWorksTitle: 'Tre passaggi, calcolo istantaneo',
		howItWorksLead:
			'Niente calcoli mentali imbarazzanti al tavolo. Tutto si aggiorna all’istante mentre digiti.',
		step1Title: '1. Inserisci conto e tasse',
		step1Desc:
			'Digita il subtotale dello scontrino o usa un importo rapido. Aggiungi le tasse se escluse.',
		step2Title: '2. Scegli la mancia',
		step2Desc:
			'Scegli percentuali predefinite (10%, 15%, 20%) o imposta una percentuale su misura.',
		step3Title: '3. Dividi e salda',
		step3Desc:
			'Specifica il numero di persone per scoprire all’istante la quota esatta di ciascuno.',

		featuresEyebrow: 'Pensato per ogni tavolo',
		featuresTitle: 'Tutto ciò che serve, senza distrazioni',
		featuresLead:
			'Velocissimo, 100% privato, utilizzabile offline e comodo in viaggio in tutto il mondo.',
		feat1Title: 'Più di 40 valute',
		feat1Desc:
			'Passa facilmente tra EUR (€), USD ($), GBP (£), CHF e molte altre con la formattazione corretta.',
		feat2Title: 'Mancia su misura',
		feat2Desc:
			'Pulsanti rapidi da 0% a 50% più campo personalizzato per qualsiasi cifra esatta.',
		feat3Title: 'Divisione conti accurata',
		feat3Desc:
			'Dividi cene, aperitivi, tasse e mance in modo equo con gli amici.',
		feat4Title: 'Arrotondamento intelligente',
		feat4Desc:
			'Evita monete e spiccioli arrotondando comodamente la quota per persona.',
		feat5Title: 'Modalità Chiara e Scura',
		feat5Desc:
			'Interfaccia curata ideale per terrazze assolate o ristoranti con luce soffusa.',
		feat6Title: '100% Privato e Offline',
		feat6Desc:
			'I calcoli avvengono solo nel tuo browser. Nessun dato viene salvato o inviato a server.',

		guideEyebrow: 'Guida mance',
		guideTitle: 'Consigli sulle mance per servizio e paese',
		guideLead:
			'Le consuetudini cambiano in tutto il mondo. Ecco i punti di riferimento consigliati.',
		guideUsServicesTitle: 'Standard negli Stati Uniti',
		guideInternationalTitle: 'Usi e costumi internazionali',
		guideServiceCol: 'Servizio',
		guideStandardCol: 'Mancia tipica',
		serviceSitDown: 'Ristorante con servizio al tavolo',
		serviceBuffet: 'Buffet / Tavola calda',
		serviceBar: 'Bar e cocktail',
		serviceDelivery: 'Consegna a domicilio (Glovo, Deliveroo)',
		serviceCoffee: 'Caffetteria / Banco',
		serviceTaxi: 'Taxi o app (Uber)',
		serviceSalon: 'Parrucchiere, barbiere, spa',
		serviceHousekeeping: 'Pulizia hotel (a notte)',
		serviceValet: 'Parcheggiatore / Valet',
		serviceTourGuide: 'Guida turistica',

		intlRegionCol: 'Paese / Regione',
		intlNormCol: 'Consuetudine',
		intlDetailsCol: 'Dettagli',
		regionUsCanada: 'USA e Canada',
		normUsCanada: '15% – 20%',
		detailsUsCanada: 'Praticamente obbligatoria. Il personale di sala dipende fortemente dalle mance.',
		regionEuropeUk: 'Italia ed Europa',
		normEuropeUk: '5% – 10% o arrotondamento',
		detailsEuropeUk: 'Facoltativa. Spesso il servizio o il coperto sono già inclusi nel conto.',
		regionAsiaJapan: 'Giappone e Corea del Sud',
		normAsiaJapan: '0% (Non lasciare mance)',
		detailsAsiaJapan: 'Non lasciare mance. Un servizio eccellente è la norma e lasciare soldi può imbarazzare.',
		regionIndiaSouthAsia: 'India e Sud Asia',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: 'Comune nei ristoranti se non è già addebitato un 10% di costo del servizio.',
		regionAustraliaNz: 'Australia e Nuova Zelanda',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: 'Non richiesta per via di stipendi adeguati. Un 5-10% è gradito per un servizio ottimo.',
		regionLatinAmerica: 'America Latina',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: 'Tradizionale nei ristoranti (propina). Spesso suggerita sullo scontrino.',

		faqEyebrow: 'FAQ',
		faqTitle: 'Domande Frequenti',
		faq1Q: 'Quanto lasciare di mancia al ristorante?',
		faq1A:
			'In Italia ed Europa lasciare dal 5% al 10% o arrotondare all’euro superiore è un bel gesto per premiare un servizio cordiale. Negli USA il 18-20% è lo standard atteso.',
		faq2Q: 'La mancia si calcola prima o dopo le tasse?',
		faq2A:
			'La prassi consiglia di calcolarla sull’importo al netto delle imposte. La nostra app ti mostra entrambi i valori in modo trasparente.',
		faq3Q: 'Come funziona la divisione del conto?',
		faq3A:
			'Somma totale, tasse e mancia e divide per il numero di commensali selezionato.',
		faq4Q: 'A cosa serve l’arrotondamento?',
		faq4A:
			'Permette di evitare monetine e centesimi quando si paga in contanti o con app come Satispay.',
		faq5Q: 'Quali valute sono supportate?',
		faq5A:
			'Oltre 40 valute mondiali tra cui EUR, USD, GBP, CHF con il formato numerico proprio di ciascuna.',
		faq6Q: 'Posso condividere il conto con i miei amici?',
		faq6A:
			'Sì, clicca su "Copia link" per inviare il link pronto via WhatsApp o messaggio.',
		faq7Q: 'Funziona senza internet?',
		faq7A:
			'Sì, una volta aperta la pagina funziona totalmente offline sul tuo dispositivo.',
		faq8Q: 'I miei dati vengono conservati?',
		faq8A:
			'No. Nessun importo o informazione viene salvata o trasmessa online.',

		ctaTitle: 'Il conto è arrivato. Sai quanto pagare.',
		ctaText:
			'Salva questo strumento nei preferiti del tuo smartphone per ogni cena fuori o viaggio.',
		ctaButton: 'Calcola la mia mancia',

		footerBlurb:
			'Calcolatore di mance gratuito e riservato con supporto per tasse e divisione conto in oltre 40 valute.',
		footerColCalc: 'Calcolatore',
		footerColTools: 'Strumenti',
		footerColLegal: 'Note legali',
		footerColCompany: 'Info',
		footerBillSplitter: 'Dividi conto',
		footerCurrencies: '40+ Valute',
		footerDarkMode: 'Modalità Scura',
		footerPrivacy: 'Privacy Policy',
		footerTerms: 'Termini di Servizio',
		footerAbout: 'Chi siamo',
		footerContact: 'Contatti',
		footerRights: 'Tutti i diritti riservati.',
		footerNote: 'Gratuito e 100% privato senza tracciamento.',
	},

	ja: {
		navBrand: 'チップ計算機',
		navCalculator: '計算機',
		navHowItWorks: '使い方',
		navTipGuide: 'チップガイド',
		navFaq: 'よくある質問',
		navCurrency: '通貨',
		navLanguage: '言語',
		navTheme: 'テーマ',
		openMenu: 'メニューを開く',
		closeMenu: 'メニューを閉じる',

		heroBadge: '無料 • 高速 • 40以上の通貨 • 割り勘対応',
		heroTitle: '税金対応チップ計算機＆割り勘ツール',
		heroSubtitle:
			'チップの計算、税金の加算、人数による均等割り勘、一人あたりの端数丸めを世界40以上の通貨で瞬時に計算します。',

		calcHeading: 'チップ計算機',
		billAmount: '請求金額',
		quickAmounts: 'クイック金額',
		tipPercentage: 'チップ率 (%)',
		customTip: 'カスタムチップ',
		taxRate: '税率 (%)',
		taxHint: '(任意の税率)',
		numberOfPeople: '人数',
		peopleFewerAria: '1人減らす',
		peopleMoreAria: '1人増やす',
		roundingLabel: '一人あたりの端数丸め',
		roundOff: 'なし',
		roundUp: '切り上げ',
		roundDown: '切り捨て',
		roundNearest: '四捨五入',

		totalToPay: '支払い総額',
		eachOfPeoplePays: '{people}人中、1人あたり',
		tipLabel: 'チップ額',
		taxLabel: '税額',
		totalLabel: '合計金額',
		tipPerPersonLabel: '1人あたりのチップ',
		copyResult: 'コピー',
		copyLink: 'リンクをコピー',
		reset: 'リセット',
		copied: 'コピー完了！',
		copyFailed: 'コピーに失敗しました',
		linkCopied: 'リンクをコピーしました！',
		splitEqually: '{count}人で均等割り勘',
		roundedNoteUp: '一人あたりの金額を切り上げました。',
		roundedNoteDown: '一人あたりの金額を切り捨てました。',
		roundedNoteNearest: '一人あたりの金額を最も近い単位に丸めました。',

		howItWorksEyebrow: '使い方',
		howItWorksTitle: '3つのステップで完了',
		howItWorksLead:
			'テーブルでの面倒な暗算は不要です。数値を入力するだけで自動的にリアルタイム再計算されます。',
		step1Title: '1. 会計金額と税率を入力',
		step1Desc:
			'レシートの小計を入力するかクイック金額をタップ。税抜会計の場合は税率を入力します。',
		step2Title: '2. チップ率を選択',
		step2Desc:
			'一般的なプリセット（10%、15%、18%、20%）を選ぶか、お好みの数値を直接入力します。',
		step3Title: '3. 人数で割り勘',
		step3Desc:
			'支払う人数を入力するだけで、一人あたりの支払額が端数丸めオプション付きで即座に表示されます。',

		featuresEyebrow: '使いやすさを追求',
		featuresTitle: '必要な機能だけを、シンプルに',
		featuresLead:
			'超高速、完全プライベート、オフライン対応、海外旅行先でもストレスなく使えます。',
		feat1Title: '世界40以上の通貨',
		feat1Desc:
			'USD、EUR、GBP、JPY（日本円）、INR、CADなど各国の表記規格に合わせてスムーズに切り替え。',
		feat2Title: '自由なチップ設定',
		feat2Desc:
			'0%から50%までのワンタップ選択に加え、細かい端数のカスタム入力も可能です。',
		feat3Title: '正確な割り勘機能',
		feat3Desc:
			'2人の食事から大人数の宴会まで、料理代・税金・チップを公平に分割。',
		feat4Title: 'スマートな端数丸め',
		feat4Desc:
			'小銭のやり取りを避けるため、1人あたりの金額をキリの良い数字に切り上げ・四捨五入。',
		feat5Title: 'ライト＆ダークモード',
		feat5Desc:
			'明るいカフェでも落ち着いた薄暗いレストランでも目に優しい洗練されたデザイン。',
		feat6Title: '100%プライベート＆オフライン',
		feat6Desc:
			'すべての計算はブラウザ内で完結。サーバーへの金額送信やログインは一切不要です。',

		guideEyebrow: 'チップガイド',
		guideTitle: '国やサービス別のチップマナー',
		guideLead:
			'チップの習慣は国や業種によって大きく異なります。海外渡航時の参考にしてください。',
		guideUsServicesTitle: 'アメリカでの目安',
		guideInternationalTitle: '世界のチップ習慣',
		guideServiceCol: 'サービス',
		guideStandardCol: '目安のチップ',
		serviceSitDown: 'テーブル席のレストラン',
		serviceBuffet: 'ビュッフェ / カジュアル',
		serviceBar: 'バー・カクテル',
		serviceDelivery: '料理デリバリー',
		serviceCoffee: 'カフェ / カウンター',
		serviceTaxi: 'タクシー・配車 (Uber等)',
		serviceSalon: '美容室・理容・スパ',
		serviceHousekeeping: 'ホテル客室清掃 (1泊あたり)',
		serviceValet: 'バレーパーキング',
		serviceTourGuide: 'ツアーガイド',

		intlRegionCol: '国・地域',
		intlNormCol: 'チップ習慣',
		intlDetailsCol: 'マナーの詳細',
		regionUsCanada: 'アメリカ・カナダ',
		normUsCanada: '15% – 20%',
		detailsUsCanada: '必須。ウェイターの基本給が低く抑えられており、チップが主な収入源となります。',
		regionEuropeUk: 'イギリス・EU諸国',
		normEuropeUk: '10% – 12.5%',
		detailsEuropeUk: '任意。サービス料（Service charge）がすでに会計に含まれている場合も多いです。',
		regionAsiaJapan: '日本・韓国',
		normAsiaJapan: '0% (不要)',
		detailsAsiaJapan: 'チップの習慣はありません。優れた接客は標準とされ、現金を渡すと戸惑われます。',
		regionIndiaSouthAsia: 'インド・南アジア',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: '伝票に10%のサービス料が含まれていない場合は5〜10%を渡すのが一般的です。',
		regionAustraliaNz: 'オーストラリア・NZ',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: '給与水準が高いため不要ですが、特別なサービスに対しては5〜10%喜ばれます。',
		regionLatinAmerica: '中南米',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: '一般的（プロピーナと呼ばれます）。レシートに推奨額が印字されることもあります。',

		faqEyebrow: 'よくある質問',
		faqTitle: 'よくあるご質問',
		faq1Q: '海外レストランでチップはいくら払うべきですか？',
		faq1A:
			'アメリカやカナダでは18%〜20%が標準です。ヨーロッパではサービス料が含まれていない場合に10%前後を置くのが通例です。',
		faq2Q: 'チップは税抜き・税込みどちらで計算しますか？',
		faq2A:
			'正式なマナーでは税抜き小計に対して計算します（税金は政府への支払いでサービスへの対価ではないため）。',
		faq3Q: '割り勘の計算方法は？',
		faq3A:
			'小計＋税金＋チップの合計金額を人数で割り、希望に応じて端数を丸めて計算します。',
		faq4Q: '端数丸め機能とは？',
		faq4A:
			'1人あたりの支払額から細かな端数をなくし、現金のやり取りや割り勘送金をスムーズにする機能です。',
		faq5Q: '日本円（JPY）にも対応していますか？',
		faq5A:
			'はい。日本円を含む世界40以上の通貨に対応しており、円などの小数点のない通貨も正しく表示されます。',
		faq6Q: '計算結果をLINEやSNSで友達に送れますか？',
		faq6A:
			'はい。「リンクをコピー」ボタンを押すと、入力内容がそのまま反映された共有URLが生成されます。',
		faq7Q: '電波の悪い場所でも使えますか？',
		faq7A:
			'はい。一度読み込めばオフラインで動作するため、海外のWi-Fiがない場所でも安心です。',
		faq8Q: '入力した金額は保存されますか？',
		faq8A:
			'いいえ。入力内容は端末のブラウザ内でのみ処理され、外部サーバーには一切送信されません。',

		ctaTitle: 'お会計が来たら、迷わずスマートに。',
		ctaText:
			'旅行や外食のときにすぐ使えるよう、ブックマークに追加しておくと便利です。',
		ctaButton: 'チップを計算する',

		footerBlurb:
			'40以上の通貨に対応した無料・完全プライベートのチップ計算＆割り勘ツール。',
		footerColCalc: '計算機',
		footerColTools: '機能',
		footerColLegal: '規約',
		footerColCompany: '運営情報',
		footerBillSplitter: '割り勘機能',
		footerCurrencies: '40以上の通貨',
		footerDarkMode: 'ダークモード',
		footerPrivacy: 'プライバシーポリシー',
		footerTerms: '利用規約',
		footerAbout: '私たちについて',
		footerContact: 'お問い合わせ',
		footerRights: 'All rights reserved.',
		footerNote: '完全無料・登録不要。プライバシーを最優先しています。',
	},

	zh: {
		navBrand: '小费计算器',
		navCalculator: '计算器',
		navHowItWorks: '使用方法',
		navTipGuide: '小费指南',
		navFaq: '常见问题',
		navCurrency: '货币',
		navLanguage: '语言',
		navTheme: '主题',
		openMenu: '打开菜单',
		closeMenu: '关闭菜单',

		heroBadge: '免费 • 快速 • 40+ 货币 • AA制分摊',
		heroTitle: '含税小费与账单分摊计算器',
		heroSubtitle:
			'轻松计算小费、包含当地消费税、与好友均摊账单，并支持人均金额整数取整，支持全球40多种货币。',

		calcHeading: '小费计算器',
		billAmount: '账单金额',
		quickAmounts: '快捷金额',
		tipPercentage: '小费比例 (%)',
		customTip: '自定义小费',
		taxRate: '税率 (%)',
		taxHint: '(可选消费税率)',
		numberOfPeople: '分摊人数',
		peopleFewerAria: '减少一人',
		peopleMoreAria: '增加一人',
		roundingLabel: '人均金额取整',
		roundOff: '不取整',
		roundUp: '向上取整',
		roundDown: '向下取整',
		roundNearest: '四舍五入',

		totalToPay: '应付总额',
		eachOfPeoplePays: '{people}人中，每人应付',
		tipLabel: '小费金额',
		taxLabel: '税费',
		totalLabel: '账单总计',
		tipPerPersonLabel: '人均小费',
		copyResult: '复制',
		copyLink: '复制链接',
		reset: '重置',
		copied: '已复制！',
		copyFailed: '复制失败',
		linkCopied: '链接已复制！',
		splitEqually: '{count} 人均等分摊',
		roundedNoteUp: '人均金额已向上取整。',
		roundedNoteDown: '人均金额已向下取整。',
		roundedNoteNearest: '人均金额已四舍五入到最近整数。',

		howItWorksEyebrow: '使用方法',
		howItWorksTitle: '三步搞定聚餐买单',
		howItWorksLead:
			'告别在餐厅买单时的复杂心算，输入任意金额或人数，结果实时精准更新。',
		step1Title: '1. 输入账单和税率',
		step1Desc:
			'输入小票上的税前金额，如有消费税且未包含在内，可填写当地税率。',
		step2Title: '2. 选择小费比例',
		step2Desc:
			'点击常用预设（10%、15%、18%、20%）或输入任意个性化小费百分比。',
		step3Title: '3. 人数分摊与结算',
		step3Desc:
			'设置一起分摊的人数，可配合取整功能，每人该付多少一目了然。',

		featuresEyebrow: '专为聚餐设计',
		featuresTitle: '功能齐全，简洁实用',
		featuresLead:
			'极致轻快、100%保护隐私、离线可用，全球旅行就餐皆宜。',
		feat1Title: '支持 40+ 国际货币',
		feat1Desc:
			'在 USD、EUR、GBP、CNY、HKD、JPY 等多种主流货币间自由切换。',
		feat2Title: '灵活小费调节',
		feat2Desc:
			'0% 至 50% 快捷选择，并支持精确到小数的自定义比例输入。',
		feat3Title: '精准多人 AA 制',
		feat3Desc:
			'无论是二人约会还是数十人聚会，账单与小费都能公平分摊。',
		feat4Title: '智能取整免找零',
		feat4Desc:
			'避免转账或零钱找补尴尬，一键向上取整到整数。',
		feat5Title: '深色与浅色模式',
		feat5Desc:
			'无论是阳光下的露天咖啡馆还是昏暗情调餐厅，视觉体验同样舒适。',
		feat6Title: '100% 隐私与离线可用',
		feat6Desc:
			'纯前端本地运算，无需登录，不上传任何消费数据，断网亦能正常使用。',

		guideEyebrow: '小费指南',
		guideTitle: '常见服务与各国小费规范',
		guideLead:
			'不同国家与行业的小费文化差异很大。参考此指南，在海内外就餐更加从容。',
		guideUsServicesTitle: '美国服务行业小费标准',
		guideInternationalTitle: '国际小费习俗',
		guideServiceCol: '服务类型',
		guideStandardCol: '参考比例',
		serviceSitDown: '正餐餐厅堂食',
		serviceBuffet: '自助餐 / 简餐',
		serviceBar: '酒吧 / 鸡尾酒',
		serviceDelivery: '外卖配送',
		serviceCoffee: '咖啡店 / 柜台点餐',
		serviceTaxi: '出租车或网约车 (Uber)',
		serviceSalon: '美发、理发、SPA',
		serviceHousekeeping: '酒店客房打扫 (每晚)',
		serviceValet: '代客泊车',
		serviceTourGuide: '旅游向导',

		intlRegionCol: '国家 / 地区',
		intlNormCol: '小费习惯',
		intlDetailsCol: '礼仪细节',
		regionUsCanada: '美国与加拿大',
		normUsCanada: '15% – 20%',
		detailsUsCanada: '几乎必须。服务员基本薪资较低，小费为其主要收入来源。',
		regionEuropeUk: '英国与欧洲联盟',
		normEuropeUk: '10% – 12.5%',
		detailsEuropeUk: '酌情自愿。许多餐厅小票已包含服务费（Service Charge）。',
		regionAsiaJapan: '日本与韩国',
		normAsiaJapan: '0% (无需小费)',
		detailsAsiaJapan: '请勿给小费。优质服务已涵盖在价格中，给小费可能会让人感到尴尬。',
		regionIndiaSouthAsia: '印度与南亚',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: '若账单未加收 10% 服务费，在正规餐厅通常给 5%-10% 小费。',
		regionAustraliaNz: '澳大利亚与新西兰',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: '无须支付小费，因员工拥有法定较高底薪；若服务极其出色可酌情给 5%-10%。',
		regionLatinAmerica: '拉丁美洲',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: '通常习惯（Propina），小票上常会印有建议金额。',

		faqEyebrow: '常见问题',
		faqTitle: '常见问题解答',
		faq1Q: '去餐厅一般给多少小费？',
		faq1A:
			'在北美（美国/加拿大），18% 至 20% 是良好服务的行业标准。在欧洲，如果账单没有附带服务费，一般给 10% 左右或凑整。',
		faq2Q: '小费应该按税前还是税后计算？',
		faq2A:
			'正统礼仪建议按税前餐饮小计计算小费，因为税款是交给政府的，不属于服务范畴。我们的计算器清晰展示各项明细。',
		faq3Q: '多人聚餐如何分摊？',
		faq3A:
			'计算器将餐费、税款和小费相加，均分给所选人数，并支持将每人应付金额取整。',
		faq4Q: '取整功能有什么好处？',
		faq4A:
			'省去微信/支付宝转账时繁琐的几分几角钱，方便快捷收齐聚餐款。',
		faq5Q: '支持哪些币种？',
		faq5A:
			'支持全球 40 多种主流货币，包括人民币、美元、欧元、英镑、港币、日元等。',
		faq6Q: '可以把计算结果分享给同桌好友吗？',
		faq6A:
			'可以，点击“复制链接”即可将带好参数的链接发送至微信或群聊中，对方打开即可查看。',
		faq7Q: '没有网络时可以使用吗？',
		faq7A:
			'可以，页面打开后完全支持离线本地运算，适合国际旅行或地下餐厅。',
		faq8Q: '我的消费信息会被保存吗？',
		faq8A:
			'不会。所有计算仅在您的手机浏览器本地运行，我们绝不收集或上传任何账单数据。',

		ctaTitle: '账单来了？轻松分摊，心里有数。',
		ctaText:
			'建议将本页面收藏到手机书签，无论是日常聚餐还是出国旅游都可随时使用。',
		ctaButton: '开始计算小费',

		footerBlurb:
			'免费、极速、私密的小费与AA制账单计算器，支持税金计算与40多种国际货币。',
		footerColCalc: '计算器',
		footerColTools: '工具',
		footerColLegal: '条款',
		footerColCompany: '关于',
		footerBillSplitter: '账单分摊',
		footerCurrencies: '40+ 货币',
		footerDarkMode: '深色模式',
		footerPrivacy: '隐私政策',
		footerTerms: '使用条款',
		footerAbout: '关于我们',
		footerContact: '联系我们',
		footerRights: '版权所有。',
		footerNote: '免费使用，100% 保护隐私，不记录任何金额。',
	},

	ar: {
		navBrand: 'حاسبة البقشيش',
		navCalculator: 'الحاسبة',
		navHowItWorks: 'كيف تعمل',
		navTipGuide: 'دليل الإكرامية',
		navFaq: 'الأسئلة الشائعة',
		navCurrency: 'العملة',
		navLanguage: 'اللغة',
		navTheme: 'المظهر',
		openMenu: 'فتح القائمة',
		closeMenu: 'إغلاق القائمة',

		heroBadge: 'مجاني • سريع • أكثر من 40 عملة • تقسيم الفاتورة',
		heroTitle: 'حاسبة البقشيش والضرائب وتقسيم الفاتورة',
		heroSubtitle:
			'احسب الإكرامية بدقة، وأضف ضريبة المبيعات، وقسم الفاتورة بالتساوي بين أصدقائك في ثوانٍ.',

		calcHeading: 'حاسبة البقشيش',
		billAmount: 'مبلغ الفاتورة',
		quickAmounts: 'مبالغ سريعة',
		tipPercentage: 'نسبة البقشيش (%)',
		customTip: 'بقشيش مخصص',
		taxRate: 'نسبة الضريبة (%)',
		taxHint: '(نسبة مئوية اختيارية)',
		numberOfPeople: 'عدد الأشخاص',
		peopleFewerAria: 'شخص أقل',
		peopleMoreAria: 'شخص إضافي',
		roundingLabel: 'تقريب المبلغ للشخص',
		roundOff: 'معطل',
		roundUp: 'للأعلى',
		roundDown: 'للأسفل',
		roundNearest: 'لأقرب رقم',

		totalToPay: 'الإجمالي للدفع',
		eachOfPeoplePays: 'يدفع كل شخص من بين {people}',
		tipLabel: 'البقشيش',
		taxLabel: 'الضريبة',
		totalLabel: 'المجموع الكلي',
		tipPerPersonLabel: 'البقشيش لكل شخص',
		copyResult: 'نسخ',
		copyLink: 'نسخ الرابط',
		reset: 'إعادة ضبط',
		copied: 'تم النسخ!',
		copyFailed: 'فشل النسخ',
		linkCopied: 'تم نسخ الرابط!',
		splitEqually: 'مقسم بالتساوي بين {count} أشخاص',
		roundedNoteUp: 'تم تقريب المبلغ لكل شخص للأعلى.',
		roundedNoteDown: 'تم تقريب المبلغ لكل شخص للأسفل.',
		roundedNoteNearest: 'تم تقريب المبلغ لأقرب وحدة صحيحة.',

		howItWorksEyebrow: 'كيف تعمل',
		howItWorksTitle: 'ثلاث خطوات بسيطة',
		howItWorksLead:
			'لا داعي للحسابات الذهنية المعقدة في المطعم. يتم تحديث النتائج فور كتابة أي رقم.',
		step1Title: '1. أدخل الفاتورة والضريبة',
		step1Desc:
			'اكتب المبلغ قبل الضريبة من الإيصال، ثم أضف نسبة الضريبة إن وجدت.',
		step2Title: '2. اختر نسبة البقشيش',
		step2Desc:
			'اختر نسبة قياسية جاهزة (10%، 15%، 20%) أو أدخل أي نسبة مخصصة تناسبك.',
		step3Title: '3. قسّم وسدد الفاتورة',
		step3Desc:
			'حدد عدد الأشخاص لتعرف فوراً المبلغ الدقيق المطلوب من كل فرد.',

		featuresEyebrow: 'مصمم لكل الأوقات',
		featuresTitle: 'كل ما تحتاجه بلا تعقيد',
		featuresLead:
			'فائق السرعة، آمن وخاص 100%، ويعمل دون اتصال بالإنترنت في أي مكان حول العالم.',
		feat1Title: 'أكثر من 40 عملة عالمية',
		feat1Desc:
			'بدّل بسهولة بين الدولار، اليورو، الريال السعودي، الدرهم الإماراتي، والجنيه المصري وغيرها.',
		feat2Title: 'خيارات بقشيش مرنة',
		feat2Desc:
			'أزرار سريعة من 0% إلى 50% مع إمكانية إدخال أي رقم مخصص.',
		feat3Title: 'تقسيم دقيق وعادل',
		feat3Desc:
			'قسّم الطعام والضرائب والإكراميات بعدالة تامة لأي عدد من الأفراد.',
		feat4Title: 'تقريب ذكي للكسور',
		feat4Desc:
			'تجنب الفكة والكسور المزعجة بتقريب حصة كل شخص للأعلى أو لأقرب عدد صحيح.',
		feat5Title: 'الوضع الليلي والنهاري',
		feat5Desc:
			'تصميم مريح للعين في الأجواء المشمسة أو المطاعم ذات الإضاءة الهادئة.',
		feat6Title: 'خصوصية تامة 100% ودون إنترنت',
		feat6Desc:
			'تتم جميع الحسابات محلياً داخل متصفحك دون حفظ أو إرسال أي أرقام لخوادم خارجية.',

		guideEyebrow: 'دليل البقشيش',
		guideTitle: 'دليل الإكراميات حسب الخدمة والبلد',
		guideLead:
			'تختلف أعراف الإكراميات حول العالم. إليك الدليل المعتمد للسفر وتناول الطعام.',
		guideUsServicesTitle: 'المعايير في أمريكا',
		guideInternationalTitle: 'الأعراف الدولية',
		guideServiceCol: 'نوع الخدمة',
		guideStandardCol: 'الإكرامية المعتادة',
		serviceSitDown: 'مطعم مع خدمة طاولة',
		serviceBuffet: 'بوفيه / طعام سريع',
		serviceBar: 'مقهى ومشروبات',
		serviceDelivery: 'توصيل الطعام (طلبات، أوبر إيتس)',
		serviceCoffee: 'مقهى / خدمة شباك',
		serviceTaxi: 'تاكسي أو تطبيقات نقل (أوبر، كريم)',
		serviceSalon: 'صالون حلاقة وعناية',
		serviceHousekeeping: 'خدمة غرف الفندق (لكل ليلة)',
		serviceValet: 'اصطفاف السيارات (فاليه)',
		serviceTourGuide: 'مرشد سياحي',

		intlRegionCol: 'البلد / المنطقة',
		intlNormCol: 'العرف المتبع',
		intlDetailsCol: 'تفاصيل الإتيكيت',
		regionUsCanada: 'أمريكا وكندا',
		normUsCanada: '15% – 20%',
		detailsUsCanada: 'متوقعة وشبه إلزامية، حيث يعتمد دخل النادل أساساً على الإكراميات.',
		regionEuropeUk: 'بريطانيا وأوروبا',
		normEuropeUk: '10% – 12.5%',
		detailsEuropeUk: 'اختيارية، وغالباً ما تكون رسوم الخدمة مضافة مسبقاً في الفاتورة.',
		regionAsiaJapan: 'اليابان وكوريا الجنوبية',
		normAsiaJapan: '0% (لا تعطِ بقشيشاً)',
		detailsAsiaJapan: 'لا تدفع بقشيشاً؛ الخدمة الممتازة معيار أساسي وترك المال قد يسبب إحراجاً.',
		regionIndiaSouthAsia: 'الهند وجنوب آسيا',
		normIndiaSouthAsia: '5% – 10%',
		detailsIndiaSouthAsia: 'شائعة إذا لم تكن رسوم الخدمة (10%) مضافة مسبقاً في الحساب.',
		regionAustraliaNz: 'أستراليا ونيوزيلندا',
		normAustraliaNz: '0% – 10%',
		detailsAustraliaNz: 'غير مطلوبة لارتفاع الرواتب، ولكن 5-10% تكون محل تقدير للخدمة الممتازة.',
		regionLatinAmerica: 'أمريكا اللاتينية',
		normLatinAmerica: '10% – 15%',
		detailsLatinAmerica: 'عرف شائع في المطاعم (تسمى بروبينا) وتُقترح عادة في الإيصال.',

		faqEyebrow: 'الأسئلة الشائعة',
		faqTitle: 'الأسئلة المتكررة',
		faq1Q: 'كم يجب أن أدفع كإكرامية في المطعم؟',
		faq1A:
			'في أمريكا وكندا بين 18% و 20% هو المعدل الطبيعي. في أوروبا والعالم العربي يعتبر 10% تقديراً مناسباً للخدمة الجيدة.',
		faq2Q: 'هل يحسب البقشيش قبل أم بعد الضريبة؟',
		faq2A:
			'الأصل في الإتيكيت حسابه على قيمة الطعام قبل الضريبة لأن الضريبة رسوم حكومية وليست خدمة.',
		faq3Q: 'كيف يعمل تقسيم الفاتورة؟',
		faq3A:
			'يجمع التطبيق الحساب مع الضريبة والإكرامية ويقسم الناتج بدقة على عدد الحضور.',
		faq4Q: 'ما فائدة ميزة التقريب؟',
		faq4A:
			'تتيح التخلص من الكسور والهللات لتسهيل السداد نقداً أو بالتحويل السريع.',
		faq5Q: 'ما هي العملات المدعومة؟',
		faq5A:
			'يدعم أكثر من 40 عملة من بينها الريال، الدرهم، الجنيه، الدولار، واليورو بتنسيقها الصحيح.',
		faq6Q: 'هل يمكنني مشاركة الحساب مع أصدقائي؟',
		faq6A:
			'نعم، اضغط على "نسخ الرابط" لإرسال رابط مباشر بالفاتورة عبر واتساب أو الرسائل.',
		faq7Q: 'هل تعمل الحاسبة بدون إنترنت؟',
		faq7A:
			'نعم، بمجرد فتح الصفحة تعمل الحاسبة دون حاجة لشبكة إنترنت، وهي مثالية للسفر.',
		faq8Q: 'هل بياناتي أو مبالغ الفواتير محفوظة لديكم؟',
		faq8A:
			'لا مطلقاً. كل العمليات تجري داخل جهازك بسرية تامة ودون إرسال أي معلومة إلى خوادمنا.',

		ctaTitle: 'وصلت الفاتورة؟ اعرف نصيبك بثوانٍ.',
		ctaText:
			'احفظ هذا الرابط في مفضلتك لتقسيم الفواتير بسهولة في رحلاتك وجلساتك القادمة.',
		ctaButton: 'احسب إكراميتي الآن',

		footerBlurb:
			'حاسبة بقشيش مجانية ودقيقة تدعم الضرائب وتقسيم الفواتير لأكثر من 40 عملة حول العالم.',
		footerColCalc: 'الحاسبة',
		footerColTools: 'الأدوات',
		footerColLegal: 'الشروط',
		footerColCompany: 'عن الموقع',
		footerBillSplitter: 'تقسيم الفاتورة',
		footerCurrencies: '40+ عملة',
		footerDarkMode: 'الوضع الليلي',
		footerPrivacy: 'سياسة الخصوصية',
		footerTerms: 'شروط الاستخدام',
		footerAbout: 'من نحن',
		footerContact: 'اتصل بنا',
		footerRights: 'جميع الحقوق محفوظة.',
		footerNote: 'مجاني 100% دون تسجيل ودون أي تتبع للبيانات.',
	},
};

export const DEFAULT_LANG = 'en';

export function getTranslation(lang: string): TranslationDictionary {
	return TRANSLATIONS[lang] ?? TRANSLATIONS[DEFAULT_LANG];
}
