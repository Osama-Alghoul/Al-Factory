"use client"

import { useLanguage } from "@/components/language-provider"
import { Paintbrush, Factory, Wrench, PenToolIcon as Tool, MessageSquare } from "lucide-react"
import Footer from "@/components/footer"
import { useEffect } from "react"

export default function ServicesPage() {
  const { language } = useLanguage()

  // Set page title based on language
  useEffect(() => {
    document.title = language === "ar" ? "خدماتنا | UPAL Systems" : "Our Services | UPAL Systems"
  }, [language])

  const services = [
    {
      id: 1,
      title_ar: "التصميم",
      title_en: "Design",
      icon: Paintbrush,
      description_ar:
        "نقدم خدمات تصميم احترافية لمساعدتك في اختيار أفضل الحلول لمشروعك. يعمل فريقنا معك لفهم احتياجاتك وتقديم تصاميم تلبي توقعاتك.",
      description_en:
        "We provide professional design services to help you choose the best solutions for your project. Our team works with you to understand your needs and provide designs that meet your expectations.",
    },
    {
      id: 2,
      title_ar: "التصنيع",
      title_en: "Manufacturing",
      icon: Factory,
      description_ar:
        "نستخدم أحدث التقنيات والمعدات لتصنيع منتجات ألمنيوم عالية الجودة. نلتزم بأعلى معايير الجودة في جميع مراحل التصنيع.",
      description_en:
        "We use the latest technologies and equipment to manufacture high-quality aluminum products. We adhere to the highest quality standards in all stages of manufacturing.",
    },
    {
      id: 3,
      title_ar: "التركيب",
      title_en: "Installation",
      icon: Wrench,
      description_ar: "يقوم فريقنا المتخصص بتركيب منتجاتنا بدقة واحترافية. نضمن تركيب آمن وسليم لجميع منتجاتنا.",
      description_en:
        "Our specialized team installs our products with precision and professionalism. We ensure safe and proper installation for all our products.",
    },
    {
      id: 4,
      title_ar: "الصيانة",
      title_en: "Maintenance",
      icon: Tool,
      description_ar:
        "نقدم خدمات صيانة دورية لضمان استمرار عمل منتجاتنا بكفاءة. فريق الصيانة لدينا مدرب على أعلى مستوى للتعامل مع جميع المشكلات.",
      description_en:
        "We provide periodic maintenance services to ensure the continued efficient operation of our products. Our maintenance team is trained at the highest level to deal with all problems.",
    },
    {
      id: 5,
      title_ar: "الاستشارات",
      title_en: "Consultation",
      icon: MessageSquare,
      description_ar: "نقدم استشارات فنية متخصصة في مجال الألمنيوم. يمكننا مساعدتك في اختيار أفضل الحلول لمشروعك.",
      description_en:
        "We provide specialized technical consultations in the field of aluminum. We can help you choose the best solutions for your project.",
    },
  ]

  // Intersection Observer for animation
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
    <main className="pt-20">
      <div className="section-container">
        <h1 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {language === "ar" ? "خدماتنا" : "Our Services"}
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          {language === "ar"
            ? "نقدم مجموعة متكاملة من الخدمات لتلبية احتياجات عملائنا من البداية وحتى النهاية."
            : "We provide a comprehensive range of services to meet our customers' needs from start to finish."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="service-item opacity-0 bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`text-xl font-semibold ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
                    {language === "ar" ? service.title_ar : service.title_en}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {language === "ar" ? service.description_ar : service.description_en}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}
