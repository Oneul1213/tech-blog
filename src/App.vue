<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <com-header class="com_header"></com-header>
  <div class="body">
    <com-menu-list class="menu_list"></com-menu-list>
    <RouterView class="router_view"/>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  height: 100%;
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
  position: relative;
}
</style>
