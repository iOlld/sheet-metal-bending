import process from 'node:process'
import path from 'node:path'
import dotenv from 'dotenv'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import { defineConfig } from 'vite'

import vuePlugin from '@vitejs/plugin-vue'
import vueRouterPlugin from 'unplugin-vue-router/vite'
import autoImportPlugin from 'unplugin-auto-import/vite'
import componentsPlugin from 'unplugin-vue-components/vite'

import tailwindConfig from './tailwind.config.js'

import getEnv from './env.js'

dotenv.config({ override: true })
dotenv.config({ path: '.env.local', override: true })

const env = getEnv(process.env)

export default defineConfig({
  resolve: {
    alias: {
      '@tailwind.config.js': path.resolve('./tailwind.config.js'),
      '@env.js': path.resolve('./env.js'),
      '@': path.resolve('./src'),
    },
  },
  server: {
    port: env.PORT,
    host: env.HOST,
  },
  preview: {
    port: env.PORT,
    host: env.HOST,
  },
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
  plugins: [
    vueRouterPlugin({
      routesFolder: 'src/pages',
      exclude: ['/*.js', '**/_*/**/*', '**/_*'],
      importMode: 'sync',
      dts: './typed-router.d.ts',
      extendRoute(route) {
        route.props = true
      },
      getRouteName: (routeNode) => {
        const _getRouteName = rn => rn.value.rawSegment.replace(/[[\]]/g, '').split(/\b\s*\.\s*\b/g).join('-')
        const parts = [_getRouteName(routeNode)]
        let parent = routeNode.parent
        while (parent.value.rawSegment) {
          parts.unshift(_getRouteName(parent))
          parent = parent.parent
        }
        return parts.join('-')
      },
    }),

    vuePlugin(),

    componentsPlugin({
      dirs: ['src/components-ui', 'src/components-logic'],
      dts: './typed-components.d.ts',
    }),

    // - https://github.com/antfu/unplugin-auto-import
    autoImportPlugin({
      imports: [
        // - presets
        'vue',
        'vue-router',

        // - custom
        {
          // '@/store': ['useMainStore'],
          // '@/utils/index': [['default', '_']],
          '@vueuse/core': [
            'get', // DEPRECATED
            'set', // DEPRECATED
            'watchTriggerable',
            'watchDebounced',
            'useTimeoutFn',
            'useScroll',
            'useMagicKeys',
            'useLocalStorage',
            'useIdle',
            'useDebounceFn',
            'useDateFormat',
            'useBase64',
            'refDebounced',
            'reactiveComputed',
            'computedWithControl',
            ['toRefs', 'toRefsUse'], // DEPRECATED
          ],
        },
      ],
      ignore: ['useFetch'],
      dts: './typed-auto-imports.d.ts',
      // dirs: ['src/composables/**', 'src/stores/**', 'src/api-old/**'],
      // eslintrc: {
      //   enabled: true,
      //   filepath: './eslint.auto-import.json',
      //   globalsPropValue: true,
      // },
    }),
  ],

  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core', 'pinia'],
  },
})
