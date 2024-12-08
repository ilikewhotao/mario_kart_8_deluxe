// import { defineAsyncComponent } from 'vue'

import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import RecordView from '../views/RecordView.vue'
import FindView from '../views/FindView.vue'
import ResultView from '../views/ResultView.vue'

// const _import = (path: string) =>
//   defineAsyncComponent(() => import(`../views/${path}.vue`))

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
    meta: { title: '参赛名单', icon: '🎟' }
  },
  {
    path: '/record',
    name: 'record',
    component: RecordView,
    meta: { title: '全部记录', icon: '📃' }
  },
  {
    path: '/find',
    name: 'find',
    component: FindView,
    meta: { title: '记录查询', icon: '💯' }
  },
  {
    path: '/result',
    name: 'result',
    component: ResultView,
    meta: { title: '结果公示', icon: '🏆' }
  }
]

export default routes
