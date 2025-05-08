"use client"

import { useLanguage } from "./language-provider"
import { Paintbrush, Factory, Wrench, PenToolIcon as Tool, MessageSquare } from "lucide-react"
import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: 1,
    title_ar: "التصميم",
    title_en: "Design",
    icon: Paintbrush,
    description_ar: "نقدم خدمات تصميم احترافية لمساعدتك في اختيار أفضل الحلول لمشروعك.",
    description_en: "We provide professional design services to help you choose the best solutions for your project.",
  },
  {
    id: 2,
    title_ar: "التصنيع",
    title_en: "Manufacturing",
    icon: Factory,
    description_ar: "نستخدم أحدث التقنيات والمعدات لتصنيع منتجات ألمنيوم عالية الجودة.",
    description_en: "We use the latest technologies and equipment to manufacture high-quality aluminum products.",
  },
  {
    id: 3,
    title_ar: "التركيب",
    title_en: "Installation",
    icon: Wrench,
    description_ar: "يقوم فريقنا المتخصص بتركيب منتجاتنا بدقة واحترافية.",
    description_en: "Our specialized team installs our products with precision and professionalism.",
  },
  {
    id: 4,
    title_ar: "الصيانة",
    title_en: "Maintenance",
    icon: Tool,
    description_ar: "نقدم خدمات صيانة دورية لضمان استمرار عمل منتجاتنا بكفاءة.",
    description_en:
      "We provide periodic maintenance services to ensure the continued efficient operation of our products.",
  },
  {
    id: 5,
    title_ar: "الاستشارات",
    title_en: "Consultation",
    icon: MessageSquare,
    description_ar: "نقدم استشارات فنية متخصصة في مجال الألمنيوم.",
    description_en: "We provide specialized technical consultations in the field of aluminum.",
  },
]

export default function ServicesSection() {
  const { language } = useLanguage()

  // Intersection Observer for animation - Fixed to prevent double animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only add the animation class if it doesn't already have it
            if (!entry.target.classList.contains("slide-up")) {
              entry.target.classList.add("slide-up")
              entry.target.classList.remove("opacity-0")
              // Unobserve after animation is added to prevent multiple animations
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const serviceElements = document.querySelectorAll(".service-item")
    serviceElements.forEach((el) => {
      // Only observe elements that don't already have the animation class
      if (!el.classList.contains("slide-up")) {
        observer.observe(el)
      }
    })

    return () => {
      serviceElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {language === "ar" ? "خدماتنا" : "Our Services"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={service.id}
              className="service-item opacity-0 bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <Icon className="h-8 w-8" />
              </div>
              <h3
                className={`text-xl font-semibold mb-3 text-center ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
              >
                {language === "ar" ? service.title_ar : service.title_en}
              </h3>
              <p className="text-muted-foreground text-center">
                {language === "ar" ? service.description_ar : service.description_en}
              </p>
            </div>
          )
        })}
      </div>

      <div className="text-center mt-12">
        <Link href="/services">
          <Button className="bg-primary hover:bg-primary-dark text-white">
            {language === "ar" ? "جميع الخدمات" : "All Services"}
          </Button>
        </Link>
      </div>
    </section>
  )
}
