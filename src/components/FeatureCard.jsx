// src/components/FeatureCard.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FeatureCard = ({ title, description, icon, link }) => {
  return (
    <Link 
      to={link}
      className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-neon-blue/30 group"
    >
      <div className="icon-container text-4xl mb-4 text-neon-blue group-hover:text-neon-blue-dark transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-neon-blue transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>
      
      <div className="mt-4 flex items-center text-sm text-neon-blue group-hover:text-neon-blue-dark transition-colors duration-300">
        <span>Explorar</span>
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
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string.isRequired
};

export default FeatureCard;