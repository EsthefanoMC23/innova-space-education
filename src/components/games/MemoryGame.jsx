// src/components/games/MemoryGame.jsx
export default function MemoryGame({ cards }) {
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])

  const handleClick = (id) => {
    if (flipped.length < 2 && !flipped.includes(id) && !solved.includes(id)) {
      setFlipped([...flipped, id])
    }
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {cards.map(card => (
        <div
          key={card.id}
          onClick={() => handleClick(card.id)}
          className={`h-24 flex items-center justify-center rounded cursor-pointer ${
            flipped.includes(card.id) || solved.includes(card.id) 
              ? 'bg-blue-500' 
              : 'bg-gray-700'
          }`}
        >
          {(flipped.includes(card.id) || solved.includes(card.id)) && card.value}
        </div>
      ))}
    </div>
  )
}