<template>
  <main>
    <div class="intro">
      <img src="../assets/photoLinkedin.jpg" alt="photoLinkedin" class="rounded">
      <div>
        <p>Bonjour, je suis l'auteur de cet ebook. Cette section est dédiée à mon profil personnel, mon expérience, et
          mes compétences. Je suis actuellement étudiante en BUT informatique à l'Université Claude Bernard Lyon 1.
          N'hésitez pas à me contacter pour toute
          question ou collaboration potentielle. Je serais ravi de discuter de mes expériences et de mes projets avec
          vous.</p>
      </div>
    </div>
    <div>
      <h2>Diplomes & Formations</h2>
      <ul>
        <li>
          <p><strong>2023-2026 : BUT Informatique </strong>Université Claude Bernard Lyon 1 - Bourg-en-Bresse</p>
        </li>
        <li>
          <p><strong>2026 : TOEIC </strong>945/990 </p>
        </li>
        <li>
          <p><strong>2025 : DAF</strong> Diplôme d'Assistant Fédéral (FFKDA Fédération Française de Karaté)</p>
        </li>
        <li>
          <p><strong>2024 : PSC1</strong> Premier Secours Citoyen</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>Expériences professionnelles</h2>
      <p><strong>2025-2026 GREENMOT work-study</strong></p>
      <p>Pour cette alternance, mes actions s'inscrivaient dans la politique d'amélioration continue de l'entreprise.
        J'interviens dans la réalisation d'un serveur permettant de récupérer des données de les enregistrer en base de
        données et de les mettre à disposition d'une IHM via une API.</p>
      <p><strong>2025 Univers Software internship</strong></p>
      <p>Lors de ce stage, j'ai du réaliser une Proof of Concept sur la réalisation d'un module moodle et l'utilisation
        de Moodle pour mettre en place un système de formation semi en ligne </p>
    </div>
    <div>
      <h2>Sport et hobbies</h2>
      <p>Pratiquant le kung-fu et le Sanda (box chinois) depuis environ 10 ans, j'ai eu l'opportunité de participer à
        diverses compétitions, en tant que concurrent mais aussi en tant que coach. J'ai notemment eu l'honneur de participer au 20ème Championnat du Monde de Kempo
        en 2025 à Caldas da Reina, au Portugal. J'y ai remporté deux titres (Soumission et Knockdown) et terminé 2ème pour les deux autres. Je m'entraîne plus de 10 heures par semaine pour ces compétitions mais aussi parce que c'est
        mon moyen de décompresser après le travail ou les études. Je participe également à l'enseignement aux plus jeunes. Transmettre est aussi une motivation et un honneur.</p>
      <p>En plus du kung-fu, il m'arrive de participer à des session sur piste en moto mais aussi sur route.</p>
      <p>J'aime aussi lire et profiter occasionnellement de mes amis.</p>
    </div>
    <div>
      <h2>Pour me contacter</h2>
      <p>Email: elyne.derocles@laposte.net</p>
      <a href="https://www.linkedin.com/in/elyne-blanchard-313319333" target="_blank"><strong>LinkedIn</strong></a>
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  padding: 2rem;
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
  margin-right: 1cap;
}

.rounded {
  border-radius: 50%;
}

.intro {
  display: flex;
  flex-direction: row;
}

a {
  color: #1D034D;
}
</style>