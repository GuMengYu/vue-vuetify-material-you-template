/* eslint-disable import/no-unresolved */

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

import { dependencies, devDependencies, name, version } from './package.json'
const path = require('path')

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: new Date().toISOString(),
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, path.resolve(__dirname, './'))

  const isDevelopment = command === 'serve'
  const plugins: any = [
    vue({
      reactivityTransform: true,
    }),
    vuetify({
      styles: {
        configFile: './src/styles/settings.scss',
      },
    }),
    vueJsx(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros', '@vueuse/head', '@vueuse/core'],
      dts: './src/auto-imports.d.ts',
    }),
    Components({
      dts: './src/components.d.ts',
    }),
  ]
  return {
    mode: mode,
    envDir: path.resolve(__dirname, './'),
    root: __dirname,
    plugins: plugins,
    base: './',
    build: {
      emptyOutDir: true,
      sourcemap: isDevelopment,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    server: {
      // host: env.VITE_DEV_SERVER_HOST,
      port: 5173,
      proxy: {
        '/api': {
          target: `http://localhost:12139`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
