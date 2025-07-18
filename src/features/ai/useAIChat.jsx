// src/features/ai/useAIChat.js
import { useState } from 'react';

export default function useAIChat(aiService) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text) => {
    setIsLoading(true);
    const userMessage = { text, sender: 'user' };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulación de respuesta
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `Respuesta de ${aiService} a: "${text}"`,
        sender: 'ai'
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return { messages, isLoading, sendMessage };
}