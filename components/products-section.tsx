"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"
import { useRef, useEffect } from "react"
import Link from "next/link"

const products = [
  {
    id: 1,
    title_ar: "نوافذ ألمنيوم",
    title_en: "Aluminum Windows",
    image: "/our_products/Al-windows.png?height=600&width=800",
    alt_ar: "نوافذ ألمنيوم",
    alt_en: "Aluminum Windows",
    slug: "aluminum-windows",
  },
  {
    id: 2,
    title_ar: "أبواب ألمنيوم",
    title_en: "Aluminum Doors",
    image: "/placeholder.svg?height=600&width=800",
    alt_ar: "أبواب ألمنيوم",
    alt_en: "Aluminum Doors",
    slug: "aluminum-doors",
  },
  {
    id: 3,
    title_ar: "واجهات زجاجية",
    title_en: "Glass Facades",
    image: "/placeholder.svg?height=600&width=800",
    alt_ar: "واجهات زجاجية",
    alt_en: "Glass Facades",
    slug: "glass-facades",
  },
  {
    id: 4,
    title_ar: "مطابخ ألمنيوم",
    title_en: "Aluminum Kitchens",
    image: "/placeholder.svg?height=600&width=800",
    alt_ar: "مطابخ ألمنيوم",
    alt_en: "Aluminum Kitchens",
    slug: "aluminum-kitchens",
  },
  {
    id: 5,
    title_ar: "درابزينات",
    title_en: "Railings",
    image: "/our_products/Al-stairs.jpg?height=600&width=800",
    alt_ar: "درابزينات",
    alt_en: "Railings",
    slug: "railings",
  },
]

export default function ProductsSection() {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for animation - Fixed to prevent double animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only add the animation class if it doesn't already have it
            if (!entry.target.classList.contains("fade-in")) {
              entry.target.classList.add("fade-in")
              entry.target.classList.remove("opacity-0")
              // Unobserve after animation is added to prevent multiple animations
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const productElements = document.querySelectorAll(".product-item")
    productElements.forEach((el) => {
      // Only observe elements that don't already have the animation class
      if (!el.classList.contains("fade-in")) {
        observer.observe(el)
      }
    })

    return () => {
      productElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {language === "ar" ? "منتجاتنا" : "Our Products"}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === "ar"
            ? "نقدم مجموعة واسعة من منتجات الألمنيوم عالية الجودة"
            : "We offer a wide range of high-quality aluminum products"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={containerRef}>
        {products.map((product, index) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="product-item opacity-0 group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={language === "ar" ? product.alt_ar : product.alt_en}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3
                className={`text-xl font-semibold mb-2 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
              >
                {language === "ar" ? product.title_ar : product.title_en}
              </h3>
              <div className="mt-4 text-primary group-hover:text-primary-dark transition-colors flex items-center">
                {language === "ar" ? "عرض التفاصيل" : "View Details"}
                {language === "ar" ? (
                  <ChevronLeft className="ms-2 h-4 w-4" />
                ) : (
                  <ChevronRight className="ms-2 h-4 w-4" />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/products">
          <Button className="bg-primary hover:bg-primary-dark text-white">
            {language === "ar" ? "جميع المنتجات" : "All Products"}
            {language === "ar" ? <ChevronLeft className="ms-2 h-5 w-5" /> : <ChevronRight className="ms-2 h-5 w-5" />}
          </Button>
        </Link>
      </div>
    </section>
  )
}
