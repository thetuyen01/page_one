<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">AI Voice Transcription</h1>

    <div
      class="flex flex-col bg-white p-10 md:flex-row gap-8 rounded-lg shadow-md"
    >
      <!-- Record Audio Section -->
      <div
        class="flex-1 bg-white p-6 rounded-lg shadow-md border-dashed border-2 border-indigo-600"
      >
        <h2 class="text-xl font-semibold mb-4">Record Audio</h2>

        <div class="flex flex-col items-center">
          <button
            @click="toggleRecording"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-4"
          >
            <el-icon><Microphone /></el-icon>
            {{ isRecording ? "Stop Recording" : "Start Recording" }}
          </button>
          <p v-if="isRecording" class="text-red-500">Recording...</p>
        </div>
      </div>
      <h1 class="flex items-center justify-center">
        <button
          type="button"
          class="h-10 w-10 rounded-full text-xl text-center bg-yellow-400"
        >
          Or
        </button>
      </h1>
      <!-- Upload Audio File Section -->
      <div
        class="flex-1 bg-white p-6 rounded-lg shadow-md border-dashed border-2 border-indigo-600"
      >
        <h2 class="text-xl font-semibold mb-4">Upload Audio File</h2>
        <div class="flex flex-col items-center">
          <el-upload
            class="uploader py-2 px-4 rounded-full"
            action="#"
            :auto-upload="false"
            :on-change="handleFileUpload"
            :show-file-list="false"
          >
            <el-button
              type="primary"
              class="fixed-width-button !py-3 !px-4 !rounded-full text-white font-bold"
            >
              <el-icon class="mr-2"><UploadFilled /></el-icon>
              Upload an Audio
            </el-button>
          </el-upload>
        </div>
      </div>
    </div>

    <!-- Transcription Result Section -->
    <div class="mt-8 bg-white p-10 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Transcription Result</h2>
      <div v-if="transcriptionResult" class="bg-gray-100 p-4 rounded">
        <p>{{ transcriptionResult }}</p>
      </div>
      <p v-else class="text-gray-500">No transcription available yet.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAiVoiceStore } from "@/stores/ai-voice/ai-voice";
import { ElNotification } from "element-plus";
import { Microphone, UploadFilled } from "@element-plus/icons-vue";

const aiVoiceStore = useAiVoiceStore();

const isRecording = ref(false);
const selectedFile = ref(null);
const transcriptionResult = ref("");

const toggleRecording = async () => {
  isRecording.value = !isRecording.value;
  if (isRecording.value) {
    // Start recording logic here
    console.log("Started recording");
  } else {
    // Stop recording and process the audio
    console.log("Stopped recording");
    // Here you would typically send the recorded audio to your backend for processing
    // For now, we'll just simulate a response
    setTimeout(() => {
      transcriptionResult.value =
        "This is a simulated transcription of your recorded audio.";
    }, 2000);
  }
  const res = await aiVoiceStore.transcribeAudio(selectedFile.value);
  if (res.status === 200) {
    ElNotification({
      title: "Success",
      message: res.data.message,
      type: "success",
    });
  }
};

const handleFileUpload = (file) => {
  selectedFile.value = file.raw;
};

const uploadFile = () => {
  if (selectedFile.value) {
    // Here you would typically send the file to your backend for processing
    console.log("Uploading file:", selectedFile.value.name);
    // Simulating a response
    setTimeout(() => {
      transcriptionResult.value =
        "This is a simulated transcription of your uploaded audio file.";
    }, 2000);
  }
};

onMounted(() => {
  document.title = "AI Voice";
});
</script>
