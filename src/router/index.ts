import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useRouterStore } from '../store'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(to => {
  const routerStore = useRouterStore()
  routerStore.setRouterName(to.name as string)
})

export default router
