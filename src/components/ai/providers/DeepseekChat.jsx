// src/features/ai/providers/DeepSeekChat.jsx
import { useState } from 'react';

export default function DeepSeekChat() {
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy tu asistente de DeepSeek. ¿En qué puedo ayudarte hoy?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Simulación de respuesta mientras integras la API real
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
    
    // Respuesta simulada
    setTimeout(() => {
      setMessages(prev => [...prev, 
        { text: "Actualmente estoy en modo demostración. Pronto me conectaré a la API real de DeepSeek.", isUser: false }
      ]);
    }, 1000);
  };

  return (
    <div className="bg-space-dark rounded-xl p-6 h-[500px] flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-3/4 rounded-lg px-4 py-2 ${
              msg.isUser 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-100'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}