// src/components/common/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 bg-space-dark/90 backdrop-blur-sm border-b border-space-light">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-neon-blue tracking-widest">
              InnovaSpace
            </Link>
          </div>
          {/* Menú principal */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <NavLink to="/cursos" className={({ isActive }) => navClass(isActive)}>Cursos</NavLink>
              <NavLink to="/ia" className={({ isActive }) => navClass(isActive)}>IA</NavLink>
              <NavLink to="/mapa-conocimiento" className={({ isActive }) => navClass(isActive)}>Mapa</NavLink>
              <NavLink to="/ranking" className={({ isActive }) => navClass(isActive)}>Ranking</NavLink>
              <NavLink to="/descargas" className={({ isActive }) => navClass(isActive)}>Descargas</NavLink>
              <NavLink to="/musica" className={({ isActive }) => navClass(isActive)}>Música</NavLink>
            </div>
          </div>
          {/* Menú usuario */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2">
                  <img 
                    src={user?.avatar || '/images/avatars/default-user.jpg'} 
                    alt="Avatar" 
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-300">{user?.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="p-2 text-gray-400 hover:text-neon-blue transition-colors"
                  title="Cerrar sesión"
                >
                  <FaSignOutAlt className="h-5 w-5" />
                </button>
              </>
            ) : (
              <>
                <Link to="/ingresar" className="flex items-center space-x-1 text-gray-300 hover:text-neon-blue transition-colors">
                  <FaUserCircle className="h-5 w-5" />
                  <span className="text-sm">Ingresar</span>
                </Link>
                <Link to="/registro" className="flex items-center space-x-1 text-gray-300 hover:text-neon-blue transition-colors">
                  <span className="text-sm">Registrarse</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

function navClass(isActive) {
  return `px-3 py-2 text-sm font-medium transition ${
    isActive ? 'text-neon-blue border-b-2 border-neon-blue' : 'text-gray-300 hover:text-white'
  }`;
}
