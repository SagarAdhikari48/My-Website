'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Star, Code, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({})

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const filters = [
    { id: 'all', label: 'All Projects', icon: Star },
    { id: 'web', label: 'Web Apps', icon: Code },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone }
  ]

  const projects = [
    {
      id: 1,
      title: 'SearchMed - Medical Appointment System',
      category: 'web',
      image: '/img/portfolio-1.jpg',
      description: 'Comprehensive medical appointment application with Blazor WebAssembly, provider registration, scheduling, and cross-platform support via .NET MAUI.',
      technologies: ['Blazor WebAssembly', 'ASP.NET Core 9', '.NET MAUI', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'CustomerFiller - E-commerce Platform',
      category: 'web',
      image: '/img/customfiller-portfolio.png',
      description: 'Next.js e-commerce platform for aerosol filling solutions with Stripe payment integration and Supabase backend.',
      technologies: ['Next.js', 'Stripe', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'LeanLaw Frontend Migration',
      category: 'web',
      images: [
        '/img/leanlaw-portfolio-2.png',
        '/img/leanlaw-portfolio.png',
        '/img/leanlaw-portfolio-3.png'
      ],
      description: 'Successfully migrated LeanLaw\'s frontend from AngularJS to Vue.js with Pinia store, improving performance and maintainability. Comprehensive billing system integration.',
      technologies: ['Vue.js', 'Pinia', 'TypeScript', 'Vuetify', 'Cypress'],
      liveUrl: 'https://www.leanlaw.co',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Jhigu Bazar Marketplace',
      category: 'mobile',
      image: '/img/jhigubazar-portfolio.png',
      description: 'Cross-platform marketplace with Ionic Angular web app, Node.js backend, and Capacitor for Android/iOS mobile apps.',
      technologies: ['Ionic Angular', 'Node.js', 'Express.js', 'Capacitor', 'MongoDB'],
      liveUrl: 'https://www.jhigubazar.com',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Warehouse Management System',
      category: 'web',
      image: '/img/portfolio-2.jpg',
      description: 'Angular frontend for 3PL-TOTAL TECHNOLOGY WMS with real-time charts, inventory tracking, and order management.',
      technologies: ['Angular', 'Stomp Client', 'JHipster', 'Chart.js', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Remote Work Management App',
      category: 'web',
      image: '/img/portfolio-4.jpg',
      description: 'Angular and Electron desktop application for remote work management with real-time collaboration features.',
      technologies: ['Angular', 'Electron', 'NgRx', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-large text-slate-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-slate-100 rounded-lg p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <filter.icon size={16} />
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="card overflow-hidden card-hover">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  {project.images ? (
                    // Multiple images with carousel
                    <>
                      <Image
                        src={project.images[currentImageIndex[project.id] || 0]}
                        alt={`${project.title} - Image ${(currentImageIndex[project.id] || 0) + 1}`}
                        width={400}
                        height={256}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {project.images.length > 1 && (
                        <>
                          {/* Navigation buttons */}
                          <button
                            onClick={() => prevImage(project.id, project.images!.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronLeft size={16} />
                          </button>
                          <button
                            onClick={() => nextImage(project.id, project.images!.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                          >
                            <ChevronRight size={16} />
                          </button>
                          {/* Image indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: idx }))}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                  (currentImageIndex[project.id] || 0) === idx 
                                    ? 'bg-white' 
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    // Single image
                    <Image
                      src={project.image!}
                      alt={project.title}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors shadow-lg"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-blue-600 transition-colors shadow-lg"
                      >
                        <Code size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/Sagar-Adhikari?tab=repositories" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <ExternalLink size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio