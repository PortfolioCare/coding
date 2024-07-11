<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const message = ref<string>("Hello from MyComponent using setup and TypeScript!");
</script>

<style>
/* 你的样式 */
</style>
