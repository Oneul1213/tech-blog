<template>
    <div class="com_header">
        <Menubar :model="menuItems">
            <template #start>
                <a class="title">Oneul dev</a>
            </template>
            <template #end>
                <div class="darkmode">
                    <label for="darkmode" class="darkmode_icon pi" :class="{ 'pi-sun': !isDarkMode, 'pi-moon': isDarkMode }"></label>
                    <InputSwitch id="darkmode" v-model="isDarkMode" />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import Menubar from "primevue/menubar";
import InputSwitch from "primevue/inputswitch";

import { ref } from "vue";

const menuItems = ref([ 
    {
        label: "메뉴 1",
    },
    {
        label: "메뉴 2",
    }
]);

const isDarkMode = ref(false);

</script>

<style lang="scss" scoped>
.com_header {
    .title {
        font-weight: bold;
        padding: 0.75rem 1.25rem;
        cursor: pointer;
    }

    .darkmode {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        padding-right: 1.25rem;
    }
}
</style>