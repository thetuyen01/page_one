<template>
  <div>
    <!-- Overlay for mobile -->
    <div
      v-if="isMobile && isOpen"
      @click="toggleSidenav"
      class="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
    ></div>

    <!-- Sidenav -->
    <div
      :class="[
        'fixed inset-y-0 z-50 w-64 bg-white shadow-lg lg:shadow-none lg:translate-x-0',
        isMobile
          ? isOpen
            ? 'translate-x-0'
            : '-translate-x-full'
          : 'lg:block',
      ]"
      class="transition-transform duration-300 ease-in-out"
    >
      <nav class="flex flex-col h-full">
        <div class="px-4 py-4 bg-gray-800 text-white">
          <span class="text-xl font-bold">My App</span>
          <button @click="toggleSidenav" class="lg:hidden float-right">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul class="flex flex-col flex-1">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="px-4 py-2 hover:bg-gray-200"
          >
            <a href="#" class="block text-gray-800">{{ item }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    toggleSidenav: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      menuItems: ["Home", "About", "Services", "Contact"],
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 1024;
    },
  },
};
</script>

<style scoped>
/* Custom scrollbar for sidenav */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #a0aec0;
  border-radius: 10px;
}
</style>
