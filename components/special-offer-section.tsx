import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface SpecialOfferSectionProps {
  onScheduleDemo?: () => void
}

export function SpecialOfferSection({ onScheduleDemo }: SpecialOfferSectionProps) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-cyan-950/10 to-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/15 to-teal-500/15 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para automatizar o teu negócio?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Agenda uma reunião connosco e descobre como as nossas soluções de IA 
            podem transformar os processos críticos da tua empresa.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-10 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            onClick={onScheduleDemo}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Reunião
          </Button>
        </div>
      </div>
    </section>
  )
}
