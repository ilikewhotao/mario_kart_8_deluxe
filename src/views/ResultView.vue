<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useRecordStore, useUserStore } from '../store'
import { DataTableColumns } from 'naive-ui'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

const loading = computed(() => {
  return users.value.length === 0 || records.value.length === 0
})

function createColumns(): DataTableColumns<{
  username: string
  scores: number
}> {
  return [
    {
      title: '游戏名称',
      key: 'username'
    },
    {
      title: '模拟得分',
      key: 'scores'
    }
  ]
}

const filterResultData = ref([])
const columns = createColumns()


// const randResult = ()=>{
//   records.value.
// }
</script>

<template>
  <n-space vertical :size="12">
    <n-space>
      <n-button type="primary" @click=""> 重新模拟 </n-button>
      <n-button type="info" @click=""> 导出结果 </n-button>
    </n-space>
    <n-p> 以下结果为模拟结果，不代表最终结果： </n-p>
    <n-data-table
      :columns="columns"
      :data="filterResultData"
      :loading="loading"
    ></n-data-table>
    <!-- <n-data-table
      ref="tableRef"
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
      :get-csv-cell="getCsvCell"
      :get-csv-header="getCsvHeader"
    /> -->
  </n-space>
</template>
