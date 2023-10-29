<template>
    <div class="com_toc">
        <PanelMenu v-model:expandedKeys="expandKeys" :model="indexList"></PanelMenu>
    </div>
</template>

<script setup>
// TODO : Toc(본문 상단 목차) 구현
import { ref } from 'vue';

import PanelMenu from 'primevue/panelmenu';

import articleTemplate from '@/articles/articleTemplate.js';

// data
const expandKeys = articleTemplate.expandKeys;
const indexList = ref(articleTemplate.indexList);
</script>

<style lang="scss" scoped>
.com_toc {
    padding: 0 2.0rem;
}
</style>