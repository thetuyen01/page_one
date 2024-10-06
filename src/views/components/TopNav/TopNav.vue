<template>
  <nav
    class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
  >
    <div class="container mx-auto px-4 py-3">
      <div class="flex justify-between items-center">
        <div class="logo">
          <router-link to="/">
            <img
              src="https://www.vidnoz.com/img/_common/logo-new.png"
              alt="Logo"
              class="h-10"
            />
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6">
          <li class="relative group" v-for="item in listMenu" :key="item.to">
            <router-link
              :to="item.to"
              class="hover:text-yellow-300 transition duration-300 font-medium inline-flex items-center"
            >
              {{ item.label }}
              <svg
                v-if="item.children.length > 0"
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </router-link>
            <!-- Thêm lớp group-hover tại cả thẻ cha và con -->
            <ul
              v-if="item.children.length > 0"
              class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
            >
              <li v-for="child in item.children" :key="child.to">
                <router-link
                  :to="child.to"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {{ child.label }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
        <!-- User and Login Section -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- User Avatar (if logged in) -->
          <div v-if="isLoggedIn" class="relative">
            <img
              :src="userAvatar"
              alt="User Avatar"
              class="h-8 w-8 rounded-full cursor-pointer object-cover"
              @click="toggleUserMenu"
            />
            <!-- User Dropdown Menu -->
            <div
              v-if="userMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
            >
              <a
                href="/profile"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                @click="logout"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </div>
          <!-- Login Button (if not logged in) -->
          <div v-else class="flex flex-row gap-2">
            <router-link
              to="/login"
              class="bg-yellow-400 !w-24 text-center text-indigo-600 !py-1 !px-5 !rounded-full text-white font-bold font-medium hover:bg-indigo-600 hover:text-orange-400 transition duration-300"
            >
              Login
            </router-link>
            <router-link
              to="/register"
              class="bg-orange-400 text-indigo-600 !py-1 !px-5 !rounded-full text-white font-bold font-medium hover:bg-indigo-600 hover:text-orange-400 transition duration-300"
            >
              Register
            </router-link>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="focus:outline-none">
            <svg
              v-if="!mobileMenuOpen"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              v-else
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
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <ul
        v-if="mobileMenuOpen"
        class="md:hidden bg-indigo-700 px-4 pt-2 pb-4 space-y-2 absolute w-full z-10"
      >
        <li class="relative group" v-for="item in listMenu" :key="item.to">
          <router-link
            :to="item.to"
            class="hover:text-yellow-300 transition duration-300 font-medium inline-flex items-center px-2 py-2"
          >
            {{ item.label }}
            <svg
              v-if="item.children.length > 0"
              class="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </router-link>
          <!-- Thêm lớp group-hover tại cả thẻ cha và con -->
          <ul
            v-if="item.children.length > 0"
            class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
          >
            <li v-for="child in item.children" :key="child.to">
              <router-link
                :to="child.to"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {{ child.label }}
              </router-link>
            </li>
          </ul>
        </li>
        <li v-if="!isLoggedIn">
          <router-link
            to="/login"
            @click="closeMobileMenu"
            class="block hover:bg-indigo-600 px-2 py-1 rounded transition duration-300 text-white bg-yellow-400 text-center"
          >
            Login
          </router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link
            to="/register"
            @click="closeMobileMenu"
            class="block hover:bg-indigo-600 px-2 py-1 rounded transition duration-300 text-white bg-orange-400 text-center"
          >
            Register
          </router-link>
        </li>
        <li v-else>
          <div v-if="isLoggedIn" class="relative group ml-2">
            <img
              :src="userAvatar"
              alt="User Avatar"
              class="h-8 w-8 rounded-full cursor-pointer object-cover"
            />
            <!-- User Dropdown Menu -->
            <div
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:visible transition-all duration-300"
            >
              <a
                href="/profile"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="/settings"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                @click="logout"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </div>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "../../../stores/authencation/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const mobileMenuOpen = ref(false);
const userMenuOpen = ref(false);
const isLoggedIn = computed(() => authStore.isLoggedIn); // You might want to replace this with actual auth state
const userAvatar = ref(
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQShFgewbl0SP9RwoBDn6SHU2BOL2cWrajZ0NvWdZOUNA5v5yj7"
); // Add user avatar URL here when logged in

const listMenu = [
  {
    to: "/features",
    label: "Features",
    children: [
      { to: "/ai-image-to-text", label: "Ai Image to Text" },
      {
        to: "/ai-compare-two-pictures",
        label: "Ai Compare Two Pictures",
      },
      {
        to: "/ai-find-similar-pictures",
        label: "Ai Find Similar Pictures",
      },
      { to: "/ai-voice", label: "Ai Voice" },
    ],
  },
  {
    to: "/pricing",
    label: "Pricing",
    children: [],
  },
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services/ai-avatar", label: "AI Avatar" },
      { to: "/services/ai-video", label: "AI Video" },
      { to: "/services/ai-voice", label: "AI Voice" },
    ],
  },
  { to: "/contact", label: "Contact", children: [] },
];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value;
};

const logout = async () => {
  // Implement logout logic here
  const res = await authStore.logout();
  if (res.status === 200) {
    authStore.setLoggedIn(false);
    authStore.removeToken();
    router.push({ name: "home" });
    closeMobileMenu();
    console.log("logout success");
  }
};
</script>
