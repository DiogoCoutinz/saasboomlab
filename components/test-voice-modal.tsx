"use client"

import { useState } from "react"
import { X, Lock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

interface TestVoiceModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TestVoiceModal({ isOpen, onClose }: TestVoiceModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redireciona para Stripe
    window.open('https://buy.stripe.com/test_cNi8wPcRO5dM6xN2EvgMw06', '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl">
        <Card className="bg-gradient-to-b from-gray-900/90 to-gray-950/90 border-2 border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
          <CardContent className="p-8 md:p-12 relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                Oferta Especial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Teste o Agente de Voz Agora
              </h2>
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
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold py-6 text-lg rounded-xl transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
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
    </div>
  )
}


