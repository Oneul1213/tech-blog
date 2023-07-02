<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

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

<style scoped>
.body {
  position: relative;
  height: 100%;
}

.body_content {
  display: flex;
  height: 100%;
  padding-bottom: 100px; /** footer 높이 */
}

.com_header {
  position: sticky;
  top: 0px;
  z-index: 999;
}

.menu_list {
  height: 100%;
  flex: 1;
}

.router_view {
  flex: 3;
  height: 100%;
}

.com_footer {
  width: 100%;
  background-color: azure;
  position: absolute;
  bottom: 0px;
}
</style>
