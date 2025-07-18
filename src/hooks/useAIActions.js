import { useAI } from './AIContext';

export function useAIActions() {
  const {
    askAI,
    askAndSpeak,
    speak,
    listen,
    stopSpeaking,
    isSpeaking,
    isLoading
  } = useAI();

  // Ejemplo: Conversación automática por voz
  const startVoiceConversation = async () => {
    try {
      const userInput = await listen();
      if (userInput.trim()) {
        await askAndSpeak(userInput);
      }
    } catch (error) {
      console.error('Error en conversación:', error);
    }
  };

  return {
    askAI,
    askAndSpeak,
    speak,
    listen,
    stopSpeaking,
    startVoiceConversation,
    isSpeaking,
    isLoading
  };
}