"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  ar: {
    home: "الرئيسية",
    company: "الشركة",
    products: "منتجاتنا",
    services: "خدماتنا",
    clients: "عملاؤنا",
    contact: "اتصل بنا",
    "hero.title": "الصناعة العربية – UPAL SYSTEMS",
    "hero.subtitle": "نقدم أفضل منتجات الألمنيوم بجودة عالية",
    "hero.cta": "تعرف على منتجاتنا",
    "hero.certified" : "الموثقون والمعتمدون لدى",
    "about.title": "من نحن",
    "about.description":
      "نحن شركة رائدة في مجال تصنيع الألمنيوم بخبرة تزيد عن 20 عامًا. نلتزم بتقديم منتجات عالية الجودة تلبي احتياجات عملائنا.",
    "products.title": "منتجاتنا",
    "products.description": "نقدم مجموعة واسعة من منتجات الألمنيوم عالية الجودة",
    "products.windows": "نوافذ ألمنيوم",
    "products.doors": "أبواب ألمنيوم",
    "products.facades": "واجهات زجاجية",
    "products.kitchens": "مطابخ ألمنيوم",
    "products.railings": "درابزينات",
    "products.more": "عرض المزيد",
    "services.title": "خدماتنا",
    "services.design": "التصميم",
    "services.manufacturing": "التصنيع",
    "services.installation": "التركيب",
    "services.maintenance": "الصيانة",
    "services.consultation": "الاستشارات",
    "clients.title": "عملاؤنا",
    "clients.description": "نفتخر بثقة عملائنا الكرام",
    "contact.title": "اتصل بنا",
    "contact.name": "الاسم",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.message": "الرسالة",
    "contact.send": "إرسال",
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.address": "العنوان: طريق المدينه النازل، جدة السعودية",
    "footer.phone": "الهاتف: 920029291",
    "footer.email": "البريد الإلكتروني: info@aluminumfactory.com",
    follow: "تابعنا",
  },
  en: {
    home: "Home",
    company: "Company",
    products: "Our Products",
    services: "Our Services",
    clients: "Our Clients",
    contact: "Contact Us",
    "hero.title": "Arabian Industry UPAL SYSTEMS",
    "hero.subtitle": "We provide the best quality aluminum products",
    "hero.cta": "Explore Our Products",
    "hero.certified" : "Trusted and approved by",
    "about.title": "About Us",
    "about.description":
      "We are a leading aluminum manufacturing company with over 20 years of experience. We are committed to providing high-quality products that meet our customers' needs.",
    "products.title": "Our Products",
    "products.description": "We offer a wide range of high-quality aluminum products",
    "products.windows": "Aluminum Windows",
    "products.doors": "Aluminum Doors",
    "products.facades": "Glass Facades",
    "products.kitchens": "Aluminum Kitchens",
    "products.railings": "Railings",
    "products.more": "View More",
    "services.title": "Our Services",
    "services.design": "Design",
    "services.manufacturing": "Manufacturing",
    "services.installation": "Installation",
    "services.maintenance": "Maintenance",
    "services.consultation": "Consultation",
    "clients.title": "Our Clients",
    "clients.description": "We are proud of our valued clients' trust",
    "contact.title": "Contact Us",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.message": "Message",
    "contact.send": "Send",
    "footer.rights": "All Rights Reserved",
    "footer.address": "Address: Southbound Madinah Road, Jeddah, Saudi Arabia",
    "footer.phone": "Phone: 920029291",
    "footer.email": "Email: info@aluminumfactory.com",
    follow: "Follow Us",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.body.className = language === "ar" ? "rtl font-arabic-body" : "ltr font-english"
  }, [language])

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.ar] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
