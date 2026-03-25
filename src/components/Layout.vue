<template>
  <div class="ebook">
    <Header :title="title" />
    <div class="content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'

interface Props {
  title?: string
}

const props = defineProps<Props>()
const { title } = props
</script>

<style>
.ebook {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
  color: #f5f3f9;
}

.content {
  display: flex;
  flex: 1;
}
</style>