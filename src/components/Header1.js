"use client";
import React, { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeImage } from "@/data/ThemeImage";
import LocaleSwitcher from "@/components/LocaleSwitcher"; // LocaleSwitcher нэмэх
import Cookies from "js-cookie";
import English from "@/locales/English";
import Mongolian from "@/locales/Mongolian";

import { menuItems } from "../data/menulist";

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
};

export default function Header({ headstyle }) {
  const [headerSticky, setHeaderSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderSticky(window.scrollY > 50);
    });
  }, []);

  const [openToggle, setOpenToggle] = useState(false);
  const [state, setState] = useReducer(reducer, initialState);

  // 📌 Хэлний тохиргоо хадгалах state
  const [locale, setLocale] = useState("mn"); // Анхдагч хэл Монгол
  const [t, setT] = useState(Mongolian); // Тухайн хэлний контент

  useEffect(() => {
    const savedLocale = Cookies.get("NEXT_LOCALE") || "mn";
    setLocale(savedLocale);
    setT(savedLocale === "en" ? English : Mongolian); // Хэл өөрчлөгдөх бүрт контент шинэчлэх
  }, []);

  // 📌 Хэл солигдоход контент шинэчлэх
  useEffect(() => {
    setT(locale === "en" ? English : Mongolian);
  }, [locale]);

  return (
    <header className={`site-header header mo-left ${headstyle}`}>
      <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerSticky ? "is-fixed" : ""}`}>
        <div className="main-bar clearfix ">
          <div className="container clearfix">
            <div className="logo-header logo-dark">
              <Link href="/" scroll={false}>
                <Image src={ThemeImage.logoPng} alt="logo" width={112} height={28} />
              </Link>
            </div>
            <div className="extra-nav">
              <div className="extra-cell">
                <LocaleSwitcher setLocale={setLocale} />  {/* Хэл солих үед locale шинэчлэх */}
              </div>
            </div>
            <div className="header-nav navbar-collapse collapse justify-content-end">
              <ul className="nav navbar-nav navbar">
                {menuItems.map((item, index) => (
                  <li className={`${item.submenu ? "sub-menu-down" : ""} ${state.active === item.title ? "open" : ""}`} key={index}>
                    <Link href={item.href} onClick={() => setState({ active: item.title })}>
                      <span>{t[item.title] || item.title}</span> {/* Мэнюг сонгосон хэлээр харуулах */}
                    </Link>
                    {item.submenu && (
                      <ul className="sub-menu">
                        {item.submenu.map((subitem, ind) => (
                          <li key={ind} className={`${subitem.href === state.active ? "active" : ""}`}>
                            <Link href={subitem.href}>{t[subitem.title] || subitem.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
