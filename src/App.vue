<template>
  <com-header></com-header>
  <div class="body">
    <div class="body_content">
      <com-menu-list class="menu_list"></com-menu-list>
      <RouterView class="router_view"/>
    </div>
    <com-footer></com-footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.body_content {
  display: flex;
}

:deep(.com_header) {
  position: sticky;
  top: 0px;
  z-index: 999;
}

.menu_list {
  height: 100%;
  flex: 1;
}

.router_view {
  flex: 4;
  height: 100%;
}

:deep(.com_footer) {
  width: 100%;
}
</style>
