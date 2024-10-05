<template>
  <div class="layout-container">
    <header class="navbar">
      <TopNav />
    </header>

    <main class="main-content">
      <RouterView class="h-full" />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TopNav from "@/views/components/TopNav/TopNav.vue";
import Footer from "@/views/components/Footer/Footer.vue";
</script>

<style>
/* Ensure the app takes the full height of the viewport */
html,
body,
#app {
  height: 100%;
  margin: 0;
}
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}
</style>
