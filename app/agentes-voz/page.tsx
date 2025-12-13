"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, Clock, Headphones, TrendingUp, Users2, Calendar, MessageSquare, Play, Lock, ChevronDown } from "lucide-react"

export default function AgentesVozPage() {
  const [showAllProblems, setShowAllProblems] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ name, phone })
  }

  const problems = [
    {
      problem: "Leads ficam horas/dias sem contacto inicial",
      solution: "Contacto automático em menos de 60 segundos após captura do lead",
      primary: true,
    },
    {
      problem: "Custo elevado de equipas de prospeção",
      solution: "Redução de até 70% nos custos de contacto inicial e qualificação",
      primary: true,
    },
    {
      problem: "Baixa taxa de contacto e follow-up inconsistente",
      solution: "100% dos leads contactados com follow-ups persistentes até resposta",
      primary: false,
    },
    {
      problem: "Perda de oportunidades fora do horário comercial",
      solution: "Atendimento e qualificação 24/7 sem custos adicionais",
      primary: false,
    },
  ]

  const primaryBenefits = [
    {
      icon: TrendingUp,
      title: "+60% reuniões agendadas",
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
  ]

  const secondaryBenefits = [
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
  ]

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section with Video Placeholder */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
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
              
              <p className="text-gray-400 text-xl leading-relaxed mb-8">
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

            {/* Right - Video Placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border border-cyan-500/30 overflow-hidden group cursor-pointer hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg mb-1">Demonstração em vídeo</p>
                    <p className="text-gray-400 text-sm">Vê o BoomVoice em ação (60–90s)</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-2xl blur-2xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É - Outcome Driven */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Feito para equipas que{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              não podem esperar
            </span>
            {" "}para contactar leads
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-3xl mx-auto">
            Se cada minuto conta na qualificação de oportunidades, o BoomVoice é para ti
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users2,
                title: "Equipas de prospeção",
                description: "Que precisam de contactar centenas de leads por dia sem aumentar headcount",
              },
              {
                icon: TrendingUp,
                title: "Empresas de alto volume",
                description: "Com grande fluxo de leads que precisam de qualificação rápida antes de alocar vendedores",
              },
              {
                icon: Clock,
                title: "Negócios 24/7",
                description: "Que não podem perder oportunidades fora do horário de expediente",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-cyan-400" />
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
            {problems.slice(0, showAllProblems ? problems.length : 2).map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border transition-all duration-300 ${
                  item.primary && index === 0
                    ? "border-cyan-500/30 p-8 shadow-lg shadow-cyan-500/10"
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
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
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
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 font-semibold"
              >
                Ver mais problemas
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Como Funciona - With Closing Line */}
      <section className="py-20 px-6 bg-gradient-to-b from-cyan-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Como funciona
          </h2>
          
          <div className="space-y-8 mb-12">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center font-bold text-white text-xl shadow-lg">
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
          <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-8 text-center">
            <p className="text-xl text-white font-semibold leading-relaxed">
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Resultado:</span>
              {" "}leads qualificados, reuniões marcadas e a tua equipa focada apenas em fechar vendas.
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
            {primaryBenefits.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border-2 border-cyan-500/30 p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-lg shadow-cyan-500/10"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-base">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Secondary Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            {secondaryBenefits.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-[#1a1a2e]/60 to-[#0d0d1a]/60 border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyan-400" />
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

      {/* Special Offer Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-cyan-950/20 to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/20 to-teal-500/20 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Card className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 border-2 border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                  <Phone className="w-4 h-4" />
                  Oferta Especial
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Teste o Agente de Voz Agora</h2>
                <p className="text-gray-400 text-lg">
                  Veja a magia acontecer em tempo real. Pague 1€ e receba uma chamada do nosso bot imediatamente.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nome
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="O seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Telemóvel
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+351 912 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 h-12"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Pagar 1€ e Receber Chamada
                </Button>

                <p className="text-center text-xs text-gray-500">
                  Pagamento seguro processado por Stripe. Os seus dados estão protegidos.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final - Simplified */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para automatizar a prospeção?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Vamos transformar a forma como contactas e qualificas leads
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mb-6"
            >
              Começar implementação
            </Button>
            <div className="max-w-xl mx-auto">
              <p className="text-gray-400 text-sm leading-relaxed">
                Após a compra, agendamos duas reuniões:<br />
                <span className="text-white">• Configuração inicial</span><br />
                <span className="text-white">• Validação final antes de activar</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
