<template>
  <div class="home">
    <main v-if="!viewingChapter">
      <h2>Welcome to my Ebook</h2>
      <ChapterVignettes :chapters="chapters" @select-chapter="selectChapter" />
    </main>

    <main v-else>
      <button @click="backToChapters" class="back-button">← Back to Chapters</button>
      <h2>{{ currentChapter.title }}</h2>
      <div v-html="currentChapter.content"></div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ChapterItem {
  id: number
  title: string
  content: string
}

const chapters = ref<ChapterItem[]>([
  { id: 1, title: 'Introduction', content: '<p>Welcome to my ebook. This is the introduction chapter.</p><p>You can easily modify this content by editing the chapters array in App.vue.</p>' },
  { id: 2, title: 'Chapter 1: Getting Started', content: '<p>This is chapter 1 content. Add your content here.</p>' },
  { id: 3, title: 'Chapter 2: Advanced Topics', content: '<p>This is chapter 2 content. Add your content here.</p>' },
])

const currentChapter = ref<ChapterItem>(chapters.value[0])
const viewingChapter = ref(false)

const selectChapter = (chapter: ChapterItem) => {
  currentChapter.value = chapter
  viewingChapter.value = true
}

const backToChapters = () => {
  viewingChapter.value = false
}
</script>

<style scoped>
main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #f5f3f9;
}

main h2 {
  border-bottom: 2px solid #1D034D;
  padding-bottom: 0.5rem;
}

.back-button {
  background: #1D034D;
  color: #f5f3f9;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.back-button:hover {
  background: #340689;
}
</style>