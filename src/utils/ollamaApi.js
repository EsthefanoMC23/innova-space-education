// Por ejemplo en src/utils/ollamaApi.js
export async function preguntarOllama(mensajeUsuario) {
  const respuesta = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: "Meta-Llama-3-8B-Instruct.Q4_0",
      messages: [{ role: "user", content: mensajeUsuario }]
    }),
  });

  const data = await respuesta.json();
  // El mensaje está en data.message.content o en data.message (dependiendo del formato)
  return data.message.content;
}
