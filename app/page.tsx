"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { SolutionsCardsSection } from "@/components/solutions-cards-section"
import { BoomVoiceDetailSection } from "@/components/boomvoice-detail-section"
import { FeaturesSection } from "@/components/features-section"
import { FAQSection } from "@/components/faq-section"
import { SpecialOfferSection } from "@/components/special-offer-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { CalendarModal } from "@/components/calendar-modal"

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false)

  const scrollToSolutions = () => {
    const solutionsElement = document.getElementById('solutions-section')
    if (solutionsElement) {
      solutionsElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <HeroSection 
        onScheduleDemo={() => setShowCalendar(true)}
        onViewSolutions={scrollToSolutions}
      />
      <LogoCarousel />
      <div id="solutions-section">
        <SolutionsCardsSection />
      </div>
      <BoomVoiceDetailSection />
      <FeaturesSection />
      <FAQSection />
      <SpecialOfferSection onScheduleDemo={() => setShowCalendar(true)} />
      <NewsletterSection />
      <Footer />
      
      <CalendarModal 
        isOpen={showCalendar} 
        onClose={() => setShowCalendar(false)}
        productName="BoomLab"
        duration="30 min"
        accentColor="cyan"
      />
    </main>
  )
}
