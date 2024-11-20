import { createMemoryHistory, createRouter } from 'vue-router'
import routes from './routes'
import { useRecordStore, useRouterStore, useUserStore } from '../store'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import { getJson } from '../axios'
import { User } from '..'

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

let getState = false

router.beforeEach(to => {
  const routerStore = useRouterStore()
  routerStore.setRouterName(to.name as string)

  const userStore = useUserStore()
  const { users } = storeToRefs(userStore)
  const recordStore = useRecordStore()
  const { records } = storeToRefs(recordStore)
  if (!getState && (users.value.length === 0 || records.value.length === 0)) {
    getState = true
    axios
      .all([
        getJson(
          'https://ilikewhotao.github.io/data/mario_kart_8_deluxe/first/user.json?' +
            new Date().getTime()
        ),
        getJson(
          'https://ilikewhotao.github.io/data/mario_kart_8_deluxe/first/record.json?' +
            new Date().getTime()
        )
      ])
      .then(
        axios.spread((userJson, recordJson) => {
          setTimeout(() => {
            const userEmojis = ['👨‍🌾', '👩‍🌾', '👨‍🔧', '👩‍🔧', '👨‍💼', '👩‍💼', '👨‍🎓', '👩‍🎓']

            userStore.setUsers(
              userJson.map((item: User) => {
                const userEmoji =
                  userEmojis[Math.floor(Math.random() * userEmojis.length)]
                return {
                  ...item,
                  showname:
                    item.username +
                    (item.nickname ? userEmoji + item.nickname : '')
                }
              })
            )
            recordStore.setRecords(recordJson)
          }, 2000)
        })
      )
  }
})

export default router
