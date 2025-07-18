// src/components/common/Footer/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-space-dark text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">InnovaSpace Education</h3>
            <p className="text-space-light mt-2">© {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-neon-blue transition">Términos</a>
            <a href="#" className="hover:text-neon-blue transition">Privacidad</a>
            <a href="#" className="hover:text-neon-blue transition">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  )
}