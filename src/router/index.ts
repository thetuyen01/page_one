import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/apps/Home.vue";
import LoginView from "@/views/page/authencations/LoginView.vue";
import RegisterView from "@/views/page/authencations/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
  ],
});

export default router;
