import { isClient } from '@vueuse/core'
import NProgress from 'nprogress'
import type { Router } from 'vue-router'

export const setupNProgress = (router: Router) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()
    })
    router.afterEach(() => { NProgress.done() })
  }
}
