// Versión simple para el chatbot básico (sin API externa)
export const getAIResponse = async (input) => {
  // Simula un pequeño retardo de red
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const lowerInput = input.toLowerCase();
  
  // Respuestas predefinidas para el modo básico
  const responses = {
    "hola": "¡Hola! 👋 Soy MIRA, tu asistente virtual. ¿En qué puedo ayudarte?",
    "cursos": "Tenemos cursos de:\n- Programación 💻\n- Matemáticas 🧮\n- Ciencias 🔍\nVisita nuestra página de cursos para más información.",
    "precio": "¡Todos nuestros cursos son completamente gratuitos! 🎉",
    "contacto": "Puedes escribirnos a: sthefanomc@gmail.com",
    "default": "Disculpa, soy un asistente básico. Para preguntas complejas visita nuestra sección de IA avanzada."
  };

  // Busca coincidencias parciales
  const matchedKey = Object.keys(responses).find(key => 
    lowerInput.includes(key)
  );

  return matchedKey ? responses[matchedKey] : responses.default;
};