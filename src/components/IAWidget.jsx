import React, { useState } from "react";
import { getAIResponse } from "@/services/getAIResponse";

export default function IAWidget() {
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [historial, setHistorial] = useState([]);
  const [loading, setLoading] = useState(false);

  async function enviarMensaje() {
    if (!mensaje.trim()) return;
    setLoading(true);
    const nuevoHistorial = [
      ...historial,
      { rol: "user", texto: mensaje }
    ];

    try {
      const aiResp = await getAIResponse({ prompt: mensaje });
      setHistorial([
        ...nuevoHistorial,
        { rol: "ia", texto: aiResp.content }
      ]);
    } catch (err) {
      setHistorial([
        ...nuevoHistorial,
        { rol: "ia", texto: "Error en la respuesta. Intenta de nuevo." }
      ]);
    }
    setMensaje("");
    setLoading(false);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Botón flotante */}
      {!open && (
        <button
          className="bg-neon-blue text-white rounded-full shadow-xl p-4 hover:scale-110 transition-all"
          onClick={() => setOpen(true)}
          aria-label="Abrir chat IA"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-7 h-7">
            <path fill="currentColor" d="M18 21v-4h-2v4h2zm1.293-8.707a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L16 14.586l3.293-3.293z"/>
          </svg>
        </button>
      )}

      {/* Ventana del chatbot */}
      {open && (
        <div className="w-[340px] max-w-[92vw] bg-white shadow-2xl rounded-2xl border border-gray-200 text-gray-900 flex flex-col overflow-hidden">
          {/* Barra superior */}
          <div className="flex justify-between items-center px-4 py-2 bg-space-dark text-white font-bold">
            <span>MIRA - Asistente</span>
            <button
              onClick={() => setOpen(false)}
              className="text-xl font-bold hover:text-neon-blue transition"
              title="Minimizar"
              aria-label="Minimizar chat"
            >
              ×
            </button>
          </div>
          {/* Área de chat */}
          <div className="flex-1 p-4 overflow-y-auto" style={{minHeight: 120, maxHeight: 280}}>
            {historial.length === 0 && (
              <div className="text-gray-400 text-sm text-center mt-10">
                ¡Hola! Soy MIRA. <br /> Pregúntame lo que quieras.
              </div>
            )}
            {historial.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.rol === "user" ? "justify-end" : "justify-start"} mb-2`}
              >
                <div className={`rounded-xl px-4 py-2 shadow-md text-base
                  ${msg.rol === "user"
                    ? "bg-gradient-to-r from-gray-900 to-blue-900 text-white self-end"
                    : "bg-gradient-to-br from-blue-200 to-violet-100 text-blue-900 self-start border border-blue-300"
                  }`}
                  style={{ maxWidth: '80%' }}
                >
                  <strong className="block mb-1">{msg.rol === "user" ? "Tú" : "IA"}</strong>
                  <span>{msg.texto}</span>
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-blue-700 text-xs mt-2">Pensando...</div>
            )}
          </div>
          {/* Input */}
          <div className="flex border-t px-2 py-2 bg-gray-50">
            <input
              className="flex-1 rounded-lg px-2 py-1 text-gray-900 outline-none bg-white"
              placeholder="Escribe tu pregunta..."
              value={mensaje}
              onChange={e => setMensaje(e.target.value)}
              disabled={loading}
              onKeyDown={e => e.key === "Enter" && enviarMensaje()}
            />
            <button
              className="ml-2 bg-neon-blue text-white px-3 py-1 rounded-lg transition disabled:opacity-50"
              onClick={enviarMensaje}
              disabled={loading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 21 23 12 2 3v7l15 2-15 2v7Z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
