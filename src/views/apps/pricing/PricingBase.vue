<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-12">
      Choose Your Perfect Plan
    </h1>
    <p class="text-xl text-center mb-8">
      Unlock the power of AI with our flexible pricing options
    </p>

    <div class="flex flex-wrap justify-center gap-8">
      <!-- Base Plan -->
      <div
        class="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-center mb-4">Base Plan</h2>
        <p class="text-4xl font-bold text-center mb-6">
          $9.99<span class="text-lg font-normal">/month</span>
        </p>
        <ul class="mb-8">
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Basic AI image processing
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            100 image uploads per month
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Standard support
          </li>
        </ul>
        <button
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Choose Base Plan
        </button>
      </div>

      <!-- VIP Plan -->
      <div
        class="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-center mb-4">VIP Plan</h2>
        <p class="text-4xl font-bold text-center mb-6">
          $24.99<span class="text-lg font-normal">/month</span>
        </p>
        <ul class="mb-8">
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Advanced AI image processing
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            500 image uploads per month
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Priority support
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            AI-powered image enhancement
          </li>
        </ul>
        <button
          class="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
        >
          Choose VIP Plan
        </button>
      </div>

      <!-- Pro VIP Plan -->
      <div
        class="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-center mb-4">Pro VIP Plan</h2>
        <p class="text-4xl font-bold text-center mb-6">
          $49.99<span class="text-lg font-normal">/month</span>
        </p>
        <ul class="mb-8">
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Premium AI image processing
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Unlimited image uploads
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            24/7 VIP support
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Advanced AI-powered editing tools
          </li>
          <li class="flex items-center mb-2">
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Early access to new features
          </li>
        </ul>
        <button
          class="w-full bg-gold-500 text-white py-2 px-4 rounded-lg hover:bg-gold-600 transition-colors duration-300"
        >
          Choose Pro VIP Plan
        </button>
      </div>
    </div>
    <div class="mt-16">
      <h2 class="text-2xl font-semibold mb-4">Secure Payment Options</h2>
      <p class="mb-6">We accept all major credit cards for your convenience</p>
      <div class="flex justify-center items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png"
          alt="Visa"
          class="h-8"
          width="50"
          height="32"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png"
          alt="Mastercard"
          class="h-8"
          width="50"
          height="32"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png"
          alt="American Express"
          class="h-8"
          width="50"
          height="32"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png"
          alt="PayPal"
          class="h-8"
          width="50"
          height="32"
        />
      </div>
    </div>

    <div class="mt-16">
      <h2 class="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <el-collapse>
        <el-collapse-item name="1">
          <template #title>
            <el-icon class="m-2"><CirclePlusFilled /></el-icon> How does the AI
            image processing work?
          </template>
          <p class="ml-8">
            Our AI image processing uses advanced machine learning algorithms to
            analyze and enhance your images. It can perform tasks like object
            recognition, color correction, and image enhancement automatically.
          </p>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <el-icon class="m-2"><CirclePlusFilled /></el-icon> Can I upgrade or
            downgrade my plan at any time?
          </template>
          <p class="ml-8">
            Yes, you can upgrade or downgrade your plan at any time. The changes
            will take effect on your next billing cycle.
          </p>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <el-icon class="m-2"><CirclePlusFilled /></el-icon> Is there a limit
            to the file size I can upload?
          </template>
          <p class="ml-8">
            The maximum file size for uploads is 20MB per image. If you need to
            process larger files, please contact our support team for
            assistance.
          </p>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <el-icon class="m-2"><CirclePlusFilled /></el-icon> IHow secure is
            my data?
          </template>
          <p class="ml-8">
            We take data security very seriously. All uploaded images are
            encrypted and stored securely. We never share your data with third
            parties without your explicit consent.
          </p>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template #title>
            <el-icon class="m-2"><CirclePlusFilled /></el-icon> What kind of
            customer support do you offer?
          </template>
          <p class="ml-8">
            We offer email support for all plans. VIP and Pro VIP plans also
            include priority support with faster response times and access to
            our dedicated support team.
          </p>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
// Add any necessary imports here
import { CirclePlusFilled } from "@element-plus/icons-vue";

// Add any necessary component logic here
</script>

<style scoped>
.bg-gold-500 {
  background-color: #ffd700;
}
.bg-gold-600 {
  background-color: #ffc600;
}
.el-collapse-item__header {
  margin-bottom: 10px !important;
}
</style>
