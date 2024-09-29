<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600"
  >
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white mb-4">404</h1>
      <p class="text-2xl text-white mb-8">Oops! Page not found</p>
      <p class="text-lg text-white mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <router-link
        to="/"
        class="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-100 transition duration-300"
      >
        Go back to homepage
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for this component
</script>
