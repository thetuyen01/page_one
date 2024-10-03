export interface IAiVoiceState {
  audioFile: File | null;
  access_token: string | null;
}

export interface IAiVoiceTranscribeAudio {
  audioFile: File;
  access_token: string;
}
