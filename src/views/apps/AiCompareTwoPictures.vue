<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">AI Compare Two Pictures</h1>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- First Image Upload Section -->
      <div class="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Upload First Image</h2>
        <div class="flex flex-col items-center">
          <el-upload
            class="uploader"
            action="#"
            :auto-upload="false"
            :on-change="handleFirstImageUpload"
            :show-file-list="false"
          >
            <el-button type="primary" class="fixed-width-button"
              >Upload Second Image</el-button
            >
          </el-upload>
          <div v-if="firstImagePreview" class="mt-4">
            <img
              :src="firstImagePreview"
              alt="First uploaded image"
              class="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <!-- Second Image Upload Section -->
      <div class="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Upload Second Image</h2>
        <div class="flex flex-col items-center">
          <el-upload
            class="uploader"
            action="#"
            :auto-upload="false"
            :on-change="handleSecondImageUpload"
            :show-file-list="false"
          >
            <el-button type="primary" class="fixed-width-button"
              >Upload Second Image</el-button
            ></el-upload
          >
          <div v-if="secondImagePreview" class="mt-4">
            <img
              :src="secondImagePreview"
              alt="Second uploaded image"
              class="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison Result Section -->
    <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Comparison Result</h2>
      <div v-if="comparisonResult" class="bg-gray-100 p-4 rounded">
        <p>{{ comparisonResult }}</p>
      </div>
      <p v-else class="text-gray-500">
        No comparison result yet. Please upload both images.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const firstImagePreview = ref(null);
const secondImagePreview = ref(null);
const comparisonResult = ref("");

const handleFirstImageUpload = (file) => {
  if (file) {
    createImagePreview(file, firstImagePreview);
    compareImages();
    firstImagePreview.value = file;
  }
};

const handleSecondImageUpload = (file) => {
  if (file) {
    createImagePreview(file, secondImagePreview);
    compareImages();
    secondImagePreview.value = file;
  }
};

const createImagePreview = (file, previewRef) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    previewRef.value = e.target.result;
  };
  reader.readAsDataURL(file.raw);
};

const compareImages = () => {
  if (firstImagePreview.value && secondImagePreview.value) {
    // Here you would typically send both images to your backend for comparison
    // For demonstration, we'll use a setTimeout to simulate API call
    setTimeout(() => {
      comparisonResult.value = `
        Comparison results:
        - Both images are photographs
        - Image sizes are different
        - Color palettes are similar
        - First image contains more people
        - Second image has a landscape orientation
        - Both images appear to be outdoor scenes
      `;
    }, 2000);
  }
};
</script>
