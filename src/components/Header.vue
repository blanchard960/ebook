<template>
    <header :style="headerStyle">
        <div class="header-content">
            <h1>{{ title }}</h1>
            <p>{{ message}}</p>
        </div>
    <nav class="page-switch">
      <router-link to="/" class="tab" active-class="active" exact>Home</router-link>
      <router-link to="/aboutMe" class="tab" active-class="active">About Me</router-link>
      <router-link to="/projects" class="tab" active-class="active">My Projects</router-link>
    </nav>
    </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => {return (route.meta.title as string) || 'My Ebook' })
const message = computed(() => { return (route.meta.message as string) || '' })
const backgroundImage = computed(() => { return (route.meta.backgroundImage as string) || ''})

interface Props {
    title?: string
    message?: string
}

const props = defineProps<Props>()

const headerStyle = computed(() => {
    const bg = backgroundImage.value
    console.log("[Header] headerStyle backgroundImage : "+bg)
    if (bg) {
        return {
            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bg}) no-repeat center center / cover`,
            backgroundColor: '#1D034D',
        } 
    } else {
      console.log("[Header] headerStyle if(backgroundImage) Else")
        return {
            backgroundColor: '#FF0000',
        }
    }
})
</script>

<style scoped>
header {
    color: #f5f3f9;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.header-content {
    flex: 1;
}

.page-switch {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tab {
  background: #f5f3f9;
  color: #1D034D;
  padding: 0.2rem 0.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: small;
}

.tab.active,
.tab:hover {
  background: #0000FF;
  color: #f5f3f9;
}

</style>