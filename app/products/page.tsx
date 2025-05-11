"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Footer from "@/components/footer"
import { useEffect } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function ProductsPage() {
  const { language } = useLanguage()

  // Set page title based on language
  useEffect(() => {
    document.title = language === "ar" ? "منتجاتنا | UPAL Systems" : "Our Products | UPAL Systems"
  }, [language])

  const products = [
    {
      id: 1,
      title_ar: "نوافذ ألمنيوم",
      title_en: "Aluminum Windows",
      description_ar: "نوافذ ألمنيوم عالية الجودة بتصاميم مختلفة تناسب جميع الاحتياجات.",
      description_en: "High-quality aluminum windows with various designs to suit all needs.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "aluminum-windows",
    },
    {
      id: 2,
      title_ar: "أبواب ألمنيوم",
      title_en: "Aluminum Doors",
      description_ar: "أبواب ألمنيوم متينة وعصرية بمقاسات وتصاميم متنوعة.",
      description_en: "Durable and modern aluminum doors with various sizes and designs.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "aluminum-doors",
    },
    {
      id: 3,
      title_ar: "واجهات زجاجية",
      title_en: "Glass Facades",
      description_ar: "واجهات زجاجية أنيقة مصنوعة من أفضل أنواع الألمنيوم والزجاج.",
      description_en: "Elegant glass facades made from the best types of aluminum and glass.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "glass-facades",
    },
    {
      id: 4,
      title_ar: "مطابخ ألمنيوم",
      title_en: "Aluminum Kitchens",
      description_ar: "مطابخ ألمنيوم عصرية وعملية بتصاميم مختلفة.",
      description_en: "Modern and practical aluminum kitchens with various designs.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "aluminum-kitchens",
    },
    {
      id: 5,
      title_ar: "درابزينات",
      title_en: "Railings",
      description_ar: "درابزينات ألمنيوم أنيقة ومتينة للشرفات والسلالم.",
      description_en: "Elegant and durable aluminum railings for balconies and stairs.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "railings",
    },
    {
      id: 6,
      title_ar: "قواطع ألمنيوم",
      title_en: "Aluminum Partitions",
      description_ar: "قواطع ألمنيوم للمكاتب والمساحات التجارية.",
      description_en: "Aluminum partitions for offices and commercial spaces.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "aluminum-partitions",
    },
  ]

  // Intersection Observer for animation
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
    <main className="pt-20">
      <div className="section-container">
        <h1 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {language === "ar" ? "منتجاتنا" : "Our Products"}
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          {language === "ar"
            ? "نقدم مجموعة واسعة من منتجات الألمنيوم عالية الجودة التي تلبي احتياجات عملائنا المختلفة."
            : "We offer a wide range of high-quality aluminum products that meet the diverse needs of our customers."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="product-item opacity-0 group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={language === "ar" ? product.title_ar : product.title_en}
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
                <p className="text-muted-foreground mb-4">
                  {language === "ar" ? product.description_ar : product.description_en}
                </p>
                <div className="text-primary group-hover:text-primary-dark transition-colors flex items-center">
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
      </div>
      <Footer />
    </main>
  )
}
