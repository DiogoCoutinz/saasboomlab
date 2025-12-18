"use client"

import Image from "next/image"

export function LogoCarousel() {
  // Array com os nomes dos arquivos das empresas
  const companies = [
    "empresa1.png",
    "empresa2.jpg", 
    "empresa3.png",
    "empresa4.png",
    "empresa5.jpg"
  ]

  return (
    <section className="py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 text-center text-sm mb-12 uppercase tracking-wider">
          Empresas que confiam na BoomLab
        </p>
        
        {/* Carrossel Container */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* Primeira sequência de logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <Image
                  src={`/empresas/${company}`}
                  alt={`Empresa ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
            
            {/* Segunda sequência (duplicada para efeito infinito) */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <Image
                  src={`/empresas/${company}`}
                  alt={`Empresa ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}

            {/* Terceira sequência (duplicada para efeito infinito) */}
            {companies.map((company, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <Image
                  src={`/empresas/${company}`}
                  alt={`Empresa ${index + 1}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS para animação */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
          width: max-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
