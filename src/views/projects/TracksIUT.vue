<template>
    <main>
        <div class="flex-row">
            <div class="right">
                <img src="../../assets/TracksIUT/TrackIUT_Logo.png" alt="logoTracksIUT">
            </div>
            <p>Ce projet s’est déroulé lors de ma deuxième année de BUT Informatique sur l'année scolaire 2024-2025.
                Ce projet a été réalisé en collaboration avec un groupe de 4 développeurs. Le but de ce projet était de
                réaliser un site web ainsi qu'une application mobile afin de préparer et de participer à un jeu de piste
                avec des énigmes.</p>
        </div>
        <div class="technos">
            <p><strong>Technos & outils : </strong>Flutter - Firebase - gitLab - Trello - Canvas</p>
            <p><strong>Keywords : </strong>Team work - Mobile App - Web site</p>
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