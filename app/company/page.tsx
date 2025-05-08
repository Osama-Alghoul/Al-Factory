"use client"

import { useLanguage } from "@/components/language-provider"
import Footer from "@/components/footer"
import { useEffect } from "react"

export default function CompanyPage() {
  const { t, language } = useLanguage()

  // Set page title based on language
  useEffect(() => {
    document.title = language === "ar" ? "الشركة | مصنع الألمنيوم" : "Company | Aluminum Factory"
  }, [language])

  return (
    <main className="pt-20">
      <div className="section-container">
        <h1 className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
          {language === "ar" ? "الشركة" : "Company"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className={`section-subtitle ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground mb-4">
              {language === "ar"
                ? "نحن شركة رائدة في مجال تصنيع الألمنيوم بخبرة تزيد عن 20 عامًا. نلتزم بتقديم منتجات عالية الجودة تلبي احتياجات عملائنا."
                : "We are a leading aluminum manufacturing company with over 20 years of experience. We are committed to providing high-quality products that meet our customers' needs."}
            </p>
            <p className="text-muted-foreground mb-4">
              {language === "ar"
                ? "تأسست الشركة في عام 2000، وقد نمت لتصبح واحدة من أكبر مصنعي الألمنيوم في المنطقة. نحن نفخر بتقديم منتجات ذات جودة عالية وخدمة ممتازة لعملائنا."
                : "The company was founded in 2000 and has grown to become one of the largest aluminum manufacturers in the region. We pride ourselves on providing high-quality products and excellent service to our customers."}
            </p>
          </div>
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
            <span className="text-muted-foreground">{language === "ar" ? "صورة الشركة" : "Company Image"}</span>
          </div>
        </div>

        <div className="mt-12">
          <h2 className={`section-subtitle ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
            {language === "ar" ? "رؤيتنا" : "Our Vision"}
          </h2>
          <p className="text-muted-foreground mb-4">
            {language === "ar"
              ? "أن نكون الشركة الرائدة في مجال تصنيع الألمنيوم في المنطقة، ونقدم منتجات مبتكرة وعالية الجودة تلبي احتياجات عملائنا."
              : "To be the leading aluminum manufacturing company in the region, providing innovative and high-quality products that meet our customers' needs."}
          </p>
        </div>

        <div className="mt-8">
          <h2 className={`section-subtitle ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
            {language === "ar" ? "مهمتنا" : "Our Mission"}
          </h2>
          <p className="text-muted-foreground mb-4">
            {language === "ar"
              ? "تقديم منتجات ألمنيوم عالية الجودة وخدمات متميزة لعملائنا، مع الالتزام بالمعايير البيئية والاجتماعية."
              : "To provide high-quality aluminum products and excellent services to our customers, while adhering to environmental and social standards."}
          </p>
        </div>

        <div className="mt-8">
          <h2 className={`section-subtitle ${language === "ar" ? "font-arabic-heading" : "font-english"}`}>
            {language === "ar" ? "قيمنا" : "Our Values"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              {language === "ar"
                ? "الجودة: نلتزم بتقديم منتجات عالية الجودة تلبي توقعات عملائنا."
                : "Quality: We are committed to providing high-quality products that meet our customers' expectations."}
            </li>
            <li>
              {language === "ar"
                ? "الابتكار: نسعى دائمًا لتطوير منتجاتنا وخدماتنا."
                : "Innovation: We constantly strive to develop our products and services."}
            </li>
            <li>
              {language === "ar"
                ? "النزاهة: نعمل بشفافية ونزاهة في جميع تعاملاتنا."
                : "Integrity: We work with transparency and integrity in all our dealings."}
            </li>
            <li>
              {language === "ar"
                ? "خدمة العملاء: نضع عملاءنا في المقام الأول ونسعى لتلبية احتياجاتهم."
                : "Customer Service: We put our customers first and strive to meet their needs."}
            </li>
            <li>
              {language === "ar"
                ? "الاستدامة: نلتزم بالممارسات المستدامة في جميع عملياتنا."
                : "Sustainability: We are committed to sustainable practices in all our operations."}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  )
}
