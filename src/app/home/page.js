"use client";

// 🔵 Шинэ код эхэлж байна
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import English from "../../../locales/English";
import Mongolian from "../../../locales/Mongolian";
// 🔵 Шинэ код дуусав

import Image from "next/image";
// import Link from "next/link";

import Header from "../../components/Header";

// component
import Footer from "../../components/Footer";
import { awesomeServices } from "@/data/services";
import TopNavbar from "../../components/top-Navbar";

// 🔵 Шинэ код эхэлж байна
const getInitialLocale = () => {
  return Cookies.get("NEXT_LOCALE") || "mn";
};

export default function HomePage() {
  const [locale, setLocale] = useState(getInitialLocale());
  const [t, setT] = useState(locale === "en" ? English : Mongolian);

  useEffect(() => {
    Cookies.set("NEXT_LOCALE", locale, { expires: 365 }); // ⚡ Cookie-д хадгалах
    setT(locale === "en" ? English : Mongolian);
  }, [locale]);
  // 🔵 Шинэ код дуусав

  const selectedServices = awesomeServices.filter((service) =>
    [1, 2, 3].includes(service.id)
  );
  return (
    <>
      <Header
        headstyle={"header-transparent text-black"}
        setLocale={setLocale}
        locale={locale}
      />
      <TopNavbar />
      <Footer />
    </>
  );
}
