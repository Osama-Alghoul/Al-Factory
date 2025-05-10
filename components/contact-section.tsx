"use client"

import type React from "react"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const { t, language } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission

  }

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {t("contact.title")}
        </h2>
      </div>
      
        <div className="bg-card rounded-lg shadow-md p-6 lg:p-8 border border-border max-w-[640px] mx-auto">
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
    </section>
  )
}
