import { defineStore } from "pinia";
import { AiVoiceService } from "@/services/ai-voice/ai-voice";
import type { IAiVoiceState } from "@/types/ai-voice/ai-voice";

const aiVoiceService = new AiVoiceService();

export const useAiVoiceStore = defineStore("aiVoice", {
  state: (): IAiVoiceState => ({
    audioFile: null,
    access_token: localStorage.getItem("accessToken") || null,
  }),
  actions: {
    async transcribeAudio(audioFile: File) {
      const response = await aiVoiceService.transcribeAudio({
        audioFile,
        access_token: this.access_token || "",
      });
      return response;
    },
  },
});
