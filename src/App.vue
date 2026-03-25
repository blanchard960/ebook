<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Layout from './components/Layout.vue'

const route = useRoute()
const title = computed(() => {return (route.meta.title as string) || 'My Ebook'})
</script>

<template>
  <Layout :title="title">
    <nav class="page-switch">
      <router-link to="/" class="tab" active-class="active" exact>Chapters</router-link>
      <router-link to="/aboutMe" class="tab" active-class="active">About Me</router-link>
      <router-link to="/projects" class="tab" active-class="active">My Projects</router-link>
    </nav>

    <router-view />
  </Layout>
</template>

<style>
.page-switch {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tab {
  border: 1px solid #1D034D;
  background: white;
  color: #1D034D;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
}

.tab.active,
.tab:hover {
  background: #1D034D;
  color: #f5f3f9;
}
</style>
