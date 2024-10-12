"use client"
import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      projectsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center space-x-4">
              <a className="flex items-center space-x-2" href="/">
                <span className="font-bold sm:inline-block">Archivista</span>
              </a>
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <button onClick={() => scrollToSection('home')} className="transition-colors hover:text-foreground/80 text-foreground/60">
                  Home
                </button>
               <Link href="/projects"><button  className="transition-colors hover:text-foreground/80 text-foreground/60">
               Projects
                </button></Link> 
                  
                <button onClick={() => scrollToSection('projects')} className="transition-colors hover:text-foreground/80 text-foreground/60">
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className="transition-colors hover:text-foreground/80 text-foreground/60">
                  Contact
                </button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => scrollToSection('projects')}>
                Explore
              </Button>
              <button
                className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 px-0 py-2 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                )}
                <span className="sr-only">Toggle Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center">
            <button
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 w-10 px-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close Menu</span>
            </button>
          </div>
          <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 p-6">
            <button className="text-lg font-medium hover:underline" onClick={() => scrollToSection('home')}>
              Home
            </button>
            <button className="text-lg font-medium hover:underline" onClick={() => scrollToSection('approach')}>
              About
            </button>
            <button className="text-lg font-medium hover:underline" onClick={() => scrollToSection('projects')}>
              Projects
            </button>
            <button className="text-lg font-medium hover:underline" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </nav>
        </div>
      )}
      <main className="flex-1 w-full">
        <section id="home" className="relative h-screen flex items-center w-full">
          <div className="absolute inset-0 z-0">
          <Image
            src="/images/img1.jpg"
            alt="Modern orange building"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          </div>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Discover Our<br />Architectural<br />Excellence
            </h1>
            <Button className="text-lg" size="lg" onClick={() => scrollToSection('projects')}>
              Explore Our Work
            </Button>
          </div>
        </section>
        <section id="projects" className="py-16 bg-white w-full">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Welcome to Our Firm</h2>
            <div className="relative">
              <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide" ref={projectsRef}>
                {[
                  { title: "Stunning", description: "Immerse yourself in our portfolio of breathtaking structures.",image:"/images/stun.jpg"},
                  { title: "Minimal", description: "Experience the beauty and functionality of our minimalist designs.",image:"/images/minjpg.jpg" },
                  { title: "Visionary", description: "Discover the essence of our forward-thinking architectural vision.",image:"/images/vis.jpg" },
                  { title: "Sustainable", description: "Explore our eco-friendly designs that harmonize with nature.",image:"/images/sus.jpg" },
                  { title: "Urban", description: "Witness our innovative solutions for modern city living.",image:"/images/urb.jpg" },
                  { title: "Heritage", description: "See how we blend tradition with contemporary architecture.",image:"/images/heritage.jpg" }
                ].map((project, index) => (
                  <div key={index} className="flex-none w-64 m-10">
                    <Image
                        src={project.image}
                        alt="Modern orange building"
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollProjects('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => scrollProjects('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8 rounded-lg mt-12">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Explore the visionary designs and innovative solutions</h3>
                <p className="text-gray-600 mb-4">
                  Welcome to our architecture firm, where we combine cutting-edge design, sustainable practices, and a deep understanding of our
                  clients' needs to create exceptional structures that stand the test of time.
                </p>
                <div className="flex space-x-4 mb-4">
                  <Facebook className="w-6 h-6" />
                  <Twitter className="w-6 h-6" />
                  <Instagram className="w-6 h-6" />
                </div>
                <Button>Read More</Button>
              </div>
              <div className="md:w-1/2">
              <Image
                        src="/images/apprch.jpg"
                        alt="Modern orange building"
                        width={920}
                        height={900}
                        className="w-full h-64 object-cover rounded-lg"
                    />
              </div>
            </div>
          </div>
        </section>
        <section id="approach" className="py-16 bg-gray-100 w-full">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-gray-600 mb-6">
                At the heart of our architecture firm lies a relentless pursuit of innovation and a deep respect for the
                unique character of each project. We approach every challenge with a fresh perspective, drawing
                inspiration from the natural world, cultural heritage, and the evolving needs of our clients. The result
                is a portfolio of award-winning designs that seamlessly blend form, function, and sustainability.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                        src="/images/sust.jpg"
                        alt="Modern orange building"
                        width={1920}
                        height={1080}
                       className="w-full h-96 object-cover rounded-lg"
                    />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold mb-4">Sustainable Designs</h3>
                <p className="text-gray-600 mb-6">
                  Sustainability is at the core of our architectural philosophy. We are committed to creating buildings that
                  not only captivate the senses but also minimize environmental impact. From energy-efficient systems to
                  the integration of renewable resources, our designs prioritize the well-being of both people and the planet.
                </p>
                <Button>Explore Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-gray-900 text-white py-12 w-full">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Archivista</h3>
              <p className="text-gray-400">Transforming spaces, shaping futures.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => scrollToSection('approach')} className="text-gray-400 hover:text-white">About</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-white">Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Architecture Lane<br />Cityville, State 12345<br />contact@archivista.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 Archivista. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}