<script setup lang="ts">
import { computed, h, ref } from 'vue'
import { useRecordStore, useUserStore } from '../store'
import { storeToRefs } from 'pinia'
import { filterRecord, Record, User } from '..'
import { DataTableColumns, NA, NTag, NText } from 'naive-ui'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

const loading = computed(() => {
  return users.value.length === 0 || records.value.length === 0
})

// 自动填充
const searchUserValue = ref('')
const searchUserSW = ref('')
const options = ref<{ label: string; value: string }[]>([])

function updateEdit(value: string) {
  options.value = users.value
    .filter(
      (item: User) =>
        item.sw.includes(value) ||
        item.username.includes(value) ||
        (item.nickname && item.nickname.includes(value))
    )
    .map((item: User) => {
      const showname =
        item.username + (item.nickname ? '🆔' + item.nickname : '')
      searchUserSW.value = item.sw
      return {
        label: showname,
        value: item.sw
      }
    })
}

// 数据

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

function createColumns({
  openRecordModal
}: {
  openRecordModal: (row: filterRecord) => void
}): DataTableColumns<filterRecord> {
  return [
    {
      title: '排名',
      key: 'rank',
      render(row) {
        return h(
          NA,
          {
            href: 'javascript:;',
            onClick: () => openRecordModal(row)
          },
          {
            default: () => '#' + row.rank
          }
        )
      }
    },
    {
      title: '追加得分',
      key: 'bonus',
      render(row) {
        return h(
          NText,
          {},
          {
            default: () => {
              return row.bonus !== 0
                ? h(
                    NTag,
                    {
                      size: 'small',
                      bordered: false,
                      type: showList(row.bonus).type
                    },
                    {
                      default: () => showList(row.bonus).text
                    }
                  )
                : ''
            }
          }
        )
      }
    },
    { title: '时间', key: 'datetime' }
  ]
}

const columns = createColumns({
  openRecordModal(row: Record) {
    showModal.value = true
    showModalData.value = row.data
  }
})
const filterRecordsData = ref<filterRecord[]>([])
function selectEdit(value: string) {
  const newRecords = records.value
    .filter(item => {
      return item.data.find(i => value.includes(i.sw))
    })
    .map(item => {
      const { sw, rank, score, bonus } = item.data.find(i =>
        value.includes(i.sw)
      )!
      return {
        sw,
        rank,
        score,
        bonus,
        ...item
      }
    })
    .sort((a, b) => {
      return new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
    })
  filterRecordsData.value = newRecords
}
const showScores = computed(() => {
  const length = filterRecordsData.value.length
  const scores =
    length + filterRecordsData.value.reduce((t, i) => t + i.bonus, 0)

  return scores + '分/' + length + '场'
})

const showModal = ref(false)
const showModalData = ref<
  { sw: string; rank: number; score: number; bonus: number }[]
>([])
</script>

<template>
  <n-space vertical>
    <n-p>可以通过输入好友编号、游戏名称、昵称来查询。</n-p>
    <n-auto-complete
      v-model:value="searchUserValue"
      :input-props="{
        autocomplete: 'disabled'
      }"
      :options="options"
      placeholder="例：“小白”"
      clearable
      @update:value="updateEdit"
      @select="selectEdit"
    />
    <n-p> 总分：{{ showScores }} </n-p>
    <n-data-table
      :columns="columns"
      :data="filterRecordsData"
      :loading="loading"
    />
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
      <n-list-item
        v-for="item in showModalData"
        :style="
          item.sw === searchUserSW
            ? 'background-color: rgba(24, 160, 88, 0.16)'
            : ''
        "
      >
        <n-space justify="space-between" align="center">
          <n-space>
            <div style="width: 32px">
              <n-text :depth="item.sw === searchUserSW ? undefined : 3">
                #{{ item.rank }}
              </n-text>
            </div>
            <n-text :depth="item.sw === searchUserSW ? undefined : 3">
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
              <n-text :depth="item.sw === searchUserSW ? undefined : 3">
                {{ item.score }}
              </n-text>
            </div>
          </n-space>
        </n-space>
      </n-list-item>
    </n-list>
  </n-modal>
</template>

<style></style>
