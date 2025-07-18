// src/pages/Facts.jsx
import { useEffect, useState } from 'react';

const dailyFacts = {
  '07-12': [
    "Día del Abogado en México",
    "En 1906 nació Pablo Neruda, poeta chileno"
  ],
  // ... más datos
};

export default function Facts() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const today = new Date();
    const todayKey = `${today.getMonth() + 1}-${today.getDate()}`;
    setFacts(dailyFacts[todayKey] || ["Hoy es un gran día para aprender algo nuevo"]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-300">
          ¿Sabías qué?
        </h2>
        
        <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
          <div className="grid gap-4">
            {facts.map((fact, i) => (
              <div key={i} className="bg-gray-900 p-4 rounded-lg flex items-start">
                <span className="text-yellow-400 mr-2">✦</span>
                <p className="text-gray-100">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}