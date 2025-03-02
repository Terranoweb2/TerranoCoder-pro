import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Code2, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dxy0fiahv/image/upload/v1740925432/tcoder_vjrxll.png" 
                alt="TerranoCoder Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">TerranoCoder</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} font-medium`}>Accueil</Link>
            <Link to="/services" className={`${isActive('/services')} font-medium`}>Services</Link>
            <Link to="/projects" className={`${isActive('/projects')} font-medium`}>Projets</Link>
            <Link to="/about" className={`${isActive('/about')} font-medium`}>À propos</Link>
            <Link to="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700">Contact</Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className={`block px-3 py-2 ${isActive('/')} font-medium`} onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/services" className={`block px-3 py-2 ${isActive('/services')} font-medium`} onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/projects" className={`block px-3 py-2 ${isActive('/projects')} font-medium`} onClick={() => setIsMenuOpen(false)}>Projets</Link>
            <Link to="/about" className={`block px-3 py-2 ${isActive('/about')} font-medium`} onClick={() => setIsMenuOpen(false)}>À propos</Link>
            <Link to="/contact" className="block px-3 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
