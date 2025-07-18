// src/services/api/deepseek.js
export async function sendToDeepSeek(message, model = 'deepseek-chat') {
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: message }]
      })
    });
    
    if (!response.ok) throw new Error('Error en la API');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Asegúrate de exportar la función
export default { sendToDeepSeek };