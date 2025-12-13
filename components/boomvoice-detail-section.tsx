import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Clock, TrendingUp, Headphones, ArrowRight } from "lucide-react"

export function BoomVoiceDetailSection() {
  const features = [
    "Atendimento automático 24/7 sem pausas",
    "Qualificação inteligente de leads em tempo real",
    "Agendamento automático de reuniões",
    "Integração com o vosso CRM existente",
    "Relatórios detalhados de cada chamada",
    "Voz natural e personalizada para a vossa marca",
  ]

  return (
    <section className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main visual card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border border-white/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Phone icon with pulse */}
                  <div className="relative">
                    <div
                      className="absolute inset-0 animate-ping bg-cyan-500/20 rounded-full"
                      style={{ animationDuration: "2s" }}
                    />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                      <Phone className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 animate-float">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-sm font-medium">24/7 Ativo</span>
                </div>
                <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 animate-float" style={{ animationDelay: "0.5s" }}>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm font-medium">+40% Conversões</span>
                </div>
                <div className="absolute top-8 right-8 flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 animate-float" style={{ animationDelay: "1s" }}>
                  <Headphones className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-sm font-medium">Voz Natural</span>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">BoomVoice</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Agente de Voz IA que{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                nunca descansa
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              O BoomVoice atende, qualifica e agenda reuniões automaticamente. O vosso agente de vendas virtual que
              trabalha 24 horas por dia, 7 dias por semana, sem pausas para café.
            </p>

            {/* Impact Line */}
            <p className="text-white font-semibold text-lg leading-relaxed max-w-xl">
              Substitui equipas de chamadas manuais e garante que nenhum lead fica sem contacto.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/agentes-voz">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Experimentar por 1€
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/agentes-voz">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                >
                  Saber mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

