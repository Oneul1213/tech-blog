<template>
    <div class="com_article">
        <div class="article_wrap">
            <div class="title_wrap">
                <span class="title">{{ title }}</span>
            </div>
            <Toc />
            <Divider />
            <div class="content">
                <Markdown :source="mdSource" />
            </div>
        </div>
        
        <NavIndex />
    </div>
</template>

<script setup>
// markdown-it
import "highlight.js/styles/monokai.css";

import Markdown from "vue3-markdown-it";

import Divider from "primevue/divider";

import articleTemplate from "@/articles/articleTemplate";
import Toc from "@/components/article/Toc.vue";
import NavIndex from "@/components/article/navIndex.vue";

import { ref } from 'vue'

const title = ref(articleTemplate.title);
const mdSource = ref(articleTemplate.mdSource);
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
        .content {
            padding: 0 2.0rem;
        }
    }
}
</style>