"use client"

import { useLanguage } from "@/components/language-provider"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { useEffect } from "react"

export default function ContactPage() {
  const { language } = useLanguage()

  // Set page title based on language
  useEffect(() => {
    document.title = language === "ar" ? "اتصل بنا | مصنع الألمنيوم" : "Contact Us | Aluminum Factory"
  }, [language])

  return (
    <main className="pt-20">
      <ContactSection />
      <Footer />
    </main>
  )
}
