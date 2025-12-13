import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, Zap, Shield, BarChart3, Building2, Clock, FileCheck } from "lucide-react"

export default function FinAIPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">FinAI</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Analisa documentos financeiros{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              em menos de 1 minuto
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Processa e compara FINs bancárias instantaneamente. Extrai dados críticos, 
            identifica as melhores propostas e toma decisões informadas.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
          >
            Agendar demonstração
          </Button>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Para quem é o FinAI?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Mediadores de crédito",
                description: "Que analisam dezenas de FINs por semana e precisam de comparações rápidas e precisas.",
              },
              {
                icon: BarChart3,
                title: "Consultores financeiros",
                description: "Que precisam de extrair dados de documentos complexos para análise e recomendações.",
              },
              {
                icon: FileCheck,
                title: "Equipas de back-office",
                description: "Que perdem horas em tarefas manuais de inserção e comparação de dados financeiros.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-blue-400" />
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
                problem: "Horas gastas a ler e extrair dados de FINs manualmente",
                solution: "Extração automática em 40 segundos com precisão de 99.5%",
              },
              {
                problem: "Erros humanos na comparação de múltiplas propostas",
                solution: "Comparação automática side-by-side com destacação das melhores condições",
              },
              {
                problem: "Dificuldade em identificar rapidamente a melhor proposta",
                solution: "Análise inteligente que recomenda automaticamente a melhor opção por critério",
              },
              {
                problem: "Falta de histórico estruturado de análises anteriores",
                solution: "Base de dados completa com todas as análises pesquisáveis e exportáveis",
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
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 px-6 bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Como funciona
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Upload de Documentos",
                description: "Faz upload de uma ou múltiplas FINs bancárias em PDF. A IA processa imediatamente, independentemente do formato ou banco emissor.",
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xl">
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
              {
                icon: FileCheck,
                title: "Relatórios profissionais",
                description: "PDFs branded prontos para enviar a clientes com análise completa e recomendações",
              },
              {
                icon: Building2,
                title: "Compatível com todos os bancos",
                description: "Funciona com FINs de qualquer banco português, independente do formato",
              },
              {
                icon: Clock,
                title: "Histórico completo",
                description: "Base de dados pesquisável de todas as análises para referência futura",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/10 p-8"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-400" />
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
          <div className="rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experimenta o FinAI com as tuas FINs
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Agenda uma demonstração e traz exemplos de FINs reais. 
              Vamos processar em tempo real e mostrar-te o poder da ferramenta.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300"
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

