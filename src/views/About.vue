<template>
  <main>
    <div class="intro">
      <img src="../assets/photoLinkedin.jpg" alt="photoLinkedin" class="rounded">
      <div>
        <p>Welcome! I am the author of this ebook. This section is dedicated to my personal profile, experience, and
          writing
          mission.</p>
      </div>
    </div>
    <div>
      <h2>Diplomas & Formations</h2>
      <ul>
        <li>
          <p><strong>2023-2026 : BUT Informatique </strong>3 year undergraduate studies in computer science.
            Université Claude Bernard Lyon 1 - Bourg-en-Bresse</p>
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
      <h2>Professional experiences</h2>
      <p><strong>2025-2026 GREENMOT work-study</strong> into computer science </p>
      <p><strong>2025 Univers Software internship</strong> into computer science </p>
      <p>And somme other summer jobs</p>
    </div>
    <div>
      <h2>Hobbies and sport</h2>
      <p>Practicing kung-fu and Sanda (Chinese box) for about 10 years now, I add the opportunity to participate to various competitions, as a competitor and as a coach. I especially participate to the 20th Kempo World Championship in 2025 in Caldas da Reina Portugal. I won in two categories (Submission, and knockdown) and finished 2nd for the other two. I’m training over 10 hours per week for these competitions but also because it’s my way off decompress after work or studies. I also help giving the class for the youngers. </p>
      <p>Among kung-fu I also ride motorcycle on road and on track from time to time.</p>
      <p>I also enjoy some reading.</p>
    
    </div>
    <div>
      <h2>Contact Me</h2>
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

.intro{
  display: flex;
  flex-direction: row;
}

a{
  color: #1D034D;
}
</style>