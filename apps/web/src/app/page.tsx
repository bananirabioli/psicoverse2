'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Users, FileText, ClipboardCheck } from 'lucide-react'
import { Card } from '../../../../packages/ui/src/web/Card'
import { Badge } from '../../../../packages/ui/src/web/Badge'
import { contactSchema, type ContactFormData } from '../../../../packages/validation/src'
import { mockUserService, mockContactService } from '../../../../packages/services/src'
import Nav from '../components/Nav'
import BottomNav from '../components/BottomNav'
import Chatbot from '../components/Chatbot'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  // React Query hooks
  const { data: professionals } = useQuery({
    queryKey: ['professionals'],
    queryFn: () => mockUserService.getUsers(),
  })

  const { data: blogPosts } = useQuery({
    queryKey: ['blog'],
    queryFn: () => Promise.resolve({
      data: [
        {
          id: '1',
          title: 'El impacto del Mindfulness en la reducción del estrés diario',
          category: 'Mindfulness y Estrés',
          excerpt: 'Un resumen de los últimos estudios que demuestran cómo la práctica de la atención plena puede reconfigurar el cerebro para manejar mejor el estrés...',
          image: 'https://placehold.co/400x300/B2DFDB/FFF?text=Mindfulness',
        },
        {
          id: '2',
          title: 'La importancia del sueño para la salud mental: más allá del descanso',
          category: 'Salud del Sueño',
          excerpt: 'Exploramos la conexión vital entre la calidad del sueño y la regulación emocional, la memoria y la prevención de trastornos del ánimo...',
          image: 'https://placehold.co/400x300/B2DFDB/FFF?text=Sueño',
        },
      ],
      success: true,
    }),
  })

  const { data: tests } = useQuery({
    queryKey: ['tests'],
    queryFn: () => Promise.resolve({
      data: [
        {
          id: '1',
          title: 'Escala de Ansiedad de Beck',
          description: 'Mide la severidad de tus síntomas de ansiedad.',
        },
        {
          id: '2',
          title: 'Inventario de Depresión de Beck (BDI-II)',
          description: 'Evalúa la intensidad de la depresión.',
        },
        {
          id: '3',
          title: 'Escala de Autoestima de Rosenberg',
          description: 'Mide tu nivel de autoestima global.',
        },
      ],
      success: true,
    }),
  })

  // Contact form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Connect to Supabase
      console.log('Contact form data:', data)
      alert('Mensaje enviado correctamente. Te contactaremos pronto.')
      reset()
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Error al enviar el mensaje. Inténtalo de nuevo.')
    }
  }

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
    <>
      <Nav />
      
      <main className="container mx-auto px-6 py-8 md:py-12">
        {/* Home Section */}
        <section id="home" className={`section ${activeSection === 'home' ? 'active' : ''}`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Encuentra tu <span className="text-teal-500">equilibrio</span> y bienestar
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              PSICOVERSE es tu espacio seguro para explorar recursos de salud mental, conectar con profesionales y crecer a tu propio ritmo.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => handleNavClick('professionals')}
                className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-transform hover:scale-105"
              >
                Buscar un Profesional
              </button>
              <button
                onClick={() => handleNavClick('blog')}
                className="bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition-transform hover:scale-105"
              >
                Explorar Artículos
              </button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="text-center">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Conecta con Expertos</h3>
              <p className="text-gray-600">Accede a una red de psicólogos y terapeutas certificados listos para ayudarte.</p>
            </Card>

            {/* Feature Card 2 */}
            <Card className="text-center">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contenido Confiable</h3>
              <p className="text-gray-600">Artículos y resúmenes basados en evidencia científica para tu crecimiento personal.</p>
            </Card>

            {/* Feature Card 3 */}
            <Card className="text-center">
              <div className="inline-block p-4 bg-teal-100 rounded-full mb-4">
                <ClipboardCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Herramientas de Autoayuda</h3>
              <p className="text-gray-600">Realiza tests validados para comprender mejor tus emociones y necesidades.</p>
            </Card>
          </div>
        </section>

        {/* Professionals Section */}
        <section id="professionals" className={`section ${activeSection === 'professionals' ? 'active' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Profesionales</h2>
            <p className="mt-2 text-lg text-gray-600">Encuentra el apoyo que necesitas con nuestros expertos en salud mental.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals?.data?.map((professional) => (
              <div key={professional.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('https://placehold.co/600x400/E0F2F1/333?text=${encodeURIComponent(professional.name)}')` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-teal-600">{professional.name}</h3>
                  <p className="text-gray-500 font-medium mt-1">Especialista en Psicología</p>
                  <p className="mt-4 text-gray-600">Profesional certificado con experiencia en ayudar a pacientes a desarrollar herramientas para una vida más plena.</p>
                  <button className="mt-6 w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition-colors">
                    Contactar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className={`section ${activeSection === 'blog' ? 'active' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Blog de Bienestar</h2>
            <p className="mt-2 text-lg text-gray-600">Artículos basados en ciencia para nutrir tu mente.</p>
          </div>
          <div className="space-y-8">
            {blogPosts?.data?.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 border border-gray-100 transform hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <Badge variant="outline" className="text-teal-600 font-semibold">
                    {post.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mt-2">{post.title}</h3>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  <a href="#" className="mt-4 inline-block text-teal-500 font-semibold hover:text-teal-700">
                    Leer más →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tests Section */}
        <section id="tests" className={`section ${activeSection === 'tests' ? 'active' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tests y Autoevaluaciones</h2>
            <p className="mt-2 text-lg text-gray-600">Herramientas validadas para conocerte mejor. No reemplazan un diagnóstico profesional.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests?.data?.map((test) => (
              <div key={test.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center justify-between hover:bg-teal-50 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{test.title}</h3>
                  <p className="text-gray-600 mt-1">{test.description}</p>
                </div>
                <button className="bg-teal-100 text-teal-700 font-semibold px-4 py-2 rounded-lg hover:bg-teal-200">
                  Comenzar
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`section ${activeSection === 'contact' ? 'active' : ''} bg-white rounded-xl shadow-lg p-8 md:p-12 md:mt-16 border border-gray-100`}>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Listo para dar el siguiente paso?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro equipo está aquí para responder tus preguntas. Envíanos un mensaje y te conectaremos con el profesional adecuado para ti.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <textarea
                  {...register('message')}
                  placeholder="Tu mensaje..."
                  rows={4}
                  className="w-full mt-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      <BottomNav />
      <Chatbot />

      {/* Footer */}
      <footer className="bg-white mt-16 border-t">
        <div className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p>&copy; 2024 PSICOVERSE. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-teal-500">Política de Privacidad</a>
            <a href="#" className="hover:text-teal-500">Términos de Servicio</a>
          </div>
        </div>
      </footer>
    </>
  )
}