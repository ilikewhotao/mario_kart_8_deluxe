// 路由懒加载
const HomeView = () => import('../views/HomeView.vue')
const UserView = () => import('../views/UserView.vue')
const OtherView = () => import('../views/OtherView.vue')

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { title: '规则一览', icon: '📜' }
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    meta: { title: '参赛名单', icon: '🚴' }
  },
  {
    path: '/other',
    name: 'other',
    component: OtherView,
    meta: { title: '其他', icon: '🍊' }
  }
]

export default routes
