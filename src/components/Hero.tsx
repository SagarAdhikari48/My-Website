"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Play,
  Download,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Web Developer",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < texts[currentIndex].length) {
          setCurrentText(texts[currentIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else if (isDeleting && charIndex > 0) {
          setCurrentText(texts[currentIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else if (!isDeleting && charIndex === texts[currentIndex].length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, texts]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50/30 pt-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </motion.div>

              <motion.h1
                className="heading-1 text-slate-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm <span className="text-blue-600">Sagar Adhikari</span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-700">
                  Software Engineer from Nepal
                </span>
              </motion.h1>

              <div className="h-16 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600">
                  {currentText}
                  <span className="animate-pulse text-blue-600">|</span>
                </span>
              </div>
            </div>

            <motion.p
              className="text-large text-slate-600 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Results-driven Full Stack Software Engineer with 7+ years of
              proven expertise in architecting, developing, and deploying
              scalable web applications across healthcare, e-commerce, and
              enterprise domains. Specialized in modern technologies including
              Blazor WebAssembly, ASP.NET Core, Angular, and Vue.js with
              demonstrated success in crossplatform development using .NET MAUI.
              Expert in building robust APIs, implementing secure payment
              systems, and delivering high-performance applications that serve
              thousands of users. Passionate about leveraging cutting-edge
              technologies to solve complex business challenges and drive
              digital transformation initiatives.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/pdf/Sagar_Adhikari.pdf"
                download
                className="btn-primary"
              >
                <Download size={18} />
                Download CV
              </Link>
              <Link href="#contact" className="btn-secondary">
                <Mail size={18} />
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="https://www.linkedin.com/in/sagaradhikari48/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-slate-600 hover:text-blue-600 hover:shadow-md transition-all duration-200"
                aria-label="Sagar Adhikari LinkedIn Profile"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com/Sagar-Adhikari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-slate-600 hover:text-slate-900 hover:shadow-md transition-all duration-200"
                aria-label="Sagar Adhikari GitHub Profile"
              >
                <Github size={20} />
              </Link>
              <Link
                href="mailto:sagradhkr48@gmail.com"
                className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 text-slate-600 hover:text-green-600 hover:shadow-md transition-all duration-200"
                aria-label="Email Sagar Adhikari"
              >
                <Mail size={20} />
              </Link>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-blue-600" />
                Kathmandu, Nepal
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone size={16} className="text-blue-600" />
                +977 9843650962
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl rotate-6"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="/img/MainImage.jpeg"
                    alt="Sagar Adhikari - Software Engineer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg">
                <span className="font-semibold text-sm">
                  6+ Years Experience
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
