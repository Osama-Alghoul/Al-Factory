"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Footer from "@/components/footer"
import { useEffect } from "react"

export default function ClientsPage() {
  const { language } = useLanguage()

  // Set page title based on language
  useEffect(() => {
    document.title = language === "ar" ? "عملاؤنا | UPAL Systems" : "Our Clients | UPAL Systems"
  }, [language])

  const clients = [
    {
      id: 1,
      name_ar: "شركة البناء المتحدة",
      name_en: "United Construction Company",
      logo: "/placeholder.svg?height=200&width=200",
      description_ar: "شريك استراتيجي في مشاريع البناء الكبرى",
      description_en: "Strategic partner in major construction projects",
    },
    {
      id: 2,
      name_ar: "مجموعة الإعمار",
      name_en: "Al-Emaar Group",
      logo: "/placeholder.svg?height=200&width=200",
      description_ar: "من أكبر شركات التطوير العقاري في المنطقة",
      description_en: "One of the largest real estate development companies in the region",
    },
    {
      id: 3,
      name_ar: "شركة الهندسة المعمارية",
      name_en: "Architectural Engineering Company",
      logo: "/placeholder.svg?height=200&width=200",
      description_ar: "شركة متخصصة في التصميم المعماري",
      description_en: "A company specialized in architectural design",
    },
    {
      id: 4,
      name_ar: "مؤسسة الإسكان",
      name_en: "Housing Foundation",
      logo: "/placeholder.svg?height=200&width=200",
      description_ar: "مؤسسة حكومية رائدة في مجال الإسكان",
      description_en: "A leading government institution in the housing sector",
    },
    {
      id: 5,
      name_ar: "شركة التطوير العقاري",
      name_en: "Real Estate Development Company",
      logo: "/placeholder.svg?height=200&width=200",
      description_ar: "شركة متخصصة في تطوير المشاريع السكنية والتجارية",
      description_en: "A company specialized in developing residential and commercial projects",
    },
    {
      id: 6,
      name_ar: "مجموعة الفنادق العالمية",
      name_en: "International Hotels Group",
      logo: "/placeholder.svg?height=200&width=200",
      description_ar: "سلسلة فنادق عالمية رائدة",
      description_en: "A leading international hotel chain",
    },
    {
      id: 7,
      name_ar: "شركة المقاولات المتحدة",
      name_en: "United Contracting Company",
      logo: "/placeholder.svg?height=200&width=200",
      description_ar: "شركة مقاولات متخصصة في المشاريع الكبرى",
      description_en: "A contracting company specialized in major projects",
    },
    {
      id: 8,
      name_ar: "مؤسسة التصميم الداخلي",
      name_en: "Interior Design Foundation",
      logo: "/placeholder.svg?height=200&width=200",
      description_ar: "شركة متخصصة في التصميم الداخلي",
      description_en: "A company specialized in interior design",
    },
  ]

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only add the animation class if it doesn't already have it
            if (!entry.target.classList.contains("zoom-in")) {
              entry.target.classList.add("zoom-in")
              entry.target.classList.remove("opacity-0")
              // Unobserve after animation is added to prevent multiple animations
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const clientElements = document.querySelectorAll(".client-item")
    clientElements.forEach((el) => {
      // Only observe elements that don't already have the animation class
      if (!el.classList.contains("zoom-in")) {
        observer.observe(el)
      }
    })

    return () => {
      clientElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="pt-20">
      <div className="section-container">
        <h1 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {language === "ar" ? "عملاؤنا" : "Our Clients"}
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          {language === "ar"
            ? "نفتخر بثقة عملائنا الكرام ونسعى دائمًا لتقديم أفضل الخدمات والمنتجات لهم."
            : "We are proud of our valued clients' trust and always strive to provide them with the best services and products."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="client-item opacity-0 bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 bg-muted/30 p-4 rounded-lg">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={language === "ar" ? client.name_ar : client.name_en}
                    width={120}
                    height={120}
                    className="max-w-[120px] max-h-[80px] object-contain"
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 text-center ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
                >
                  {language === "ar" ? client.name_ar : client.name_en}
                </h3>
                <p className="text-muted-foreground text-center">
                  {language === "ar" ? client.description_ar : client.description_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
