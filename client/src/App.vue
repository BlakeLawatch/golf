<script setup>
import Navbar from './components/Navbar.vue';
import { AppState } from './AppState.js';

</script>

<template>
  <header>
    <!-- <Navbar /> -->
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





.master-bg {
  background: radial-gradient(circle, #91d1d0 0%, #609ab1 35%, #011223 100%);
}

.master-second-bg {
  background: linear-gradient(180deg, #91d1d0 0%, #011223 100%)
}

// background-color: #006445;

.masters-yellow {
  color: #f4dc00;
}

.masters-green {
  color: #006445;
}

.shadow-main {
  text-shadow: 1px 1px 5px #011223d3;
}

.relative {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
</style>
