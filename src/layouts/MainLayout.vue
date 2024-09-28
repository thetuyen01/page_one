<template>
  <div class="layout-container">
    <header class="navbar">
      <TopNav />
    </header>

    <main class="main-content">
      <RouterView class="h-full" />
    </main>

    <footer class="footer">
      <Footer />
    </footer>
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
</style>
