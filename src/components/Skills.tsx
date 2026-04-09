'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'HTML/CSS', percentage: 95 },
        { name: 'JavaScript/TypeScript', percentage: 90 },
        { name: 'React/Next.js', percentage: 88 },
        { name: 'Angular', percentage: 92 },
        { name: 'Vue.js', percentage: 85 },
        { name: 'Blazor WebAssembly', percentage: 82 },
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js/Express.js', percentage: 90 },
        { name: 'ASP.NET Core', percentage: 82 },
        { name: 'NestJS', percentage: 85 },
        { name: '.NET MAUI', percentage: 80 },
        { name: 'RESTful APIs', percentage: 92 },
        { name: 'C#', percentage: 80 },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'Supabase', percentage: 85 },
        { name: 'MongoDB', percentage: 85 },
        { name: 'PostgreSQL', percentage: 82 },
        { name: 'MySQL/MSSQL', percentage: 88 },
        { name: 'Git/GitHub', percentage: 92 },
        { name: 'Stripe Integration', percentage: 80 },
        { name: 'Tailwind CSS', percentage: 90 },
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('skills-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-padding bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-slate-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-large text-slate-600 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div id="skills-section" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm font-medium text-slate-500">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Blazor Server', 'Ionic', 'Capacitor', 'Electron', 'Express.js', 'Angular Material', 'PrimeNG', 'Bootstrap', 'SCSS', 
              'Webpack', 'Vite', 'GitHub Projects', 'Agile Development', 'Figma', 'Cypress'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:border-blue-300 hover:text-blue-700 transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills