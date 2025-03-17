import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'
import pkg from './package.json'
import { visualizer } from 'rollup-plugin-visualizer'

import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig({
  plugins: [
    vue(),
    libInjectCss(),
    dts({
      rollupTypes: false,
      staticImport: true,
    }),
    visualizer({
      filename: './public/stats.html',
      template: 'treemap',
    }),
  ],
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      entry: './src/index.ts',
      name: pkg.name,
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    cssCodeSplit: true,
  },
});
