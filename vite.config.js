// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/main.jsx', // Asegúrate de que sea la ruta correcta a tu archivo principal
    },
  },
});

