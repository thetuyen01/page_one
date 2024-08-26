<template>
  <div>
    <div :class="{ 'chat-list': messages.length }">
      <div
        v-for="msg in messages"
        :key="msg.id"
        :class="['message', msg.isMine ? 'my-message' : 'other-message']"
      >
        <!-- <p class="user-name">{{ msg.user }}</p>
        <p class="message-content">{{ msg.message }}</p>
        <span class="timestamp">{{ msg.timestamp }}</span> -->
        <img
          v-if="msg?.url"
          :src="msg?.url"
          alt="Uploaded image"
          class="w-32 h-32 object-cover rounded-md shadow-md cursor-pointer"
          @click="openModal(msg.url)"
        />
      </div>
      <!-- Thẻ đánh dấu cuối danh sách -->
      <div ref="bottomOfMessages"></div>
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
<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";
const props = defineProps<{
  data: Array<any>;
}>();
const messages = ref([]);

const bottomOfMessages = ref(null);
const showModal = ref(false);
const currentImageUrl = ref("");

// Mở modal với ảnh lớn
const openModal = (url: string) => {
  currentImageUrl.value = url;
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
};

// Cuộn xuống cuối danh sách khi component được mounted
onMounted(() => {
  bottomOfMessages.value?.scrollIntoView({ behavior: "smooth" });
});
// Lắng nghe sự kiện khi có props mới được truyền vào
watch(
  () => props.data,
  (newVal) => {
    messages.value = [...messages.value, ...newVal];
    bottomOfMessages.value?.scrollIntoView({ behavior: "smooth" });
  }
);
</script>
<style scoped>
.chat-list {
  height: auto;
  display: flex;
  flex-direction: column-reverse; /* Đảo ngược thứ tự của các tin nhắn */
  max-height: auto;
  overflow-y: auto;
  padding: 10px;
  background-color: #e1ffc7;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.message {
  display: flex;
  align-items: center; /* Căn giữa các phần tử bên trong tin nhắn */
  margin: 5px 0; /* Thay đổi margin nếu cần */
  padding: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.my-message {
  align-self: flex-end; /* Đưa tin nhắn của người dùng hiện tại về phía bên phải */
  margin-left: auto; /* Đẩy tin nhắn sang bên phải */
}

.other-message {
  align-self: flex-start; /* Đưa tin nhắn của người khác về phía bên trái */
}

/* Container cho đầu vào và nút gửi */
.input-container {
  display: flex;
  padding: 10px;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  border-radius: 8px;
}

/* Ô nhập tin nhắn */
input {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Nút gửi tin nhắn */
button {
  padding: 12px 20px;
  margin-left: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

/* Định dạng tên người dùng */
.user-name {
  font-weight: bold;
  margin-bottom: 4px;
}

/* Định dạng thời gian gửi tin */
.timestamp {
  font-size: 0.75em;
  color: #888;
}

/* Modal để xem ảnh lớn */
.fixed {
  z-index: 50;
}
.fixed .relative {
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
}
.fixed img {
  max-width: 100%;
  max-height: 90vh;
}
button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
}
button svg {
  width: 24px;
  height: 24px;
  color: #333;
}
</style>
