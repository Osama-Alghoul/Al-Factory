"use client"

import { useLanguage } from "@/components/language-provider"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import CertifiedBy from "@/components/certified-by"
import ServicesSection from "@/components/services-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"
import StatsSection from "@/components/stat-section"
import Footer from "@/components/footer"
import { useEffect } from "react"
export default function Home() {
  const { language } = useLanguage()

  useEffect(() => {
    document.title = language === "ar" ? "UPAL Systems | الصفحة الرئيسية" : "UPAL Systems | Home"
  }, [language])

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <ServicesSection />
      <CertifiedBy />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
