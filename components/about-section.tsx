"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/50 via-background to-pink-50/50"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About MAIT Buddy
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                MAIT Buddy is an intelligent chatbot designed specifically for freshers joining Maharaja Agrasen
                Institute of Technology (MAIT), Delhi. We understand that starting college can be overwhelming with so
                many questions about campus life, academics, and opportunities.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to make your transition smooth by providing instant answers to all your queries about the
                college, helping you explore campus facilities, discover student societies, and stay updated with the
                latest events and announcements.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-foreground font-medium">
                    24/7 Availability - Always here when you need help
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-foreground font-medium">Instant Responses - Get answers in seconds</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-foreground font-medium">Comprehensive Knowledge - Everything about MAIT</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl border-2 border-primary/30 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary via-accent to-secondary rounded-full flex items-center justify-center animate-pulse-glow shadow-2xl">
                    <span className="text-6xl animate-bounce-in">🤖</span>
                  </div>
                  <p className="text-foreground font-bold text-lg">Your AI-Powered Guide</p>
                  <p className="text-muted-foreground text-sm mt-2">Always ready to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
