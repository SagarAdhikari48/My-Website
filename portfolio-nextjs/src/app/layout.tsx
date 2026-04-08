import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sagar Adhikari - Software Engineer | Web Developer Portfolio',
  description: 'Software Developer with 6 years of experience in designing, developing, and testing various applications. Proficient in front-end and back-end web development.',
  keywords: 'Sagar Adhikari, full stack web developer, portfolio, web developer, front-end developer, back-end developer, JavaScript, HTML, CSS, Node.js, React, Angular, .NET, SQL, MongoDB, API development',
  authors: [{ name: 'Sagar Adhikari' }],
  openGraph: {
    title: 'Sagar Adhikari - Software Engineer | Web Developer',
    description: 'Web Developer specializing in frontend and backend development.',
    url: 'https://www.sagaradhikari.info.np/',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}