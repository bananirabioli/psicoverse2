'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chatbot FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 md:bottom-6 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-lg p-6 w-full max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-2">Asistente Virtual</h3>
            <p className="text-gray-600 mb-4">
              Nuestro chatbot de apoyo en crisis estará disponible muy pronto para ayudarte 24/7.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  )
}
