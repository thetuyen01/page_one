<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {{ $t("SignInToYourAccount") }}
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              {{ $t("EmailAddress") }}
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              {{ $t("Password") }}
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div v-if="showPhoneField">
            <label for="phone" class="block text-sm font-medium text-gray-700">
              {{ $t("PhoneNumber") }}
            </label>
            <div class="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                v-model="phone"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ $t("SignIn") }}
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                {{ $t("OrContinueWith") }}
              </span>
            </div>
          </div>

          <div class="mt-6">
            <button
              @click="handleGoogleSignIn"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <img
                class="h-5 w-5 mr-2"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              {{ $t("SignInWithGoogle") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { auth } from "@/firebase.config";
import { ElNotification } from "element-plus";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authencation/auth";
import { FirebaseError } from "firebase/app";

const authStore = useAuthStore();

const email = ref("");
const password = ref("");
const phone = ref("");
const showPhoneField = ref(false);
const router = useRouter();

const handleLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    ElNotification({
      title: "Success",
      message: "Logged in successfully",
      type: "success",
    });
    router.push("/dashboard"); // Redirect to dashboard or home page
  } catch (error) {
    ElNotification({
      title: "Error",
      message: "Login failed. Please check your credentials.",
      type: "error",
    });
  }
};

const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const response = await signInWithPopup(auth, provider);
    if (response.user) {
      if (!response.user.emailVerified) {
        await sendEmailVerification(response.user, {
          url: `${import.meta.env.VITE_BASE_URL_HOME}`, // Địa chỉ URL tùy chỉnh
        });
        ElNotification({
          title: "Verification Email Sent",
          message:
            "Please check your email and verify your account before logging in.",
          type: "success",
        });
        return;
      }
      const idToken = await response.user.getIdToken();
      const res_auth = await authStore.login({
        isGoogle: true,
        token: idToken,
      });

      if (res_auth.status === 200) {
        const { access, refresh } = res_auth.data as {
          access: string;
          refresh: string;
        };
        authStore.setToken({
          accessToken: access,
          refreshToken: refresh,
        });
        ElNotification({
          title: "Success",
          message: "Logged in with Google successfully",
          type: "success",
        });
        router.push("/"); // Redirect to dashboard or home page
      }
    }
  } catch (error) {
    if (
      error instanceof FirebaseError &&
      error.code === "auth/unauthorized-domain"
    ) {
      ElNotification({
        title: "Error",
        message:
          "This domain is not authorized for Google Sign-In. Please contact the administrator.",
        type: "error",
      });
    } else {
      ElNotification({
        title: "Error",
        message: "Google sign-in failed. Please try again.",
        type: "error",
      });
    }
    console.error("Google Sign-In Error:", error);
  }
};

// Function to toggle phone field visibility (for future use)
const togglePhoneField = () => {
  showPhoneField.value = !showPhoneField.value;
};
</script>
