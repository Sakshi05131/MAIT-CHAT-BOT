"use client"

import { ChevronDown, Sparkles, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        {/* Deep Purple orb */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/40 to-indigo-500/30 rounded-full blur-3xl animate-float"></div>
        {/* Bright Blue orb */}
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/40 to-cyan-400/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        {/* Violet orb */}
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-violet-400/40 to-purple-400/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        {/* Blue accent orb */}
        <div
          className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-indigo-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-400/40 rounded-full mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Zap size={16} className="text-purple-600 animate-pulse" />
          <span className="text-sm font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Welcome to Your College Guide
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-shift">
            Meet MAIT Buddy
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
            Your Personal College Guide
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Everything you need to know about MAIT Delhi in one intelligent chatbot. From campus tours to event updates,
          we've got you covered!
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="https://www.chatbase.co/ob3lRcutwFGb8DjYYIN75/help"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles size={20} />
              Start Chatting
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-2 border-purple-500 text-purple-600 rounded-full font-bold text-lg hover:bg-purple-500/30 transition-all transform hover:scale-105 active:scale-95">
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`flex justify-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-purple-600" />
          </div>
        </div>
      </div>
    </section>
  )
}
