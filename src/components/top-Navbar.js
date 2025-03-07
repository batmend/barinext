"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import English from "../../locales/English";
import Mongolian from "../../locales/Mongolian";
import Header from "../components/Header";

// 🔵 Хэл хадгалах функц
const getInitialLocale = () => {
  return Cookies.get("NEXT_LOCALE") || "mn";
};

export default function Footer() {
  // ✅ `locale` хадгалах state
  const [locale, setLocale] = useState(getInitialLocale());
  const [t, setT] = useState(locale === "en" ? English : Mongolian);

  // ✅ `locale` өөрчлөгдөх үед орчуулгыг шинэчлэх
  useEffect(() => {
    Cookies.set("NEXT_LOCALE", locale, { expires: 365 }); // Cookie-д хадгалах
    setT(locale === "en" ? English : Mongolian);
  }, [locale]);

  return (
    <>
      <Header
        headstyle={"header-transparent text-black"}
        setLocale={setLocale}
        locale={locale}
      />
      <Container fluid="true" className="Top-Navbar banner-one">
        <div className="banner-inner">
          <div className="img2">
            <img src="images/background/bg21.png" alt="" />
          </div>
          <div className="img1">
            <img src="images/background/bg22.png" alt="" />
          </div>
          <div className="Center">
            <Row className="Top-Navbar__text-content">
              <Col
                xl="6"
                md="6"
                lg="6"
                sm="12"
                className="Top-Navbar__text-content__one"
              >
                <img src="./Bann-logo.png" />
              </Col>
              <Col
                xl="6"
                md="6"
                lg="6"
                sm="12"
                className="Top-Navbar__text-content__two"
              >
                <h2>{t.slogan1} </h2>
                <h1>{t.slogan2}</h1>
                <div className="Bann_Button">
                  {/* <Button
                  className="buttom-big"
                  variant="outline-light"
                  target="_blank"
                  href="https://"
                >
                  Buy on text
                </Button> */}

                  <Button
                    className="buttom-big"
                    variant="outline-light"
                    href="#about"
                  >
                    {t.introduction}
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}
