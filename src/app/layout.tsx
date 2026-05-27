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
  title: 'Sagar Adhikari - Official Website | Software Engineer & Full Stack Developer',
  description: 'Sagar Adhikari is an experienced Software Engineer and Full Stack Developer from Nepal with 7+ years of expertise in Node.js, React, Angular, Vue.js. Visit Sagar Adhikari\'s official portfolio website.',
  keywords: [
    'Sagar Adhikari',
    'Sagar Adhikari Nepal',
    'Sagar Adhikari Software Engineer',
    'Sagar Adhikari Developer',
    'Sagar Adhikari Portfolio',
    'Sagar Adhikari Official Website',
    'Sagar Adhikari Full Stack Developer',
    'Sagar Adhikari Web Developer',
    'Sagar Adhikari Node.js',
    'Sagar Adhikari React',
    'Sagar Adhikari Angular',
    'Sagar Adhikari Vue.js',
    'Software Engineer Nepal',
    'Full Stack Developer Nepal',
    'Web Developer Nepal',
    'Frontend Developer Nepal',
    'Backend Developer Nepal',
    'JavaScript Developer Nepal',
    'TypeScript Developer Nepal',
    'Freelance Developer Nepal',
    'Custom Web Applications',
    'E-commerce Development',
    'API Development',
    'Database Design',
    'MongoDB Expert',
    'PostgreSQL Developer',
    'Next.js Developer',
    'Express.js Developer',
    'Tailwind CSS Expert',
    'Responsive Design',
    'Mobile App Development',
    'Ionic Angular',
    'Capacitor Developer',
    'Blazor WebAssembly',
    '.NET MAUI',
    'Medical Software Developer',
    'E-commerce Platform Developer',
    'Marketplace Development Expert',
    'SearchMed Developer',
    'CustomFiller Developer',
    'LeanLaw Developer',
    'Jhigu Bazar Developer'
  ].join(', '),
  authors: [{ name: 'Sagar Adhikari', url: 'https://www.sagaradhikari.info.np' }],
  creator: 'Sagar Adhikari',
  publisher: 'Sagar Adhikari',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sagaradhikari.info.np/',
    title: 'Sagar Adhikari - Official Website | Software Engineer & Full Stack Developer',
    description: 'Sagar Adhikari is an experienced Software Engineer and Full Stack Developer from Nepal with 7+ years of expertise in Node.js, React, Angular, Vue.js.',
    siteName: 'Sagar Adhikari - Official Portfolio Website',
    images: [
      {
        url: 'https://www.sagaradhikari.info.np/img/profileImage.jpg',
        width: 1200,
        height: 630,
        alt: 'Sagar Adhikari - Software Engineer and Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Adhikari - Official Website | Software Engineer & Full Stack Developer',
    description: 'Sagar Adhikari is an experienced Software Engineer and Full Stack Developer from Nepal with 7+ years of expertise in Node.js, React, Angular, Vue.js.',
    images: ['https://www.sagaradhikari.info.np/img/profileImage.jpg'],
    creator: '@sagar_adhikari',
  },
  alternates: {
    canonical: 'https://www.sagaradhikari.info.np/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sagar Adhikari",
    "alternateName": ["Sagar Adhikari Nepal", "Sagar Adhikari Software Engineer"],
    "jobTitle": "Software Engineer & Full Stack Developer",
    "description": "Sagar Adhikari is an experienced Software Engineer and Full Stack Developer from Nepal with 7+ years of expertise in web development, specializing in Node.js, React, Angular, and Vue.js technologies.",
    "url": "https://www.sagaradhikari.info.np/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.sagaradhikari.info.np/img/profileImage.jpg",
      "width": 400,
      "height": 400
    },
    "sameAs": [
      "https://github.com/Sagar-Adhikari",
      "https://www.linkedin.com/in/sagaradhikari48/",
      "https://www.sagaradhikari.info.np/",
      "mailto:contact@sagaradhikari.info.np"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Software Developer"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Nepal"
      },
      "skills": [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React",
        "Angular",
        "Vue.js",
        "Next.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "Web Development",
        "Mobile App Development"
      ]
    },
    "knowsAbout": [
      "JavaScript Programming",
      "TypeScript Development",
      "Node.js Backend Development",
      "React Frontend Development",
      "Angular Web Applications",
      "Vue.js Single Page Applications",
      "Next.js Full Stack Development",
      "Express.js API Development",
      "MongoDB Database Design",
      "PostgreSQL Database Management",
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Mobile App Development",
      "E-commerce Development",
      "API Development",
      "Database Design",
      "Responsive Web Design",
      "Software Architecture"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nepal"
    },
    "email": "contact@sagaradhikari.info.np",
    "nationality": {
      "@type": "Country",
      "name": "Nepal"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Software Engineering Education"
    },
    "award": [
      "7+ Years Experience in Software Development",
      "Full Stack Web Development Expertise",
      "Multiple Successful Project Deliveries"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
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