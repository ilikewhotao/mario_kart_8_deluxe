<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '../store'
import { computed, h } from 'vue'
import { NEllipsis } from 'naive-ui'
import { User } from '..'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const loading = computed(() => {
  return users.value.length === 0
})

function createColumns() {
  return [
    { title: '游戏名称🆔昵称', key: 'showname' },
    {
      title: '好友编号',
      key: 'sw',
      render(row: User) {
        return h(
          NEllipsis,
          { class: 'user_swEllipsis' },
          { default: () => row.sw }
        )
      }
    }
  ]
}

const columns = createColumns()
const usersData = computed(() => {
  return users.value
})
</script>

<template>
  <n-space vertical>
    <n-space align="center">
      <n-h4 class="m-0"> 活动人数 </n-h4>
      <n-h1 class="m-0">
        {{ usersData.length || '--' }}
      </n-h1>
    </n-space>
    <n-data-table :columns="columns" :data="usersData" :loading="loading" />
  </n-space>
</template>

<style>
.user_swEllipsis {
  max-width: 60px !important;
}

@media screen and (min-width: 768px) {
  .user_swEllipsis {
    max-width: 100% !important;
  }
}
</style>
