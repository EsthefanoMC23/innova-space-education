// src/components/ai/providers/QwenChat.jsx
import { useState } from 'react';

export default function QwenChat() {
  const [response, setResponse] = useState("");

  const handleQuery = async (query) => {
    // Simulación hasta conectar API real
    setResponse(`Respuesta simulada de Qwen a: "${query}". 
    En producción se conectaría a: https://help.aliyun.com/zh/dashscope/developer-reference`);
  };

  return (
    <div className="p-4 border-l-4 border-red-500">
      <div className="bg-red-500/10 p-4 rounded-lg">
        <h3 className="font-bold text-red-500">Qwen</h3>
        <p className="text-sm text-gray-300">Modelo chino de código abierto</p>
        <div className="mt-4 text-white">
          {response || "Envía un mensaje para comenzar..."}
        </div>
      </div>
    </div>
  );
}