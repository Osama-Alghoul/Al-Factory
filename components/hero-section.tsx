"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft} from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
  {
    image: "/hero_section/main3.webp?height=1080&width=1920",
    alt: "Aluminum Factory Showcase 1",
  },
  {
    image: "/hero_section/main2.jpg?height=1080&width=1920",
    alt: "Aluminum Factory Showcase 2",
  },
  {
    image: "/hero_section/main1.jpg?height=1080&width=1920",
    alt: "Aluminum Factory Showcase 3",
  },
]

export default function HeroSection() {
  const { t, language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image src={slide.image || "/placeholder.svg"} alt={slide.alt} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${language === "ar" ? "font-arabic-heading" : "font-english"
                }`}
            >
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">{t("hero.subtitle")}</p>
              <Link href='/products' className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-6 h-auto rounded-md">
                {t("hero.cta")}
              </Link>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-primary w-10" : "bg-white/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        {language === "ar" ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        {language === "ar" ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
      </button>
    </section>
  )
}
