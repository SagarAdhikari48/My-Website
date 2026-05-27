'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Phone, Mail, User, Award, Briefcase, Globe } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Sagar Adhikari' },
    { icon: Calendar, label: 'Birthday', value: '27 July 1993' },
    { icon: Award, label: 'Degree', value: 'Bachelor in Computer Engineering' },
    { icon: Briefcase, label: 'Experience', value: '7+ Years' },
    { icon: Phone, label: 'Phone', value: '+977 9843650962' },
    { icon: Mail, label: 'Email', value: 'contact@sagaradhikari.info.np' },
    { icon: MapPin, label: 'Address', value: 'Kathmandu, Nepal' },
    { icon: Globe, label: 'Freelance', value: 'Available' },
  ]

  const highlights = [
    {
      title: 'Frontend Development',
      description: 'Expert in Angular, Vue.js (with Pinia), React, Blazor WebAssembly, and Ionic-Angular. Creating responsive, dynamic, and high-performance user interfaces with modern styling.',
      technologies: ['Angular', 'Vue.js', 'React', 'Blazor WebAssembly', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend Development', 
      description: 'Extensive experience with Node.js and Express.js for building scalable backend solutions. Also proficient in ASP.NET Core and NestJS for comprehensive API development.',
      technologies: ['Node.js', 'Express.js', 'ASP.NET Core', 'NestJS', 'MongoDB', 'Supabase']
    },
    {
      title: 'Full-Stack Solutions',
      description: 'Experienced in developing complete applications from medical appointment systems to e-commerce platforms with integrated payment processing and cross-platform support.',
      technologies: ['Blazor Server', 'Next.js', 'Stripe', 'GitHub Projects', 'Agile Development']
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-slate-900 mb-4">About Sagar Adhikari</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-large text-slate-600 mt-6 max-w-3xl mx-auto">
            Learn more about Sagar Adhikari, a passionate Software Engineer from Nepal with expertise in full-stack web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="space-y-6">
              <p className="text-large text-slate-600 leading-relaxed">
                Software Developer with 7+ years of experience in designing, developing, and testing various
                applications. Proficient in front-end and back-end web development, seeking to enhance
                my professional experience in a teamwork-oriented software company.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <item.icon size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-slate-900">{item.label}</div>
                    <div className="text-sm text-slate-600 truncate">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Key Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="heading-3 text-slate-900 mb-8">Key Strengths & Skills</h3>
            
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 card-hover"
              >
                <h4 className="text-lg font-semibold text-slate-900 mb-3">{highlight.title}</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">{highlight.description}</p>
                <div className="flex flex-wrap gap-2">
                  {highlight.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About