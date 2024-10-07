<template>
  <div class="container mx-auto py-8">
    <h1 class="text-4xl font-bold mb-4 text-center">Contact Us</h1>

    <p class="text-lg mb-6 text-center">
      Feel free to reach out to us for any inquiries or questions.
    </p>

    <form
      @submit.prevent="submitForm"
      class="bg-white p-6 rounded shadow-md max-w-lg mx-auto"
    >
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2"
          >Your Name</label
        >
        <input
          v-model="formData.name"
          type="text"
          id="name"
          class="border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2"
          >Email Address</label
        >
        <input
          v-model="formData.email"
          type="email"
          id="email"
          class="border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>

      <div class="mb-4">
        <label
          for="message"
          class="block text-sm font-medium text-gray-700 mb-2"
          >Your Message</label
        >
        <textarea
          v-model="formData.message"
          id="message"
          rows="5"
          class="border rounded w-full py-2 px-3 text-gray-700"
          required
        ></textarea>
      </div>

      <button
        type="primary"
        class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const formData = reactive({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", formData);
  // Bạn có thể thêm logic gửi form tới API ở đây
};
</script>

<!-- SEO Meta Tags -->

<style scoped>
.container {
  max-width: 800px;
}
</style>
