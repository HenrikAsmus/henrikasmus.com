import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://loadassumptions.xyz',
  output: 'static',
  adapter: vercel(),
});
