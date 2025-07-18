// src/components/common/ui/Card.jsx
export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 shadow-md ${className}`}>
      {children}
    </div>
  )
}