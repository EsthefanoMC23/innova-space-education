// src/components/common/ui/Modal.jsx
import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
        <button 
          onClick={onClose}
          className="ml-auto block text-gray-400 hover:text-white"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}