"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, FileText, ArrowRight, Phone, TrendingUp, BarChart } from "lucide-react"

const solutions = [
  {
    icon: Users,
    title: "CRM All-in-One",
    description: "Centraliza leads, follow-ups e vendas automaticamente. Pipeline visual e automação inteligente.",
    gradient: "from-purple-500 to-pink-500",
    href: "/crm-ai",
    cta: "Explorar CRM",
    ctaIcon: TrendingUp,
    featured: false,
  },
  {
    icon: Zap,
    title: "BoomVoice",
    description: "Contacta leads em segundos, sem intervenção humana. Agentes de voz que qualificam e agendam.",
    gradient: "from-cyan-500 to-teal-500",
    href: "/agentes-voz",
    cta: "Testar agente de voz",
    ctaIcon: Phone,
    featured: true,
  },
  {
    icon: FileText,
    title: "FineAI",
    description: "Analisa documentos financeiros em menos de 1 minuto. Comparação automática de propostas bancárias.",
    gradient: "from-blue-500 to-indigo-500",
    href: "/fineai",
    cta: "Ver demonstração",
    ctaIcon: BarChart,
    featured: false,
  },
]

export function SolutionsCardsSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">As Nossas Soluções</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologia de IA aplicada aos processos mais críticos do teu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className={`relative bg-gradient-to-b from-gray-900/80 to-gray-900/40 border backdrop-blur-sm transition-all duration-500 group overflow-hidden ${
                solution.featured
                  ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 scale-105 md:scale-110"
                  : "border-white/10 hover:border-white/30"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {solution.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}

              <CardContent className="p-8 relative">
                {/* Animated background glow for featured */}
                {solution.featured && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 animate-pulse" />
                )}

                <div className="relative">
                  <div
                    className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center transition-all duration-500 ${
                      solution.featured
                        ? "group-hover:scale-110 group-hover:rotate-6 animate-float"
                        : "group-hover:scale-110 group-hover:rotate-3"
                    }`}
                  >
                    <solution.icon className={`w-8 h-8 text-white ${solution.featured ? "animate-pulse" : ""}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {solution.description}
                  </p>

                  <Link href={solution.href}>
                    <Button
                      variant={solution.featured ? "default" : "ghost"}
                      className={`w-full justify-between font-semibold transition-all duration-300 group/btn ${
                        solution.featured
                          ? `bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl hover:scale-105`
                          : "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <solution.ctaIcon className="w-4 h-4" />
                        {solution.cta}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>

              {/* Hover effect border animation */}
              <div
                className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  solution.featured ? "bg-gradient-to-r from-cyan-500/10 to-teal-500/10" : ""
                }`}
              />
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

