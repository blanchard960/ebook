<script setup lang="ts">
import { ref } from 'vue'

const chapters = ref([
  { id: 1, title: 'Introduction', content: '<p>Welcome to my ebook. This is the introduction chapter.</p><p>You can easily modify this content by editing the chapters array in App.vue.</p>' },
  { id: 2, title: 'Chapter 1: Getting Started', content: '<p>This is chapter 1 content. Add your content here.</p>' },
  { id: 3, title: 'Chapter 2: Advanced Topics', content: '<p>This is chapter 2 content. Add your content here.</p>' },
])

const currentChapter = ref(chapters.value[0])
</script>

<template>
  <div class="ebook">
    <header>
      <h1>My Ebook</h1>
    </header>
    <div class="content">
      <nav>
        <h3>Table of Contents</h3>
        <ul>
          <li v-for="chapter in chapters" :key="chapter.id" @click="currentChapter = chapter" :class="{ active: currentChapter.id === chapter.id }">
            {{ chapter.title }}
          </li>
        </ul>
      </nav>
      <main>
        <h2>{{ currentChapter.title }}</h2>
        <div v-html="currentChapter.content"></div>
      </main>
    </div>
  </div>
</template>

<style>
.ebook {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
}

header {
  background: #4a90e2;
  color: white;
  padding: 1rem;
  text-align: center;
}

.content {
  display: flex;
  flex: 1;
}

nav {
  width: 250px;
  background: #f4f4f4;
  padding: 1rem;
  border-right: 1px solid #ddd;
}

nav h3 {
  margin-top: 0;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  cursor: pointer;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  transition: background 0.2s;
}

nav li:hover {
  background: #e0e0e0;
}

nav li.active {
  background: #4a90e2;
  color: white;
}

main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

main h2 {
  border-bottom: 2px solid #4a90e2;
  padding-bottom: 0.5rem;
}
</style>
