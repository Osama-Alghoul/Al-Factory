"use client"

import { useLanguage } from "./language-provider"
import { Instagram } from "lucide-react"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-muted">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
              {t("follow")}
            </h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.instagram.com/upal.systems/" target="_blank" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-semibold mb-4 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
              {t("contact.title")}
            </h3>
            <p className="text-muted-foreground">{t("footer.address")}</p>
            <p className="text-muted-foreground">{t("footer.phone")}</p>
            <p className="text-muted-foreground">{t("footer.email")}</p>
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p>{t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
