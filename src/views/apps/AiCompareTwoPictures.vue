<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">
      {{ $t("AiImageComparison") }}
    </h1>

    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 bg-white p-8 rounded-lg shadow-md"
    >
      <div class="w-full sm:w-1/3 max-w-xs">
        <div
          class="aspect-square bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden"
          :class="{
            'shadow-md border-dashed border-2 border-blue-600':
              !firstImagePreview,
          }"
          @click="triggerFirstImageUpload"
        >
          <img
            v-if="firstImagePreview"
            :src="firstImagePreview"
            alt="First Image Preview"
            class="w-full h-full object-cover shadow-md border-dashed border-2 border-green-600"
          />
          <p v-else class="text-gray-500 text-center p-4">
            <UploadFilled /> {{ $t("ClickToUpload") }}
          </p>
        </div>
      </div>

      <div
        class="animate-pulse text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mx-1"
      >
        {{ $t("Vs") }}
      </div>

      <div class="w-full sm:w-1/3 max-w-xs">
        <div
          class="aspect-square bg-gray-300 flex items-center justify-center cursor-pointer overflow-hidden"
          :class="{
            'shadow-md border-dashed border-2 border-blue-600':
              firstImagePreview && !secondImagePreview,
          }"
          @click="triggerSecondImageUpload"
        >
          <img
            v-if="secondImagePreview"
            :src="secondImagePreview"
            alt="Second Image Preview"
            class="w-full h-full object-cover shadow-md border-dashed border-2 border-green-600"
          />
          <p v-else class="text-gray-500 text-center p-4">
            <UploadFilled /> {{ $t("ClickToUpload") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Comparison Result Section -->
    <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">{{ $t("ComparisonResult") }}</h2>
      <div v-if="comparisonResult" class="bg-gray-100 p-4 rounded">
        <p>{{ comparisonResult }}</p>
      </div>
      <p v-else class="text-gray-500">
        {{ $t("NoTextExtractedYetPleaseUploadAnImage") }}
      </p>
    </div>
  </div>

  <input
    type="file"
    ref="firstImageInput"
    class="hidden"
    @change="handleFirstImageUpload"
    accept="image/*"
  />
  <input
    type="file"
    ref="secondImageInput"
    class="hidden"
    @change="handleSecondImageUpload"
    accept="image/*"
  />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";

const firstImagePreview = ref<string | null>(null);
const secondImagePreview = ref<string | null>(null);
const comparisonResult = ref<string>("");
const firstImageInput = ref<HTMLInputElement | null>(null);
const secondImageInput = ref<HTMLInputElement | null>(null);

const triggerFirstImageUpload = () => {
  if (firstImageInput.value) {
    firstImageInput.value.click();
  }
};

const triggerSecondImageUpload = () => {
  if (secondImageInput.value) {
    secondImageInput.value.click();
  }
};

const handleFirstImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    createImagePreview(file, firstImagePreview);
    compareImages();
  }
};

const handleSecondImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    createImagePreview(file, secondImagePreview);
    compareImages();
  }
};

const createImagePreview = (
  file: File,
  previewRef: { value: string | null }
) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    previewRef.value = e.target?.result as string;
  };
  reader.readAsDataURL(file);
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
        - No exact match found
      `;
    }, 2000);
  }
};
onMounted(() => {
  document.title = "AI Image Comparison";
});
</script>
