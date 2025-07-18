import { useState, useMemo } from 'react';
import { FaGraduationCap, FaCode, FaRobot, FaChartLine, FaFilter } from 'react-icons/fa';
import CourseCard from '@/components/courses/CourseCard';
import '@/pages/Courses.css';

// Datos de cursos movidos fuera del componente para mejor rendimiento
const COURSES_DATA = [
  {
    id: 1,
    title: 'Introducción a React',
    category: 'programming',
    level: 'Principiante',
    duration: '8 semanas',
    instructor: 'Prof. Alex Rivera',
    image: '/images/courses/react.jpg',
    rating: 4.8,
    badges: ['Nuevo', 'Popular']
  },
  {
    id: 2,
    title: 'Machine Learning Básico',
    category: 'ai',
    level: 'Intermedio',
    duration: '10 semanas',
    instructor: 'Dra. Laura Méndez',
    image: '/images/courses/ml.jpg',
    rating: 4.9,
    badges: ['Recomendado']
  },
  {
    id: 3,
    title: 'Análisis de Datos con Python',
    category: 'data',
    level: 'Principiante',
    duration: '6 semanas',
    instructor: 'Ing. Carlos Fuentes',
    image: '/images/courses/python.jpg',
    rating: 4.7
  },
  {
    id: 4,
    title: 'Desarrollo Web Avanzado',
    category: 'programming',
    level: 'Avanzado',
    duration: '12 semanas',
    instructor: 'Prof. Marcos Sánchez',
    image: '/images/courses/web.jpg',
    rating: 4.9,
    badges: ['Nuevo']
  }
];

const CATEGORIES = [
  { id: 'all', name: 'Todos los cursos', icon: <FaGraduationCap /> },
  { id: 'programming', name: 'Programación', icon: <FaCode /> },
  { id: 'ai', name: 'Inteligencia Artificial', icon: <FaRobot /> },
  { id: 'data', name: 'Ciencia de Datos', icon: <FaChartLine /> }
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrado optimizado con useMemo
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter(course => {
      const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="courses-page">
      <header className="courses-header">
        <div className="header-content">
          <h1><FaGraduationCap /> Nuestro Catálogo de Cursos</h1>
          <p>Domina las tecnologías del futuro con nuestros programas educativos</p>
          
          {/* Barra de búsqueda añadida */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar cursos o instructores..."
              className="w-full p-3 rounded-md bg-white text-black border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="courses-container">
        <div className="courses-sidebar">
          <div className="sidebar-header">
            <FaFilter />
            <h2>Filtrar por</h2>
          </div>
          
          <ul className="categories-list">
            {CATEGORIES.map((cat) => (
              <li
                key={cat.id}
                className={activeCategory === cat.id ? 'active' : ''}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.icon} {cat.name}
              </li>
            ))}
          </ul>

          {/* Sección adicional para filtros futuros */}
          <div className="filters-section">
            <h3>Nivel de dificultad</h3>
            {/* Aquí puedes añadir checkboxes para filtrar por nivel */}
          </div>
        </div>

        <div className="courses-content">
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map(course => (
                <CourseCard 
                  key={course.id}
                  {...course}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No se encontraron cursos</h3>
              <p>Intenta con otros filtros o términos de búsqueda</p>
            </div>
          )}

          {/* Mostrar contador de resultados */}
          <div className="results-counter">
            Mostrando {filteredCourses.length} de {COURSES_DATA.length} cursos
          </div>
        </div>
      </div>
    </div>
  );
}