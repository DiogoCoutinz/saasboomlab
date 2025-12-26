"use client"

import Image from "next/image"

export function LogoCarousel() {
  // Array com os nomes dos arquivos das empresas
  const companies = [
    "empresa1.png",
    "empresa2.png", 
    "empresa3.png",
    "empresa4.png",
    "empresa5.png"
  ]

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 text-center text-sm mb-12 uppercase tracking-wider">
          Empresas que confiam na BoomLab
        </p>
        
        {/* Logos estáticos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
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
    </section>
  )
}
