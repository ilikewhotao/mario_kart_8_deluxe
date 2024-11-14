<script setup lang="ts">
import { computed, h, ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { useRouterStore } from './store'
import { storeToRefs } from 'pinia'
import routes from './router/routes'

// routerStore
const routerStore = useRouterStore()
const { routerName } = storeToRefs(routerStore)

// 菜单
const menuOptions: MenuOption[] = routes
  .filter(item => item.meta)
  .map(item => {
    return {
      label: () =>
        h(
          RouterLink,
          { to: { name: item.name } },
          { default: () => item.meta?.icon + ' ' + item.meta?.title }
        ),
      key: item.name
    }
  })

const menuActive = ref(false)
function openMenu() {
  menuActive.value = true
}
function closeMenu() {
  menuActive.value = false
}

const pageTitle = computed(() => {
  const item = routes.find(item => item.name === routerName.value)
  return item?.meta?.icon + '' + item?.meta?.title
})
</script>

<template>
  <n-layout class="wrapper">
    <n-layout-header class="wrapper_header" bordered>
      <n-p>🦑小白杯 - {{ pageTitle }}</n-p>
      <n-button class="menu_btn" secondary @click="openMenu"> 🔍 </n-button>
      <n-drawer
        v-model:show="menuActive"
        width="80%"
        placement="left"
        :auto-focus="false"
      >
        <n-drawer-content title="🚀 目录">
          <n-menu
            :options="menuOptions"
            v-model:value="routerName"
            @update:value="closeMenu"
          />
        </n-drawer-content>
      </n-drawer>
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <n-layout-sider
        class="wrapper_sider"
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
      >
        <n-menu :options="menuOptions" v-model:value="routerName" />
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <router-view></router-view>
      </n-layout>
    </n-layout>
    <n-layout-footer class="wrapper_footer" position="absolute" bordered>
      最终解释权归小白所有
    </n-layout-footer>
  </n-layout>
</template>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
}
.wrapper_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 1.5rem;
}
.wrapper_header .n-p {
  margin: 0;
  font-size: 16px;
}
.wrapper_sider {
  display: none;
}
.wrapper_footer {
  height: 64px;
  padding: 0 1rem;
  line-height: 64px;
}
@media screen and (min-width: 768px) {
  .wrapper_header {
    padding: 0 2rem;
  }
  .wrapper_header .n-p {
    font-size: 18px;
  }
  .wrapper_sider {
    display: block;
  }
  .menu_btn {
    display: none;
  }
}
</style>
