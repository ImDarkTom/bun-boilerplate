<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
    <h1>{{ msg }}</h1>
</template>

<style scoped>
h1 {
    will-change: filter;
    transition: filter 300ms;
    user-select: none;
}

h1:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
