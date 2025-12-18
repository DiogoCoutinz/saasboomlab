"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CalendarModal } from "@/components/calendar-modal"
import { CheckCircle, Users, TrendingUp, Zap, Target, BarChart3, Bell, Play, ChevronDown, Users2 } from "lucide-react"

export default function CRMAIPage() {
  const [showAllProblems, setShowAllProblems] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section with Video Placeholder */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">CRM All-in-One</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Centraliza leads, follow-ups e vendas{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  automaticamente
                </span>
              </h1>
              
              <p className="text-gray-400 text-xl leading-relaxed mb-8">
                Uma plataforma centralizada para gerir todos os contactos, leads e agendamentos. 
                Nunca mais percas uma oportunidade de venda.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                onClick={() => setShowCalendar(true)}
              >
                Agendar chamada
              </Button>
            </div>

            {/* Right - Video Placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border border-green-500/30 overflow-hidden group cursor-pointer hover:border-green-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg mb-1">Demonstração em vídeo</p>
                    <p className="text-gray-400 text-sm">Vê o CRM All-in-One em ação</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-2xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É - Outcome Driven */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-green-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Feito para equipas que{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              precisam de crescer
            </span>
            {" "}sem perder controlo
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-3xl mx-auto">
            Se a tua equipa perde leads por falta de follow-up, o CRM All-in-One é para ti
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Equipas de vendas",
                description: "Que precisam de visibilidade total do pipeline e automação de follow-ups para aumentar conversão",
              },
              {
                icon: TrendingUp,
                title: "Gestores comerciais",
                description: "Que querem dashboards em tempo real e previsões de vendas baseadas em dados reais da equipa",
              },
              {
                icon: Users2,
                title: "Empresas em crescimento",
                description: "Que não podem perder leads por falta de organização ou follow-up manual inadequado",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas que Resolve - Reduced Density */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Problemas que resolvemos
          </h2>
          
          <div className="space-y-6">
            {[
              {
                problem: "Leads perdidos por falta de follow-up",
                solution: "Automação inteligente de follow-ups personalizados no timing certo",
                primary: true,
              },
              {
                problem: "Dados dispersos em múltiplas ferramentas",
                solution: "Centralização completa com importação automática de todas as fontes",
                primary: true,
              },
              {
                problem: "Falta de visibilidade do pipeline de vendas",
                solution: "Dashboards em tempo real com previsões e análise de conversão",
                primary: false,
              },
              {
                problem: "Tarefas manuais repetitivas que consomem tempo",
                solution: "IA que automatiza agendamentos, lembretes e tarefas rotineiras",
                primary: false,
              },
            ].slice(0, showAllProblems ? 4 : 2).map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border transition-all duration-300 ${
                  item.primary && index === 0
                    ? "border-green-500/30 p-8 shadow-lg shadow-green-500/10"
                    : "border-white/10 p-6"
                }`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                    <span className="text-red-400 text-xl">✕</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-gray-400 mb-2 ${item.primary && index === 0 ? "text-lg" : ""}`}>
                      {item.problem}
                    </p>
                    <div className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className={`text-white font-medium ${item.primary && index === 0 ? "text-lg" : ""}`}>
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAllProblems && (
            <div className="text-center mt-8">
              <Button
                variant="ghost"
                onClick={() => setShowAllProblems(true)}
                className="text-green-400 hover:text-purple-300 hover:bg-green-500/10 font-semibold"
              >
                Ver mais problemas
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Como Funciona - With Closing Line */}
      <section className="py-20 px-6 bg-gradient-to-b from-green-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Como funciona
          </h2>
          
          <div className="space-y-8 mb-12">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center font-bold text-white text-xl shadow-lg">
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

          {/* Closing Line */}
          <div className="rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-8 text-center">
            <p className="text-xl text-white font-semibold leading-relaxed">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Resultado:</span>
              {" "}pipeline organizado, leads qualificados e equipa focada em fechar vendas.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits - Visual Hierarchy */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Benefícios principais
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12">
            Resultados reais que impactam o teu negócio desde o primeiro dia
          </p>
          
          {/* Primary Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: TrendingUp,
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
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border-2 border-green-500/30 p-8 hover:border-green-500/50 transition-all duration-300 shadow-lg shadow-green-500/10"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-base">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Secondary Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Bell,
                title: "Visibilidade total",
                description: "Dashboards em tempo real mostram exatamente onde estão as oportunidades",
              },
              {
                icon: BarChart3,
                title: "Previsões precisas",
                description: "Analytics avançados ajudam a prever receitas e identificar oportunidades",
              },
              {
                icon: Users,
                title: "Colaboração em equipa",
                description: "Toda a equipa alinhada com acesso centralizado a informação de clientes",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-[#1a1a2e]/60 to-[#0d0d1a]/60 border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Simplified */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vamos conversar sobre o teu processo de vendas?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Agenda uma chamada connosco e descobre como o CRM All-in-One pode transformar 
              a eficiência da tua equipa comercial.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mb-6"
              onClick={() => setShowCalendar(true)}
            >
              Agendar chamada
            </Button>
            <div className="max-w-xl mx-auto">
              <p className="text-gray-400 text-sm leading-relaxed">
                Na demonstração iremos:<br />
                <span className="text-white">• Configurar o CRM com os teus processos de vendas</span><br />
                <span className="text-white">• Mostrar como automatizar follow-ups e tarefas</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <CalendarModal 
        isOpen={showCalendar} 
        onClose={() => setShowCalendar(false)}
        productName="CRM All-in-One"
        duration="30 min"
        accentColor="green"
      />
    </main>
  )
}

