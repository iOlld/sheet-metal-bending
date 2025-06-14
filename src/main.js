// import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import tailwindPlugin from '@/plugins/tailwind'
import dayjsPlugin from '@/plugins/dayjs'

import '@/assets/scss/index.scss'

const pinia = createPinia()

const app = createApp(App)
  .use(pinia)
  .use(router)
  .use(tailwindPlugin)
  .use(dayjsPlugin)

app.mount('#app')
