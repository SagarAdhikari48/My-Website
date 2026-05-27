'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, Clock, Globe } from 'lucide-react'
import emailjs from '@emailjs/browser'
import EmailPopup from './EmailPopup'
import { useEmailPopup } from '@/hooks/useEmailPopup'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const { isEmailPopupOpen, openEmailPopup, closeEmailPopup } = useEmailPopup()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Using EmailJS for easy email sending
      // You'll need to configure these values in your EmailJS account
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'contact@sagaradhikari.info.np',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'
      )

      if (result.status === 200) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setError('Failed to send message. Please try again or contact directly at contact@sagaradhikari.info.np')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@sagaradhikari.info.np',
      link: '#',
      onClick: openEmailPopup,
      description: 'Send me an email'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+977 9843650962',
      link: 'tel:+9779843650962',
      description: 'Give me a call'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kathmandu, Nepal',
      link: '#',
      description: 'Based in Nepal'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: '#',
      description: 'Quick response guaranteed'
    }
  ]

  const quickStats = [
    { icon: MessageCircle, label: 'Projects Completed', value: '50+' },
    { icon: Globe, label: 'Happy Clients', value: '30+' },
    { icon: Clock, label: 'Years Experience', value: '7+' }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-slate-900 mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-large text-slate-600 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {quickStats.map((stat, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="heading-3 text-slate-900">Get In Touch</h3>
              <p className="text-large text-slate-600 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card p-6 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                      <info.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                      <p className="text-sm text-slate-600 mb-2">{info.description}</p>
                      {info.onClick ? (
                        <button 
                          onClick={info.onClick}
                          className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                        >
                          {info.value}
                        </button>
                      ) : (
                        <a 
                          href={info.link}
                          className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="heading-3 text-slate-900 mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-green-700 bg-green-50 p-4 rounded-lg border border-green-200"
                  >
                    <CheckCircle size={20} />
                    <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 text-red-700 bg-red-50 p-4 rounded-lg border border-red-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-xs font-bold">!</span>
                    </div>
                    <span className="text-sm">{error}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Email Popup */}
      <EmailPopup isOpen={isEmailPopupOpen} onClose={closeEmailPopup} />
    </section>
  )
}

export default Contact