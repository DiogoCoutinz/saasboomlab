import { Button } from "@/components/ui/button"
import { BoomLabCore } from "@/components/boomlab-core"

interface HeroSectionProps {
  onScheduleDemo?: () => void
  onViewSolutions?: () => void
}

export function HeroSection({ onScheduleDemo, onViewSolutions }: HeroSectionProps) {
  return (
    <section className="relative pt-20 pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] overflow-hidden min-h-[400px] md:min-h-[450px]">
          {/* Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 h-full">
            {/* Left - Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Automatizamos processos críticos{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  com IA
                </span>
              </h1>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl text-pretty">
                Sistemas inteligentes para vendas, operações e finanças, criados à medida do teu negócio.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                  onClick={onScheduleDemo}
                >
                  Agendar demonstração
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                  onClick={onViewSolutions}
                >
                  Ver soluções
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-[#1a1a2e]" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-green-400 border-2 border-[#1a1a2e]" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 border-2 border-[#1a1a2e]" />
                </div>
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-medium">+50 empresas</span> já automatizaram processos
                </p>
              </div>
            </div>

            {/* Right - BoomLab Core Animation */}
            <div className="relative flex items-center justify-center lg:justify-end min-h-[400px]">
              <BoomLabCore />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
