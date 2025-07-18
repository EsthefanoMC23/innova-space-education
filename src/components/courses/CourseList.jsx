import { useState } from 'react';
import CourseCard from './CourseCard';
import '@/components/courses/CourseList.css';

export default function CourseList() {
  const [courses] = useState([
    {
      id: 1,
      title: 'Introducción a React',
      category: 'programming',
      level: 'Principiante',
      duration: '8 semanas',
      instructor: 'Prof. Alex Rivera',
      image: '/images/courses/react.jpg',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Machine Learning Básico',
      category: 'ai',
      level: 'Intermedio',
      duration: '10 semanas',
      instructor: 'Dra. Laura Méndez',
      image: '/images/courses/ml.jpg',
      rating: 4.9
    }
  ]);

  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}