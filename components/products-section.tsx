"use client";

import { useLanguage } from "./language-provider";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { products } from "./products-list";

const products_sample = products.slice(0, 5);

export default function ProductsSection() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animation - Fixed to prevent double animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only add the animation class if it doesn't already have it
            if (!entry.target.classList.contains("fade-in")) {
              entry.target.classList.add("fade-in");
              entry.target.classList.remove("opacity-0");
              // Unobserve after animation is added to prevent multiple animations
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const productElements = document.querySelectorAll(".product-item");
    productElements.forEach((el) => {
      // Only observe elements that don't already have the animation class
      if (!el.classList.contains("fade-in")) {
        observer.observe(el);
      }
    });

    return () => {
      productElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section-container bg-muted/30">
      <div className="text-center mb-12">
        <h2
          className={`section-title ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
        >
          {language === "ar" ? "منتجاتنا" : "Our Products"}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === "ar"
            ? "نقدم مجموعة واسعة من منتجات الألمنيوم عالية الجودة"
            : "We offer a wide range of high-quality aluminum products"}
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref={containerRef}
      >
        {products_sample.map((product, index) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="product-item opacity-0 group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={language === "ar" ? product.description_ar : product.description_en}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3
                className={`text-xl font-semibold mb-2 ${language === "ar" ? "font-arabic-heading" : "font-english"}`}
              >
                {language === "ar" ? product.title_ar : product.title_en}
              </h3>
              <div className="mt-4 text-primary group-hover:text-primary-dark transition-colors flex items-center">
                {language === "ar" ? "عرض التفاصيل" : "View Details"}
                {language === "ar" ? (
                  <ChevronLeft className="ms-2 h-4 w-4" />
                ) : (
                  <ChevronRight className="ms-2 h-4 w-4" />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/products">
          <Button className="bg-primary hover:bg-primary-dark text-white">
            {language === "ar" ? "جميع المنتجات" : "All Products"}
            {language === "ar" ? (
              <ChevronLeft className="ms-2 h-5 w-5" />
            ) : (
              <ChevronRight className="ms-2 h-5 w-5" />
            )}
          </Button>
        </Link>
      </div>
    </section>
  );
}
