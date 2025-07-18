import { motion } from 'framer-motion';
import { FaRobot, FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { useAI } from '@/features/ai/AIContext';
import MessageList from '@/components/ai/MessageList';
import '@/pages/Chatbot.css';

export default function Chatbot() {
  const { messages, isLoading, isSpeaking, askAI, speak, listen } = useAI();
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const response = await askAI(input);
    speak(response);
    setInput('');
  };

  const handleVoiceInput = async () => {
    const voiceText = await listen();
    if (voiceText) setInput(voiceText);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="orb-decoration"
        ></motion.div>
        <h1>
          <FaRobot /> Asistente IA
        </h1>
        <p>Pregúntame sobre cursos, tecnología o ciencia</p>
      </div>

      <div className="chatbot-messages">
        <MessageList />
      </div>

      <form onSubmit={handleSubmit} className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          disabled={isLoading}
           className="w-full p-3 rounded-md bg-white text-black border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"
        />
        <div className="chatbot-buttons">
          <button
            type="button"
            onClick={handleVoiceInput}
            disabled={isLoading || isSpeaking}
            className={`voice-button ${isSpeaking ? 'active' : ''}`}
          >
            <FaMicrophone />
          </button>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="send-button"
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>

      <div className="chatbot-decoration">
        <div className="circuit-line"></div>
        <div className="floating-dots">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="dot" style={{
              animationDelay: `${i * 0.2}s`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`
            }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}