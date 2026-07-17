'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'SearchMed',
      location: 'Remote',
      period: 'September 2024 - Present',
      website: 'https://searchmed.com/',
      description: [
        'Developed and maintained Blazor WebAssembly and Blazor Server applications with modern Tailwind CSS styling, integrating seamlessly with ASP.NET Core 9 backends',
        'Implemented comprehensive API solutions using ASP.NET Core for robust backend functionality and data management',
        'Contributed to SearchMed, a comprehensive medical appointment application enabling provider registration, appointment scheduling, vaccination reminders, and account management',
        'Developed advanced features for doctor search functionality based on location, profiles, ratings, and availability with cross-platform support for web, desktop, Android, and iOS via .NET MAUI',
        'Architected and maintained multiple application modules including Admin Portal and User Portal, ensuring seamless functionality across all platforms',
        'Collaborated effectively in Agile development environment using GitHub Project Board for task management and version control',
        'Integrated sophisticated calendar-based scheduling systems and automated reminder notifications for various medical services'
      ],
      technologies: ['Blazor WebAssembly', 'Blazor Server', 'ASP.NET Core 9', '.NET MAUI', 'Tailwind CSS', 'GitHub Projects', 'C#']
    },
    {
      title: 'Full Stack Developer',
      company: 'CustomerFiller',
      location: 'Remote',
      period: 'June 2024 - August 2024',
      website: 'https://www.customfiller.com/',
      description: [
        'Developed CustomerFiller e-commerce platform using Next.js, specializing in aerosol filling solutions with focused product offerings',
        'Implemented secure online payment processing using Stripe integration',
        'Built comprehensive APIs and storage solutions using Supabase, handling both backend logic and efficient file storage management'
      ],
      technologies: ['Next.js', 'Stripe', 'Supabase', 'TypeScript', 'Tailwind CSS', 'React']
    },
    {
      title: 'Full Stack Developer (Freelance)',
      company: 'Tarangini Foundation',
      location: 'Remote',
      period: '2024',
      website: 'https://tarangini.org.np/',
      description: [
        'Built the complete website for Tarangini Foundation using Next.js with a fully custom Supabase-powered admin panel',
        'Developed admin control features including team management, resources, blog management, media & coverage sections',
        'Implemented dynamic content management so all frontend data is driven from the Supabase backend without redeployment',
        'Created role-based content publishing workflows for blog posts, news, and announcements',
        'Designed and developed responsive public-facing pages consuming real-time data from Supabase APIs'
      ],
      technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'React']
    },
    {
      title: 'Software Engineer',
      company: 'LeanLaw',
      location: 'Remote',
      period: 'April 2023 - August 2024',
      website: 'https://www.leanlaw.co',
      description: [
        'Transitioned LeanLaw\'s frontend from AngularJS to Vue.js with Pinia store for state management',
        'Implemented new features and maintained existing ones with high code quality',
        'Conducted comprehensive Cypress end-to-end testing',
        'Integrated Luzmo plugin for client reporting and Maxio payment gateway',
        'Participated in sprint planning and issue discussions using Shortcuts',
        'Focused on billing features for LeanLaw and QuickBooks integration'
      ],
      technologies: ['Vue.js', 'Pinia', 'AngularJS', 'Cypress', 'Luzmo', 'Maxio', 'QuickBooks', 'Vuetify', 'Tailwind CSS']
    },
    {
      title: 'Frontend Developer',
      company: 'Swivt',
      location: 'Remote | Onsite',
      period: 'June 2022 - April 2023',
      website: 'https://swivt.io',
      description: [
        'Developed user access roles, bonus calculations, and live charts using Angular',
        'Built Warehouse Management System (WMS) frontend for 3PL-TOTAL TECHNOLOGY (HK) LIMITED',
        'Implemented real-time dashboard charts using Stomp Client',
        'Managed complex order processing workflows and user interfaces',
        'Collaborated with backend team who used Spring Boot while focusing on Angular frontend development'
      ],
      technologies: ['Angular', 'Stomp Client', 'JHipster', 'TypeScript', 'Chart.js']
    },
    {
      title: 'Full Stack Developer',
      company: 'Jhigu Bazar',
      location: 'Remote',
      period: 'January 2020 - May 2022',
      website: 'https://www.jhigubazar.com',
      description: [
        'Developed cross-platform marketplace application using Ionic Angular for web app and Node.js for backend',
        'Built mobile applications for Android and iOS using Capacitor for cross-platform deployment',
        'Implemented comprehensive backend APIs using Node.js and Express.js',
        'Integrated image recognition and location services for enhanced user experience',
        'Built push notification system and dark/light theme support',
        'Created safe content filtering mechanisms and user management systems'
      ],
      technologies: ['Ionic Angular', 'Node.js', 'Express.js', 'Capacitor', 'MongoDB', 'AWS', 'TypeScript']
    },
    {
      title: 'Frontend Developer',
      company: 'Truenary',
      location: 'Remote | Onsite',
      period: 'November 2019 - January 2020',
      website: 'https://truenary.com',
      description: [
        'Developed web application for remote work management using Angular and Electron',
        'Built financial co-operative application using Angular and NgRx',
        'Implemented state management and real-time data synchronization'
      ],
      technologies: ['Angular', 'Electron', 'NgRx', 'TypeScript']
    },
    {
      title: 'Frontend Developer',
      company: 'Nirekha Dot Com Private Limited',
      location: 'Onsite',
      period: 'October 2018 - October 2019',
      website: 'https://www.nirekha.com/home',
      description: [
        'Developed Angular-based business registration application for government offices',
        'Created desktop application using Electron for offline functionality',
        'Successfully deployed and installed desktop applications in different wards of Roshi Municipality government offices',
        'Built comprehensive complaint handling system for Nepal Telecommunications Authority (NTA) operations',
        'Developed web application for internet speed testing for Nepal Telecommunications Authority (NTA)'
      ],
      technologies: ['Angular', 'Electron', 'TypeScript', 'Desktop Applications', 'Government Systems']
    },
    {
      title: 'Full Stack Developer (Intern)',
      company: 'Channakya Software Pvt Ltd.',
      location: 'Onsite',
      period: 'August 2018 - October 2018',
      website: 'https://channakyasoft.com.np/',
      description: [
        'Completed internship as Full Stack Developer working with Angular frontend and Node.js backend',
        'Developed Visitor Management System using Angular for frontend and Node.js for backend APIs',
        'Gained hands-on experience with PostgreSQL database design and management',
        'Learned full-stack development practices and modern web development workflows'
      ],
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Express.js', 'TypeScript', 'Full Stack Development']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-large text-slate-600 mt-6 max-w-2xl mx-auto">
            My journey through various roles and companies, building expertise in modern web technologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-200 to-transparent"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 card p-8 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors"
                          >
                            {exp.company}
                            <ExternalLink size={14} />
                          </a>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-blue-500" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} className="text-blue-500" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-slate-700 leading-relaxed flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience