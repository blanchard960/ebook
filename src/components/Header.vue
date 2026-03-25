<template>
  <header>
    <h1>{{ title }}</h1>
    <p>Welcome to my ebook! Explore the chapters and enjoy the insights.</p>
    
  </header>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

const props = defineProps<Props>()
</script>

<style scoped>
header {
  background: #1D034D;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>