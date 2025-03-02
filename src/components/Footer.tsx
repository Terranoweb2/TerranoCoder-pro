import React from 'react'
import { Link } from 'react-router-dom'
import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">TerranoCoder</span>
            </div>
            <p className="mt-4 text-base text-gray-400">
              Transformer vos idées en code puissant. Développement logiciel expert et solutions techniques pour vos projets les plus exigeants.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/services" className="text-base text-gray-400 hover:text-indigo-400">Développement Web</Link></li>
              <li><Link to="/services" className="text-base text-gray-400 hover:text-indigo-400">Applications Mobiles</Link></li>
              <li><Link to="/services" className="text-base text-gray-400 hover:text-indigo-400">Systèmes Backend</Link></li>
              <li><Link to="/services" className="text-base text-gray-400 hover:text-indigo-400">Développement d'API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Entreprise</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-gray-400 hover:text-indigo-400">À propos</Link></li>
              <li><Link to="/projects" className="text-base text-gray-400 hover:text-indigo-400">Projets</Link></li>
              <li><Link to="/" className="text-base text-gray-400 hover:text-indigo-400">Blog</Link></li>
              <li><Link to="/contact" className="text-base text-gray-400 hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} TerranoCoder. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
