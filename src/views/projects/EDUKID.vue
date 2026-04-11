<template>
    <main>
        <div class="flex-row">
            <div class="right">
                <img src="../../assets/edukid.png" alt="logoEDUKID">
            </div>
            <p>Ce projet s’est déroulé lors de ma dernière année de BUT Informatique. L’objectif était de reprendre un
                projet existant et de le remettre en état de marche et l’améliorer. Ce projet à été fait au sein d’un
                groupe de 4 développeurs. </p>
        </div>
        <p class="technos"><strong>Technos & outils : </strong>Java - Kotlin - gitLab - Trello</p>
        <p class="technos"><strong>Keywords : </strong>Team work - Mobile App</p>
        <div>
            <h2>Présentation du projet </h2>
            <p>EDUKID est une application mobile qui à pour but d’aider les jeunes enfants à apprendre à lire et à compter. Elle se concentre sur les premières phases de l’apprentissages qui sont : </p>
            <ul>
                <li>Reconnaitre les symboles et les associer à leurs noms</li>
                <li>Découvrir les sons composés et les intégrer dans des mots</li>
                <li>Pour les chiffres, apprendre la notion de quantité puis l’associée au symbole et au nom</li>
            </ul>
            <p>Sous couvert de jeux tels que le Memory, des mots à trou et du dessin, les enfants intègrent par la répétition les notions qui leurs servirons plus tard dans l’apprentissage de la lecture et des nombres.</p>
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

.right {
    width: 30%;
    min-width: 200px; /* optional: maintain readability on small screens */
    margin-right: 2cap;
}

.technos{
    padding-bottom: 1rem;
    padding-top: 1rem;
}
</style>