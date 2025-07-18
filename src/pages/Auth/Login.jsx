import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulación de autenticación - reemplaza con tu API real
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({ 
          user: { 
            id: '123', 
            email, 
            name: email.split('@')[0],
            avatar: '/images/avatars/default-user.jpg'
          }, 
          token: 'fake-jwt-token'
        }), 1000)
      );

      login(response.user);
      toast.success('¡Bienvenido!');
      navigate('/');
    } catch (error) {
      toast.error('Credenciales incorrectas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-dark">
      <div className="w-full max-w-md p-8 space-y-8 bg-space-cadet-dark rounded-xl border border-space-light">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neon-blue">Iniciar sesión</h2>
          <p className="mt-2 text-gray-400">
            ¿No tienes cuenta?{' '}
            <Link to="/auth/register" className="text-neon-blue hover:underline">
              Regístrate
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-space-dark border border-space-light rounded-md text-gray-100 focus:outline-none focus:ring-neon-blue focus:border-neon-blue"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-space-dark border border-space-light rounded-md text-gray-100 focus:outline-none focus:ring-neon-blue focus:border-neon-blue"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-space-dark bg-neon-blue hover:bg-neon-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-blue ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Cargando...' : 'Iniciar sesión'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}