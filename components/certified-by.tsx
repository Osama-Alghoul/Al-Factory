import Image from "next/image"
import { useLanguage } from "./language-provider"
import type React from "react"
import { useInView } from "react-intersection-observer"

export default function CertifiedBy() {
    const { t, language } = useLanguage()
    const [inViewRef, inView] = useInView({
        triggerOnce: true,
    })

    return (
        <div
            ref={inViewRef}
            className={`flex flex-col content-center items-center text-center section-container ${
                inView ? "zoom-in" : ""
            }`}
        >
            <h3
                className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
            >
                {t("hero.certified")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
                <Image src='/EducationMins.png' alt="وزارة التعليم" height='200' width='200' />
                <Image src='/EducationMins.png' alt="وزارة التعليم" height='200' width='200' />
                <Image src='/EducationMins.png' alt="وزارة التعليم" height='200' width='200' />
                <Image src='/EducationMins.png' alt="وزارة التعليم" height='200' width='200' />
            </div>
        </div>
    )
}

