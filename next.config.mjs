/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ["mn", "en"], // Дэмжих хэлнүүд
      defaultLocale: "mn", // Анхдагч хэл Монгол
      localeDetection: false, // Автоматаар хэл илрүүлэхийг хаах
    },
  };
  
  export default nextConfig;
  