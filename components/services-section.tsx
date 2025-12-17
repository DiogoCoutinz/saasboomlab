import { Card, CardContent } from "@/components/ui/card"
import { Phone, FileText, Users } from "lucide-react"

const services = [
  {
    icon: Phone,
    title: "Agente de Voz IA",
    description: "Atendimento e qualificação 24/7.",
  },
  {
    icon: FileText,
    title: "FineAI (Comparador)",
    description: "Análise de FINs bancárias em 40 segundos.",
  },
  {
    icon: Users,
    title: "CRM All-in-One",
    description: "Gestão completa de leads e agendamentos.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">As Nossas Soluções</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Tecnologia de ponta para transformar a forma como gere o seu negócio
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
