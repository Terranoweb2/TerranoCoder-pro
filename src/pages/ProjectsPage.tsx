import React from 'react'

const projects = [
  {
    title: 'Plateforme E-commerce',
    description: 'Site e-commerce complet avec panier, paiement et gestion des commandes pour une boutique de mode africaine.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Application de Gestion de Projet',
    description: 'Outil de gestion de projet personnalisé pour une entreprise de construction basée à Abidjan.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS']
  },
  {
    title: 'API de Chaîne d\'Approvisionnement',
    description: 'Architecture de microservices pour suivre les produits de la fabrication à la livraison avec mises à jour en temps réel.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Node.js', 'Kubernetes', 'MongoDB', 'RabbitMQ']
  },
  {
    title: 'Application Mobile de Santé',
    description: 'Application mobile permettant aux patients de prendre rendez-vous et de consulter leurs dossiers médicaux.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React Native', 'Express', 'PostgreSQL']
  },
  {
    title: 'Système de Gestion Scolaire',
    description: 'Plateforme complète pour la gestion des étudiants, des cours et des notes pour une université à Dakar.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Angular', 'Django', 'MySQL']
  },
  {
    title: 'Plateforme de Paiement Mobile',
    description: 'Solution de paiement mobile intégrée pour les marchés africains, compatible avec les principaux opérateurs téléphoniques.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'API REST']
  },
]

const ProjectsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Nos Projets
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
          Découvrez notre portfolio de projets réussis qui démontrent notre expertise
          et notre capacité à livrer des solutions technologiques de haute qualité.
        </p>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-base text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-indigo-900">Vous avez un projet en tête ?</h2>
          <p className="mt-4 text-lg text-indigo-700 max-w-3xl mx-auto">
            Nous serions ravis de discuter de la façon dont nous pouvons vous aider à concrétiser votre vision.
            Contactez-nous pour une consultation gratuite.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Discuter de votre projet
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
