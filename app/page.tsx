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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <SolutionsCardsSection />
      <BoomVoiceDetailSection />
      <FeaturesSection />
      <FAQSection />
      <SpecialOfferSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
