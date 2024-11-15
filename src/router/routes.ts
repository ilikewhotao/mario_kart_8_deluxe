import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import RecordView from '../views/RecordView.vue'

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
    meta: { title: '活动名单', icon: '📝' }
  },
  {
    path: '/record',
    name: 'record',
    component: RecordView,
    meta: { title: '分数查询', icon: '💯' }
  }
]

export default routes
