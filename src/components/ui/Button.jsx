// src/components/ui/Button.jsx

export function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white'
  }

  return (
    <button
      className={`px-4 py-2 rounded-md transition ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Exportación por defecto, por si acaso
export default Button;
