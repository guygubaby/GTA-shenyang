import { createPinia } from 'pinia'
import type { App } from 'vue'
import { persistPlugin } from 'pinia-misc'

// Setup Pinia
// https://pinia.esm.dev/
export const setupPinia = (app: App) => {
  const pinia = createPinia()
  pinia.use(persistPlugin)
  app.use(pinia)
}
