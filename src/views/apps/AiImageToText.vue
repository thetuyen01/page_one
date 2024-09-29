<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">AI Image to Text</h1>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Image Upload and Display Section -->
      <div class="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Upload Image</h2>
        <div class="flex flex-col items-center">
          <el-upload
            class="uploader"
            action="#"
            :auto-upload="false"
            :on-change="handleImageUpload"
            :show-file-list="false"
          >
            <el-button type="primary" class="fixed-width-button"
              >Upload Second Image</el-button
            >
          </el-upload>
          <div v-if="imagePreview" class="mt-4">
            <img
              :src="imagePreview"
              alt="Uploaded image"
              class="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <!-- Extracted Text Section -->
      <div class="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Extracted Text</h2>
        <div v-if="extractedText" class="bg-gray-100 p-4 rounded">
          <p>{{ extractedText }}</p>
        </div>
        <p v-else class="text-gray-500">
          No text extracted yet. Please upload an image.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imagePreview = ref(null);
const extractedText = ref("");

const handleImageUpload = (file) => {
  if (file) {
    // Create image preview
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file.raw);

    // Here you would typically send the image to your backend for processing
    // For demonstration, we'll use a setTimeout to simulate API call
    setTimeout(() => {
      extractedText.value =
        "This is a simulated extraction of text from the uploaded image. In a real application, you would send the image to a backend service that uses OCR (Optical Character Recognition) to extract the text.";
    }, 2000);
  }
};
</script>
