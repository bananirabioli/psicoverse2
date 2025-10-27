'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
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

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="#home" 
          onClick={() => handleNavClick('home')}
          className="text-2xl font-bold text-teal-600"
        >
          PSICOVERSE
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="#home" 
            onClick={() => handleNavClick('home')}
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Inicio
          </Link>
          <Link 
            href="#professionals" 
            onClick={() => handleNavClick('professionals')}
            className={`nav-link ${activeSection === 'professionals' ? 'active' : ''}`}
          >
            Profesionales
          </Link>
          <Link 
            href="#blog" 
            onClick={() => handleNavClick('blog')}
            className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}
          >
            Blog
          </Link>
          <Link 
            href="#tests" 
            onClick={() => handleNavClick('tests')}
            className={`nav-link ${activeSection === 'tests' ? 'active' : ''}`}
          >
            Tests
          </Link>
        </div>
        <Link 
          href="#contact" 
          onClick={() => handleNavClick('contact')}
          className="hidden md:inline-block bg-teal-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
        >
          Contacto
        </Link>
      </nav>
    </header>
  )
}
