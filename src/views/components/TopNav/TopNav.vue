<template>
  <el-menu mode="horizontal" class="top-nav">
    <el-menu-item index="logo">
      <img
        src="https://www.vidnoz.com/img/_common/logo-new.png"
        alt="Logo"
        class="logo"
      />
    </el-menu-item>

    <el-menu-item index="home">
      <router-link to="/">Home</router-link>
    </el-menu-item>

    <el-menu-item index="about">
      <router-link to="/about">About</router-link>
    </el-menu-item>

    <el-menu-item index="contact">
      <router-link to="/contact">Contact</router-link>
    </el-menu-item>

    <el-sub-menu index="user" class="user-menu">
      <template #title>
        <el-avatar :size="32" :src="userAvatar" />
        <span class="ms-2">{{ userName }}</span>
      </template>
      <el-menu-item index="profile">Profile</el-menu-item>
      <el-menu-item index="settings">Settings</el-menu-item>
      <el-menu-item index="logout" @click="logout">Logout</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="login" v-if="!isLoggedIn">
      <el-button type="primary" @click="login">Login</el-button>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Simulated user state (replace with actual auth logic)
const isLoggedIn = ref(false);
const userName = ref("John Doe");
const userAvatar = ref("https://example.com/avatar.jpg");

const login = () => {
  // Implement login logic here
  isLoggedIn.value = true;
};

const logout = () => {
  // Implement logout logic here
  isLoggedIn.value = false;
  router.push("/");
};
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.user-menu {
  margin-left: auto;
}
</style>
