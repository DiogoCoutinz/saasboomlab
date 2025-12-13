"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Quanto tempo demora a implementação?",
    answer:
      "A implementação varia entre 1 a 3 semanas, dependendo da solução e do nível de personalização. O nosso CRM pode estar operacional em poucos dias, enquanto integrações mais complexas podem requerer até 3 semanas. Incluímos onboarding e formação da equipa.",
  },
  {
    question: "As soluções são personalizadas?",
    answer:
      "Sim, todas as nossas soluções são adaptadas ao teu negócio. Configuramos os agentes de voz com a tua marca, ajustamos o CRM ao teu processo de vendas e personalizamos o FinAI para os teus requisitos específicos.",
  },
  {
    question: "Integra com software existente?",
    answer:
      "Sim. As nossas soluções integram-se com os principais CRMs, ERPs e ferramentas de gestão através de APIs. Suportamos integração com Salesforce, HubSpot, Pipedrive, entre outros. A nossa equipa trata de toda a configuração.",
  },
  {
    question: "Que tipo de empresas usam a BoomLab?",
    answer:
      "Trabalhamos principalmente com empresas B2B de 10 a 500 colaboradores em setores como imobiliário, seguros, finanças e consultoria. Os nossos clientes procuram automatizar vendas, operações e análise financeira.",
  },
  {
    question: "Como funciona o onboarding?",
    answer:
      "O processo inclui: (1) Reunião de descoberta para entender o teu negócio, (2) Configuração e personalização das soluções, (3) Testes e ajustes, (4) Formação da equipa, (5) Go-live com suporte dedicado nas primeiras semanas.",
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
