"use client";
import React, { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ThemeImage } from "@/data/ThemeImage";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import English from "../../locales/English";
import Mongolian from "../../locales/Mongolian";

import { getMenuItems } from "../data/menulist";

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
};

export default function Header({ headstyle, setLocale, locale }) {
  const [headerSticky, setHeaderSticky] = useState(false);
  const [menuItems, setMenuItems] = useState([]); // ⚠ Менюг анх хоосон байлгах
  const [openToggle, setOpenToggle] = useState(false);
  const [state, setState] = useReducer(reducer, initialState);

  // 🌟 `useEffect`-ээр орчуулсан менюг тохируулах
  useEffect(() => {
    const t = locale === "en" ? English : Mongolian;
    setMenuItems(getMenuItems(t)); // Менюны утгуудыг зөв тохируулах
  }, [locale]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderSticky(window.scrollY > 50);
    });
  }, []);

  const handleMenuActive = (status) => {
    setState({ active: state.active === status ? "" : status });
  };

  let path = "";
  if (typeof window !== "undefined") {
    path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];
  }

  return (
    <header
      className="site-header header-transparent mo-left is-fixed"
      id="fix-header"
    >
      <div id="home" className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix">
          <div className="container clearfix">
            <div className="logo-header">
              <Link href="/">
                <Image src={ThemeImage.logoPng} alt="logo" height={100} />
              </Link>
            </div>

            <button
              className={`navbar-toggler navicon justify-content-end ${
                openToggle ? "open" : "collapsed"
              }`}
              onClick={() => setOpenToggle(!openToggle)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="extra-nav">
              <div className="extra-cell">
                <LocaleSwitcher setLocale={setLocale} />
              </div>
            </div>
            <div
              className={`header-nav navbar-collapse collapse justify-content-end ${
                openToggle ? "show" : ""
              }`}
            >
              <div className="logo-header logo-dark">
                <Link href="/">
                  <Image src={ThemeImage.logoPng} alt="logo" height={100} />
                </Link>
              </div>

              <ul className="nav navbar-nav navbar">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${item.submenu ? "sub-menu-down" : ""} ${
                      state.active === item.title ? "open" : ""
                    }`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => handleMenuActive(item.title)}
                    >
                      <span suppressHydrationWarning>{item.title}</span>{" "}
                      {/* 🌟 Hydration Error-ийг дарна */}
                    </Link>
                    {item.submenu && (
                      <ul className="sub-menu">
                        {item.submenu.map((subitem, ind) => (
                          <li
                            key={ind}
                            className={`${
                              subitem.href === path ? "active" : ""
                            }`}
                          >
                            <Link href={subitem.href} suppressHydrationWarning>
                              {subitem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="dlab-social-icon">
                <ul>
                  <li>
                    <Link target="_blank" href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
