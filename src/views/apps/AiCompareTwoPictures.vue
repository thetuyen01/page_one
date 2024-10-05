<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">AI Compare Two Pictures</h1>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Left side: Image previews -->
      <div
        class="md:w-3/4 bg-white p-6 rounded-lg shadow-md border-dashed border-2 border-black-600"
      >
        <h2 class="text-xl font-semibold mb-4">Image Previews</h2>
        <div class="flex items-center justify-center">
          <div
            class="w-44 h-44 bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <img
              v-if="firstImagePreview"
              :src="firstImagePreview"
              alt="First Image"
              class="max-w-full max-h-full object-contain"
            />
            <span v-else class="text-gray-500">Image 1</span>
          </div>
          <span
            class="animate-pulse text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mx-1"
          >
            VS
          </span>
          <div
            class="w-44 h-44 bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <img
              v-if="secondImagePreview"
              :src="secondImagePreview"
              alt="Second Image"
              class="max-w-full max-h-full object-contain"
            />
            <span v-else class="text-gray-500">Image 2</span>
          </div>
        </div>
      </div>

      <!-- Right side: Upload buttons -->
      <div
        class="md:w-1/4 bg-white p-6 rounded-lg shadow-md border-dashed border-2 border-indigo-600"
      >
        <h2 class="text-xl font-semibold mb-4">Upload Images</h2>
        <div class="flex flex-col gap-4">
          <el-upload
            class="uploader"
            action="#"
            :auto-upload="false"
            :on-change="handleFirstImageUpload"
            :show-file-list="false"
          >
            <el-button
              type="primary"
              class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
            >
              <el-icon class="mr-2"><UploadFilled /></el-icon>
              Upload First Image
            </el-button>
          </el-upload>

          <el-upload
            class="uploader"
            action="#"
            :auto-upload="false"
            :on-change="handleSecondImageUpload"
            :show-file-list="false"
          >
            <el-button
              type="primary"
              class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
            >
              <el-icon class="mr-2"><UploadFilled /></el-icon>
              Upload Second Image
            </el-button>
          </el-upload>
          <el-button
            type="success"
            class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
            >Compare Images</el-button
          >
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
import { UploadFilled } from "@element-plus/icons-vue";
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
<style scoped>
.fixed-width-button {
  width: 250px;
}
</style>
