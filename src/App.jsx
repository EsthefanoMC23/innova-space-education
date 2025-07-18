// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { AIProvider } from '@/features/ai/AIContext';
import Layout from '@/components/Layout';
import LoadingSpinner from '@/components/common/LoadingSpinner';

// Lazy load de páginas principales
const Home = lazy(() => import('@/pages/Home'));
const Courses = lazy(() => import('@/pages/Courses'));
const Login = lazy(() => import('@/pages/Auth/Login'));
const Register = lazy(() => import('@/pages/Auth/Register'));
const Music = lazy(() => import('@/pages/Music'));
const KnowledgeMap = lazy(() => import('@/pages/MapaConocimiento'));
const Ranking = lazy(() => import('@/pages/Ranking'));
const Downloads = lazy(() => import('@/pages/Downloads'));
const NotFound = lazy(() => import('@/pages/Page404'));

export default function App() {
  return (
    <AuthProvider>
      <AIProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner fullScreen />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Courses />} />
                <Route path="/musica" element={<Music />} />
                <Route path="/mapa-conocimiento" element={<KnowledgeMap />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/descargas" element={<Downloads />} />
                <Route path="/ingresar" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </AIProvider>
    </AuthProvider>
  );
}

