// src/data/courses.js
export const COURSE_CATEGORIES = [
  {
    id: 'all',
    name: 'Todos los cursos',
    icon: 'FaGraduationCap',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'programming',
    name: 'Programación',
    icon: 'FaCode',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'ai',
    name: 'Inteligencia Artificial',
    icon: 'FaRobot',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'data',
    name: 'Ciencia de Datos',
    icon: 'FaChartLine',
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'design',
    name: 'Diseño UX/UI',
    icon: 'FaPalette',
    color: 'bg-pink-100 text-pink-800'
  }
];

export const COURSES_DATA = [
  {
    id: 'react-intro',
    title: 'Introducción a React',
    slug: 'introduccion-react',
    category: 'programming',
    level: 'Principiante',
    duration: 8,
    durationUnit: 'semanas',
    instructor: {
      name: 'Prof. Alex Rivera',
      avatar: '/images/instructors/alex-rivera.jpg',
      bio: 'Especialista en Frontend con 10+ años de experiencia'
    },
    image: '/images/courses/react.jpg',
    rating: 4.8,
    students: 1250,
    price: 0,
    language: 'es',
    badges: ['Nuevo', 'Popular'],
    description: 'Aprende los fundamentos de React desde cero',
    syllabus: [
      'Fundamentos de JSX',
      'Componentes y props',
      'Manejo de estado',
      'Hooks esenciales'
    ]
  },
  {
    id: 'ml-basic',
    title: 'Machine Learning Básico',
    slug: 'machine-learning',
    category: 'ai',
    level: 'Intermedio',
    duration: 10,
    durationUnit: 'semanas',
    instructor: {
      name: 'Dra. Laura Méndez',
      avatar: '/images/instructors/laura-mendez.jpg',
      bio: 'PhD en Inteligencia Artificial por MIT'
    },
    image: '/images/courses/ml.jpg',
    rating: 4.9,
    students: 890,
    price: 0,
    language: 'es',
    badges: ['Recomendado'],
    description: 'Introducción práctica al machine learning con Python',
    syllabus: [
      'Introducción a Pandas y NumPy',
      'Algoritmos supervisados',
      'Redes neuronales básicas',
      'Proyecto final'
    ]
  },
  {
    id: 'python-data',
    title: 'Análisis de Datos con Python',
    slug: 'analisis-datos-python',
    category: 'data',
    level: 'Principiante',
    duration: 6,
    durationUnit: 'semanas',
    instructor: {
      name: 'Ing. Carlos Fuentes',
      avatar: '/images/instructors/carlos-fuentes.jpg',
      bio: 'Data Scientist en Google'
    },
    image: '/images/courses/python.jpg',
    rating: 4.7,
    students: 2100,
    price: 0,
    language: 'es',
    description: 'Domina el análisis de datos con herramientas modernas',
    syllabus: [
      'Pandas para manipulación de datos',
      'Visualización con Matplotlib',
      'Análisis exploratorio',
      'Casos de estudio reales'
    ]
  },
  {
    id: 'advanced-js',
    title: 'JavaScript Avanzado',
    slug: 'javascript-avanzado',
    category: 'programming',
    level: 'Avanzado',
    duration: 12,
    durationUnit: 'semanas',
    instructor: {
      name: 'Prof. Marcos Sánchez',
      avatar: '/images/instructors/marcos-sanchez.jpg',
      bio: 'Autor de "Patrones de Diseño en JS"'
    },
    image: '/images/courses/js-advanced.jpg',
    rating: 4.9,
    students: 750,
    price: 0,
    language: 'es',
    badges: ['Nuevo'],
    description: 'Domina conceptos avanzados de JavaScript moderno',
    syllabus: [
      'Patrones de diseño',
      'Programación funcional',
      'Performance optimization',
      'Web Workers'
    ]
  }
];

// Función utilitaria para obtener cursos por categoría
export const getCoursesByCategory = (categoryId) => {
  return categoryId === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(course => course.category === categoryId);
};

// Función para buscar cursos
export const searchCourses = (query) => {
  const q = query.toLowerCase();
  return COURSES_DATA.filter(course => 
    course.title.toLowerCase().includes(q) || 
    course.instructor.name.toLowerCase().includes(q) ||
    course.description.toLowerCase().includes(q)
  );
};