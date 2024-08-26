<template>
  <div class="p-1">
    <div class="flex flex-wrap gap-4">
      <!-- Hiển thị các ảnh đã tải lên -->
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative w-32 h-32"
      >
        <img
          :src="image.url"
          alt="Uploaded image"
          class="w-full h-full object-cover rounded-md shadow-md cursor-pointer"
          @click="openModal(image.url)"
        />
        <button
          @click.stop="removeImage(index)"
          class="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="mt-2">
      <div class="flex justify-between">
        <label class="relative cursor-pointer">
          <input
            type="file"
            multiple
            @change="handleFileUpload"
            class="sr-only"
          />
          <div
            class="w-10 h-10 bg-gray-200 border-4 border-blue-500 border-dashed rounded-lg flex items-center justify-center"
          >
            <span class="text-2xl text-blue-500">+</span>
          </div>
        </label>
        <el-button type="success" @click="sendData">gửi</el-button>
      </div>
    </div>

    <!-- Modal để xem ảnh lớn hơn -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div class="relative">
        <img
          :src="currentImageUrl"
          class="max-w-full max-h-full object-contain bg-origin-border"
        />
        <button
          @click="closeModal"
          class="absolute top-4 right-4 bg-white text-black rounded-full p-2"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["sendData"]);
// Định nghĩa kiểu cho ảnh
interface Image {
  url: string;
  isMine: boolean;
}

// Khai báo biến images, showModal và currentImageUrl
const images = ref<Image[]>([]);
const showModal = ref(false);
const currentImageUrl = ref("");

// Xử lý upload ảnh
const handleFileUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          images.value.push({ url: e.target.result as string, isMine: true });
        }
      };
      reader.readAsDataURL(file);
    }
  }
};

// Xóa ảnh
const removeImage = (index: number) => {
  images.value.splice(index, 1);
};

// Mở modal với ảnh lớn
const openModal = (url: string) => {
  currentImageUrl.value = url;
  showModal.value = true;
};

// Đóng modal
const closeModal = () => {
  showModal.value = false;
};
//send data
const sendData = () => {
  emit("sendData", images.value);
  images.value = [];
};
</script>

<style scoped>
/* Đảm bảo các ảnh hiển thị sắc nét */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
</style>
