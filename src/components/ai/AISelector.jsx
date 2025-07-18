// features/ai/AISelector.jsx
const [selectedAI, setSelectedAI] = useState("deepseek");
const [showAuthModal, setShowAuthModal] = useState(false);

const handleAIChange = (ai) => {
  if (ai === "openai-pro" || ai === "qwen-pro") {
    setShowAuthModal(true);
  }
  setSelectedAI(ai);
};