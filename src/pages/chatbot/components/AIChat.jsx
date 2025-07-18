import { useState, useRef, useEffect } from 'react';
import { useAI } from '@/features/ai/AIContext';
import '@/pages/Chatbot/components/AIChat.css';

export default function AIChat() {
  const { messages, isLoading, isSpeaking, askAI, speak, listen, stopSpeaking } = useAI();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll al final
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleVoiceInput = async () => {
    const voiceText = await listen();
    if (voiceText) setInput(voiceText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const response = await askAI(input);
    speak(response);
    setInput('');
  };

  return (
    <div className="ai-chat-container">
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <h3>Asistente Educativo IA</h3>
            <p>Pregúntame sobre cursos, ciencia o tecnología</p>
          </div>
        ) : (
          messages.map((msg, i) => (
            <div key={i} className={`message ${msg.from}`}>
              <div className="message-content">{msg.content}</div>
              <div className="message-time">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          disabled={isLoading}
          autoFocus
        />
        
        <div className="button-group">
          <button
            type="button"
            onClick={handleVoiceInput}
            disabled={isLoading || isSpeaking}
            className={`voice-btn ${isSpeaking ? 'active' : ''}`}
            aria-label="Usar micrófono"
          >
            {isSpeaking ? '🎤 🔊' : '🎤'}
          </button>

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="submit-btn"
          >
            {isLoading ? 'Pensando...' : 'Enviar'}
          </button>
        </div>
      </form>

      {isSpeaking && (
        <button onClick={stopSpeaking} className="stop-speaking-btn">
          Detener voz
        </button>
      )}
    </div>
  );
}