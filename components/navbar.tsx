"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BoomLabLogo } from "@/components/boom-lab-logo"
import { Menu, X, Zap, Users, FileText, Phone, Calendar, ArrowRight } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const products = [
    {
      name: "BoomVoice",
      description: "Agentes de voz IA que ligam automaticamente",
      icon: Zap,
      href: "/agentes-voz",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10"
    },
    {
      name: "CRM All-in-One", 
      description: "Centraliza leads, follow-ups e vendas",
      icon: Users,
      href: "/crm-ai",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      name: "FineAI",
      description: "Analisa documentos financeiros em 1 minuto",
      icon: FileText,
      href: "/fineai",
      color: "text-blue-400", 
      bgColor: "bg-blue-500/10"
    },
  ]

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "#" },
    { name: "Casos de Sucesso", href: "#" },
    { name: "Contacto", href: "#" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/">
          <BoomLabLogo />
        </Link>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-medium px-6 py-2 rounded-lg transition-all duration-300 bg-transparent"
            asChild
          >
            <Link href="/#solutions-section">Vamos começar?</Link>
          </Button>
          
          <div className="relative" ref={menuRef}>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-16 right-0 w-96 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Products Section */}
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Nossas Soluções</h3>
                  <div className="space-y-3">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className={`w-10 h-10 rounded-lg ${product.bgColor} flex items-center justify-center`}>
                          <product.icon className={`w-5 h-5 ${product.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-gray-400 text-sm leading-tight">{product.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Navigation Section */}
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Navegação</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="p-6">
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Demonstração
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-gray-300 hover:bg-white/5 hover:text-white rounded-xl"
                      asChild
                    >
                      <Link href="tel:+351123456789" onClick={() => setIsMenuOpen(false)}>
                        <Phone className="w-4 h-4 mr-2" />
                        Falar Connosco
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
