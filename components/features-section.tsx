"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, MapPin, Users, Calendar, BookOpen, Lightbulb, X } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Ask About Campus",
    description: "Get detailed information about campus facilities, buildings, and locations",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    detailedContent: (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-purple-600">About MAIT College</h4>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Maharaja Agrasen Institute of Technology (MAIT)</strong> is a premier engineering college located in
            Rohini, Delhi. Established in 1999, MAIT is affiliated with Guru Gobind Singh Indraprastha University
            (GGSIPU) and approved by AICTE.
          </p>
          <p>
            <strong>Campus Facilities:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>State-of-the-art laboratories and workshops</li>
            <li>Modern library with extensive collection of books and e-resources</li>
            <li>Well-equipped computer centers with high-speed internet</li>
            <li>Spacious auditorium and seminar halls</li>
            <li>Sports facilities including basketball, volleyball, and cricket grounds</li>
            <li>Cafeteria and food courts</li>
            <li>Wi-Fi enabled campus</li>
          </ul>
          <p>
            <strong>Academic Programs:</strong> B.Tech in Computer Science, IT, Electronics, Mechanical, and more. The
            college focuses on holistic development with excellent placement records.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: MapPin,
    title: "Find Your Way",
    description: "Navigate campus with ease using our location guides and directions",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    detailedContent: (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-blue-600">How to Reach MAIT</h4>
        <div className="space-y-3 text-gray-700">
          <p className="font-semibold text-lg">By Delhi Metro + Walking</p>
          <p>
            <strong>Total time:</strong> ~10–15 minutes
            <br />
            <strong>Distance:</strong> ~2.5 km
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              Start at <strong>Rithala Metro Station</strong> (Red Line – towards Shaheed Sthal/New Bus Adda)
            </li>
            <li>
              Exit the station from <strong>Gate No. 3</strong> (towards Rohini Sector 22)
            </li>
            <li>
              From the gate, you can take an <strong>e-rickshaw or auto</strong> to MAIT, Sector 22, Rohini
            </li>
            <li>
              It's about 2.5 km and costs around <strong>₹20–30</strong>
            </li>
          </ol>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-blue-800">Address:</p>
            <p className="text-blue-700">PSP Area, Sector 22, Rohini, Delhi - 110086</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Discover Societies",
    description: "Explore student clubs and societies to find your community",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    detailedContent: (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-violet-600">MAIT Societies & Clubs</h4>
        <div className="space-y-3 text-gray-700">
          <p>MAIT offers a vibrant student life with numerous societies and clubs:</p>

          <div className="space-y-4">
            <div className="p-3 bg-violet-50 rounded-lg">
              <p className="font-semibold text-violet-700">Technical Societies</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>
                  <strong>IEEE MAIT</strong> - Technical workshops and competitions
                </li>
                <li>
                  <strong>CSI MAIT</strong> - Computer Society of India chapter
                </li>
                <li>
                  <strong>Robotics Club</strong> - Robotics and automation projects
                </li>
                <li>
                  <strong>Coding Club</strong> - Competitive programming and hackathons
                </li>
              </ul>
            </div>

            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="font-semibold text-purple-700">Cultural Societies</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>
                  <strong>Kalakriti</strong> - Fine arts and painting
                </li>
                <li>
                  <strong>Footloose</strong> - Dance society
                </li>
                <li>
                  <strong>Euphony</strong> - Music society
                </li>
                <li>
                  <strong>Dramatix</strong> - Drama and theatre
                </li>
              </ul>
            </div>

            <div className="p-3 bg-indigo-50 rounded-lg">
              <p className="font-semibold text-indigo-700">Other Clubs</p>
              <ul className="list-disc list-inside ml-4 mt-2">
                <li>
                  <strong>Literary Society</strong> - Writing and debates
                </li>
                <li>
                  <strong>Photography Club</strong> - Photography and videography
                </li>
                <li>
                  <strong>Sports Committee</strong> - Various sports activities
                </li>
                <li>
                  <strong>Social Service Club</strong> - Community service initiatives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Calendar,
    title: "Event Updates",
    description: "Stay informed about upcoming events, fests, and activities",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50",
  },
  {
    icon: BookOpen,
    title: "Know Your Departments",
    description: "Learn about different departments and academic programs",
    color: "from-purple-600 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Lightbulb,
    title: "Quick Tips",
    description: "Get helpful tips and advice for college life success",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50",
  },
]

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)
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
      id="features"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-purple-50/20 to-blue-50/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              What Can MAIT Buddy Do?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore all the amazing features that make MAIT Buddy your perfect college companion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedFeature === index
            const hasDetailedContent = !!feature.detailedContent

            return (
              <div
                key={index}
                className={`group relative p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-3 overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${isExpanded ? "md:col-span-2 lg:col-span-3" : ""} ${hasDetailedContent ? "cursor-pointer" : ""}`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
                onClick={() => {
                  if (hasDetailedContent) {
                    setExpandedFeature(isExpanded ? null : index)
                  }
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                ></div>

                {isExpanded && (
                  <button
                    className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedFeature(null)
                    }}
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                )}

                <div className={isExpanded ? "grid md:grid-cols-3 gap-6" : ""}>
                  <div className={isExpanded ? "md:col-span-1" : ""}>
                    {/* Icon Container */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                    {hasDetailedContent && !isExpanded && (
                      <p className="text-sm text-blue-600 mt-3 font-semibold">Click to learn more →</p>
                    )}
                  </div>

                  {isExpanded && feature.detailedContent && (
                    <div className="md:col-span-2 mt-6 md:mt-0 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-6 border-gray-200">
                      {feature.detailedContent}
                    </div>
                  )}
                </div>

                {/* Hover Indicator */}
                {!isExpanded && (
                  <div
                    className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}
                  ></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
