<template>
    <main>
        <div class="flex-row">
            <div class="right">
                <img src="../../assets/TracksIUT/TrackIUT_Logo.png" alt="logoTracksIUT">
            </div>
            <p>Ce projet s’est déroulé lors de ma deuxième année de BUT Informatique sur l'année scolaire 2024-2025. Ce
                projet a été réalisé en collaboration avec un groupe de 4 développeurs. Le but de ce projet était de
                réaliser un site web ainsi qu'une application mobile afin de préparer et de participer à un jeu de piste
                avec des énigmes.</p>
        </div>
        <div class="technos">
            <p><strong>Technos & outils : </strong>Flutter - Dart - Firebase - gitLab - Trello - Canvas</p>
            <p><strong>Keywords : </strong>Team work - Mobile App - Web site</p>
        </div>
        <div>
            <h2>Présentation du projet </h2>
            <p>Le projet TracksIUT est un site web qui permet à un organisateur de créer et de gérer la mise en place
                d'un jeu de piste via un site web. Ce jeu de piste est composé de points de passages représentés
                physiquement par des QR codes installés sur le lieu du jeu. Les participants peuvent ainsi suivre les
                différentes étapes du jeu et résoudre les énigmes en scannant les différents QR codes avec l'application
                mobile. Pour ce projet, une base de données a dû être mise en place. Nous avons choisi Firebase pour sa
                facilité d'utilisation et les fonctionnalités telles que l'authentification poussée. Nous avons choisi
                Flutter pour son aspect cross-plateforme.</p>
        </div>
        <div>
            <h2>Organisation du projet</h2>
            <p>Le projet a été organisé en plusieurs étapes : </p>
            <ul>
                <li>Analyse des besoins et rédaction d'un cahier des charges.</li>
                <li>Conception de l'architecture du projet et de la base de données.</li>
                <li>Développement du site web et de l'application mobile.</li>
            </ul>
        </div>
        <div class="slideshow">
            <img class="slide" src="../../assets/TracksIUT/TrackIUT_Poster.png" alt="TracksIUT Poster">
            <img class="slide" src="../../assets/TracksIUT/diagrammeDeClasseBD.png" alt="TracksIUT database diagram">
            <img class="slide" src="../../assets/TracksIUT/diagrammeSequenceDeroulePartie.png"
                alt="TracksIUT sequence diagram">
        </div>

        <div>
            <h2>Web site</h2>
            <p>Le site web a été conçu pour permettre aux organisateurs de créer et de gérer facilement les jeux de
                piste. Il offre une interface pour la gestion des énigmes, des points de passage et des participants.
                Réalisé en Flutter</p>
            <div class="slideshow">
                <img class="slide" src="../../assets/TracksIUT/WebsiteLogin.PNG" alt="TracksIUT Web Site Login Page">
                <img class="slide" src="../../assets/TracksIUT/WebSiteHomeView.PNG" alt="TracksIUT Web Site Main Page">
                <img class="slide" src="../../assets/TracksIUT/EditPartieCreateQRCodes.PNG"
                    alt="TracksIUT Web Site create QR code">
                <img class="slide" src="../../assets/TracksIUT/WebSiteStopPartie.PNG"
                    alt="TracksIUT Web Site Stop Partie">
            </div>
        </div>
        <div>
            <h2>Mobile App</h2>
            <p>Une application mobile a été développée pour permettre aux participants de scanner les QR codes et de
                résoudre les énigmes. Le défi lors de la réalisation de cette application a été d'intégrer le système de
                lecture de QR Codes.</p>
            <div class="slideshow">
                <img class="slide" src="../../assets/TracksIUT/MobileAppAccueil.PNG" alt="TracksIUT Mobile App Accueil">
                <img class="slide" src="../../assets/TracksIUT/MobileAppDebutPartie.PNG"
                    alt="TracksIUT Mobile App Debut Partie">
                <img class="slide" src="../../assets/TracksIUT/MobileAppClassement.PNG"
                    alt="TracksIUT Mobile App Classement">
                <img class="slide" src="../../assets/TracksIUT/MobileAppSearch.PNG" alt="TracksIUT Mobile App Search">
                <img class="slide" src="../../assets/TracksIUT/MobileAppScanQRCode.PNG"
                    alt="TracksIUT Mobile App Scan QR Code">
            </div>
        </div>
        <div>
            <h2>Mon rôle dans le projet</h2>
            <p>Dans ce projet j’ai eu plusieurs rôles : </p>
            <ul>
                <li>Participer à la rédaction du cahier des charges et à l'analyse des besoins.</li>
                <li>Concevoir l'architecture du projet et la base de données.</li>
                <li>Développer la logique et le backend de l'application et du site web.</li>
                <li>Développer le système de scan des QR codes pour l'application mobile.</li>
                <li>Réaliser une présentation du projet pour les autres étudiants et les enseignants.</li>
            </ul>
        </div>
        <div>
            <h2>Retex</h2>
            <h3>Un an plus tard, qu'est-ce que j'ai appris de ce projet ? </h3>
            <h3>Et quoi ferais-je différemment si j'avais l'occasion de travailler dessus à nouveau ?</h3>
            <p>Pour commencer, ce projet a été ma première longue expérience sur un projet de groupe. Ceci m'a apporté
                de l'expérience notamment dans l'utilisation des outils de gestion de projet mais aussi dans la
                communication et l'organisation des différentes tâches au sein du groupe.</p>
            <p>Ce que je ferais différemment, avec l'expérience que j'ai acquise en cette troisième année de formation
                concerne l'architecture du projet même. En effet, le code du site web et celui de l'application mobile
                étaient réunis dans un seul projet ce qui rétrospectivement n'est pas une bonne pratique. Séparer ces
                deux projets aurait pu nous permettre de faire une architecture propre telle que MVVM pour le mobile et
                MVC pour le site web. De plus, cela aurait pu nous permettre de mieux gérer les dépendances et d'avoir
                une meilleure organisation du code.</p>
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