<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRecordStore, useUserStore } from '../store'
import { computed, h, ref } from 'vue'
import { DataTableColumns, NA } from 'naive-ui'
import { Record } from '..'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

const loading = computed(() => {
  return users.value.length === 0 || records.value.length === 0
})

function createColumns({
  openRecordModal
}: {
  openRecordModal: (row: Record) => void
}): DataTableColumns<Record> {
  return [
    {
      title: '🍀玩家',
      key: 'more',
      render(row) {
        return h(
          NA,
          {
            href: 'javascript:;',
            onClick: () => openRecordModal(row)
          },
          {
            default: () =>
              row.data
                .filter(item => item.bonus === 6)
                .map(item => users.value.find(i => i.sw === item.sw)?.username)
                .join(' & ') || '🈚️'
          }
        )
      }
    },
    { title: '人数', key: 'count' },
    { title: '时间', key: 'datetime' }
  ]
}

const columns = createColumns({
  openRecordModal(row: Record) {
    showModal.value = true
    showModalData.value = row.data
  }
})
const recordsData = computed(() => {
  return records.value
    .map(item => {
      const luckySW = item.data.find(i => i.bonus === 6)?.sw
      return {
        luckySW,
        showname: users.value.find(item => item.sw === luckySW)?.showname,
        count: item.data.length,
        ...item
      }
    })
    .sort((a, b) => {
      return new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
    })
})

const showModal = ref(false)
const showModalData = ref<
  { sw: string; rank: number; score: number; bonus: number }[]
>([])
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
</script>

<template>
  <n-space vertical>
    <n-space align="center">
      <n-h4 class="m-0"> 记录总数 </n-h4>
      <n-h1 class="m-0">
        {{ recordsData.length || '--' }}
      </n-h1>
    </n-space>
    <n-data-table :columns="columns" :data="recordsData" :loading="loading" />
  </n-space>

  <n-modal
    style="width: 90%; max-width: 750px"
    v-model:show="showModal"
    preset="card"
    title="对局详情"
    :bordered="false"
    :auto-focus="false"
  >
    <n-list bordered>
      <n-list-item v-for="item in showModalData">
        <n-space justify="space-between" align="center">
          <n-space>
            <div style="width: 32px">#{{ item.rank }}</div>
            <n-text>
              {{ users.find(i => i.sw === item.sw)?.username }}
            </n-text>
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
            <div style="width: 20px">
              <n-text>
                {{ item.score }}
              </n-text>
            </div>
          </n-space>
        </n-space>
      </n-list-item>
    </n-list>
  </n-modal>
</template>

<style>
.n-list.n-list--bordered .n-list-item,
.n-list.n-list--hoverable .n-list-item {
  padding: 8px 20px;
}

.user_shownameEllipsis {
  max-width: 60px !important;
}

@media screen and (min-width: 768px) {
  .user_shownameEllipsis {
    max-width: 100% !important;
  }
}
</style>
