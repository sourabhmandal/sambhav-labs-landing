"use client"
import { useState, useEffect } from "react"
import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import StatBar from "@/components/StatBar"
import ProductsSection from "@/components/ProductsSection"
import PhilosophyStrip from "@/components/PhilosophyStrip"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

const products: Array<Product> = [
  {
    id: "01",
    name: "Nomenclature",
    tag: "Text Localisation",
    description: "An Autonomous Text Localisation engine that can make any website available in 150+ different languages.",
    status: "Open Source",
    tech: ["ReactJS", "Python", "LangChain"],
    href: "https://github.com/sourabhmandal/nomenclature",
  },
  {
    id: "02",
    name: "Sambhav Copilot",
    tag: "Hiring Intelligence",
    description: "An AI assistant that helps recruiters screen, and engage candidates more effectively. This tool can help companies to streamline their hiring process and improve candidate experience.",
    status: "Coming Soon",
    tech: ["ReactJS", "Python", "LangChain"],
    href: "https://sambhavlabs.com",
  },
]



function useTypewriter(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState("")
  useEffect(() => {
    setDisplayed("")
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])
  return displayed
}

export default function SambhavLabs() {
  const headline = useTypewriter("We build tools for the AI-native era.", 45)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div
      style={{
        fontFamily: "monospace",
      }}
      className="min-h-screen bg-white text-black"
    >
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .fade-in { animation: fadeIn 0.6s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.5s; opacity: 0; }
        .product-card { transition: box-shadow 0.2s ease, transform 0.2s ease; }
        .product-card:hover { box-shadow: 4px 4px 0px 0px #000; transform: translate(-2px,-2px); }
        .cursor-cross { cursor: crosshair; }
        .mono { font-family: monospace; }
        .sans { font-family: sans-serif; }
        .blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .grid-bg {
          background-image: linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* Nav */}
      <NavBar />

      {/* Hero */}
      <HeroSection headline={headline} />

      {/* Stat bar */}
      <StatBar />

      {/* Products */}
      <ProductsSection
        products={products}
        hoveredId={hoveredId}
        setHoveredId={setHoveredId}
      />

      {/* Philosophy strip */}
      <PhilosophyStrip />

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
