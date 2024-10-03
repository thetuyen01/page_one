<template>
  <transition name="fade">
    <div v-if="show" :class="['notification', type]">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  message: string;
  type: "success" | "error" | "info";
  duration?: number;
}>();

const show = ref(false);

watch(
  () => props.message,
  (newMessage) => {
    if (newMessage) {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, props.duration || 3000);
    }
  }
);
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  z-index: 1000;
}

.success {
  background-color: #4caf50;
}

.error {
  background-color: #f44336;
}

.info {
  background-color: #2196f3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
