'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Smartphone, 
  Search, 
  MessageSquare, 
  Palette, 
  Server, 
  Bug,
  Zap
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Blazor Development',
      description: 'Modern web applications using Blazor WebAssembly and Blazor Server with ASP.NET Core 9 backends. Creating interactive, high-performance applications with C# and .NET.',
      features: ['Blazor WebAssembly', 'Blazor Server', 'ASP.NET Core 9', 'Cross-platform Support']
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Development',
      description: 'Multi-platform applications using Ionic Angular with Capacitor for mobile deployment and .NET MAUI for comprehensive cross-platform reach.',
      features: ['Ionic Angular', 'Capacitor', '.NET MAUI', 'Cross-platform Support']
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust backend solutions using Node.js, Express.js, and ASP.NET Core. Comprehensive API development, database integration, and scalable server architecture.',
      features: ['Node.js/Express.js', 'ASP.NET Core', 'RESTful APIs', 'Database Integration']
    },
    {
      icon: Palette,
      title: 'Modern UI Development',
      description: 'Beautiful, responsive user interfaces using Tailwind CSS, modern design systems, and component libraries for optimal user experience.',
      features: ['Tailwind CSS', 'Responsive Design', 'Component Libraries', 'Accessibility']
    },
    {
      icon: MessageSquare,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment processing using Stripe, inventory management, and customer relationship features.',
      features: ['Stripe Integration', 'Payment Processing', 'Inventory Management', 'Customer Portal']
    },
    {
      icon: Search,
      title: 'Healthcare Applications',
      description: 'Specialized medical appointment systems with provider registration, scheduling, reminders, and comprehensive patient management features.',
      features: ['Appointment Scheduling', 'Provider Management', 'Automated Reminders', 'Patient Portal']
    }
  ]

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-slate-900 mb-4">Services & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-large text-slate-600 mt-6 max-w-2xl mx-auto">
            Comprehensive software development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card p-8 h-full card-hover group-hover:border-blue-200 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <service.icon 
                      size={28} 
                      className="text-blue-600 group-hover:text-white transition-colors duration-300" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100">
            <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              I'm available for both short-term projects and long-term collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/pdf/Sagar_Adhikari.pdf" download className="btn-secondary">
                View My Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services