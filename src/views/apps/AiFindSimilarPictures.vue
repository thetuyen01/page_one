<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">
      AI Find Similar Pictures
    </h1>

    <div class="flex flex-col md:flex-row gap-8 mb-8">
      <!-- Left side: Uploaded images preview -->
      <div
        class="md:w-3/4 bg-white p-6 rounded-lg shadow-md border-dashed border-2 border-black-600"
      >
        <h2 class="text-xl font-semibold mb-4">Uploaded Images</h2>
        <div v-if="uploadedImages.length > 0" class="grid grid-cols-3 gap-4">
          <div
            v-for="(image, index) in uploadedImages"
            :key="index"
            class="relative"
          >
            <img
              :src="image"
              alt="Uploaded image"
              class="w-full h-32 object-cover rounded border-dashed border-2 border-orange-600 shadow-md bg-white"
            />
          </div>
        </div>
        <p v-else class="text-gray-500">No images uploaded yet.</p>
      </div>

      <!-- Right side: Upload section -->
      <div
        class="md:w-1/4 bg-white p-6 rounded-lg shadow-md border-dashed border-2 border-indigo-600"
      >
        <h2 class="text-xl font-semibold mb-4">Upload Images</h2>
        <el-upload
          class="uploader"
          action="#"
          :auto-upload="false"
          :on-change="handleImagesUpload"
          multiple
          :show-file-list="false"
        >
          <el-button
            type="primary"
            class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
          >
            <el-icon class="mr-2"><UploadFilled /></el-icon>
            Upload Images
          </el-button>
        </el-upload>
      </div>
    </div>

    <!-- Results section -->
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
              class="w-full h-24 object-cover rounded border-dashed border-2 border-green-600 shadow-md bg-white"
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
import { ref, onMounted } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";

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
onMounted(() => {
  document.title = "AI Find Similar Pictures";
});
</script>
