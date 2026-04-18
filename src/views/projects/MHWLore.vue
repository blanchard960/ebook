<template>
    <main>
        <div class="flex-row">
            <p class="right">MHWLore (Monster Hunter World Lore) est une application mobile destinée aux fans du jeu Monster Hunter
                World ou à ceux qui veulent se renseigner plue en profondeure sur l'histoire du jeu et de ses monstres.
            </p>
        </div>
        <div class="technos">
            <p><strong>Technos & outils : </strong>Kotlin - Flutter - Dart - gitHub - gitHub Projects - Figma - Trello
            </p>
            <p><strong>Keywords : </strong>Team work - Mobile App</p>
        </div>
        <div>
            <h2>Présentation du projet</h2>
            <p>Ce projet à été réalisé dans le cadre de ma dernière année de BUT Informatique sur l'année scolaire
                2025-2026.Ce projet a été réalisé en binome, il a été l'occasion de mettre en oeuvre l'architecture MVVM
                (Model View ViewModel) et de prendre en main kotlin.</p>
        </div>
        <div class="slideshow">
            <img class="slide" src="../../assets/MHWLore/MHWLore_Home.png" alt="MHWLore Home">
            <img class="slide" src="../../assets/MHWLore/MHWLore_Description.png" alt="MHWLore Description">
            <img class="slide" src="../../assets/MHWLore/MHWLore_Bookmark.png" alt="MHWLore Bookmark">
            <img class="slide" src="../../assets/MHWLore/MHWLore_Search.png" alt="MHWLore Search">
            <img class="slide" src="../../assets/MHWLore/MJWLore_Wireframing.PNG" alt="MHWLore Wireframing">
            <img class="slide" src="../../assets/MHWLore/MHWLore_WireframingLinks.PNG" alt="MHWLore WireframingLinks">
        </div>
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
main {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    background-color: #f5f3f9;
    color: #1D034D;
    text-align: left;
}

h2 {
    border-bottom: 2px solid #1D034D;
    padding-bottom: 0.5rem;
    color: #1D034D;
    font-weight: bold;
}

img {
    width: 100%;
    height: auto;
}

.flex-row {
    display: flex;
    flex-direction: row;
}

.slideshow {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.75rem;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    height: 25rem;
}

.slideshow::-webkit-scrollbar {
    height: 10px;
}

.slideshow::-webkit-scrollbar-thumb {
    background: rgba(29, 3, 77, 0.35);
    border-radius: 999px;
}

.slide {
    flex: 0 0 auto;
    width: min(280px, 80vw);
    height: 100px;
    border-radius: 1rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    scroll-snap-align: start;
    overflow: hidden;
}

.slideshow img {
    width: auto;
    height: auto;
    display: block;
    border-radius: 1rem;
    object-fit: cover;
}

.right {
    width: 30%;
    min-width: 200px;
    margin-right: 2cap;
}

.technos {
    padding-bottom: 1rem;
    padding-top: 1rem;
}
</style>