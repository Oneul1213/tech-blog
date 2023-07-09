<template>
    <div class="main_wrap">
        <div class="introduction_wrap wrap">
            안녕하세요
        </div>
        <Divider />
        <div class="resume_wrap wrap">
            <h1>&#128187; Tech stack</h1>
            <h2>Language</h2>
            <h2>Framework</h2>
            <h2>Tool</h2>
        </div>
    </div>
</template>

<script setup>
import Divider from 'primevue/divider';
</script>

<style lang="scss" scoped>
.main_wrap {
    display: flex;
    flex-direction: column;
    .introduction_wrap {
        padding: 3.0rem;
    }
    .resume_wrap {
        padding:  0 2.0rem;
    }
}
</style>