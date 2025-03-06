"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function LocaleSwitcher({ setLocale }) {
  const [locale, setLocalState] = useState("mn");

  useEffect(() => {
    const savedLocale = Cookies.get("NEXT_LOCALE") || "mn";
    setLocalState(savedLocale);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === "en" ? "mn" : "en"; // Хэл солих
    setLocalState(newLocale);
    Cookies.set("NEXT_LOCALE", newLocale, { path: "/", expires: 365 }); // Cookie-д хадгалах
    setLocale(newLocale); // Header.js доторх `setLocale`-г дуудах
  };

  return (
    <div className="locale-switcher">
      <button onClick={switchLocale} className="locale-button">
        {locale === "en" ? "MN" : "EN"}
      </button>
    </div>
  );
}
