
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import '../../node_modules/react-modal-video/css/modal-video.css';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../assets/vendor/animate/animate.css'
import '../assets/css/style.css'
import '../assets/css/skin/skin-2.css'

export default function RootLayout({ children }) {
  const path = usePathname();
  useEffect(() => {
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
  return (
    <html lang="en">
        <head>
          <title>Samar - Next js Creative Agency Bootstrap  Template</title>
        </head>
      <body>{children}</body>
    </html>
  );
}
