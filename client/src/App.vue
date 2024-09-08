<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}

.masters-yellow-bg {
  background-color: #f4dc00;
}

.masters-green-bg {
  background-color: #006445;
}

.masters-yellow {
  color: #f4dc00;
}

.masters-green {
  color: #006445;
}

.shadow-main {
  text-shadow: 1px 1px 5px #f7f7f7;
}
</style>
