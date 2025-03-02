import React from 'react'
import { Award, Code, Coffee, Users, Zap } from 'lucide-react'

const stats = [
  { label: 'Années d\'Expérience', value: '10+' },
  { label: 'Projets Réalisés', value: '200+' },
  { label: 'Satisfaction Client', value: '98%' },
  { label: 'Membres de l\'Équipe', value: '25+' }
]

const values = [
  {
    name: 'Qualité Avant Tout',
    description: 'Nous ne compromettons jamais la qualité. Chaque ligne de code que nous écrivons est élaborée avec soin et précision pour garantir des solutions robustes et maintenables.',
    icon: Award
  },
  {
    name: 'Innovation',
    description: 'Nous restons à la pointe de la technologie, explorant constamment de nouveaux outils et approches pour offrir des solutions de pointe à nos clients.',
    icon: Zap
  },
  {
    name: 'Collaboration',
    description: 'Nous croyons en une collaboration étroite avec nos clients, maintenant une communication ouverte et les impliquant tout au long du processus de développement.',
    icon: Users
  },
  {
    name: 'Passion pour le Code',
    description: 'Nous aimons ce que nous faisons. Notre passion pour le codage nous pousse à nous améliorer continuellement et à fournir des résultats exceptionnels sur chaque projet.',
    icon: Code
  }
]

const team = [
  {
    name: 'Dr. TOH Glacia',
    role: 'Fondateur & Directeur',
    image: 'https://res.cloudinary.com/dxy0fiahv/image/upload/v1733247651/TOH_GLACIA_psp_copie_ocjswb.png',
    bio: 'Originaire de Côte d\'Ivoire, Dr. TOH Glacia a fondé TerranoCoder avec la vision de créer des solutions numériques innovantes adaptées au marché africain. Avec un doctorat en informatique et plus de 15 ans d\'expérience, il dirige l\'entreprise avec passion et expertise.'
  },
  {
    name: 'Konan Séraphin',
    role: 'Responsable Frontend',
    image: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Séraphin apporte créativité et expertise technique à notre développement frontend. Avec une formation en design et 8 ans d\'expérience en développement, il crée des interfaces utilisateur belles et intuitives adaptées aux besoins africains.'
  },
  {
    name: 'Aminata Diallo',
    role: 'Développeuse Backend',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Aminata est notre spécialiste backend avec une expertise en architecture évolutive, optimisation de bases de données et développement d\'API. Elle a contribué à de nombreux projets de niveau entreprise au cours de sa carrière de 10 ans.'
  },
  {
    name: 'Kwame Nkrumah',
    role: 'Développeur Mobile',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Kwame est spécialisé dans le développement mobile multiplateforme, créant des expériences fluides pour iOS et Android. Ses 6 années d\'expérience incluent des travaux sur des applications primées dans divers secteurs à travers l\'Afrique.'
  }
]

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          À Propos de Nous
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
          Nous sommes une équipe de développeurs passionnés dédiés à la création de solutions logicielles exceptionnelles.
          Découvrez notre histoire, nos valeurs et les personnes derrière TerranoCoder.
        </p>
      </div>

      {/* Our story section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Notre Histoire</h2>
            <div className="mt-6 text-gray-600 space-y-6">
              <p>
                TerranoCoder a été fondé en 2013 par Dr. TOH Glacia, un développeur passionné d'origine ivoirienne, avec une mission simple : créer des logiciels exceptionnels qui résolvent des problèmes concrets pour le marché africain. Ce qui a commencé comme une petite équipe de développeurs passionnés s'est transformé en une entreprise polyvalente offrant des solutions dans de multiples secteurs.
              </p>
              <p>
                Au fil des années, nous avons eu le privilège de travailler avec des startups, des entreprises de taille moyenne et des clients d'entreprise à travers l'Afrique, les aidant à transformer leurs idées en produits numériques puissants. Notre parcours a été défini par l'apprentissage continu, l'adaptation et une recherche incessante de l'excellence.
              </p>
              <p>
                Aujourd'hui, nous sommes spécialisés dans le développement full-stack, créant des expériences fluides à travers les systèmes web, mobiles et backend. Notre équipe combine expertise technique et résolution créative de problèmes pour fournir des solutions qui non seulement répondent mais dépassent les attentes de nos clients.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Équipe africaine en collaboration" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-base font-medium text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Nos Valeurs</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ces principes fondamentaux guident tout ce que nous faisons, de la façon dont nous écrivons le code à la façon dont nous interagissons avec nos clients.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900 text-center">{value.name}</h3>
              <p className="mt-4 text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Rencontrez Notre Équipe</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Les personnes talentueuses derrière TerranoCoder qui font la magie.
            </p>
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full md:w-48 object-cover" src={member.image} alt={member.name} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600">{member.role}</p>
                  <p className="mt-3 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coffee counter */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <Coffee className="h-12 w-12 text-indigo-600 mx-auto" />
        <p className="mt-4 text-lg text-gray-600">
          Tasses de café consommées pendant le codage : <span className="font-bold text-indigo-600">12 483</span> et ça continue...
        </p>
      </div>
    </div>
  )
}

export default AboutPage
