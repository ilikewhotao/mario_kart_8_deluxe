<script setup lang="ts">
import { computed, h, ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { useRouterStore } from './store'
import { storeToRefs } from 'pinia'
import routes from './router/routes'

// store
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
  return item?.meta?.icon + ' ' + item?.meta?.title
})
</script>

<template>
  <n-layout class="wrapper">
    <n-layout-header class="wrapper_header" bordered>
      <n-text class="header_menuLogo"> 🏁 小白杯 - {{ pageTitle }} </n-text>
      <n-button class="header_menuButton" secondary @click="openMenu">
        🔍
      </n-button>
    </n-layout-header>
    <n-layout position="absolute" class="wrapper_main" has-sider>
      <n-layout-sider class="wrapper_sider" :native-scrollbar="false" bordered>
        <n-menu :options="menuOptions" v-model:value="routerName" />
        <n-drawer
          v-model:show="menuActive"
          width="80%"
          placement="left"
          content-class="sider_menuDrawer"
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
  padding: 0 24px;
}
.wrapper_main {
  top: 64px !important;
  bottom: 64px !important;
}

.wrapper_sider {
  display: none;
}

.sider_menuDrawer {
  --n-body-padding: 0;
}

.wrapper_footer {
  height: 64px;
  padding: 0 24px;
  line-height: 64px;
}

@media screen and (min-width: 768px) {
  .wrapper_header {
    padding: 0 24px;
  }
  .wrapper_header .header_menuLogo {
    font-size: 16px;
  }
  .wrapper_header .header_menuButton {
    display: none;
  }
  .wrapper_sider {
    display: block;
  }
}
</style>
