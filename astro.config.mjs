import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://loadassumptions.xyz',
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap({
      customPages: [
        'https://loadassumptions.xyz/',
        'https://loadassumptions.xyz/en/',
      ],
    }),
  ],
});
