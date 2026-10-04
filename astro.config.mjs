// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import varlockAstroIntegration from '@varlock/astro-integration';
import VitePWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    varlockAstroIntegration(),
    react({ compiler: true }),
    VitePWA({
      injectRegister: 'inline',
      strategies: 'generateSW',
      
      manifest: {
        name: 'Melya Closet',
        short_name: 'MelyaCloset',
        description: 'Melya Closet PWA',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: './',
        icons: [
          {
            src: './icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});