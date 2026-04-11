<template>
  <footer>
    <p class="left">&copy; 2026 My Ebook. All rights reserved.</p>
    <div class="right">
      <a href="https://www.linkedin.com/in/elyne-blanchard-313319333" target="_blank">
      <img src="../assets/linkedin-icon.png" alt="LinkedIn" class="rounded">
    </a>
    </div>
  </footer>
</template>

<style scoped>

footer {
  background: #f4f4f4;
  text-align: center;
  padding : 1em;
  border-top: 1px solid #340689;
  color : #1D034D;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: small;
  }


.rounded {
  border-radius: 20%;
}

img {
  height:2cap;
}

.left {
  flex : 1
}

</style>