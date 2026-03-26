<template>
  <main>
    <h2>My Projects</h2>
    <p>Welcome! I am the author of this ebook. This section is dedicated to my personal profile, experience, and writing mission.</p>
    <p>Feel free to replace this content with your biography, skills, contact info, and goals.</p>
  <div class="chapter-vignettes">
    <div
      v-for="project in projects"
      :key="project.id"
      class="vignette"
      :style="{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://picsum.photos/300/200?random=${project.id}) no-repeat center center / cover` }"
      @click="$emit('selectChapter', project)"
    >
      <h3>{{ project.title }}</h3>
      <p>{{ getInsight(project.content) }}</p>
    </div>
  </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';


interface Chapter{
  id: number
  title: string
  content: string
  href?: string
}

const projects = ref<Chapter[]>([
  { id: 1, title: 'TracksIUT', content: '<p>Welcome to my ebook. This is the introduction chapter.</p><p>You can easily modify this content by editing the chapters array in App.vue.</p>' },
  { id: 2, title: 'EDUKID', content: '<p>This is chapter 1 content. Add your content here.</p>' },
  { id: 3, title: 'MHWLore', content: '<p>Monster Hunter World Lore</p>' },
])

defineEmits<{
  selectChapter: [chapter: Chapter]
}>()

const getInsight = (content: string): string => {
  // Remove HTML tags and get first 100 characters
  const text = content.replace(/<[^>]*>/g, '')
  return text.length > 100 ? text.substring(0, 100) + '...' : text
}

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

.chapter-vignettes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.vignette {
  border: none;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
}

.vignette:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.vignette h3 {
  margin-top: 0;
  color: white;
}

.vignette p {
  margin-bottom: 0;
  color: white;
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>