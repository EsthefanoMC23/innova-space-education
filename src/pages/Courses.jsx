// src/pages/Courses.jsx
import EduChatbot from '@/features/ai/EduChatbot';

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          IA Educativa por Niveles
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          Selecciona tu nivel y asignatura, y pregúntale cualquier cosa a la IA. Recibe explicaciones paso a paso para todas tus dudas escolares.
        </p>
        <EduChatbot />
        <div className="text-xs text-gray-400 mt-2 text-center italic">
          Tu conversación <b>no se guarda</b>. Solo existe mientras la ventana esté abierta.<br/>
          Powered by <span className="text-blue-700 font-semibold">OpenAI</span>
        </div>
      </div>
    </div>
  );
}
