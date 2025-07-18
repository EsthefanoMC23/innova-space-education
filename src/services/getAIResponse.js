// src/services/getAIResponse.js
export async function getAIResponse({ prompt, apiKey = '', modelo = 'llama3' }) {
  // Puedes usar modelo='llama3custom' si así lo configuras en Ollama
  try {
    const res = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: modelo,
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    // El stream puede ser muy grande. Vamos a esperar al final.
    const data = await res.json();
    // Ollama: la respuesta puede estar en data.message.content
    return { content: data.message?.content || data.message || JSON.stringify(data) };
  } catch (err) {
    return { content: 'Error al conectar con el modelo local.' };
  }
}
