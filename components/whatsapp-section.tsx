"use client"

import Image from "next/image"
import { Smartphone } from "lucide-react"

export default function WhatsAppSection() {
  return (
    <section id="whatsapp" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Smartphone className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect with WhatsApp
            </h2>
          </div>
          <p className="text-xl text-muted-foreground">You can connect this bot with your WhatsApp</p>
        </div>

        {/* QR Code Card */}
        <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20 shadow-2xl animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Scan this QR Code</h3>
            <p className="text-muted-foreground">Open WhatsApp on your phone and scan to connect with MAIT Buddy</p>
          </div>

          {/* QR Code Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                <Image
                  src="/whatsapp-qr.png"
                  alt="WhatsApp QR Code for MAIT Buddy"
                  width={400}
                  height={600}
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 px-6 py-3 rounded-full border border-purple-500/20">
              <span className="text-sm text-muted-foreground">Available 24/7 • Instant Responses • Free to Use</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
