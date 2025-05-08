"use client"

import { useLanguage } from "@/components/language-provider"
import HeroSection from "@/components/hero-section"
import ProductsSection from "@/components/products-section"
import ServicesSection from "@/components/services-section"
import ClientsSection from "@/components/clients-section"
import ContactSection from "@/components/contact-section"
import StatsSection from "@/components/stat-section"
import Footer from "@/components/footer"
import { useEffect } from "react"
export default function Home() {
  const { language } = useLanguage()

  // Set page title based on language
  useEffect(() => {
    document.title = language === "ar" ? "مصنع الألمنيوم | الصفحة الرئيسية" : "Aluminum Factory | Home"
  }, [language])

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
