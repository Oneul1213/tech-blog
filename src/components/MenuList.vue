<template>
    <div class="com_menu_list">
        <div class="about_me">
            <Card>
                <template #header>
                    <div class="thumbnail">
                        <!-- <Avatar image="" size="xlarge"></Avatar> -->
                        <Avatar class="thumbnail_image" icon="pi pi-user" size="xlarge"></Avatar>
                    </div>
                </template>
                <template #title>
                    <P>Oneul</P>
                </template>
                <template #subtitle>
                    <p>oneul tech blog</p>
                </template>
                <template #content>
                    <div>content</div>
                </template>
            </Card>

        </div>
        <div class="menu">
            <Menu :model="menuItems">

            </Menu>
        </div>
    </div>
</template>

<script setup>
import Menu from "primevue/menu";
import Card from "primevue/card";
import Avatar from "primevue/avatar";

import { ref } from 'vue';

const menuItems = ref([
    {
        label: "메뉴1",
        items: [
            {
                label: "하위 메뉴 1",
            },
            {
                label: "하위 메뉴 2",
            },
        ],
    },
    {
        label: "메뉴 2",
        items: [
            {
                label: "하위 메뉴 1",
            },
            {
                label: "하위 메뉴 2",
            },
        ],
    }
])
</script>

<style lang="scss" scoped>
.com_menu_list {
    .about_me {
        .thumbnail {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2.0rem;

            .thumbnail_image {
                width: 8rem;
                height: 8rem;
                // font-size: 8rem;
            }
        }
    }

    .menu, :deep(.p-menu) {
        width: 100%;
        // height: 100%;
    }
}
</style>