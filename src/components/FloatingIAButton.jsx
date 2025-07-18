import { useAI } from '@/features/ai/AIContext';
import { useEffect, useState } from 'react';

const FloatingIAButton = () => {
  const { toggleIA, isIAOpen, unreadMessages } = useAI();
  const [isPulsing, setIsPulsing] = useState(false);

  // Efecto para animación de pulso
  useEffect(() => {
    if (unreadMessages > 0) {
      const interval = setInterval(() => {
        setIsPulsing(prev => !prev);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [unreadMessages]);

  return (
    <button
      onClick={toggleIA}
      className={`
        fixed bottom-6 right-6 p-4 rounded-full shadow-xl z-40 transition-all
        ${isIAOpen ? 'bg-indigo-700 rotate-45' : 'bg-indigo-600 hover:bg-indigo-700'}
        ${isPulsing ? 'animate-pulse ring-2 ring-offset-2 ring-indigo-500' : ''}
      `}
      aria-label={isIAOpen ? "Cerrar asistente IA" : "Abrir asistente IA"}
    >
      <div className="relative">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white transition-transform"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
          />
        </svg>
        
        {unreadMessages > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadMessages}
          </span>
        )}
      </div>
    </button>
  );
};

export default FloatingIAButton;