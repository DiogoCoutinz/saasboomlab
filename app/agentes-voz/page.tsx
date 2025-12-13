import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Clock, Headphones, TrendingUp, Users2, Calendar, MessageSquare } from "lucide-react"

export default function AgentesVozPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">BoomVoice</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Contacta leads em segundos,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              sem intervenção humana
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Agentes de voz IA que qualificam leads, agendam reuniões e fazem follow-ups 
            24 horas por dia, 7 dias por semana, sem pausas.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
          >
            Agendar demonstração
          </Button>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Para quem é o BoomVoice?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users2,
                title: "Equipas de prospeção",
                description: "Que precisam de contactar centenas de leads por dia sem aumentar headcount.",
              },
              {
                icon: TrendingUp,
                title: "Empresas de alto volume",
                description: "Com grande fluxo de leads que precisam de qualificação rápida antes de alocar vendedores.",
              },
              {
                icon: Clock,
                title: "Negócios 24/7",
                description: "Que não podem perder oportunidades fora do horário de expediente.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-cyan-400" />
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
                problem: "Leads ficam horas/dias sem contacto inicial",
                solution: "Contacto automático em menos de 60 segundos após captura do lead",
              },
              {
                problem: "Custo elevado de equipas de prospeção",
                solution: "Redução de até 70% nos custos de contacto inicial e qualificação",
              },
              {
                problem: "Baixa taxa de contacto e follow-up inconsistente",
                solution: "100% dos leads contactados com follow-ups persistentes até resposta",
              },
              {
                problem: "Perda de oportunidades fora do horário comercial",
                solution: "Atendimento e qualificação 24/7 sem custos adicionais",
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
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 px-6 bg-gradient-to-b from-cyan-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Como funciona
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Configuração e Personalização",
                description: "Criamos scripts personalizados para o teu negócio, selecionamos a voz ideal e configuramos a integração com o teu CRM. Definimos critérios de qualificação específicos.",
              },
              {
                step: "2",
                title: "Ativação Automática",
                description: "Quando um lead entra no sistema, o BoomVoice contacta automaticamente, faz as perguntas de qualificação e avalia interesse e timing de compra.",
              },
              {
                step: "3",
                title: "Agendamento Inteligente",
                description: "Leads qualificados recebem proposta de agendamento imediato. O agente acede à agenda da tua equipa e marca reunião no slot conveniente para ambas as partes.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center font-bold text-white text-xl">
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
                icon: TrendingUp,
                title: "60% mais reuniões agendadas",
                description: "Contacto imediato e follow-ups persistentes aumentam dramaticamente o agendamento",
              },
              {
                icon: Clock,
                title: "Contacto em menos de 60 segundos",
                description: "Velocidade de resposta aumenta em 10x a probabilidade de conversão do lead",
              },
              {
                icon: Headphones,
                title: "Voz natural e profissional",
                description: "IA de última geração com voz indistinguível de humano, personalizada à tua marca",
              },
              {
                icon: MessageSquare,
                title: "Transcrição e análise completa",
                description: "Todas as chamadas gravadas, transcritas e analisadas para melhoria contínua",
              },
              {
                icon: Calendar,
                title: "Integração com agenda",
                description: "Sincronização automática com Google Calendar, Outlook e principais ferramentas",
              },
              {
                icon: Phone,
                title: "Capacidade ilimitada",
                description: "Escala instantaneamente para 100 ou 10.000 chamadas por dia sem contratar ninguém",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyan-400" />
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
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experimenta o BoomVoice em ação
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Agenda uma demonstração e recebe uma chamada do BoomVoice. 
              Vê em primeira mão como funciona a tecnologia.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300"
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

