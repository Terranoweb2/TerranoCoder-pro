import React from 'react'
import { Code, Database, Layout, Smartphone, Zap } from 'lucide-react'

const features = [
  {
    name: 'Développement Web',
    description: 'Sites web modernes et réactifs avec les dernières technologies frontend et backend.',
    icon: Layout,
  },
  {
    name: 'Applications Mobiles',
    description: 'Applications iOS et Android natives ou multiplateformes pour étendre votre portée.',
    icon: Smartphone,
  },
  {
    name: 'Solutions Backend',
    description: 'APIs robustes et systèmes backend évolutifs pour alimenter vos applications.',
    icon: Database,
  },
  {
    name: 'Développement Personnalisé',
    description: 'Solutions logicielles sur mesure adaptées aux besoins spécifiques de votre entreprise.',
    icon: Code,
  },
  {
    name: 'Performance Optimisée',
    description: 'Applications rapides et efficaces conçues pour une expérience utilisateur exceptionnelle.',
    icon: Zap,
  },
]

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Nos Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Solutions Techniques Complètes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            De la conception à la mise en production, nous offrons une gamme complète de services pour répondre à tous vos besoins de développement logiciel.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
