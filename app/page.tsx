"use client"

import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import WelcomeSection from "@/components/welcome-section"
import ServicesSection from "@/components/services-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import ClientLogos from "@/components/client-logos"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <WelcomeSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ClientLogos />
      <NewsSection />
      <Footer />
    </div>
  )
}
