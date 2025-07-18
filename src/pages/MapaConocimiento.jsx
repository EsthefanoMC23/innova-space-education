// src/pages/MapaConocimiento.jsx
import React from 'react';

export default function MapaConocimiento() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24 px-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Mapa del Conocimiento</h1>

      <p className="text-lg max-w-3xl mx-auto mb-8 text-center">
        Explora cómo se conectan diferentes áreas del conocimiento en nuestra plataforma educativa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Ciencias</h2>
          <p>Física, Química, Biología, Astronomía...</p>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Matemáticas</h2>
          <p>Álgebra, Cálculo, Estadística, Geometría...</p>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Tecnología</h2>
          <p>Programación, IA, Diseño, Robótica...</p>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Historia y Humanidades</h2>
          <p>Historia, Filosofía, Literatura, Arte...</p>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Idiomas</h2>
          <p>Inglés, Español, Portugués, Francés...</p>
        </div>

        <div className="bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Educación Financiera</h2>
          <p>Economía, Emprendimiento, Inversión...</p>
        </div>
      </div>
    </div>
  );
}
