<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '../store'
import { computed } from 'vue'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const loading = computed(() => {
  return users.value.length === 0
})
</script>

<template>
  <n-spin :show="loading">
    <n-space vertical>
      <n-space align="center" class="user_length">
        <n-h4> 活动人数 </n-h4>
        <n-h1>
          {{ users.length || '--' }}
        </n-h1>
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
            <td>
              {{ item.showname }}
            </td>
            <td>
              <n-ellipsis class="user_sw">
                {{ item.sw }}
              </n-ellipsis>
            </td>
          </tr>
        </tbody>
      </n-table>
    </n-space>
  </n-spin>
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
