import Image from "next/image";
import { useLanguage } from "./language-provider";
import type React from "react";
import { useInView } from "react-intersection-observer";

export default function CertifiedBy() {
  const { t, language } = useLanguage();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  const logos = [
    { src: "/EducationMins.jpg", alt: "وزارة التعليم" },
    { src: "/civil-defence.jpg", alt: "الدفاع المدني" },
    { src: "/ministry.jpg", alt: "وزارة الداخلية" },
    { src: "/sabic.jpg", alt: "سابك" },
  ];

  return (
    <div
      ref={inViewRef}
      className={`flex flex-col content-center items-center text-center section-container`}
    >
      <h3
        className={`section-title ${
          language === "ar" ? "font-arabic-heading" : "font-english"
        }`}
      >
        {t("hero.certified")}
      </h3>
      {/* This parent div acts as the viewport */}
      <div className="w-full overflow-hidden">
        {/* This inner div is what animates */}
        <div
          className={`flex gap-14 min-w-fit flex-nowrap ${language === "ar" ? "animate-scroll-logos" : "animate-scroll-logos-reverse"}`}
        >
          {logos.map((logo, index) => (
            <Image
              src={logo.src}
              alt={logo.alt}
              height="250"
              width="250"
              key={`original-${index}`}
            />
          ))}
          {logos.map((logo, index) => (
            <Image
              src={logo.src}
              alt={logo.alt}
              height="250"
              width="250"
              key={`dup-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
