<template>
  <main>
    <div class="intro">
      <img src="../assets/photoLinkedin.jpg" alt="photoLinkedin" class="rounded">
      <div>
        <p>Welcome! I am the author of this ebook. This section is dedicated to my personal profile, experience, and
          writing
          mission.</p>
        <p>Feel free to replace this content with your biography, skills, contact info, and goals.</p>
      </div>
    </div>
    <ul>
      <li>Experienced writer and developer</li>
      <li>Passionate about teaching through content</li>
      <li>Creator of this Vue ebook template</li>
    </ul>
    <div>
      <h2>Diplomas</h2>
      <ul>
        <li>
          <h4>2023-2026 BUT Informatique </h4>
          <p>3 year undergraduate studies in computer science.
            Université Claude Bernard Lyon 1 - Bourg-en-Bresse</p>
        </li>
        <li>
          <h4>2025 DAF : Diplôme d'Assistant Fédéral (FFKDA Fédération Française de Karaté)</h4>
        </li>
      </ul>
    </div>
    <div>
      <h2>Hobbies and sport</h2>
      <p>livres, moto, sport ( liens vers des articles ?)</p>
    </div>
    <div>
      <h2>Contact Me</h2>
      <p>Email: your.email@example.com</p>
      <p>LinkedIn: linkedin.com/in/yourprofile</p>
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
</style>