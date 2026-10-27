"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-lg">MB</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MAIT Buddy
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("chatbot")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Chat
          </button>
          <button
            onClick={() => scrollToSection("chatbot")}
            className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border animate-slide-up">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("chatbot")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Chat
            </button>
            <button
              onClick={() => scrollToSection("chatbot")}
              className="w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
