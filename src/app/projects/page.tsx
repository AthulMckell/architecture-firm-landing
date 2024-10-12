"use client"
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

// Sample project data
const projects = [
  {
    id: 1,
    title: "Modern Skyscraper",
    description: "A cutting-edge commercial tower in the heart of the city.",
    mainImage: "/images/modsky1.jpg",
    images: [
      "/images/modsky1.jpg",
      "/images/modsky2.jpg",
      "/images/modsky3.jpg",
    ],
    fullDescription: "This state-of-the-art skyscraper features a unique twisted design that maximizes natural light and offers panoramic city views. With 50 floors of premium office space and retail areas, it's set to become a landmark in modern urban architecture."
  },
  {
    id: 2,
    title: "Eco-Friendly Residence",
    description: "A sustainable home that blends with nature.",
    mainImage: "/images/modsky1.jpg",
    images: [
      "/images/modsky1.jpg",
      "/images/modsky2.jpg",
      "/images/modsky3.jpg",
    ],
    fullDescription: "This eco-friendly residence utilizes solar power, rainwater harvesting, and natural ventilation to minimize its environmental impact. The design incorporates local materials and green spaces, creating a harmonious living environment."
  },
  {
    id: 3,
    title: "Cultural Center",
    description: "A vibrant hub for arts and community events.",
    mainImage: "/images/modsky1.jpg",
    images: [
      "/images/modsky1.jpg",
      "/images/modsky2.jpg",
      "/images/modsky3.jpg",
    ],
    fullDescription: "This cultural center features flexible exhibition spaces, a state-of-the-art auditorium, and workshops for local artists. Its striking facade draws inspiration from traditional art forms, creating a bridge between heritage and contemporary design."
  },
  {
    id: 4,
    title: "Urban Park",
    description: "A green oasis in the urban landscape.",
    mainImage: "/images/modsky2.jpg",
    images: [
      "/images/modsky1.jpg",
      "/images/modsky2.jpg",
      "/images/modsky3.jpg",
    ],
    fullDescription: "This innovative urban park transforms a former industrial site into a lush green space. It features winding paths, water features, and diverse plant life, providing a much-needed natural retreat for city dwellers."
  },
  {
    id: 5,
    title: "Smart Office Complex",
    description: "A tech-integrated workspace for the future.",
    mainImage: "/images/modsky2.jpg",
    images: [
      "/images/modsky1.jpg",
      "/images/modsky2.jpg",
      "/images/modsky3.jpg",
    ],
    fullDescription: "This smart office complex integrates cutting-edge technology to enhance productivity and well-being. Features include AI-controlled climate systems, smart meeting rooms, and green spaces designed to promote collaboration and creativity."
  },
]

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openProject = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedProject.images.length
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    )
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
                <span className="font-bold sm:inline-block">TwoArc Studio</span>
              </a>
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <button onClick={() => scrollToSection('home')} className="transition-colors hover:text-foreground/80 text-foreground/60">
                  Home
                </button>
                <button onClick={() => scrollToSection('projects')} className="transition-colors hover:text-foreground/80 text-foreground/60">
                  Projects
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
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={() => openProject(project)}>
                <CardHeader>
                  <Image src={project.mainImage} alt={project.title} width={600} height={400} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={selectedProject !== null} onOpenChange={closeProject}>
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle>{selectedProject?.title}</DialogTitle>
                <DialogDescription>{selectedProject?.description}</DialogDescription>
              </DialogHeader>
              <div className="relative">
                <Image 
                  src={selectedProject?.images[currentImageIndex]} 
                  alt={`${selectedProject?.title} - Image ${currentImageIndex + 1}`} 
                  width={700}
                  height={400}
                  className="w-full h-[400px] object-cover rounded-md"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-1/2 left-2 transform -translate-y-1/2"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">{selectedProject?.fullDescription}</p>
            </DialogContent>
          </Dialog>
        </div>
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