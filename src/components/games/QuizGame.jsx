// src/components/games/QuizGame.jsx
export default function QuizGame({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1)
    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className="p-4">
      {currentQuestion < questions.length ? (
        <div>
          <h3 className="text-xl mb-4">{questions[currentQuestion].text}</h3>
          <div className="grid gap-2">
            {questions[currentQuestion].answers.map((answer, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(answer.correct)}
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3>Puntuación: {score}/{questions.length}</h3>
        </div>
      )}
    </div>
  )
}