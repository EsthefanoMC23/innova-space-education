import { useState, useRef, useEffect } from 'react';

export const AssistantWidget = () => {
  const [conversation, setConversation] = useState([
    { 
      role: 'assistant', 
      content: '¡Hola! Soy tu asistente de InnovaSpace. ¿En qué tema necesitas ayuda hoy?' 
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!userInput.trim()) return;

    // Agregar mensaje del usuario
    setConversation(prev => [...prev, { 
      role: 'user', 
      content: userInput 
    }]);
    setUserInput('');

    // Simular respuesta inteligente
    setTimeout(() => {
      const responses = {
        matemáticas: 'Tenemos recursos sobre álgebra, cálculo y geometría. ¿Qué específicamente necesitas?',
        ciencia: 'Puedo explicarte conceptos de física, química o biología. ¿Cuál es tu duda?',
        programación: 'Tenemos material sobre JavaScript, Python y desarrollo web. ¿Qué lenguaje te interesa?',
        historia: 'Conozco sobre historia universal, de Chile y arte. ¿Qué período necesitas?'
      };

      const lowerInput = userInput.toLowerCase();
      const assistantReply = Object.entries(responses).find(([topic]) => 
        lowerInput.includes(topic)
      )?.[1] || 'Pregúntame sobre: matemáticas, ciencia, programación o historia';

      setConversation(prev => [...prev, { 
        role: 'assistant', 
        content: assistantReply 
      }]);
    }, 800);
  };

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 z-50">
      {/* Header con botón de cerrar */}
      <div className="bg-indigo-600 text-white p-3 font-medium flex justify-between items-center">
        <span>Asistente InnovaSpace</span>
        <button className="text-white hover:text-indigo-200">
          ×
        </button>
      </div>
      
      {/* Área de mensajes */}
      <div className="h-64 p-3 overflow-y-auto space-y-3 bg-gray-50">
        {conversation.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs p-3 rounded-lg ${
                msg.role === 'user' 
                  ? 'bg-indigo-100 text-indigo-900' 
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Área de entrada */}
      <div className="p-3 border-t flex gap-2 bg-white">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe tu pregunta..."
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-lg transition disabled:opacity-50"
          disabled={!userInput.trim()}
        >
          →
        </button>
      </div>
    </div>
  );
};