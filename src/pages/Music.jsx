import { useState } from 'react';

const playlists = [
  {
    id: '4Ldou77MwYfWBV288FirwL',
    title: 'Música para Concentrarse',
    description: 'Sonidos relajantes para mejorar tu enfoque'
  },
  {
    id: '37i9dQZF1DWYY963019MQr',
    title: 'Estudio Profundo',
    description: 'Instrumentales para sesiones de estudio largas'
  },
  {
    id: '5jQ2Fy8vyfC2mE9oew8c2Q',
    title: 'Sonidos Espaciales',
    description: 'Ambientes cósmicos para inspirarte'
  },
  {
    id: '2EoheVFjqIxgJMb8VnDRtZ',
    title: 'Clásicos para Aprender',
    description: 'Música clásica que estimula la mente'
  }
];

export default function Music() {
  const [currentPlaylist, setCurrentPlaylist] = useState(playlists[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark to-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Música para el Aprendizaje
        </h2>

        {/* Selector de playlists */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => setCurrentPlaylist(playlist)}
              className={`p-3 rounded-lg transition ${currentPlaylist.id === playlist.id ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              <h3 className="font-medium text-white">{playlist.title}</h3>
              <p className="text-xs text-gray-300">{playlist.description}</p>
            </button>
          ))}
        </div>

        {/* Reproductor */}
        <div className="bg-[url('/assets/images/space-bg.jpg')] bg-cover rounded-xl p-6 shadow-lg border border-gray-700">
          <iframe
            src={`https://open.spotify.com/embed/playlist/${currentPlaylist.id}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}