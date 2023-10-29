<template>
    <div class="com_nav_index">
        <Divider class="right_index_divider" layout="vertical" />
        <div class="right_index_wrap">
            <h3>[title] 제목</h3>
            <ul>
                <li>목록1</li>
                <li>목록2</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
// TODO : 우측 목차 구현
import { ref } from "vue";

import Divider from "primevue/divider";

const items = ref([
    
])
</script>

<style lang="scss" scoped>
.com_nav_index {
    display: flex;
    flex: 1;
    .right_index_divider {
        margin: 0 1.25rem;
        padding: 0;
    }
    .right_index_wrap {
        padding: 0;
        // :deep(.p-tabmenu) {
        //     ul {
        //         flex-direction: column;
        //     }
        // }
    }
}
</style>