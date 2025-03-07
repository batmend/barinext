import { i18n } from "./next-i18next.config.mjs"; // ✅ `i18n`-ийг импорт хийх

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n, // ✅ `i18n` тохиргоог холбох
  reactStrictMode: true,
};

export default nextConfig;
