import { useAI } from '@/features/ai/AIContext';
import MessageList from './MessageList';

export default function AIChat() {
  const { input, setInput, handleSubmit } = useAI();

  return (
    <div className="ai-chat-container">
      <MessageList />
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}