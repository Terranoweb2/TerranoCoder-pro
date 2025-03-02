import React from 'react'
import { Code, Database, FileCode, Globe, Layers, Server, Settings, Smartphone } from 'lucide-react'

const services = [
  {
    name: 'Développement Web',
    description: 'Sites web modernes et réactifs construits avec les dernières technologies, notamment React, Vue et Angular. Nous créons des interfaces belles et fonctionnelles qui engagent les utilisateurs et génèrent des conversions.',
    icon: Globe,
    details: [
      'Applications à page unique (SPA)',
      'Applications web progressives (PWA)',
      'Plateformes e-commerce',
      'Systèmes de gestion de contenu',
      'Portails web personnalisés'
    ]
  },
  {
    name: 'Développement d\'Applications Mobiles',
    description: 'Applications mobiles multiplateformes et natives pour iOS et Android. Nos solutions mobiles combinent un design époustouflant avec des fonctionnalités puissantes pour offrir des expériences utilisateur exceptionnelles.',
    icon: Smartphone,
    details: [
      'Applications natives iOS et Android',
      'Multiplateformes avec React Native',
      'Applications Flutter',
      'Optimisation pour l\'App Store',
      'Maintenance et mises à jour'
    ]
  },
  {
    name: 'Développement Backend',
    description: 'Solutions côté serveur robustes et évolutives qui alimentent vos applications. Nous construisons des backends sécurisés et performants capables de gérer votre logique métier et vos besoins en gestion de données.',
    icon: Server,
    details: [
      'Applications Node.js',
      'Solutions Python/Django',
      'Développement Ruby on Rails',
      'Services Java Spring Boot',
      'Architecture microservices'
    ]
  },
  {
    name: 'Conception de Bases de Données',
    description: 'Structures de données efficaces et requêtes optimisées pour vos applications. Nous concevons des solutions de base de données qui garantissent l\'intégrité, la performance et l\'évolutivité des données à mesure que votre entreprise se développe.',
    icon: Database,
    details: [
      'Conception de bases de données SQL (PostgreSQL, MySQL)',
      'Solutions NoSQL (MongoDB, Firebase)',
      'Migration de données et ETL',
      'Optimisation des performances',
      'Administration de bases de données'
    ]
  },
  {
    name: 'Développement d\'API',
    description: 'API RESTful et GraphQL pour une intégration transparente entre les systèmes. Nos solutions API permettent à vos applications de communiquer efficacement tout en maintenant la sécurité et les performances.',
    icon: Code,
    details: [
      'Conception d\'API RESTful',
      'Implémentation GraphQL',
      'Documentation d\'API',
      'Authentification et autorisation',
      'Limitation de débit et mise en cache'
    ]
  },
  {
    name: 'DevOps & Services Cloud',
    description: 'Déploiement rationalisé et gestion d\'infrastructure utilisant des pratiques DevOps modernes. Nous vous aidons à tirer parti des plateformes cloud pour optimiser les coûts et améliorer la fiabilité.',
    icon: Settings,
    details: [
      'Configuration de pipelines CI/CD',
      'Conteneurisation Docker',
      'Orchestration Kubernetes',
      'Déploiement AWS/Azure/GCP',
      'Infrastructure as Code (IaC)'
    ]
  },
  {
    name: 'Développement Logiciel Sur Mesure',
    description: 'Solutions logicielles sur mesure conçues spécifiquement pour les besoins de votre entreprise. Nous construisons des applications personnalisées qui automatisent les processus et résolvent vos défis uniques.',
    icon: FileCode,
    details: [
      'Automatisation des processus métier',
      'Systèmes CRM et ERP personnalisés',
      'Outils d\'analyse de données',
      'Tableaux de bord de reporting',
      'Modernisation des systèmes existants'
    ]
  },
  {
    name: 'Solutions Full Stack',
    description: 'Développement de bout en bout, du frontend au backend. Notre approche full stack garantit des solutions cohérentes et bien intégrées qui fonctionnent parfaitement à tous les niveaux de votre application.',
    icon: Layers,
    details: [
      'Développement MERN/MEAN stack',
      'Architecture JAMstack',
      'Gestion complète du cycle de vie du projet',
      'Intégration de systèmes',
      'Optimisation des performances'
    ]
  },
]

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Nos Services
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
          Des solutions de développement logiciel complètes adaptées aux besoins de votre entreprise.
          Du concept au déploiement, nous garantissons la qualité à chaque étape.
        </p>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.name} className="bg-white overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-900">{service.name}</h2>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                        <span className="ml-2 text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-indigo-900">Prêt à démarrer votre projet ?</h2>
          <p className="mt-4 text-lg text-indigo-700 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de la façon dont nous pouvons vous aider à concrétiser vos idées grâce à nos services de développement experts.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
