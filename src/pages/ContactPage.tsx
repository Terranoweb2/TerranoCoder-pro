import React, { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Dans une application réelle, vous enverriez les données du formulaire à un serveur ici
    console.log('Formulaire soumis:', formData)
    
    // Simuler la soumission du formulaire
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Merci pour votre message ! Nous vous répondrons bientôt.'
    })
    
    // Réinitialiser le formulaire après une soumission réussie
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-indigo-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Contactez-Nous
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
          Vous avez un projet en tête ou vous souhaitez en savoir plus sur nos services ?
          Nous serions ravis de vous entendre. Contactez-nous et commençons une conversation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900">Prenez Contact</h2>
            <p className="mt-4 text-gray-600">
              Nous sommes là pour répondre à toutes vos questions concernant nos services, nos tarifs ou comment nous pouvons vous aider avec votre projet.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-gray-600">
                  <p>123 Boulevard de la Tech</p>
                  <p>Paris, 75001</p>
                  <p>France</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-gray-600">
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3 text-gray-600">
                  <p>contact@terranocoder.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900">Heures d'Ouverture</h3>
              <div className="mt-3 text-gray-600">
                <p>Lundi - Vendredi : 9h00 - 18h00</p>
                <p>Samedi - Dimanche : Fermé</p>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-2 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900">Envoyez-Nous un Message</h2>
            
            {formStatus && formStatus.submitted && (
              <div className={`mt-4 p-4 rounded-md ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Sujet
                </label>
                <div className="mt-1">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Demande Générale">Demande Générale</option>
                    <option value="Demande de Projet">Demande de Projet</option>
                    <option value="Partenariat">Partenariat</option>
                    <option value="Candidature">Candidature</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  ></textarea>
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Envoyer le Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-96">
            {/* Dans une application réelle, vous intégreriez ici une carte Google ou similaire */}
            <div className="h-full w-full bg-gray-300 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-gray-500" />
              <span className="ml-2 text-gray-600 text-lg">La carte serait affichée ici</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
