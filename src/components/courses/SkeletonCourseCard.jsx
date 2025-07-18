// src/components/courses/SkeletonCourseCard.jsx
import '@/components/courses/SkeletonCourseCard.css';

const SkeletonCourseCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-badge"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-meta">
          <div className="skeleton-instructor"></div>
          <div className="skeleton-rating"></div>
        </div>
        <div className="skeleton-footer">
          <div className="skeleton-duration"></div>
          <div className="skeleton-students"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCourseCard;