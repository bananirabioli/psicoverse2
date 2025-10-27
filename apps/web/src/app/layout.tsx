import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '../components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PSICOVERSE - Tu Espacio de Salud Mental',
  description: 'PSICOVERSE es tu espacio seguro para explorar recursos de salud mental, conectar con profesionales y crecer a tu propio ritmo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-gray-800 pb-20 md:pb-0`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
