import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Bienvenido a InnovaSpace
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard 
            title="Cursos" 
            description="Explora nuestros cursos interactivos"
            icon="📚"
            link="/cursos"
          />
          <FeatureCard 
            title="Asistente IA" 
            description="Prueba nuestro asistente inteligente"
            icon="🤖"
            link="/ia"
          />
          <FeatureCard 
            title="Registro" 
            description="Únete para guardar tu progreso"
            icon="✍️"
            link="/registro"
          />
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ title, description, icon, link }) => (
  <Link to={link} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
)