import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Record, User } from '..'

// 路由
export const useRouterStore = defineStore('router', () => {
  const routerName = ref('')

  function setRouterName(name: string) {
    routerName.value = name
  }

  return { routerName, setRouterName }
})

// 用户
export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])

  function setUsers(data: User[]) {
    users.value = data
  }

  function swToUsername(sw: string) {
    return users.value.find(item => item.sw === sw)?.username
  }
  function swToNickname(sw: string) {
    return users.value.find(item => item.sw === sw)?.nickname
  }

  return { users, setUsers, swToUsername, swToNickname }
})

// 记录
export const useRecordStore = defineStore('record', () => {
  const records = ref<Record[]>([])
  function setRecords(data: Record[]) {
    records.value = data
  }
  return { records, setRecords }
})
