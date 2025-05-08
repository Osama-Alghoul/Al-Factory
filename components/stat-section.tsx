"use client"

import { useLanguage } from "./language-provider"
import { useEffect, useState, useRef } from "react"
import { Building, Users, Award } from "lucide-react"

const stats = [
  {
    id: 1,
    value: 80,
    title_ar: "مشروع",
    title_en: "Projects",
    icon: Building,
    suffix: "+",
  },
  {
    id: 2,
    value: 15,
    title_ar: "سنة خبرة",
    title_en: "Years Experience",
    icon: Award,
    suffix: "+",
  },
  {
    id: 3,
    value: 200,
    title_ar: "عميل",
    title_en: "Clients",
    icon: Users,
    suffix: "+",
  },
]

export default function StatsSection() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    // Reset counters when language changes
    setCounters(stats.map(() => 0))

    // Animate counters
    stats.forEach((stat, index) => {
      const duration = 2000 // 2 seconds for the animation
      const increment = stat.value / (duration / 16) // 60fps
      let currentValue = 0

      const timer = setInterval(() => {
        currentValue += increment
        if (currentValue >= stat.value) {
          currentValue = stat.value
          clearInterval(timer)
        }

        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(currentValue)
          return newCounters
        })
      }, 16)

      return () => clearInterval(timer)
    })
  }, [isVisible, language])

  return (
    <section className="py-16 bg-primary text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={stat.id} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
                  <span className="tabular-nums">{counters[index]}</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className={`text-xl ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
                  {language === "ar" ? stat.title_ar : stat.title_en}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
