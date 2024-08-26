<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- SideNav (cố định bên trái) -->
    <SideNav :isOpen="sidenavOpen" :toggleSidenav="toggleSidenav" />

    <!-- Main content -->
    <div class="flex-1 flex flex-col md:ml-64">
      <!-- Mobile menu toggle button -->
      <div
        class="lg:hidden flex justify-between text-white bg-slate-500 fixed top-0 left-0 w-full px-4 py-2 z-10"
      >
        <button @click="toggleSidenav">History</button>
        <h1 class="flex-grow text-center">Chat App</h1>
        <button>New</button>
      </div>

      <!-- Main content area -->
      <div class="flex-1 mt-16 md:mt-0 overflow-y-auto">
        <ChatList :data="dataChatlist" />
      </div>

      <!-- Input at the bottom -->
      <div class="bg-slate-50 p-5">
        <UploadFile @sendData="sendData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UploadFile from "@/views/components/UploadFile.vue";
import SideNav from "@/views/components/SideNav.vue";
import ChatList from "@/views/components/ChatList.vue";

// Define reactive properties
const sidenavOpen = ref(false);
const dataChatlist = ref([]);

// Toggle the sidenavOpen state
const toggleSidenav = () => {
  sidenavOpen.value = !sidenavOpen.value;
};

const sendData = (data) => {
  dataChatlist.value = data;
};
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
