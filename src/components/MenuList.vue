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
                    <p>오늘(Oneul)</p>
                </template>
                <template #subtitle>
                    <p>oneul tech blog</p>
                </template>
                <template #content>
                    <div class="links">
                        <a href="https://github.com/Oneul1213"><Avatar icon="pi pi-github" shape="circle" /> Github</a>
                    </div>
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

import leftMenu from "@/menuItems/leftMenu";

import { ref } from "vue";

const menuItems = ref(leftMenu);
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
        .links {
            display: flex;
            flex-direction: column;
            gap: 5px;
            a, a:link, a:visited, a:hover, a:active {
                text-decoration: none;
                color: black;
            }
        }
    }

    .menu, :deep(.p-menu) {
        width: 100%;
        // height: 100%;
    }
}
</style>