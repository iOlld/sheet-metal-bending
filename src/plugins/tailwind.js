import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
export const theme = fullConfig.theme

export default {
  install(app) {
    app.config.globalProperties.$theme = theme
    app.provide('theme', theme)
  },
}
