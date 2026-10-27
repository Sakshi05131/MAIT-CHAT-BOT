"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle } from "lucide-react"

export default function ChatbotSection() {
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
    <section id="chatbot" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Chat With MAIT Buddy Now
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your conversation with our AI assistant and get instant answers to all your questions
            </p>
          </div>

          {/* Chatbot Embed Container */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 bg-white shadow-2xl shadow-primary/20">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-lg">MAIT Buddy</h3>
                <p className="text-sm text-white/80">Always here to help</p>
              </div>
            </div>

            {/* Chatbot Embed Space */}
            <div className="min-h-96 p-6 bg-gradient-to-b from-white to-muted/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={40} className="text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">
                  <strong>Chatbase Chatbot Embed Space</strong>
                </p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                  Replace this section with your Chatbase chatbot embed code. Add the embed script here to enable live
                  chat functionality.
                </p>
                <code className="block bg-muted p-4 rounded-lg text-sm text-left overflow-x-auto mb-4">
                  {`<!-- Paste your Chatbase embed code here -->\n<script>\n  window.chatbaseConfig = {\n    chatbotId: "YOUR_CHATBOT_ID"\n  }\n</script>`}
                </code>
                <p className="text-xs text-muted-foreground">
                  Get your Chatbase embed code from your Chatbase dashboard
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-muted/50 p-4 text-center text-sm text-muted-foreground border-t border-border">
              Powered by MAIT Buddy • Your Personal College Guide
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
            <p className="text-center text-foreground">
              <strong>💡 Tip:</strong> Ask MAIT Buddy anything about campus life, academics, events, or student
              activities. Our AI is trained to help you make the most of your college experience!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
