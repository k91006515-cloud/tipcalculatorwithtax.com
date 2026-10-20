// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://tipcalculatorwithtax.com',
	integrations: [sitemap()],
	adapter: cloudflare(),
	devToolbar: { enabled: false },
});
