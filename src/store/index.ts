import { ref } from 'vue'
import { defineStore } from 'pinia'

// 路由
export const useRouterStore = defineStore('router', () => {
  const routerName = ref('')

  function setRouterName(name: string) {
    routerName.value = name
  }

  return { routerName, setRouterName }
})

// user
type User = {
  sw: string
  username: string
  nickname: string
}

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])

  function setUsers(data: User[]) {
    users.value = data
  }

  return { users, setUsers }
})
