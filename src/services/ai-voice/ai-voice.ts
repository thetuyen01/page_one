import endpoints from "@/shared/apis/endpoints";
import { reqPost } from "@/shared/apis/api-client";
import type { IAiVoiceTranscribeAudio } from "@/types/ai-voice/ai-voice";

export class AiVoiceService {
  transcribeAudio(data: IAiVoiceTranscribeAudio) {
    return reqPost(endpoints.aiVoice, data);
  }
}
