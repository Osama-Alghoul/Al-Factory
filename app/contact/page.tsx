"use client";

import { useLanguage } from "@/components/language-provider";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CustomAlert } from "@/components/ui/customAlert";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [open, setOpen] = useState(false);

  // Set page title based on language
  useEffect(() => {
    document.title =
      language === "ar"
        ? "اتصل بنا | UPAL Systems"
        : "Contact Us | UPAL Systems";
  }, [language]);

  function onFormSubmit() {
    setOpen(true);
  }

  return (
    <main className="pt-20">
      <CustomAlert
        message="تم ارسال الرسالة بنجاح"
        show={open}
        onClose={() => setOpen(false)}
        success
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="max-w-[640px]">
          <ContactSection onFormSubmit={onFormSubmit} />
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
                  <a href="tel:+966920029291" className="text-primary">
                    {" "}
                    +966920029291
                  </a>
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
                  <a
                    href="mailto:info@arabian-industry.com"
                    className="text-primary"
                  >
                    {" "}
                    info@arabian-industry.com
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mx-20 md:mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.929435055404!2d39.205491599999995!3d21.3690537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3b75e79961bdf%3A0x1be95b21d2b9112!2sArabian%20Industry%20UPAL%20SYSTEMS!5e1!3m2!1sar!2s!4v1746879860399!5m2!1sar!2s"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </main>
  );
}
