"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarModal } from "@/components/calendar-modal"
import { CheckCircle, FileText, Zap, Shield, BarChart3, Building2, Clock, FileCheck, Play, ChevronDown, TrendingUp, Users2 } from "lucide-react"

export default function FineAIPage() {
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
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <FileText className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">FineAI</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Analisa documentos financeiros{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  em menos de 1 minuto
                </span>
              </h1>
              
              <p className="text-gray-400 text-xl leading-relaxed mb-8">
                Processa e compara FINEs bancárias instantaneamente. Extrai dados críticos, 
                identifica as melhores propostas e toma decisões informadas com IA.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                  onClick={() => window.open('https://buy.stripe.com/test_cNi8wPcRO5dM6xN2EvgMw06', '_blank')}
                >
                  Comprar agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                  onClick={() => setShowCalendar(true)}
                >
                  Reunião rápida (15 min)
                </Button>
              </div>
            </div>

            {/* Right - Video Placeholder */}
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border border-blue-500/30 overflow-hidden group cursor-pointer hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-semibold text-lg mb-1">Demonstração em vídeo</p>
                    <p className="text-gray-400 text-sm">Vê o FineAI a processar FINEs em tempo real</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-2xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É - Outcome Driven */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Feito para profissionais que{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              lidam com FINEs diariamente
            </span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12 max-w-3xl mx-auto">
            Se analisas propostas bancárias regularmente, o FineAI vai poupar-te horas todas as semanas
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Mediadores de crédito",
                description: "Que analisam dezenas de FINEs por semana e precisam de comparações rápidas e precisas para clientes",
              },
              {
                icon: BarChart3,
                title: "Consultores financeiros",
                description: "Que precisam de extrair dados de documentos complexos para análise e recomendações personalizadas",
              },
              {
                icon: FileCheck,
                title: "Equipas de back-office",
                description: "Que perdem horas em tarefas manuais de inserção e comparação de dados financeiros repetitivos",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-blue-400" />
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
                problem: "Horas gastas a ler e extrair dados de FINEs manualmente",
                solution: "Extração automática em 40 segundos com precisão de 99.5%",
                primary: true,
              },
              {
                problem: "Erros humanos na comparação de múltiplas propostas",
                solution: "Comparação automática side-by-side com destacação das melhores condições",
                primary: true,
              },
              {
                problem: "Dificuldade em identificar rapidamente a melhor proposta",
                solution: "Análise inteligente que recomenda automaticamente a melhor opção por critério",
                primary: false,
              },
              {
                problem: "Falta de histórico estruturado de análises anteriores",
                solution: "Base de dados completa com todas as análises pesquisáveis e exportáveis",
                primary: false,
              },
            ].slice(0, showAllProblems ? 4 : 2).map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border transition-all duration-300 ${
                  item.primary && index === 0
                    ? "border-blue-500/30 p-8 shadow-lg shadow-blue-500/10"
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
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 font-semibold"
              >
                Ver mais problemas
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Como Funciona - With Closing Line */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Como funciona
          </h2>
          
          <div className="space-y-8 mb-12">
            {[
              {
                step: "1",
                title: "Upload de Documentos",
                description: "Faz upload de uma ou múltiplas FINEs bancárias em PDF. A IA processa imediatamente, independentemente do formato ou banco emissor.",
              },
              {
                step: "2",
                title: "Extração Inteligente",
                description: "A IA extrai automaticamente todos os dados relevantes: taxas, spreads, comissões, seguros, prazos, condições especiais. Organiza tudo numa estrutura padronizada.",
              },
              {
                step: "3",
                title: "Comparação e Relatório",
                description: "Gera comparação side-by-side de todas as propostas, destaca melhores condições por categoria e cria relatório PDF profissional pronto para cliente.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xl shadow-lg">
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
          <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 p-8 text-center">
            <p className="text-xl text-white font-semibold leading-relaxed">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Resultado:</span>
              {" "}análise completa em menos de 1 minuto, com relatórios profissionais prontos a enviar.
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
                icon: Zap,
                title: "95% mais rápido",
                description: "Reduz de 30 minutos para 40 segundos o tempo de análise de cada FIN",
              },
              {
                icon: Shield,
                title: "99.5% de precisão",
                description: "IA treinada especificamente em documentos bancários portugueses garante exatidão",
              },
              {
                icon: BarChart3,
                title: "Comparações objetivas",
                description: "Elimina viés humano com análise puramente baseada em dados e critérios definidos",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] border-2 border-blue-500/30 p-8 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/10"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
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
                icon: FileCheck,
                title: "Relatórios profissionais",
                description: "PDFs branded prontos para enviar a clientes com análise completa e recomendações",
              },
              {
                icon: Building2,
                title: "Compatível com todos os bancos",
                description: "Funciona com FINEs de qualquer banco português, independente do formato",
              },
              {
                icon: Clock,
                title: "Histórico completo",
                description: "Base de dados pesquisável de todas as análises para referência futura",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-[#1a1a2e]/60 to-[#0d0d1a]/60 border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-400" />
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
          <div className="rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para automatizar a análise de FINEs?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Agenda uma demonstração e traz exemplos de FINEs reais. 
              Vamos processar em tempo real e mostrar-te o poder da ferramenta.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                onClick={() => window.open('https://buy.stripe.com/test_cNi8wPcRO5dM6xN2EvgMw06', '_blank')}
              >
                Comprar agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300"
                onClick={() => setShowCalendar(true)}
              >
                Reunião rápida (15 min)
              </Button>
            </div>
            <div className="max-w-xl mx-auto">
              <p className="text-gray-400 text-sm leading-relaxed">
                Na demonstração iremos:<br />
                <span className="text-white">• Processar as tuas FINEs em tempo real</span><br />
                <span className="text-white">• Mostrar-te relatórios de comparação personalizados</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <CalendarModal 
        isOpen={showCalendar} 
        onClose={() => setShowCalendar(false)}
        productName="FineAI"
        duration="15 min"
        accentColor="blue"
      />
    </main>
  )
}

