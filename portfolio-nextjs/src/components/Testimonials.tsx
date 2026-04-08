'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Doug Schmierer',
      position: 'Technical Project Manager at LeanLaw',
      image: '/img/Doug.png',
      quote: 'Sagar is a fast learner, works well on a team, and always a pleasure to talk with. His skills in angular, vue, and html are excellent, and he\'s not afraid to step up and take ownership of a project. I strongly recommend Sagar for front-end development.',
      rating: 5
    },
    {
      id: 2,
      name: 'Chris Porter',
      position: 'Sr. Software Engineer at LeanLaw',
      image: '/img/Chris.png',
      quote: 'Working with Sagar was a pleasure. He\'s a fast learner and a great team mate and he delivers quality code.',
      rating: 5
    },
    {
      id: 3,
      name: 'Rebecca Beasley-Cockroft',
      position: 'Data Analytics Specialist',
      image: '/img/Rebecca.png',
      quote: 'Sagar has a reliable and steady approach to his work. He asks clarifying questions and works diligently with a positive attitude throughout various projects. What I appreciated most was his consistency and reliability.',
      rating: 5
    },
    {
      id: 4,
      name: 'Fred Willerup',
      position: 'CTO and Co-Founder at LeanLaw',
      image: '/img/Fred.png',
      quote: 'Sagar was a key member of the LeanLaw engineering team, developing significant front-end features and fixes. He is a pleasure to have on the team and stands out as someone who is dedicated to his work and very dependable.',
      rating: 5
    },
    {
      id: 5,
      name: 'Rohit Shrestha',
      position: 'Software Engineer at LeanLaw',
      image: '/img/Rohit.png',
      quote: 'I highly recommend Sagar for any front-end development role. He delivers high-quality work, meets deadlines with precision, and demonstrates a solid understanding of best practices. Sagar\'s dedication, honesty, and collaborative spirit make him a valuable asset to any team.',
      rating: 5
    },
    {
      id: 6,
      name: 'Gabriel Blanchet',
      position: 'Product-focused Entrepreneur | MIT | Forbes & Inc 30u30',
      image: '/img/Gabe.png',
      quote: 'I had the pleasure of working with Sagar as he was a front end engineer at our SaaS company, LeanLaw. I always appreciated Sagar\'s willingness to learn new skills when needed and to iterate on solutions until requirements were met or exceeded.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-slate-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-large text-slate-600 mt-6 max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="card p-8 lg:p-12"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="text-blue-600" size={24} />
                </div>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900 text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {testimonials[currentIndex].position}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials