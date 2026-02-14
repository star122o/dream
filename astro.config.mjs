// @ts-check

import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    '/dni': '/dni.txt',
    '/info': '/info.txt',
    '/about': '/info.txt'
  }
});
