"use client"

import { useLanguage } from "@/components/language-provider"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"
import { useEffect } from "react"

// Sample product data - in a real app, this would come from a database or API
const products = [
  {
    id: 1,
    title_ar: "نوافذ ألمنيوم",
    title_en: "Aluminum Windows",
    description_ar:
      "نوافذ ألمنيوم عالية الجودة بتصاميم مختلفة تناسب جميع الاحتياجات. تتميز نوافذنا بالمتانة والعزل الحراري والصوتي الممتاز.",
    description_en:
      "High-quality aluminum windows with various designs to suit all needs. Our windows are characterized by durability and excellent thermal and sound insulation.",
    features_ar: [
      "مقاومة للعوامل الجوية",
      "عزل حراري وصوتي ممتاز",
      "متوفرة بألوان وتصاميم متعددة",
      "سهلة التنظيف والصيانة",
      "متانة عالية وعمر افتراضي طويل",
    ],
    features_en: [
      "Weather resistant",
      "Excellent thermal and sound insulation",
      "Available in multiple colors and designs",
      "Easy to clean and maintain",
      "High durability and long lifespan",
    ],
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    slug: "aluminum-windows",
  },
  {
    id: 2,
    title_ar: "أبواب ألمنيوم",
    title_en: "Aluminum Doors",
    description_ar: "أبواب ألمنيوم متينة وعصرية بمقاسات وتصاميم متنوعة. تجمع أبوابنا بين الجمال والمتانة والأمان.",
    description_en:
      "Durable and modern aluminum doors with various sizes and designs. Our doors combine beauty, durability, and security.",
    features_ar: [
      "تصاميم عصرية وأنيقة",
      "مقاومة للصدأ والتآكل",
      "أقفال آمنة وموثوقة",
      "عزل حراري وصوتي",
      "سهولة الفتح والإغلاق",
    ],
    features_en: [
      "Modern and elegant designs",
      "Resistant to rust and corrosion",
      "Secure and reliable locks",
      "Thermal and sound insulation",
      "Easy opening and closing",
    ],
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    slug: "aluminum-doors",
  },
  {
    id: 3,
    title_ar: "واجهات زجاجية",
    title_en: "Glass Facades",
    description_ar:
      "واجهات زجاجية أنيقة مصنوعة من أفضل أنواع الألمنيوم والزجاج. تمنح واجهاتنا الزجاجية المباني مظهرًا عصريًا وأنيقًا.",
    description_en:
      "Elegant glass facades made from the best types of aluminum and glass. Our glass facades give buildings a modern and elegant appearance.",
    features_ar: [
      "تصميم عصري وأنيق",
      "زجاج آمن ومقاوم للكسر",
      "عزل حراري ممتاز",
      "حماية من الأشعة فوق البنفسجية",
      "سهولة التنظيف والصيانة",
    ],
    features_en: [
      "Modern and elegant design",
      "Safe and break-resistant glass",
      "Excellent thermal insulation",
      "UV protection",
      "Easy to clean and maintain",
    ],
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    slug: "glass-facades",
  },
  {
    id: 4,
    title_ar: "مطابخ ألمنيوم",
    title_en: "Aluminum Kitchens",
    description_ar: "مطابخ ألمنيوم عصرية وعملية بتصاميم مختلفة. تجمع مطابخنا بين الجمال والمتانة وسهولة التنظيف.",
    description_en:
      "Modern and practical aluminum kitchens with various designs. Our kitchens combine beauty, durability, and ease of cleaning.",
    features_ar: [
      "تصاميم عصرية وأنيقة",
      "مقاومة للرطوبة والحرارة",
      "سهولة التنظيف والصيانة",
      "متانة عالية وعمر افتراضي طويل",
      "خيارات متعددة من الألوان والتشطيبات",
    ],
    features_en: [
      "Modern and elegant designs",
      "Resistant to moisture and heat",
      "Easy to clean and maintain",
      "High durability and long lifespan",
      "Multiple options of colors and finishes",
    ],
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    slug: "aluminum-kitchens",
  },
  {
    id: 5,
    title_ar: "درابزينات",
    title_en: "Railings",
    description_ar: "درابزينات ألمنيوم أنيقة ومتينة للشرفات والسلالم. تجمع درابزيناتنا بين الجمال والمتانة والأمان.",
    description_en:
      "Elegant and durable aluminum railings for balconies and stairs. Our railings combine beauty, durability, and safety.",
    features_ar: [
      "تصاميم عصرية وأنيقة",
      "مقاومة للصدأ والتآكل",
      "متانة عالية وأمان",
      "سهولة التنظيف والصيانة",
      "خيارات متعددة من الألوان والتشطيبات",
    ],
    features_en: [
      "Modern and elegant designs",
      "Resistant to rust and corrosion",
      "High durability and safety",
      "Easy to clean and maintain",
      "Multiple options of colors and finishes",
    ],
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    slug: "railings",
  },
]

export default function ProductDetailPage() {
  const { language } = useLanguage()
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string

  // Find the product by slug
  const product = products.find((p) => p.slug === slug)

  // Set page title based on language and product
  useEffect(() => {
    if (product) {
      document.title =
        language === "ar" ? `${product.title_ar} | UPAL Systems` : `${product.title_en} | UPAL Systems`
    }
  }, [language, product])

  // If product not found
  if (!product) {
    return (
      <div className="section-container pt-20 text-center">
        <h1 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {language === "ar" ? "المنتج غير موجود" : "Product Not Found"}
        </h1>
        <Button onClick={() => router.push("/products")} className="mt-4 bg-primary hover:bg-primary-dark text-white">
          {language === "ar" ? (
            <>
              <ArrowRight className="mr-2 h-4 w-4" />
              العودة إلى المنتجات
            </>
          ) : (
            <>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </>
          )}
        </Button>
      </div>
    )
  }

  return (
    <main className="pt-20">
      <div className="section-container">
        {/* Back button */}
        <Button onClick={() => router.push("/products")} variant="outline" className="mb-6">
          {language === "ar" ? (
            <>
              <ArrowRight className="mr-2 h-4 w-4" />
              العودة إلى المنتجات
            </>
          ) : (
            <>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </>
          )}
        </Button>

        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={language === "ar" ? product.title_ar : product.title_en}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className={`text-3xl font-bold mb-4 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
              {language === "ar" ? product.title_ar : product.title_en}
            </h1>
            <p className="text-muted-foreground mb-6">
              {language === "ar" ? product.description_ar : product.description_en}
            </p>

            <h2 className={`text-xl font-semibold mb-3 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
              {language === "ar" ? "المميزات" : "Features"}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              {(language === "ar" ? product.features_ar : product.features_en).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <Button className="bg-primary hover:bg-primary-dark text-white">
              {language === "ar" ? "طلب عرض سعر" : "Request a Quote"}
            </Button>
          </div>
        </div>

        {/* Product gallery */}
        <div className="mt-12">
          <h2 className={`text-2xl font-bold mb-6 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
            {language === "ar" ? "معرض الصور" : "Gallery"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product.gallery.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${language === "ar" ? product.title_ar : product.title_en} - ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
