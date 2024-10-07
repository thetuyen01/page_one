<template>
  <div class="home-container !container mx-auto">
    <h1 class="text-2xl font-bold text-center mb-5">
      AI Face Swap Online Free
    </h1>
    <div class="content">
      <div class="image-display" v-loading="isLoading">
        <div v-if="isLoading" class="loading-spinner">
          <el-spinner size="large" />
        </div>
        <img
          v-else-if="resultImage"
          :src="resultImage"
          alt="Result Image"
          class="result-image"
        />
        <div v-else class="placeholder">
          Your processed image will appear here
        </div>
      </div>
      <div class="upload-section">
        <div class="flex flex-row gap-4 bg-slate-300 p-3" v-if="firstImage">
          <div class="image-preview">
            <img
              :src="getImagePreviewUrl(firstImage)"
              alt="First Image Preview"
              class="object-cover sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
          </div>
          <span v-if="secondImage" class="my-auto mx-2">VS</span>
          <div v-if="secondImage" class="image-preview">
            <img
              :src="getImagePreviewUrl(secondImage)"
              alt="Second Image Preview"
              class="object-cover sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
          </div>
          <span v-if="threeImages" class="my-auto mx-2">VS</span>
          <div v-if="threeImages" class="image-preview">
            <img
              :src="getImagePreviewUrl(threeImages)"
              alt="Second Image Preview"
              class="object-cover sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            />
          </div>
        </div>
        <div class="upload-option border-dashed border-2 border-indigo-600">
          <h3 class="mb-2">Option 1: Photo Face Swap</h3>
          <div class="flex flex-row justify-center items-center gap-4">
            <div
              class="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <el-upload
                class="uploader"
                action="#"
                :auto-upload="false"
                :on-change="handleFirstImageChange"
                :show-file-list="false"
              >
                <el-button
                  type="primary"
                  class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
                  :class="{
                    '!bg-green-500': firstImage,
                  }"
                  :icon="firstImage ? SuccessFilled : UploadFilled"
                  >Upload First Image</el-button
                >
              </el-upload>
              <el-upload
                class="uploader"
                action="#"
                :auto-upload="false"
                :on-change="handleSecondImageChange"
                :show-file-list="false"
              >
                <el-button
                  type="primary"
                  :disabled="!firstImage"
                  class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
                  :class="{
                    '!bg-green-500': secondImage,
                  }"
                  :icon="secondImage ? SuccessFilled : UploadFilled"
                  >Upload Second Image</el-button
                >
              </el-upload>
              <el-upload
                class="uploader"
                action="#"
                :auto-upload="false"
                :on-change="handleThreeImagesChange"
                :show-file-list="false"
                :disabled="premium"
              >
                <el-button
                  type="primary"
                  :disabled="premium"
                  class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
                  :class="{
                    '!bg-green-500': threeImages,
                  }"
                  :icon="threeImages ? SuccessFilled : UploadFilled"
                  >Upload Three Images<span class="text-red"> </span
                ></el-button>
              </el-upload>
            </div>
          </div>
          <div class="flex justify-center mt-4">
            <el-button
              type="primary"
              @click="processImages"
              :disabled="!firstImage || !secondImage"
              class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
              :class="{
                '!bg-green-500':
                  (firstImage && secondImage) ||
                  (firstImage && threeImages && threeImages),
              }"
              :icon="
                (firstImage && secondImage) ||
                (firstImage && threeImages && threeImages)
                  ? Promotion
                  : null
              "
            >
              Process Images
            </el-button>
          </div>
        </div>
        <div class="upload-option">
          <h3 class="mb-2">Update account to premium</h3>
          <div class="flex flex-row justify-center items-center gap-4">
            <el-button
              class="fixed-width-button !bg-yellow-500 text-white !py-3 !px-4 !rounded-full text-white font-bold"
              >Upgrade account to vip</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "@/stores/authencation/auth";
import {
  SuccessFilled,
  UploadFilled,
  Promotion,
} from "@element-plus/icons-vue";

const authStore = useAuthStore();
const firstImage = ref<File | null>(null);
const secondImage = ref<File | null>(null);
const threeImages = ref<File | null>(null);
const resultImage = ref<string | null>(null);
const isLoading = ref<boolean>(false);

const premium = computed(() => !authStore.isPremium);

const handleFirstImageChange = (file: File) => {
  firstImage.value = file;
};

const handleSecondImageChange = (file: File) => {
  secondImage.value = file;
};

const handleThreeImagesChange = (file: File) => {
  threeImages.value = file;
};

const processImages = () => {
  isLoading.value = true;
  // Here you would implement the logic to process the two images
  // For now, we'll just display a placeholder
  resultImage.value =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQShFgewbl0SP9RwoBDn6SHU2BOL2cWrajZ0NvWdZOUNA5v5yj7";
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

const processThreeImages = () => {
  // Here you would implement the logic to process the three images
  // For now, we'll just display a placeholder
  resultImage.value =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQShFgewbl0SP9RwoBDn6SHU2BOL2cWrajZ0NvWdZOUNA5v5yj7";
};
const getImagePreviewUrl = (file: { raw?: File } | File | null): string => {
  const actualFile = file instanceof File ? file : file?.raw;
  if (!actualFile || !(actualFile instanceof Blob)) {
    return ""; // Trả về chuỗi rỗng nếu file không hợp lệ
  }
  return URL.createObjectURL(actualFile);
};
onMounted(() => {
  document.title = "Micro AI";
});
</script>

<style scoped>
.home-container {
  padding: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.image-display {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #ccc;
  border-radius: 8px;
  height: 400px;
  box-shadow: 0 0 10px 0 rgba(192, 9, 9, 0.1);
}

.result-image {
  max-width: 100%;
  max-height: 100%;
}

.placeholder {
  color: #151715;
  text-align: center;
}

.upload-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.upload-option {
  background-color: #f8e5d2;
  padding: 20px;
  border-radius: 8px;
}

.uploader {
  margin-bottom: 10px;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.loading-spinner .el-spinner {
  color: #0c335a !important;
}
.fixed-width-button {
  width: 180px; /* Adjust this value as needed */
}
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .image-display,
  .upload-section {
    width: 100%;
    max-width: 400px;
  }

  .image-display {
    height: 300px;
    margin-bottom: 20px;
  }

  .upload-option {
    padding: 15px;
  }

  .fixed-width-button {
    width: 100%;
    max-width: 180px;
    margin: 0 auto;
  }
  .image-preview {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
  .fixed-width-button {
    width: 180px; /* Adjust this value as needed */
  }
}
</style>
