'use client'

import Link from 'next/link'
import { ExternalLink, ArrowUp, Mail, Heart, Code, Coffee } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sagaradhikari48',
      icon: ExternalLink,
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Sagar-Adhikari?tab=repositories',
      icon: ExternalLink,
      color: 'hover:text-slate-900'
    },
    {
      name: 'Email',
      href: 'mailto:sagradhkr48@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-600'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Sagar Adhikari</h3>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Software Developer with 6+ years of experience in creating innovative web solutions. 
                Passionate about clean code, user experience, and continuous learning.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800 rounded-lg text-slate-300 ${social.color} transition-all duration-200 hover:bg-slate-700 hover:-translate-y-1`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="text-slate-300">
                <div className="font-medium text-white mb-1">Email</div>
                <Link 
                  href="mailto:sagradhkr48@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  sagradhkr48@gmail.com
                </Link>
              </div>
              <div className="text-slate-300">
                <div className="font-medium text-white mb-1">Phone</div>
                <Link 
                  href="tel:+9779843650962"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  +977 9843650962
                </Link>
              </div>
              <div className="text-slate-300">
                <div className="font-medium text-white mb-1">Location</div>
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Coffee size={16} className="text-amber-500" />
              <span>using</span>
              <Code size={16} className="text-blue-400" />
              <span>Next.js & Tailwind CSS</span>
            </div>
            
            <div className="text-slate-400 text-sm">
              © 2024 Sagar Adhikari. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg z-50 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}

export default Footer