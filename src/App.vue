<template>
  <MainLayout />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { useAuthStore } from "@/stores/authencation/auth";

const authStore = useAuthStore();

onMounted(() => authStore.checkRefreshToken());
</script>

<style scoped></style>
