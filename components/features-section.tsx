import { CheckCircle, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: "finai",
    badge: "FinAI",
    badgeIcon: FileText,
    title: "Análise de FINs bancárias",
    highlight: "em 40 segundos",
    description:
      "O FinAI processa e compara documentos financeiros bancários instantaneamente. Extraia dados críticos, identifique as melhores propostas e tome decisões informadas com relatórios automáticos.",
    points: [
      "Processamento automático de FINs bancárias",
      "Comparação instantânea de propostas",
      "Relatórios detalhados e exportáveis em PDF",
      "Integração com principais bancos portugueses",
      "Histórico completo de análises",
    ],
    reversed: false,
  },
  {
    id: "crm",
    badge: "CRM All-in-One",
    badgeIcon: Users,
    title: "Gestão completa de leads",
    highlight: "num só lugar",
    description:
      "Uma plataforma centralizada para gerir todos os contactos, leads e agendamentos. Automatize follow-ups, acompanhe o pipeline de vendas e nunca perca uma oportunidade.",
    points: [
      "Gestão centralizada de todos os contactos",
      "Pipeline de vendas visual e intuitivo",
      "Agendamento automático de reuniões",
      "Relatórios e analytics em tempo real",
      "Automação de follow-ups e lembretes",
    ],
    reversed: true,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${feature.reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            {/* Visual */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                      <feature.badgeIcon className="w-10 h-10 text-cyan-400" />
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
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-3xl blur-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
                <feature.badgeIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">{feature.badge}</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight text-balance">
                {feature.title}{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  {feature.highlight}
                </span>
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>

              <ul className="space-y-3">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                >
                  Saber mais sobre {feature.badge}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
