<template>
    <div class="com_header">
        <Menubar :model="menuItems">
            <template #start>
                <a class="title" @click="moveMain">Oneul dev</a>
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
import { useRoute, useRouter } from "vue-router";

import headerMenu from "@/menuItems/headerMenu"

const router = useRouter();

const menuItems = ref(headerMenu);

const isDarkMode = ref(false);

function moveMain() {
    router.push({ name: "home" });
}

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