import CourseCard from '@/components/courses/CourseCard'

const coursesData = [
  {
    id: 1,
    title: "Matemáticas Avanzadas",
    description: "Álgebra, cálculo y geometría",
    category: "matemáticas",
    image: "/images/math-bg.jpg"
  },
  {
    id: 2,
    title: "Programación con Python",
    description: "Aprende desde cero hasta nivel avanzado",
    category: "programación",
    image: "/images/python-bg.jpg"
  }
]

export default function Courses() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Cursos
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  )
}