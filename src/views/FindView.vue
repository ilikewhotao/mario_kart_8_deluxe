<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRecordStore, useUserStore } from '../store'
import { storeToRefs } from 'pinia'
import { filterRecord, User } from '..'

// store
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

const searchUserValue = ref('')
const options = ref<{ label: string; value: string }[]>([])

function updateUser(value: string) {
  options.value = users.value
    .filter(
      (item: User) =>
        item.sw.includes(value) ||
        item.username.includes(value) ||
        (item.nickname && item.nickname.includes(value))
    )
    .map((item: User) => {
      const userEmojis = ['👨‍🌾', '👩‍🌾', '👨‍🔧', '👩‍🔧', '👨‍💼', '👩‍💼', '👨‍🎓', '👩‍🎓']
      const userEmoji =
        userEmojis[Math.floor(Math.random() * userEmojis.length)]
      const showValue =
        '#' +
        item.sw +
        '@' +
        item.username +
        (item.nickname ? userEmoji + item.nickname : '')
      return {
        label: showValue,
        value: showValue
      }
    })
}

const filterRecords = ref<filterRecord[]>([])
function selectUser(value: string) {
  const newRecords = records.value
    .filter(item => {
      return item.data.find(i => value.includes(i.sw))
    })
    .map(item => {
      const { sw, bonus } = item.data.find(i => value.includes(i.sw))!
      const index = item.data.findIndex(i => i.sw === sw)
      return {
        datetime: item.datetime,
        data: item.data,
        sw,
        rank: index + 1,
        bonus
      }
    })
    .sort((a, b) => {
      return new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
    })
  filterRecords.value = newRecords
}

const loading = computed(() => {
  return users.value.length === 0 || records.value.length === 0
})

const showList = (bonus: number) => {
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
      return { type: 'default', text: '🥇+1' }
      break

    default:
      return { type: undefined, text: undefined }
      break
  }
}
</script>

<template>
  敬请期待
  <n-spin :show="loading" v-if="false">
    <n-space vertical>
      <n-p>可以通过输入SW码、游戏名称、昵称来查询。</n-p>
      <n-auto-complete
        v-model:value="searchUserValue"
        :input-props="{
          autocomplete: 'disabled'
        }"
        :options="options"
        placeholder="例：“小白”"
        clearable
        @update:value="updateUser"
        @select="selectUser"
      />

      <n-table :bordered="false">
        <thead>
          <tr>
            <th>排名</th>
            <th>追加得分</th>
            <th>比赛时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filterRecords">
            <td>
              {{ item.rank }}
            </td>
            <td>
              <n-tag :bordered="false" :type="showList(item.bonus).type">
                {{ showList(item.bonus).text }}
              </n-tag>
            </td>
            <td>2024-05-25 21:09</td>
          </tr>
        </tbody>
      </n-table>
    </n-space>
  </n-spin>
</template>
