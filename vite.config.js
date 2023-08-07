// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    json(), // Add the JSON plugin
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      // Add other replacements you might need, e.g., VITE_Payment_Pk:
      'import.meta.env.VITE_Payment_Pk': JSON.stringify('your_stripe_publishable_key_here'),
    }),
  ],
  resolve: {
    alias: {
      // Add any aliases you might need
      '@': resolve(__dirname, './src'),
    },
  },
});
