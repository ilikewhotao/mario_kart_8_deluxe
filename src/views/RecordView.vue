<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRecordStore, useUserStore } from '../store'
import { computed, h, ref } from 'vue'
import { DataTableColumns, NButton } from 'naive-ui'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

const loading = computed(() => {
  return users.value.length === 0 || records.value.length === 0
})

function createColumns(): DataTableColumns {
  return [
    // {
    //   title: '🍀玩家',
    //   key: 'showname'
    // },
    {
      title: '比赛时间',
      key: 'datetime'
    },
    {
      title: '参与人数',
      key: 'count'
    },
    {
      title: '查看更多',
      key: 'more',
      render() {
        return h(
          NButton,
          {
            type: 'primary',
            size: 'small',
            text: true
          },
          { default: () => '详情...' }
        )
      }
    }
  ]
}

const columns = createColumns()
const filterRecords = computed(() => {
  return records.value.map(item => {
    const luckySW = item.data.find(i => i.bonus === 6)?.sw
    return {
      luckySW,
      showname: users.value.find(item => item.sw === luckySW)?.showname,
      count: item.data.length,
      ...item
    }
  })
})

const showModal = ref(false)
</script>

<template>
  敬请期待
  <n-spin :show="loading" v-if="false">
    <n-space vertical>
      <n-space align="center" class="user_length">
        <n-h4>合计对局</n-h4>
        <n-h1>{{ records.length || '--' }}</n-h1>
      </n-space>
      <n-data-table
        :columns="columns"
        :data="filterRecords"
        :bordered="false"
      />
    </n-space>
  </n-spin>

  <n-modal
    style="width: 80%; max-width: 750px"
    v-model:show="showModal"
    preset="card"
    title="对战详情"
    :bordered="false"
  >
    <n-list bordered>
      <n-list-item v-for="sw in 12">
        <n-text :type="sw === 6 ? 'success' : 'default'">
          {{ sw }}
        </n-text>
      </n-list-item>
    </n-list>
  </n-modal>
</template>

<style></style>
