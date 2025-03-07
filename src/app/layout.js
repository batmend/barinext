"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import "../i18n"; // Олон хэлний тохиргоог ачаалах

import English from "../../locales/English";
import Mongolian from "../../locales/Mongolian";

import "react-modal-video/css/modal-video.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../assets/vendor/animate/animate.css";
import "../assets/css/style.css";
import "../assets/css/skin/skin-2.css";

export default function RootLayout({ children }) {
  const path = usePathname();
  const [locale, setLocale] = useState("mn"); // Default хэл Монгол
  const [title, setTitle] = useState(
    "BARI GROUP | БАРИ ГРУПП - Амьдрах таатай орчин"
  );

  useEffect(() => {
    const savedLocale = Cookies.get("NEXT_LOCALE") || "mn";
    setLocale(savedLocale);
  }, []);

  useEffect(() => {
    setTitle(
      locale === "en"
        ? "BARI GROUP | Creating a Comfortable Living Environment"
        : "BARI GROUP | БАРИ ГРУПП - Амьдрах таатай орчин"
    );
  }, [locale]);

  return (
    <html lang={locale}>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <header>
          <nav>{/* navigation цэс эсвэл лого */}</nav>
        </header>
        <main>{children}</main>
        <footer>{/* footer хэсэг */}</footer>
      </body>
    </html>
  );
}
