import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0d0d1a] overflow-hidden min-h-[500px] md:min-h-[550px]">
          {/* Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16 h-full">
            {/* Left - Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Soluções de IA{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  que transformam
                </span>
              </h1>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl text-pretty">
                Automatizamos o vosso negócio com Inteligência Artificial: agentes de voz, análise de documentos
                financeiros e CRM inteligente que geram resultados todos os dias.
              </p>

              <div className="pt-2">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-300"
                >
                  Fala connosco
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

            {/* Right - 3D Abstract Visual */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/images/image.png"
                  alt="3D Abstract Infinity Shape"
                  width={600}
                  height={500}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
