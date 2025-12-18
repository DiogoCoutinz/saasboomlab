"use client"

import { useState, useEffect } from "react"
import { Zap, Users, FileText } from "lucide-react"

const solutions = [
  {
    id: 0,
    icon: Users,
    title: "CRM All-in-One",
    description: "Centraliza leads, follow-ups e vendas automaticamente",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400",
  },
  {
    id: 1,
    icon: Zap,
    title: "BoomVoice",
    description: "Contacta leads em segundos, sem intervenção humana",
    color: "from-cyan-500 to-teal-500",
    iconColor: "text-cyan-400",
  },
  {
    id: 2,
    icon: FileText,
    title: "FineAI",
    description: "Analisa documentos financeiros em menos de 1 minuto",
    color: "from-blue-500 to-indigo-500",
    iconColor: "text-blue-400",
  },
]

export function BoomLabCore() {
  const [activeSolution, setActiveSolution] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Core */}
      <div className="relative z-20">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500 flex items-center justify-center shadow-2xl animate-pulse-glow">
          <div className="w-28 h-28 rounded-full bg-[#0d0d1a] flex items-center justify-center border-2 border-cyan-400/30">
            <div className="text-center">
              <div className="text-white font-bold text-lg tracking-tight">
                b
                <span className="text-cyan-400">∞</span>
                <span className="text-teal-400">m</span>
              </div>
              <div className="text-xs text-gray-400 font-medium">lab</div>
            </div>
          </div>
        </div>
        
        {/* Core glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-2xl opacity-40 animate-pulse" />
      </div>

      {/* Orbiting Solutions */}
      <div className="absolute inset-0">
        {solutions.map((solution, index) => {
          const angle = (index * 120 - 90) * (Math.PI / 180)
          const isActive = activeSolution === index
          const radius = isActive ? 140 : 160
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius

          return (
            <div
              key={solution.id}
              className="absolute top-1/2 left-1/2 transition-all duration-1000 ease-out"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.15 : 1})`,
              }}
            >
              {/* Solution module */}
              <div
                className={`relative ${
                  isActive ? "z-30" : "z-10"
                } transition-all duration-1000`}
              >
                {/* Module card */}
                <div
                  className={`glass rounded-2xl p-4 border-2 transition-all duration-1000 ${
                    isActive
                      ? "border-white/40 bg-white/10 shadow-2xl"
                      : "border-white/10 bg-white/5 shadow-lg"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center transition-all duration-500 ${
                        isActive ? "animate-scale-pulse" : ""
                      }`}
                    >
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Title - always visible */}
                    <div className="text-white font-semibold text-sm text-center whitespace-nowrap">
                      {solution.title}
                    </div>

                    {/* Description - only when active */}
                    <div
                      className={`overflow-hidden transition-all duration-700 ${
                        isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-300 text-xs text-center leading-relaxed max-w-[180px] pt-1">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active indicator glow */}
                {isActive && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${solution.color} rounded-2xl blur-xl opacity-60 -z-10 animate-pulse`}
                  />
                )}

                {/* Connection line to core */}
                <svg
                  className="absolute top-1/2 left-1/2 w-full h-full -z-20"
                  style={{
                    width: Math.abs(x) * 2,
                    height: Math.abs(y) * 2,
                  }}
                >
                  <line
                    x1={x > 0 ? 0 : Math.abs(x) * 2}
                    y1={y > 0 ? 0 : Math.abs(y) * 2}
                    x2={x > 0 ? Math.abs(x) * 2 : 0}
                    y2={y > 0 ? Math.abs(y) * 2 : 0}
                    stroke={isActive ? "rgba(6, 182, 212, 0.3)" : "rgba(255, 255, 255, 0.1)"}
                    strokeWidth={isActive ? "2" : "1"}
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSolution(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === activeSolution
                ? "w-8 bg-gradient-to-r from-cyan-400 to-teal-400"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

