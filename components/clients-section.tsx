"use client"

import { useLanguage } from "./language-provider"
import Image from "next/image"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const clients = [
  {
    id: 1,
    name_ar: "شركة البناء المتحدة",
    name_en: "United Construction Company",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name_ar: "مجموعة الإعمار",
    name_en: "Al-Emaar Group",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name_ar: "شركة الهندسة المعمارية",
    name_en: "Architectural Engineering Company",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name_ar: "مؤسسة الإسكان",
    name_en: "Housing Foundation",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name_ar: "شركة التطوير العقاري",
    name_en: "Real Estate Development Company",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name_ar: "مجموعة الفنادق العالمية",
    name_en: "International Hotels Group",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name_ar: "شركة المقاولات المتحدة",
    name_en: "United Contracting Company",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name_ar: "مؤسسة التصميم الداخلي",
    name_en: "Interior Design Foundation",
    logo: "/placeholder.svg?height=200&width=200",
  },
]

export default function ClientsSection() {
  const { language } = useLanguage()

  // Intersection Observer for animation - Fixed to prevent double animation
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
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {language === "ar" ? "عملاؤنا" : "Our Clients"}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === "ar" ? "نفتخر بثقة عملائنا الكرام" : "We are proud of our valued clients' trust"}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {clients.slice(0, 8).map((client, index) => (
          <div
            key={client.id}
            className="client-item opacity-0 bg-card rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md border border-border"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex flex-col items-center">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={language === "ar" ? client.name_ar : client.name_en}
                width={120}
                height={120}
                className="max-w-[120px] max-h-[80px] object-contain"
              />
              <h3 className="text-sm mt-2 text-center font-medium">
                {language === "ar" ? client.name_ar : client.name_en}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/clients">
          <Button className="bg-primary hover:bg-primary-dark text-white">
            {language === "ar" ? "جميع العملاء" : "All Clients"}
          </Button>
        </Link>
      </div>
    </section>
  )
}
