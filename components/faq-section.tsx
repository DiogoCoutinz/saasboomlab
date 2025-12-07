"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "O pagamento de 1€ é seguro?",
    answer:
      "Sim, absolutamente. Todos os pagamentos são processados de forma segura via Stripe, a plataforma de pagamentos líder mundial. Os seus dados financeiros nunca são armazenados nos nossos servidores.",
  },
  {
    question: "O que acontece depois do pagamento?",
    answer:
      "Após o pagamento ser confirmado, o nosso agente de voz IA liga-lhe em segundos para demonstrar as capacidades do BoomVoice. É uma experiência interativa e personalizada.",
  },
  {
    question: "Posso personalizar a voz do agente?",
    answer:
      "Sim, oferecemos várias opções de personalização. Temos vozes masculinas e femininas, diferentes sotaques e tonalidades para se adaptarem à identidade da sua marca.",
  },
  {
    question: "Como funciona a integração com o meu CRM?",
    answer:
      "O nosso CRM All-in-One integra-se facilmente com as suas ferramentas existentes através de API. A nossa equipa auxilia em todo o processo de configuração sem custos adicionais.",
  },
  {
    question: "O FinAI funciona com todos os bancos portugueses?",
    answer:
      "O FinAI está integrado com os principais bancos portugueses e suporta a maioria dos formatos de documentos financeiros. Contacte-nos para confirmar compatibilidade específica.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-400 text-lg">Tudo o que precisa de saber sobre os nossos serviços</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-48 pb-6" : "max-h-0",
                )}
              >
                <p className="px-6 text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
