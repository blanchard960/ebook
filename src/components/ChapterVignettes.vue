<template>
  <div class="chapter-vignettes">
    <div
      v-for="chapter in chapters"
      :key="chapter.id"
      class="vignette"
      :style="{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://picsum.photos/300/200?random=${chapter.id}) no-repeat center center / cover` }"
      @click="$emit('selectChapter', chapter)"
    >
      <h3>{{ chapter.title }}</h3>
      <p>{{ getInsight(chapter.content) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Chapter {
  id: number
  title: string
  content: string
}

interface Props {
  chapters: Chapter[]
}

defineProps<Props>()

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