<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { getJson } from '../axios'
import { useUserStore } from '../store'
import { ref } from 'vue'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const loading = ref(false)

const showName = (username: string, nickname: string | undefined) => {
  const userEmojis = ['👨‍🌾', '👩‍🌾', '👨‍🔧', '👩‍🔧', '👨‍💼', '👩‍💼', '👨‍🎓', '👩‍🎓']
  const userEmoji = userEmojis[Math.floor(Math.random() * userEmojis.length)]
  return username + (nickname ? userEmoji + nickname : '')
}

async function getUser() {
  if (users.value.length === 0) {
    loading.value = true
    const data = await getJson(
      'https://ilikewhotao.github.io/data/mario_kart_8_deluxe/first/user.json?' +
        new Date().getTime()
    )
    userStore.setUsers(data)
    loading.value = false
  }
}
getUser()
</script>

<template>
  <n-space vertical>
    <n-space align="center" class="user_length">
      <n-h4>活动人数</n-h4>
      <n-h1>{{ users.length || '--' }}</n-h1>
    </n-space>

    <n-table :bordered="false">
      <thead>
        <tr>
          <th>游戏名称🏁昵称</th>
          <th>游戏编号</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in users">
          <td>{{ showName(item.username, item.nickname) }}</td>
          <td>
            <n-ellipsis class="user_sw">
              {{ item.sw }}
            </n-ellipsis>
          </td>
        </tr>
      </tbody>
    </n-table>
    <n-space justify="center" v-show="loading">
      <n-spin>
        <template #description>
          <n-text type="primary">Loading...</n-text>
        </template>
      </n-spin>
    </n-space>
  </n-space>
</template>

<style>
.user_sw {
  max-width: 60px !important;
}

.user_length .n-h1,
.user_length .n-h4 {
  margin: 0;
}

@media screen and (min-width: 768px) {
  .user_sw {
    max-width: 100% !important;
  }
}
</style>
