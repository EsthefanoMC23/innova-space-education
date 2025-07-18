// src/components/ai/providers/OpenAIChat.jsx
import { useState } from 'react';
import { useAIChat } from '@/features/ai/useAIChat';

export default function OpenAIChat() {
  const { messages, isLoading, sendMessage } = useAIChat('OpenAI');
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="border-l-4 border-green-500 p-4">
      <div className="bg-green-500/10 p-4 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <h3 className="font-bold text-green-500">ChatGPT</h3>
          <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded-full ml-auto">
            v3.5
          </span>
        </div>

        <div className="space-y-4 h-64 overflow-y-auto mb-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              <p>¿En qué puedo ayudarte hoy?</p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3/4 rounded-lg px-3 py-2 ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-100'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 px-3 py-2 rounded-lg text-gray-300">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white disabled:opacity-50"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}