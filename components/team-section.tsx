"use client"

import { useEffect, useRef } from "react"

export default function TeamSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const developers = [
    {
      name: "Developer 1",
      role: "Lead Developer",
      image: "/developer-profile-photo.jpg",
    },
    {
      name: "Developer 2",
      role: "Full Stack Developer",
      image: "/developer-profile-photo.jpg",
    },
    {
      name: "Developer 3",
      role: "UI/UX Designer",
      image: "/developer-profile-photo.jpg",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl opacity-40 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Meet the Team Behind MAIT Buddy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed and developed by <span className="font-bold text-primary">Binary Brains</span> — a passionate team
            dedicated to enhancing your college experience.
          </p>
        </div>

        {/* Developers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
              style={{
                animation: `slide-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Circular Image Container */}
              <div className="relative mb-6">
                {/* Animated gradient ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>

                {/* Image */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl group-hover:shadow-primary/50 transition-all duration-300 transform group-hover:scale-105">
                  <img src={dev.image || "/placeholder.svg"} alt={dev.name} className="w-full h-full object-cover" />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Developer Info */}
              <h3 className="text-xl font-bold text-foreground text-center mb-2 group-hover:text-primary transition-colors">
                {dev.name}
              </h3>
              <p className="text-muted-foreground text-center text-sm">{dev.role}</p>
            </div>
          ))}
        </div>

        {/* Team Description */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20 backdrop-blur-sm">
          <p className="text-center text-foreground">
            <span className="font-bold text-primary">Binary Brains</span> is a team of innovative developers and
            designers committed to creating intelligent solutions for students. MAIT Buddy is our passion project to
            make college life easier and more connected for every fresher at MAIT Delhi.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
