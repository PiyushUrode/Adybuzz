import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),

    // 🔍 Linting support
    eslint(),

    // 🖼 SVG as React components
    svgr(),

    // 🌐 Compress assets (gzip/brotli)
    viteCompression(),

    // 🔄 Auto-load tsconfig paths
    tsconfigPaths(),
    {
  "presets": ["@babel/preset-env", "@babel/preset-react"]
},

    // 📱 PWA Support
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'My Vite React App',
        short_name: 'ViteApp',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],

  // 📁 Aliases for cleaner imports
  resolve: {
  alias: {
    '@': './src',
    '@components': './src/components',
    '@pages': './src/pages',
    '@assets': './src/assets',
  }
},


  // ⚙️ Server Config
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:5000', // 🔄 Backend Proxy
    },
  },

  // 🏗 Optimize build
  build: {
    sourcemap: false,
    outDir: 'dist',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
