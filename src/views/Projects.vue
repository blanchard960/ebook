<template>
  <main>
    <h2>My Projects</h2>
    <p>Welcome! I am the author of this ebook. This section is dedicated to my personal profile, experience, and writing mission.</p>
    <p>Feel free to replace this content with your biography, skills, contact info, and goals.</p>
    <ul>
      <li>Experienced writer and developer</li>
      <li>Passionate about teaching through content</li>
      <li>Creator of this Vue ebook template</li>
    </ul>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';


interface ChapterItem {
  id: number
  title: string
  content: string
  href?: string
}

const projects = ref<ChapterItem[]>([
  { id: 1, title: 'TracksIUT', content: '<p>Welcome to my ebook. This is the introduction chapter.</p><p>You can easily modify this content by editing the chapters array in App.vue.</p>' },
  { id: 2, title: 'EDUKID', content: '<p>This is chapter 1 content. Add your content here.</p>' },
  { id: 3, title: 'MHWLore', content: '<p>Monster Hunter World Lore</p>' },
])


</script>

<style scoped>

main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #f5f3f9;
}

h2 {
  border-bottom: 2px solid #1D034D;
  padding-bottom: 0.5rem;
}
</style>