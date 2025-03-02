import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const featuredProjects = [
  {
    id: 1,
    title: 'Plateforme E-Commerce',
    description: 'Une solution complète de commerce électronique avec gestion des produits, panier d\'achat et traitement des paiements.',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'Application de Suivi Santé',
    description: 'Application mobile permettant aux utilisateurs de suivre leur activité physique, leur alimentation et leurs objectifs de santé.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: 3,
    title: 'Tableau de Bord Financier',
    description: 'Interface de visualisation de données pour l\'analyse financière avec graphiques interactifs et rapports personnalisés.',
    image: 'https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
  },
]

const Projects = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Projets Récents
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Découvrez quelques-uns de nos projets récents qui démontrent notre expertise et notre capacité à livrer des solutions de qualité.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Voir tous les projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects
