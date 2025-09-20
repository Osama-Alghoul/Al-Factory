"use client";

import { useLanguage } from "./language-provider";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeedbackCard } from "./user-feedback";
import { feedbackData } from "@/types";

const clientsData: feedbackData[] = [
  {
    name: "Omar Bakri",
    avatarUrl: "/user_feedback/omar_b.webp",
    rating: 5,
    review:
      "The quality of their aluminum profiles is unmatched. We’ve used them for several large-scale architectural projects, and their precision and finish are consistently excellent. Their team is always professional and they deliver on time.",
  },
  {
    name: "Aisha Mansour",
    avatarUrl: "/user_feedback/aisha_m.webp",
    rating: 4,
    review:
      "التعامل معهم كان سلساً للغاية. لقد ساعدونا في تخصيص ألواح الألمنيوم لمشروعنا التجاري. كان هناك تأخير بسيط في الرد على بعض استفساراتنا الفنية في البداية، لكنهم عوضوا ذلك بجودة المنتج النهائي وسرعة الشحن لاحقًا.",
  },
  {
    name: "David Chen",
    avatarUrl: "/user_feedback/david_c.webp",
    rating: 5,
    review:
      "Exceptional service from start to finish. We needed a large volume of custom-extruded aluminum for a manufacturing line, and they delivered exactly what we needed, ahead of schedule. Their technical support was invaluable during the planning phase.",
  },
  {
    name: "Zainab Al-Sultan",
    avatarUrl: "/user_feedback/zainab.webp",
    rating: 4,
    review:
      "مصنع احترافي جداً. لقد زودونا بسبائك ألمنيوم عالية النقاء لمشروعنا الصناعي. كانت الجودة ممتازة، والتواصل كان جيداً. النقطة الوحيدة التي يمكن تحسينها هي توفير خيارات شحن أسرع للمشاريع الصغيرة، ولكن بشكل عام، أنا راضية جداً.",
  },
];

export default function ClientsSection() {
  const { language } = useLanguage();

  // Intersection Observer for animation - Fixed to prevent double animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only add the animation class if it doesn't already have it
            if (!entry.target.classList.contains("zoom-in")) {
              entry.target.classList.add("zoom-in");
              entry.target.classList.remove("opacity-0");
              // Unobserve after animation is added to prevent multiple animations
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const clientElements = document.querySelectorAll(".client-item");
    clientElements.forEach((el) => {
      // Only observe elements that don't already have the animation class
      if (!el.classList.contains("zoom-in")) {
        observer.observe(el);
      }
    });

    return () => {
      clientElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2
          className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
        >
          {language === "ar" ? "عملاؤنا" : "Our Clients"}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === "ar"
            ? "نفتخر بثقة عملائنا الكرام"
            : "We are proud of our valued clients' trust"}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {clientsData.map((client, index) => (
          <FeedbackCard key={index} feedback={client} />
        ))}
      </div>
    </section>
  );
}
