"use client"

import type React from "react"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactSection() {
  const { t, language } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {t("contact.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-card rounded-lg shadow-md p-6 lg:p-8 border border-border">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {t("contact.name")}
                </label>
                <Input id="name" name="name" required className="w-full" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t("contact.email")}
                </label>
                <Input id="email" name="email" type="email" required className="w-full" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  {t("contact.phone")}
                </label>
                <Input id="phone" name="phone" type="tel" className="w-full" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  {t("contact.message")}
                </label>
                <Textarea id="message" name="message" rows={5} required className="w-full" />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
                {t("contact.send")}
              </Button>
            </div>
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="ms-4">
                <h3
                  className={`text-lg font-semibold mb-1 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
                >
                  {t("footer.address")}
                </h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div className="ms-4">
                <h3
                  className={`text-lg font-semibold mb-1 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
                >
                  {t("footer.phone")}
                </h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div className="ms-4">
                <h3
                  className={`text-lg font-semibold mb-1 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
                >
                  {t("footer.email")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
