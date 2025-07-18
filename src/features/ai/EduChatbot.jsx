import React, { useState } from "react";
import { NIVELES, ASIGNATURAS } from "./levels";
import { getAIResponse } from "../../services/getAIResponse";

export default function EduChatbot() {
  const [nivel, setNivel] = useState(NIVELES[0]);
  const [asignatura, setAsignatura] = useState(ASIGNATURAS[0]);
  const [mensaje, setMensaje] = useState("");
  const [historial, setHistorial] = useState([]);
  const [apiKey, setApiKey] = useState(""); // Para usar OpenAI real
  const [cargando, setCargando] = useState(false);

  async function enviarPregunta() {
    if (!mensaje.trim()) return;
    setCargando(true);

    const prompt = `
Eres un profesor experto en ${asignatura} para estudiantes de ${nivel} en Chile. Si recibes una pregunta, duda o ejercicio, responde explicando paso a paso cómo resolverlo, indicando todas las fórmulas, leyes, propiedades o razonamientos usados, y da la respuesta final SOLO después de la explicación. Usa ejemplos y analogías útiles para que cualquier estudiante lo entienda. Si el problema tiene varios métodos, menciona el más usado en colegios chilenos.
Pregunta: ${mensaje}
`;

    const nuevoHistorial = [
      ...historial,
      { rol: "user", texto: mensaje }
    ];

    try {
      const aiResp = await getAIResponse({ prompt, apiKey });
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
    setCargando(false);
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-8 border border-gray-200 text-gray-900">
      <h2 className="text-3xl font-extrabold mb-3 text-center text-gray-900">
        Asistente IA Educativa
      </h2>
      <div className="flex flex-row gap-3 mb-4 justify-center">
        <select value={nivel} onChange={e => setNivel(e.target.value)} className="p-2 rounded-xl border shadow bg-white/90 text-gray-900 font-bold">
          {NIVELES.map((n, i) => <option key={i} value={n}>{n}</option>)}
        </select>
        <select value={asignatura} onChange={e => setAsignatura(e.target.value)} className="p-2 rounded-xl border shadow bg-white/90 text-gray-900 font-bold">
          {ASIGNATURAS.map((a, i) => <option key={i} value={a}>{a}</option>)}
        </select>
      </div>
      <div className="bg-gray-100 rounded-lg p-4 min-h-[220px] max-h-[340px] overflow-y-auto mb-4 shadow-inner text-gray-900">
        {historial.length === 0 && (
          <div className="text-center text-gray-400">¡Comienza tu conversación con la IA educativa!</div>
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
              style={{ maxWidth: '75%' }}
            >
              <strong className="block mb-1">{msg.rol === "user" ? "Tú" : "IA"}</strong>
              <span>{msg.texto}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-2 mb-4">
        <input
          className="flex-1 border rounded-xl p-2 bg-white/90 text-gray-900 focus:ring-2 focus:ring-cyan-400 shadow"
          type="text"
          placeholder="Escribe tu pregunta aquí..."
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          onKeyDown={e => e.key === "Enter" && enviarPregunta()}
          disabled={cargando}
        />
        <button
          className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2 rounded-xl shadow-lg font-bold uppercase hover:brightness-110 transition disabled:opacity-50"
          onClick={enviarPregunta}
          disabled={cargando}
        >
          {cargando ? "Enviando..." : "Preguntar"}
        </button>
      </div>
      <input
        className="w-full border rounded-xl p-2 mb-1 bg-white/80 text-gray-700 text-sm focus:ring-2 focus:ring-violet-300"
        type="password"
        placeholder="(Opcional) API Key OpenAI para respuestas premium"
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
      />
      {/* <div className="text-xs text-gray-400 mt-2 text-center italic">
        Tu conversación <b>no se guarda</b>. Solo existe mientras la ventana esté abierta.<br/>
        Powered by <span className="text-blue-700 font-semibold">OpenAI</span>
      </div> */}
    </div>
  );
}
