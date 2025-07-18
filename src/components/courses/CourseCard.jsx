import { FaStar, FaRegStar, FaUserTie, FaUserGraduate, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CourseCard = ({
  title,
  category,
  level,
  duration,
  durationUnit = 'horas',
  instructor,
  image,
  rating,
  students,
  badges = [],
  onClick
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400 inline-block" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400 opacity-50 inline-block" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400 inline-block" />);
      }
    }
    
    return stars;
  };

  return (
    <div 
      className="relative bg-space-cadet-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-space-light-opaque"
      onClick={onClick}
    >
      {/* Badges */}
      {badges.length > 0 && (
        <div className="absolute top-2 left-2 z-10 flex gap-2">
          {badges.map((badge, index) => (
            <span 
              key={index}
              className={`px-2 py-1 text-xs font-bold rounded-full ${
                badge === 'Nuevo' 
                  ? 'bg-purple-500 text-white' 
                  : badge === 'Popular' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-blue-500 text-white'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      )}
      
      {/* Course Image */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent opacity-70"></div>
      </div>
      
      {/* Course Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 h-14">{title}</h3>
        
        {/* Meta Info */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="flex items-center text-sm text-neon-blue">
            <FaClock className="mr-1" />
            {duration} {durationUnit}
          </span>
          <span className="text-sm bg-space-light-opaque px-2 py-1 rounded">
            {level}
          </span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="mr-2">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-300">
            {rating.toFixed(1)} ({students?.toLocaleString() || 0}+)
          </span>
        </div>
        
        {/* Instructor */}
        <div className="flex items-center text-sm text-gray-300 mb-4">
          <FaUserTie className="mr-2 text-neon-blue" />
          <span className="truncate">{instructor?.name || instructor}</span>
        </div>
        
        {/* Action Button */}
        <button 
          className="w-full bg-neon-blue hover:bg-neon-blue-dark text-space-dark font-bold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          Ver curso
        </button>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  level: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  durationUnit: PropTypes.string,
  instructor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string
    })
  ]).isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  students: PropTypes.number,
  badges: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
};

export default CourseCard;