"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie"; // Cookie ашиглах

import English from "../locales/English";
import Mongolian from "../locales/Mongolian";

import "../../node_modules/react-modal-video/css/modal-video.css";
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
  const [locale, setLocale] = useState("en"); // Одоогийн хэлний төлөв

  useEffect(() => {
    // Cookie-оос хэл авах
    const savedLocale = Cookies.get("NEXT_LOCALE") || "en";
    setLocale(savedLocale);

    // WOW.js эффект ачаалах
    setTimeout(() => {
      const { WOW } = require("wowjs");
      const wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        once: true,
        live: false,
        callback: function (box) {
          box.classList.add("will-animate");
          box.classList.add("animated");
        },
      });
      wow.init();
    }, 100);
  }, [path]);

  // Хэлний өгөгдөл авах
  const t = locale === "en" ? English : Mongolian;

  return (
    <html lang={locale}>
      <head>
        <title>{t.greeting} - Next.js Multilingual Site</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
