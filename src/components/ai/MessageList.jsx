import styles from '@/components/ai/MessageList.module.css';

export default function MessageList({ messages, isLoading }) {
  return (
    <div className={styles.messagesContainer}>
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`${styles.message} ${
            message.from === 'ai' ? styles.aiMessage : styles.userMessage
          }`}
        >
          <div className={styles.messageContent}>
            {message.content}
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div className={`${styles.message} ${styles.aiMessage}`}>
          <div className={styles.messageContent}>
            <div className={styles.typingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}