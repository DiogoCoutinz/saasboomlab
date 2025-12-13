import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, TrendingUp, Zap, Target, BarChart3, Bell } from "lucide-react"

export default function CRMAIPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">CRM AI-in-One</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Centraliza leads, follow-ups e vendas{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              automaticamente
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Uma plataforma centralizada para gerir todos os contactos, leads e agendamentos. 
            Nunca mais percas uma oportunidade de venda.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
          >
            Agendar demonstração
          </Button>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Para quem é o CRM AI-in-One?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Equipas de vendas",
                description: "Que precisam de visibilidade total do pipeline e automação de follow-ups para aumentar conversão.",
              },
              {
                icon: TrendingUp,
                title: "Gestores comerciais",
                description: "Que querem dashboards em tempo real e previsões de vendas baseadas em dados reais.",
              },
              {
                icon: Zap,
                title: "Empresas em crescimento",
                description: "Que não podem perder leads por falta de organização ou follow-up manual.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problema que Resolve */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Problemas que resolvemos
          </h2>
          
          <div className="space-y-6">
            {[
              {
                problem: "Leads perdidos por falta de follow-up",
                solution: "Automação inteligente de follow-ups personalizados no timing certo",
              },
              {
                problem: "Dados dispersos em múltiplas ferramentas",
                solution: "Centralização completa com importação automática de todas as fontes",
              },
              {
                problem: "Falta de visibilidade do pipeline de vendas",
                solution: "Dashboards em tempo real com previsões e análise de conversão",
              },
              {
                problem: "Tarefas manuais repetitivas que consomem tempo",
                solution: "IA que automatiza agendamentos, lembretes e tarefas rotineiras",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-6"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <span className="text-red-400 text-xl">✕</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 mb-2">{item.problem}</p>
                    <div className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-6 bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Como funciona
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Importação e Integração",
                description: "Conectamos o CRM com as tuas fontes de leads: website, email, LinkedIn, chamadas. Importamos dados existentes e configuramos fluxos automáticos.",
              },
              {
                step: "2",
                title: "Configuração Inteligente",
                description: "Adaptamos o pipeline ao teu processo de vendas, criamos automações de follow-up e configuramos dashboards relevantes para a tua equipa.",
              },
              {
                step: "3",
                title: "Gestão Automatizada",
                description: "A IA distribui leads, agenda follow-ups, envia lembretes e atualiza o pipeline. A tua equipa foca-se apenas em fechar negócios.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Benefícios principais
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Aumento de 40% na conversão",
                description: "Follow-ups automáticos no timing perfeito aumentam drasticamente as taxas de conversão",
              },
              {
                icon: Zap,
                title: "Poupança de 15h/semana",
                description: "Automação de tarefas repetitivas liberta tempo para atividades de alto valor",
              },
              {
                icon: Target,
                title: "Zero leads perdidos",
                description: "Sistema de alertas e automações garante que nenhum lead fica sem seguimento",
              },
              {
                icon: Bell,
                title: "Visibilidade total",
                description: "Dashboards em tempo real mostram exatamente onde estão as oportunidades",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para automatizar as tuas vendas?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Agenda uma demonstração personalizada e vê como o CRM AI-in-One pode transformar 
              a eficiência da tua equipa comercial.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300"
            >
              Agendar demonstração
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

