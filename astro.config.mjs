// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.tipcalculatorwithtax.com',
	integrations: [
		sitemap({
			// Include lastmod for all pages
			lastmod: new Date(),
			// Change frequencies
			changefreq: {
				'/': 'weekly',
				'/about/': 'monthly',
				'/contact/': 'yearly',
				'/privacy/': 'yearly',
				'/terms/': 'yearly',
			},
			// Priority hints
			priority: {
				'/': 1.0,
				'/about/': 0.6,
				'/contact/': 0.5,
				'/privacy/': 0.3,
				'/terms/': 0.3,
			},
			// Filter function
			filter: (page) => {
				// Exclude error pages from sitemap
				return !page.includes('/404') && !page.includes('/500');
			},
			// Serialize with additional XML
			serialize: (item) => {
				return item;
			},
		}),
	],
	adapter: cloudflare(),
	devToolbar: { enabled: false },
});