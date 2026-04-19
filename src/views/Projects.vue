<template>
  <main>
    <h2>Welcome to my Ebook</h2>
    <p>Bonjour, je suis Elyne BLANCHARD, une développeuse mobile en formation. Sur ce site web, vous pourrez
      en apprendre plus sur moi et avoir un aperçu de certains de mes projets.</p>
    <h2>Mes Projets</h2>
    <p>Vous trouverez ici mes derniers projets les plus marquants.</p>

    <div class="chapter-vignettes">
      <div v-for="project in projects" :key="project.id" class="vignette"
        :style="{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${project.backgroundImage}) no-repeat center center / cover` }">
        <router-link :to="project.redirectPage" class="tab" active-class="active" exact>
          <h3>{{ project.title }}</h3>
        </router-link>

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import edukid from '../assets/EDUKID/edukid.png';
import mhwlore from '../assets/MHWLore/MHWLore_Bookmark.png';
import TracksIUT from '../assets/TracksIUT/TrackIUT_Logo.png';


interface Chapter {
  id: number
  title: string
  redirectPage: string
  backgroundImage?: string
}

const projects = ref<Chapter[]>([
  { id: 1, title: 'TracksIUT', redirectPage: '/tracksiut', backgroundImage: TracksIUT },
  { id: 2, title: 'EDUKID', redirectPage: '/edukid', backgroundImage: edukid },
  { id: 3, title: 'MHWLore', redirectPage: '/mhwlore', backgroundImage: mhwlore }
]);

</script>

<style scoped>
main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #f5f3f9;
  color: #1D034D
}

h2 {
  border-bottom: 2px solid #1D034D;
  padding-bottom: 0.5rem;
  color: #1D034D;
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

main {
  text-align: left;
}
</style>