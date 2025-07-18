// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Bienvenido a InnovaSpace {user ? user.name : ''}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <FeatureCard 
            title="Cursos Interactivos" 
            description="Aprende con nuestra plataforma educativa innovadora"
            icon="📚"
            link="/cursos"
            badge="Nuevo"
          />
          <FeatureCard 
            title="Música para Aprender" 
            description="Playlist de estudio y música relajante"
            icon="🎵"
            link="/musica"
            badge="Nuevo"
          />
          <FeatureCard 
            title={user ? "Mi Perfil" : "Regístrate"} 
            description={user ? "Administra tu cuenta" : "Crea tu cuenta para guardar tu progreso"}
            icon={user ? "👤" : "✍️"}
            link={user ? "/perfil" : "/registro"}
          />
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ title, description, icon, link, badge }) => (
  <Link 
    to={link} 
    className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-indigo-100 group"
  >
    {/* Badge */}
    {badge && (
      <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
        badge === 'Nuevo' ? 'bg-purple-100 text-purple-800' : 
        badge === 'Popular' ? 'bg-orange-100 text-orange-800' : 
        'bg-blue-100 text-blue-800'
      }`}>
        {badge}
      </span>
    )}
    {/* Icon */}
    <div className="text-5xl mb-4 group-hover:text-indigo-600 transition-colors duration-300">
      {icon}
    </div>
    {/* Content */}
    <div className="text-left">
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>
    </div>
    {/* Arrow indicator */}
    <div className="mt-4 flex items-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-sm font-medium">Ver más</span>
      <svg 
        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </Link>
);
