<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, h, ref } from 'vue'
import { useRecordStore, useUserStore } from '../store'
import { DataTableColumns, NA } from 'naive-ui'
import { filterResultType, Record } from '..'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

const loading = computed(() => {
  return users.value.length === 0 || records.value.length === 0
})

function createColumns({
  openResultModal
}: {
  openResultModal: (row: filterResultType) => void
}): DataTableColumns<filterResultType> {
  return [
    {
      title: '排名',
      key: 'index'
    },
    {
      title: '游戏名称',
      key: 'username'
    },
    {
      title: '模拟得分',
      key: 'scores',
      render(row) {
        return h(
          NA,
          {
            href: 'javascript:;',
            onClick: () => openResultModal(row)
          },
          {
            default: () => row.scores + '分'
          }
        )
      }
    }
  ]
}

const filterResultData = ref<filterResultType[]>([])
const columns = createColumns({
  openResultModal(row: filterResultType) {
    showModal.value = true
    showModalData.value = row.data
  }
})

function randNumber<T>(array: T[], length: number): T[] {
  let result = []
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * array.length)
    result.push(array[rand])
    array.splice(Math.floor(rand), 1)
  }
  return result
}

function randResult() {
  filterResultData.value = users.value
    .map(item => {
      const allRecords = records.value
        .filter(e => e.data.find(i => i.sw === item.sw))
        .map(o => {
          return {
            datetime: o.datetime,
            data: o.data.find(i => i.sw === item.sw)!
          }
        })

      if (allRecords.length < 10) {
        return {
          ...item,
          data: allRecords
            .map(i => {
              return {
                datetime: i.datetime,
                ...i.data
              }
            })
            .sort(
              (a, b) =>
                new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
            ),

          scores:
            allRecords.length +
            allRecords.reduce((total, value) => total + value.data?.bonus!, 0)
        }
      } else {
        const randData = randNumber<{
          datetime: string
          data: { sw: string; rank: number; score: number; bonus: number }
        }>(allRecords, 10)

        return {
          ...item,
          data: randData
            .map(i => {
              return {
                datetime: i.datetime,
                ...i.data
              }
            })
            .sort(
              (a, b) =>
                new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
            ),

          scores:
            randData.reduce((total, value) => total + value.data?.bonus, 0) + 10
        }
      }
    })

    .sort((a, b) => b.scores - a.scores)
    .map((e, i) => {
      return { ...e, index: i + 1 }
    })
}

const showList = (
  bonus: number
): {
  type?: 'error' | 'warning' | 'info' | 'success' | 'default'
  text?: string
} => {
  switch (bonus) {
    case 4:
      return { type: 'error', text: '🥇+4' }
      break

    case 3:
      return { type: 'warning', text: '🥈+3' }
      break

    case 2:
      return { type: 'info', text: '🥉+2' }
      break

    case 6:
      return { type: 'success', text: '🍀+6' }
      break

    case 1:
      return { type: 'default', text: '🍄+1' }
      break

    default:
      return { type: undefined, text: undefined }
      break
  }
}

const showModal = ref(false)
const showModalData = ref<
  { sw: string; rank: number; score: number; bonus: number; datetime: string }[]
>([])

randResult()
</script>

<template>
  <n-space vertical :size="12">
    <n-space>
      <n-button type="primary" @click="randResult"> 重新模拟 </n-button>
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

  <n-modal
    style="width: 90%; max-width: 750px"
    v-model:show="showModal"
    preset="card"
    title="随机抽取"
    :bordered="false"
    :auto-focus="false"
  >
    <n-list bordered>
      <n-list-item v-for="item in showModalData">
        <n-space justify="space-between" align="center">
          <n-space>
            <div style="width: 32px">#{{ item.rank }}</div>
          </n-space>
          <n-space>
            <n-tag
              v-if="item.bonus"
              :bordered="false"
              size="small"
              :type="showList(item.bonus).type"
            >
              {{ showList(item.bonus).text }}
            </n-tag>
            <div style="width: 120px">
              <n-text>
                {{ item.datetime }}
              </n-text>
            </div>
          </n-space>
        </n-space>
      </n-list-item>
    </n-list>
  </n-modal>
</template>
