<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Layout from './components/Layout.vue'

const route = useRoute()
const title = computed(() => {return (route.meta.title as string) || 'My Ebook'})
</script>

<template>
  <Layout :title="title">
    <router-view />
  </Layout>
</template>

<style>
.page-switch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}


</style>
