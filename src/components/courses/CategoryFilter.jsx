import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente para filtrar cursos por categoría
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.categories - Lista de categorías disponibles
 * @param {string} props.selectedCategory - Categoría actualmente seleccionada
 * @param {Function} props.onCategoryChange - Función para manejar el cambio de categoría
 * @returns {JSX.Element} Componente de filtro de categorías
 */
const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filter mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-100">Filtrar por categoría:</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === 'all'
              ? 'bg-neon-blue text-space-dark font-bold'
              : 'bg-space-light-opaque text-gray-100 hover:bg-space-lighter'
          }`}
        >
          Todas
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category.slug
                ? 'bg-neon-blue text-space-dark font-bold'
                : 'bg-space-light-opaque text-gray-100 hover:bg-space-lighter'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// Propiedades del componente
CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

// Exportación por defecto (recomendado para componentes principales)
export default CategoryFilter;