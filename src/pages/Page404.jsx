// src/pages/Page404.jsx
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import SpaceIllustration from '../assets/illustrations/space-404.svg'; // Ajusta la ruta

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <img 
        src={SpaceIllustration} 
        alt="Error 404" 
        className="w-full max-w-md mb-8"
      />
      <h1 className="text-5xl font-bold text-space-blue mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-space-dark dark:text-space-light mb-4">
        ¡Houston, tenemos un problema!
      </h2>
      <p className="text-lg text-space-light dark:text-gray-300 mb-8 max-w-lg">
        La página que buscas se ha perdido en el espacio. Por favor, verifica la URL o regresa al inicio.
      </p>
      <div className="flex gap-4">
        <Button 
          onClick={() => navigate(-1)} 
          variant="outline"
        >
          Volver atrás
        </Button>
        <Button 
          onClick={() => navigate('/')} 
          variant="primary"
        >
          Ir al inicio
        </Button>
      </div>
    </div>
  );
}