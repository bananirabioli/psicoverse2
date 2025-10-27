'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Home, Users, FileText, ClipboardCheck, MessageSquare } from 'lucide-react'

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'home'
      setActiveSection(hash)
    }

    // Set initial state
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavClick = (section: string) => {
    setActiveSection(section)
    window.location.hash = section
  }

  const navItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'professionals', label: 'Profesionales', icon: Users },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'tests', label: 'Tests', icon: ClipboardCheck },
    { id: 'contact', label: 'Contacto', icon: MessageSquare },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 flex justify-around p-2 z-50">
      {navItems.map(({ id, label, icon: Icon }) => (
        <Link
          key={id}
          href={`#${id}`}
          onClick={() => handleNavClick(id)}
          className={`bottom-nav-link flex flex-col items-center justify-center text-gray-500 w-1/5 transition-colors duration-200 ${
            activeSection === id ? 'active' : ''
          }`}
        >
          <Icon className="w-6 h-6" />
          <span className="text-xs font-medium mt-1">{label}</span>
        </Link>
      ))}
    </nav>
  )
}
