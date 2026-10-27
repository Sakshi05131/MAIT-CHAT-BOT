"use client"

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-background to-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MB</span>
              </div>
              <span className="font-bold text-lg">MAIT Buddy</span>
            </div>
            <p className="text-muted-foreground text-sm">Your personal guide to everything at MAIT Delhi</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#chatbot" className="text-muted-foreground hover:text-primary transition-colors">
                  Chat Now
                </a>
              </li>
            </ul>
          </div>

          {/* College Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">MAIT Delhi</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Maharaja Agrasen Institute of Technology, Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+91-11-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@mait.ac.in</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} MAIT Buddy. All rights reserved. | Maharaja Agrasen Institute of Technology</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
