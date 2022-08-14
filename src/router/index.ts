import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import type { App } from 'vue'

export const setupRouter = (app: App) => {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: setupLayouts(routes),
  })
  app.use(router)
  return router
}
