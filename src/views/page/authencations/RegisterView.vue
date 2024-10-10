<template>
  <div
    class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {{ $t("CreateYourAccount") }}
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleRegister">
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
                autocomplete="new-password"
                required
                v-model="password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div v-if="showPhoneRegistration">
            <label for="phone" class="block text-sm font-medium text-gray-700">
              {{ $t("PhoneNumber") }}
            </label>
            <div class="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                autocomplete="tel"
                required
                v-model="phone"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div class="mt-4">
              <button
                type="button"
                @click="handlePhoneVerification"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {{ $t("SendVerificationCode") }}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {{ $t("Register") }}
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
              {{ $t("SignUpWithGoogle") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Verification Code Dialog -->
  <div
    v-if="showVerificationDialog"
    class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
  >
    <div class="bg-white p-6 rounded-lg shadow-xl">
      <h3 class="text-lg font-medium text-gray-900 mb-4">
        Enter Verification Code
      </h3>
      <input
        v-model="verificationCode"
        type="text"
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter code"
      />
      <div class="mt-4 flex justify-end">
        <button
          @click="verifyCode"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Verify
        </button>
        <button
          @click="showVerificationDialog = false"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { auth } from "@/firebase.config";
import { ElNotification } from "element-plus";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const phone = ref("");
const showPhoneRegistration = ref(false);
const verificationId = ref("");
const verificationCode = ref("");
const showVerificationDialog = ref(false);

const router = useRouter();

const handleRegister = async () => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );

    // Gửi email xác thực
    await sendEmailVerification(response.user, {
      url: "https://your-app-url.com/verified", // Địa chỉ URL tùy chỉnh
    });

    ElNotification({
      title: "Verification Email Sent",
      message:
        "Please check your email and verify your account before logging in.",
      type: "success",
    });

    // Chuyển hướng đến trang đăng nhập
    router.push("/login");
  } catch (error) {
    ElNotification({
      title: "Error",
      message: "Registration error: ",
      type: "error",
    });
  }
};

const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const response = await signInWithPopup(auth, provider);
    if (response.user) {
      // Gửi email xác thực
      await sendEmailVerification(response.user, {
        url: `${import.meta.env.VITE_BASE_URL_HOME}/login`, // Địa chỉ URL tùy chỉnh
      });

      ElNotification({
        title: "Verification Email Sent",
        message:
          "Please check your email and verify your account before logging in.",
        type: "success",
      });
    }
  } catch (error) {
    ElNotification({
      title: "Error",
      message: "Error signing in with Google: ",
      type: "error",
    });
  }
};

const handlePhoneVerification = async () => {};

const verifyCode = async () => {};
</script>
