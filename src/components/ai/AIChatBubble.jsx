// components/ai/AIChatBubble.jsx (Versión Final)
import { motion } from 'framer-motion';
import Markdown from 'react-markdown'; // Para formato de texto

export default function AIChatBubble({ 
  message, 
  sender = 'ai',
  timestamp 
}) {
  const isAI = sender === 'ai';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-3`}
    >
      <div className={`max-w-3/4 rounded-xl p-4 ${
        isAI 
          ? 'bg-gray-700 text-white' 
          : 'bg-blue-600 text-white'
      }`}>
        <Markdown>{message}</Markdown>
        <div className={`text-xs mt-1 ${
          isAI ? 'text-gray-400' : 'text-blue-200'
        }`}>
          {new Date(timestamp).toLocaleTimeString()}
        </div>
      </div>
    </motion.div>
  );
}