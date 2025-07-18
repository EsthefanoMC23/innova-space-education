import { useState, useRef, useEffect } from 'react';
import { useAI } from '../features/ai/AIContext';

export default function AIChat() {
  // 1. Estados y hooks
  const [input, setInput] = useState('');
  const { 
    messages, 
    askAndSpeak, 
    listen, 
    isSpeaking, 
    isLoading, 
    stopSpeaking 
  } = useAI();
  
  const messagesEndRef = useRef(null);

  // 2. Auto-scroll al recibir nuevos mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 3. Manejo de entrada por voz
  const handleVoiceInput = async () => {
    try {
      const voiceText = await listen();
      if (voiceText.trim()) {
        setInput(voiceText);
      }
    } catch (error) {
      console.error('Error al usar el micrófono:', error);
    }
  };

  // 4. Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      askAndSpeak(input);
      setInput('');
    }
  };

  // 5. Renderizado
  return (
    <div className="ai-chat">
      {/* Área de mensajes */}
      <div className="messages">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`message ${msg.from} ${msg.isError ? 'error' : ''}`}
          >
            <div className="message-content">
              {msg.content}
            </div>
            <div className="message-time">
              {msg.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Formulario de entrada */}
      <form onSubmit={handleSubmit} className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          disabled={isLoading}
          autoFocus
        />

        <div className="button-group">
          {/* Botón de micrófono */}
          <button
            type="button"
            onClick={handleVoiceInput}
            disabled={isLoading || isSpeaking}
            aria-label="Usar micrófono"
            className={`voice-btn ${isSpeaking ? 'active' : ''}`}
          >
            {isSpeaking ? (
              <span className="pulse-animation">🎤</span>
            ) : (
              '🎤'
            )}
          </button>

          {/* Botón de envío/detención */}
          {isSpeaking ? (
            <button
              type="button"
              onClick={stopSpeaking}
              className="stop-btn"
            >
              Detener voz
            </button>
          ) : (
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="send-btn"
            >
              {isLoading ? 'Procesando...' : 'Enviar'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}