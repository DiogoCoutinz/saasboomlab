"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://boomlab.app.n8n.cloud/webhook/d1a6df64-4abf-40d9-bd5e-2c254563e6c8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      }
    } catch (error) {
      console.error('Error submitting newsletter:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#050505] via-[#0a0a15] to-[#050505]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
          <Mail className="w-4 h-4" />
          Newsletter
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Recebe insights semanais sobre{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            estruturação comercial B2B
          </span>
        </h2>

        <p className="text-gray-400 text-lg mb-10">Estratégias comprovadas, frameworks e casos reais.</p>

        {isSubmitted ? (
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Obrigado!</h3>
            <p className="text-gray-400">Irás receber insights semanais no teu email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="O seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#1a1a2e]/80 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 h-14 rounded-xl"
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 h-14 rounded-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Submeter"}
            </Button>
          </form>
        )}

        <p className="text-gray-500 text-sm mt-6">Sem spam. Pode cancelar a qualquer momento.</p>
      </div>
    </section>
  )
}
