<template>
    <div class="com_article">
        <div class="article_wrap">
            <div class="title_wrap">
                <span class="title">[title] 제목</span>
            </div>
            <div class="index">
                <PanelMenu v-model:expandedKeys="expandKeys" :model="indexList"></PanelMenu>
            </div>
            <Divider />
            <div class="content">
                <Markdown :source="mdSource" />
            </div>
        </div>
        <div class="right_wrap">
            <Divider class="right_index_divider" layout="vertical" />
            <div class="right_index_wrap">
                right index
            </div>
        </div>
    </div>
</template>

<script setup>
// markdown-it
import 'highlight.js/styles/monokai.css';

import Divider from 'primevue/divider';
import PanelMenu from 'primevue/panelmenu';
import Markdown from 'vue3-markdown-it';

import { ref } from 'vue'

const mdSource = ref("# Hello, World! \n ```javascript\nconst name\n```");

const expandKeys = { 'title': true };
const indexList = ref([
    {
        key: 'title',
        label: "목차",
        command: () => {
            expandKeys["title"] = !expandKeys["title"];
        },
        items: [
            {
                label: "목록 1",
            },
            {
                label: "목록 2",
            }
        ]
    }
]);
</script>

<style lang="scss" scoped>
.com_article {
    width: 100%;
    display: flex;
    .article_wrap {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .title_wrap {
            padding: 50px;

            .title {
                font-size: 1.8rem;
            }
        }
        .index {
            padding: 0 2.0rem;
        }
        .content {
            padding: 0 2.0rem;
        }
    }
    .right_wrap {
        flex: 1;
        display: flex;
        .right_index_divider {
            margin: 0 1.25rem;
            padding: 0;
        }
        .right_index_wrap {
            padding: 1.25rem 0;
        }
    }
}
</style>