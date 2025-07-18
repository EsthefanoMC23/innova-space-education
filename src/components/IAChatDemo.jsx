import React, { useState } from 'react';

export default function IAChatDemo() {
  const [input, setInput] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [loading, setLoading] = useState(false);
  const [modelo, setModelo] = useState('llama3'); // llama3custom si quieres probar el tuyo

  async function preguntarOllama(mensajeUsuario) {
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: modelo,
        messages: [{ role: 'user', content: mensajeUsuario }]
      }),
    });
    const data = await res.json();
    // Puede ser data.message.content o data.message según versión
    return data.message?.content || data.message || JSON.stringify(data);
  }

  const handleEnviar = async () => {
    setLoading(true);
    setRespuesta('Pensando...');
    try {
      const resp = await preguntarOllama(input);
      setRespuesta(resp);
    } catch (error) {
      setRespuesta('Error al conectar con la IA.');
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Chat con Llama 3 (Ollama Local)</h2>
      <div className="mb-2">
        <label className="mr-2 font-bold">Modelo:</label>
        <select
          value={modelo}
          onChange={e => setModelo(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="llama3">llama3 (Ollama oficial)</option>
          <option value="llama3custom">llama3custom (tu modelo .gguf)</option>
        </select>
      </div>
      <input
        className="border p-2 rounded w-full mb-2"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Escribe tu pregunta..."
        disabled={loading}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mb-2"
        onClick={handleEnviar}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
      <div className="bg-gray-100 p-2 rounded min-h-[40px]">
        <strong>Respuesta:</strong>
        <div>{respuesta}</div>
      </div>
    </div>
  );
}
