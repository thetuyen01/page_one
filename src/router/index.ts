import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/apps/Home.vue";
import LoginView from "@/views/page/authencations/LoginView.vue";
import RegisterView from "@/views/page/authencations/RegisterView.vue";
import AiVoice from "@/views/apps/AiVoice.vue";
import AiImageToText from "@/views/apps/AiImageToText.vue";
import AiCompareTwoPictures from "@/views/apps/AiCompareTwoPictures.vue";
import AiFindSimilarPictures from "@/views/apps/AiFindSimilarPictures.vue";

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
    {
      path: "/ai-voice",
      name: "ai-voice",
      component: AiVoice,
    },
    {
      path: "/ai-image-to-text",
      name: "ai-image-to-text",
      component: AiImageToText,
    },
    {
      path: "/ai-compare-two-pictures",
      name: "ai-compare-two-pictures",
      component: AiCompareTwoPictures,
    },
    {
      path: "/ai-find-similar-pictures",
      name: "ai-find-similar-pictures",
      component: AiFindSimilarPictures,
    },
  ],
});

export default router;
