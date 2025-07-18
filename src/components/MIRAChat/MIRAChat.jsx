import { useState, useEffect, useRef } from 'react'
import { FiMessageSquare, FiChevronDown, FiChevronUp, FiSend, FiX } from 'react-icons/fi'

const quickResponses = {
  "hola": "¡Hola! 👋 Soy MIRA, tu asistente en InnovaSpace. ¿En qué puedo ayudarte hoy?",
  "cursos": "Tenemos cursos gratuitos de:\n- Matemáticas 🧮\n- Programación 💻\n- Ciencias 🔬\n\nVer más en [/cursos](/cursos)",
  "precios": "¡Todos nuestros recursos son 100% gratuitos! 🎉",
  "contacto": "📩 Escríbenos a: sthefanomc@gmail.com",
  "certificados": "Actualmente no entregamos certificados. ¡El conocimiento es tu mejor credencial! 📚",
  "default": "💡 Disculpa, soy un chatbot básico. Para consultas avanzadas visita [IA Avanzada](/ia) 🚀"
}

export const MIRAChat = () => {
  const [message, setMessage] = useState('')
  const [conversation, setConversation] = useState([])
  const [isMinimized, setIsMinimized] = useState(true)
  const [hasNewMessage, setHasNewMessage] = useState(false)
  const messagesEndRef = useRef(null)

  // Efecto para notificaciones
  useEffect(() => {
    if (hasNewMessage) {
      const timer = setTimeout(() => setHasNewMessage(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [hasNewMessage])

  // Auto-scroll al final del chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [conversation])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) return
    
    // Añadir mensaje del usuario
    const userMsg = { text: message, sender: 'user' }
    setConversation(prev => [...prev, userMsg])
    setMessage('')
    
    // Simular respuesta después de un breve retraso
    setTimeout(() => {
      const lowerMsg = message.toLowerCase()
      const foundResponse = Object.entries(quickResponses)
        .find(([key]) => lowerMsg.includes(key))
      
      const botResponse = {
        text: foundResponse ? foundResponse[1] : quickResponses.default,
        sender: 'mira'
      }
      
      setConversation(prev => [...prev, botResponse])
      setHasNewMessage(isMinimized)
    }, 500)
  }

  const toggleChat = () => {
    setIsMinimized(!isMinimized)
    if (!isMinimized) setHasNewMessage(false)
  }

  const clearChat = () => {
    setConversation([])
  }

  return (
    <>
      {/* Botón flotante */}
      <button 
        onClick={toggleChat}
        className={`
          fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
          flex items-center justify-center shadow-lg
          bg-mira-purple-500 hover:bg-mira-purple-600
          text-white transition-all duration-300
          ${hasNewMessage ? 'animate-pulse-slow ring-2 ring-white' : ''}
        `}
        aria-label="Abrir chat"
      >
        <FiMessageSquare size={24} />
        {hasNewMessage && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        )}
      </button>
      
      {/* Ventana del chat */}
      <div className={`
        fixed bottom-20 right-6 z-50 w-80 max-w-[calc(100vw-3rem)]
        bg-mira-bg rounded-lg shadow-mira-dark border border-gray-700
        transition-all duration-300 transform origin-bottom-right
        ${isMinimized ? 
          'opacity-0 scale-95 pointer-events-none' : 
          'opacity-100 scale-100'
        }
      `}>
        {/* Header */}
        <div 
          className="
            bg-mira-purple-600 p-3 
            text-white flex justify-between items-center 
            cursor-pointer rounded-t-lg
          "
          onClick={toggleChat}
        >
          <h3 className="font-bold text-lg">MIRA - Asistente</h3>
          <div className="flex items-center space-x-2">
            <button 
              onClick={(e) => {
                e.stopPropagation()
                clearChat()
              }}
              className="p-1 hover:bg-mira-purple-500 rounded"
              aria-label="Limpiar chat"
            >
              <FiX size={18} />
            </button>
            {isMinimized ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </div>
        </div>
        
        {/* Cuerpo del chat */}
        <div className="h-60 overflow-y-auto p-3 bg-space-dark/5">
          {conversation.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <FiMessageSquare size={32} className="text-mira-purple-500 mb-2" />
              <p className="text-gray-600">Pregúntame sobre cursos, precios o contacto</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['hola', 'cursos', 'precios'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setMessage(item)}
                    className="text-xs bg-mira-purple-100 text-mira-purple-800 px-3 py-1 rounded-full hover:bg-mira-purple-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            conversation.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div 
                  className={`
                    max-w-[85%] p-3 rounded-lg text-sm
                    animate-mira-fade-in
                    ${
                      msg.sender === 'user'
                        ? 'bg-mira-purple-500 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }
                  `}
                >
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Formulario */}
        <form 
          onSubmit={handleSubmit} 
          className="p-3 border-t border-gray-200 bg-white rounded-b-lg"
        >
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="
                flex-1 p-2 border rounded-l text-sm 
                focus:outline-none focus:ring-1 focus:ring-mira-purple-500
                border-gray-300
              "
              aria-label="Mensaje para MIRA"
            />
            <button 
              type="submit" 
              className="
                bg-mira-purple-500 text-white 
                py-2 px-4 rounded-r hover:bg-mira-purple-600 
                transition-colors disabled:opacity-50
              "
              disabled={!message.trim()}
            >
              <FiSend size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  )
}