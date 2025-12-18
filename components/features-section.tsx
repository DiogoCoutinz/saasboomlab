"use client"

import { CheckCircle, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    id: "finai",
    badge: "FineAI",
    badgeIcon: FileText,
    title: "Análise de FINs bancárias",
    highlight: "em 40 segundos",
    description:
      "O FineAI processa e compara documentos financeiros bancários instantaneamente. Extraia dados críticos, identifique as melhores propostas e tome decisões informadas com relatórios automáticos.",
    impactLine: "Ideal para empresas, consultores e gestores que analisam propostas bancárias com frequência.",
    points: [
      "Processamento automático de FINs bancárias",
      "Comparação instantânea de propostas",
      "Relatórios detalhados e exportáveis em PDF",
      "Integração com principais bancos portugueses",
      "Histórico completo de análises",
    ],
    cta: "Ver demonstração",
    href: "/finai",
    reversed: false,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: "crm",
    badge: "CRM All-in-One",
    badgeIcon: Users,
    title: "Gestão completa de leads",
    highlight: "num só lugar",
    description:
      "Uma plataforma centralizada para gerir todos os contactos, leads e agendamentos. Automatize follow-ups, acompanhe o pipeline de vendas e nunca perca uma oportunidade.",
    impactLine: "Mais do que um CRM, é um sistema que automatiza decisões e follow-ups por si.",
    points: [
      "Gestão centralizada de todos os contactos",
      "Pipeline de vendas visual e intuitivo",
      "Agendamento automático de reuniões",
      "Relatórios e analytics em tempo real",
      "Automação de follow-ups e lembretes",
    ],
    cta: "Explorar o CRM",
    href: "/crm-ai",
    reversed: true,
    gradient: "from-green-500 to-emerald-500",
  },
]

export function FeaturesSection() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    features.forEach((feature) => {
      const element = sectionRefs.current[feature.id]
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(feature.id))
            }
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {features.map((feature) => {
          const isVisible = visibleSections.has(feature.id)
          
          return (
            <div
              key={feature.id}
              ref={(el) => {
                sectionRefs.current[feature.id] = el
              }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${feature.reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Visual */}
              <div className="relative">
                <div
                  className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border border-white/10 overflow-hidden transition-all duration-700 ${
                    isVisible ? "scale-100 rotate-0" : "scale-95 rotate-1"
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-20 flex items-center justify-center transition-all duration-700 ${
                          isVisible ? "scale-100 rotate-0" : "scale-75 rotate-12"
                        }`}
                      >
                        <feature.badgeIcon
                          className={`w-10 h-10 transition-all duration-700 ${
                            feature.id === "finai" ? "text-blue-400" : "text-purple-400"
                          } ${isVisible ? "opacity-100" : "opacity-0"}`}
                        />
                      </div>
                      <p className="text-gray-500 text-sm">{feature.badge} Dashboard</p>
                    </div>
                  </div>
                  {/* Window controls */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                </div>
                {/* Glow effect */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} opacity-10 rounded-3xl blur-2xl -z-10 transition-opacity duration-700 ${
                    isVisible ? "opacity-20" : "opacity-0"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div
                  className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 transition-all duration-500 ${
                    feature.id === "finai"
                      ? "bg-blue-500/10 border-blue-500/20"
                      : "bg-purple-500/10 border-purple-500/20"
                  } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <feature.badgeIcon
                    className={`w-4 h-4 ${feature.id === "finai" ? "text-blue-400" : "text-purple-400"}`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      feature.id === "finai" ? "text-blue-400" : "text-purple-400"
                    }`}
                  >
                    {feature.badge}
                  </span>
                </div>

                <h3
                  className={`text-3xl md:text-4xl font-bold text-white leading-tight text-balance transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  {feature.title}{" "}
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.highlight}
                  </span>
                </h3>

                <p
                  className={`text-gray-400 text-lg leading-relaxed transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  {feature.description}
                </p>

                {/* Impact Line */}
                <p
                  className={`text-white font-semibold text-lg leading-relaxed transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  {feature.impactLine}
                </p>

                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className={`flex items-center gap-3 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${500 + pointIndex * 100}ms` }}
                    >
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 ${
                          feature.id === "finai" ? "text-blue-400" : "text-purple-400"
                        }`}
                      />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`pt-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "1000ms" }}
                >
                  <Link href={feature.href}>
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
                    >
                      {feature.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
