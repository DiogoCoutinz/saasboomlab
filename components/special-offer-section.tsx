"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Phone } from "lucide-react"

export function SpecialOfferSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ name, phone })
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-blue-950/20 to-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <Card className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 border-2 border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                Oferta Especial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Teste o Agente de Voz Agora</h2>
              <p className="text-gray-400 text-lg">
                Veja a magia acontecer em tempo real. Pague 1€ e receba uma chamada do nosso bot imediatamente.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="O seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 h-12"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Telemóvel
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+351 912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 h-12"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <Lock className="w-5 h-5 mr-2" />
                Pagar 1€ e Receber Chamada
              </Button>

              <p className="text-center text-xs text-gray-500">
                Pagamento seguro processado por Stripe. Os seus dados estão protegidos.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
