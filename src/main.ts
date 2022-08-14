import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import { setupNProgress } from './modules/nprogress'
import { setupRouter } from './router'
import { setupPinia } from './modules/pinia'

const bootstrap = async () => {
  const app = createApp(App)

  setupPinia(app)

  const router = setupRouter(app)

  setupNProgress(router)

  app.mount('#app')
}

bootstrap().catch(console.error)
