<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">
      AI Find Similar Pictures
    </h1>

    <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 class="text-xl font-semibold mb-4">Upload Images</h2>
      <div class="flex flex-col items-center">
        <el-upload
          class="uploader"
          action="#"
          :auto-upload="false"
          :on-change="handleImagesUpload"
          :show-file-list="false"
          multiple
        >
          <el-button type="primary" class="fixed-width-button"
            >Upload Second Image</el-button
          >
        </el-upload>

        <div
          v-if="uploadedImages.length > 0"
          class="grid grid-cols-3 gap-4 mt-4"
        >
          <div
            v-for="(image, index) in uploadedImages"
            :key="index"
            class="relative"
          >
            <img
              :src="image"
              alt="Uploaded image"
              class="w-full h-32 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Similar Images Found</h2>
      <div v-if="similarImages.length > 0" class="grid grid-cols-2 gap-4">
        <div
          v-for="(group, index) in similarImages"
          :key="index"
          class="border p-4 rounded"
        >
          <h3 class="font-semibold mb-2">Similar Group {{ index + 1 }}</h3>
          <div class="grid grid-cols-2 gap-2">
            <img
              v-for="(image, imgIndex) in group"
              :key="imgIndex"
              :src="image"
              alt="Similar image"
              class="w-full h-24 object-cover rounded"
            />
          </div>
        </div>
      </div>
      <p v-else class="text-gray-500">
        No similar images found yet. Please upload some images.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const uploadedImages = ref([]);
const similarImages = ref([]);

const handleImagesUpload = (file, fileList) => {
  // Clear the uploadedImages array
  uploadedImages.value = [];

  // Process each file in the fileList
  fileList.forEach((fileInfo) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImages.value.push(e.target.result);
    };
    reader.readAsDataURL(fileInfo.raw);
  });

  // Simulate finding similar images after a delay
  setTimeout(() => {
    findSimilarImages();
  }, 2000);
};

const findSimilarImages = () => {
  // This is a mock function to simulate finding similar images
  // In a real application, this would be done by a backend service
  similarImages.value = [
    [uploadedImages.value[0], uploadedImages.value[2]],
    [uploadedImages.value[1], uploadedImages.value[3], uploadedImages.value[4]],
  ];
};
</script>
