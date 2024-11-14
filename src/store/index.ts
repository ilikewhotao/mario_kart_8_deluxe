import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRouterStore = defineStore('router', () => {
  const routerName = ref('')

  function setRouterName(name: string) {
    routerName.value = name
  }

  return { routerName, setRouterName }
})
