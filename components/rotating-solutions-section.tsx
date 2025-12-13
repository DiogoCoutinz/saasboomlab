"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Clock, TrendingUp, Headphones, FileText, BarChart3, Users, Zap, Shield, Bot } from "lucide-react"

const solutions = [
  {
    id: "boomvoice",
    badge: "BoomVoice",
    icon: Phone,
    title: "Agente de Voz IA que",
    highlight: "nunca descansa",
    description: "O BoomVoice atende, qualifica e agenda reuniões automaticamente. O vosso agente de vendas virtual que trabalha 24 horas por dia, 7 dias por semana, sem pausas para café.",
    features: [
      "Atendimento automático 24/7 sem pausas",
      "Qualificação inteligente de leads em tempo real",
      "Agendamento automático de reuniões",
      "Integração com o vosso CRM existente",
      "Relatórios detalhados de cada chamada",
      "Voz natural e personalizada para a vossa marca",
    ],
    ctaText: "Experimentar BoomVoice",
    visualElements: [
      { icon: Clock, text: "24/7 Ativo", color: "cyan" },
      { icon: TrendingUp, text: "+40% Conversões", color: "green" },
      { icon: Headphones, text: "Voz Natural", color: "purple" },
    ],
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-500/5 to-transparent"
  },
  {
    id: "finai",
    badge: "FinAI",
    icon: FileText,
    title: "Análise de FINs bancárias em",
    highlight: "40 segundos",
    description: "O FinAI processa e compara documentos financeiros bancários instantaneamente. Extraia dados críticos, identifique as melhores propostas e tome decisões informadas com relatórios automáticos.",
    features: [
      "Processamento automático de FINs bancárias",
      "Comparação instantânea de propostas",
      "Relatórios detalhados e exportáveis em PDF",
      "Integração com principais bancos portugueses",
      "Histórico completo de análises",
      "Análise de risco automatizada",
    ],
    ctaText: "Saber mais sobre FinAI",
    visualElements: [
      { icon: Zap, text: "40 segundos", color: "yellow" },
      { icon: BarChart3, text: "Análise Completa", color: "blue" },
      { icon: Shield, text: "Dados Seguros", color: "green" },
    ],
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-blue-500/5 to-transparent"
  },
  {
    id: "crm",
    badge: "CRM All-in-One",
    icon: Users,
    title: "Gestão completa de leads",
    highlight: "num só lugar",
    description: "Uma plataforma centralizada para gerir todos os contactos, leads e agendamentos. Automatize follow-ups, acompanhe o pipeline de vendas e nunca perca uma oportunidade.",
    features: [
      "Gestão centralizada de todos os contactos",
      "Pipeline de vendas visual e intuitivo",
      "Agendamento automático de reuniões",
      "Relatórios e analytics em tempo real",
      "Automação de follow-ups e lembretes",
      "Integração com todas as ferramentas",
    ],
    ctaText: "Saber mais sobre CRM All-in-One",
    visualElements: [
      { icon: Users, text: "Todos os Leads", color: "cyan" },
      { icon: Bot, text: "Auto Follow-up", color: "purple" },
      { icon: TrendingUp, text: "Pipeline Visual", color: "green" },
    ],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/5 to-transparent"
  },
]

export function RotatingSolutionsSection() {
  const [currentSolution, setCurrentSolution] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSolution((prev) => (prev + 1) % solutions.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const solution = solutions[currentSolution]

  const getColorClass = (color: string) => {
    switch (color) {
      case 'cyan': return 'text-cyan-400'
      case 'green': return 'text-green-400'
      case 'purple': return 'text-purple-400'
      case 'yellow': return 'text-yellow-400'
      case 'blue': return 'text-blue-400'
      default: return 'text-cyan-400'
    }
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background accent - animated based on current solution */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r ${solution.bgGradient} rounded-full blur-3xl transition-all duration-1000`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <div className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="relative aspect-square max-w-md mx-auto animate-float">
              {/* Main visual card */}
              <div className="absolute inset-0 rounded-3xl glass border border-white/20 overflow-hidden animate-pulse-glow">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main icon with enhanced animations */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 animate-ping bg-gradient-to-r ${solution.gradient} opacity-30 rounded-full`}
                      style={{ animationDuration: "2s" }}
                    />
                    <div
                      className={`absolute inset-0 animate-ping bg-gradient-to-r ${solution.gradient} opacity-20 rounded-full`}
                      style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                    />
                    <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-2xl animate-scale-pulse hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                      <solution.icon className="w-14 h-14 text-white animate-rotate-slow" />
                    </div>
                  </div>
                </div>
                
                {/* Enhanced floating elements */}
                {solution.visualElements.map((element, index) => (
                  <div 
                    key={index}
                    className={`absolute ${
                      index === 0 ? 'top-6 left-6' : 
                      index === 1 ? 'bottom-6 right-6' : 
                      'top-6 right-6'
                    } flex items-center gap-3 glass rounded-full px-4 py-3 animate-fade-slide-in hover:scale-105 transition-smooth cursor-pointer group`}
                    style={{ 
                      animationDelay: `${index * 0.3}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    <element.icon className={`w-5 h-5 ${getColorClass(element.color)} group-hover:animate-pulse`} />
                    <span className="text-white text-sm font-semibold">{element.text}</span>
                  </div>
                ))}
              </div>
              {/* Enhanced animated glow effect */}
              <div className={`absolute -inset-6 bg-gradient-to-r ${solution.gradient} opacity-30 rounded-3xl blur-3xl -z-10 animate-pulse`} />
              <div className={`absolute -inset-4 bg-gradient-to-r ${solution.gradient} opacity-15 rounded-3xl blur-xl -z-10 animate-ping`} style={{ animationDuration: "4s" }} />
            </div>
          </div>

          {/* Right - Enhanced Content */}
          <div className={`space-y-8 transition-all duration-700 ${isAnimating ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'}`}>
            <div className={`inline-flex items-center gap-3 glass border-2 border-gradient rounded-full px-6 py-3 animate-fade-slide-in hover:scale-105 transition-smooth`}>
              <solution.icon className={`w-5 h-5 ${getColorClass(solution.gradient.includes('cyan') ? 'cyan' : solution.gradient.includes('blue') ? 'blue' : 'purple')} animate-pulse`} />
              <span className={`${getColorClass(solution.gradient.includes('cyan') ? 'cyan' : solution.gradient.includes('blue') ? 'blue' : 'purple')} text-sm font-bold tracking-wide`}>
                {solution.badge}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              {solution.title}{" "}
              <span className={`bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                {solution.highlight}
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {solution.description}
            </p>

            <ul className="space-y-4">
              {solution.features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 animate-slide-in-left hover:translate-x-2 transition-smooth group"
                  style={{ 
                    animationDelay: `${index * 0.1 + 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <CheckCircle className={`w-5 h-5 flex-shrink-0 ${getColorClass(solution.gradient.includes('cyan') ? 'cyan' : solution.gradient.includes('blue') ? 'blue' : 'purple')} group-hover:animate-pulse`} />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Button
                size="lg"
                className={`bg-gradient-to-r ${solution.gradient} hover:opacity-90 text-white font-bold px-10 py-7 text-lg rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 animate-pulse-glow relative overflow-hidden group`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {solution.ctaText}
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Enhanced solution indicators */}
            <div className="flex gap-3 pt-6 justify-center lg:justify-start">
              {solutions.map((sol, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true)
                    setTimeout(() => {
                      setCurrentSolution(index)
                      setIsAnimating(false)
                    }, 300)
                  }}
                  className={`relative overflow-hidden rounded-full transition-all duration-500 group ${
                    index === currentSolution 
                      ? `w-12 h-3 bg-gradient-to-r ${solution.gradient}` 
                      : 'w-3 h-3 bg-gray-600 hover:bg-gray-500 hover:scale-125'
                  }`}
                  title={sol.badge}
                >
                  {index === currentSolution && (
                    <div className="absolute inset-0 bg-white/20 animate-ping" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
