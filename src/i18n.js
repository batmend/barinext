import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "../locales/English";
import Mongolian from "../locales/Mongolian";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: English },
    mn: { translation: Mongolian },
  },
  lng: "mn", // Default хэл Монгол
  fallbackLng: "mn",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
