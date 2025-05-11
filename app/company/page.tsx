"use client"

import { useLanguage } from "@/components/language-provider"
import Footer from "@/components/footer"
import { useEffect } from "react"

export default function CompanyPage() {
  const { t, language } = useLanguage()

  // Set page title based on language
  useEffect(() => {
    document.title = language === "ar" ? "الشركة | UPAL Systems" : "Company | UPAL Systems"
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
                ? "UPAL لمنتجات الألمنيوم والـuPVC ولدت عملاقة لتكون صرحاً راسخاً في عالم البناء المتطور باستمرار بما تقدمه من منتجات الأبواب والنوافذ وقطاعات الألمنيوم والـuPVC في جوده متقنه وحرص على رضا عملائنا الكرم حيث تعمل على تأسيس ثقة تتعزز بكم ملبية رغباتكم بتقديم الأحدث والأكثر تطوراً وبعد سنوات من تأسيسها _ بمدينة جدة _ المملكة العربية السعودية _ نستطيع أن نقول بأننا على باب انطلاقه رحبة تواكب كل ما يستجد من تحديث وتطور في صناعة الألمنيوم والـuPVC وتأكيداً لمبدأ خدمة العميل وتلبية متطلباته قامت UPAL باستخدام أنماط وأشكال جديدة من هذه الصناعة لتناسب جميع الأذواق، مع الحفاظ على الجودة المعتادة وذلك باستخدام أحدث الأجهزة والأدوات. إضافة إلى الفنيين المدربين ذوي الخبرات في هذا المجال وعلى استخدام هذه الأجهزة الدقيقة للخروج بالمنتجات على حسب المقاييس والمواصفات التي يطلبها العميل"
                : "We are a leading aluminum manufacturing company with over 20 years of experience. We are committed to providing high-quality products that meet our customers' needs."}
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
