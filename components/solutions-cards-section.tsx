import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, FileText, ArrowRight } from "lucide-react"

const solutions = [
  {
    icon: Users,
    title: "CRM AI-in-One",
    description: "Centraliza leads, follow-ups e vendas automaticamente. Pipeline visual e automação inteligente.",
    gradient: "from-purple-500 to-pink-500",
    href: "/crm-ai",
  },
  {
    icon: Zap,
    title: "BoomVoice",
    description: "Contacta leads em segundos, sem intervenção humana. Agentes de voz que qualificam e agendam.",
    gradient: "from-cyan-500 to-teal-500",
    href: "/agentes-voz",
  },
  {
    icon: FileText,
    title: "FinAI",
    description: "Analisa documentos financeiros em menos de 1 minuto. Comparação automática de propostas bancárias.",
    gradient: "from-blue-500 to-indigo-500",
    href: "/finai",
  },
]

export function SolutionsCardsSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">As Nossas Soluções</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologia de IA aplicada aos processos mais críticos do teu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{solution.description}</p>

                <Link href={solution.href}>
                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0 h-auto font-semibold group/btn"
                  >
                    Saber mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

