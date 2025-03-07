// 🔵 Орчуулгатай цэсний мэдээллийг функцээр дамжуулж авна
export const getMenuItems = (t) => [
  {
    title: t.MenuHome,
    href: "/",
  },
  {
    title: t.MenuPages,
    href: "#",
    submenu: [
      { title: t.MenuAboutUs, href: "about-us-2" },
      { title: t.MenuFaq, href: "faq-2" },
      { title: t.MenuPricing, href: "pricing-table-2" },
      { title: t.MenuTeam, href: "team-2" },
      { title: t.MenuTeamDetails, href: "team-detail-2" },
      { title: t.MenuCompanyHistory, href: "company-history" },
      { title: t.MenuComingSoon, href: "coming-soon" },
      { title: t.MenuError404, href: "error-404" },
      { title: t.MenuSiteDown, href: "sitedown" },
    ],
  },
  {
    title: t.MenuServices,
    href: "#",
    submenu: [
      { title: t.MenuServices, href: "services-2" },
      { title: t.MenuServicesDetails, href: "services-details-2" },
    ],
  },
  {
    title: t.MenuPostLayout,
    href: "#",
    submenu: [
      { title: t.MenuPostStandard, href: "post-standard" },
      { title: t.MenuPostLeftSidebar, href: "post-left-sidebar" },
      { title: t.MenuPostHeaderImage, href: "post-header-image" },
      { title: t.MenuPostSlideShow, href: "post-slide-show" },
      { title: t.MenuPostSideImage, href: "post-side-image" },
      { title: t.MenuPostGallery, href: "post-gallery" },
      { title: t.MenuPostGalleryAlt, href: "post-gallery-alternative" },
      { title: t.MenuPostLink, href: "post-link" },
      { title: t.MenuPostAudio, href: "post-audio" },
      { title: t.MenuPostVideo, href: "post-video" },
      { title: t.MenuPostPagination, href: "post-pagination" },
      { title: t.MenuPostOpenGutenberg, href: "post-open-gutenberg" },
    ],
  },
  {
    title: t.MenuBlog,
    href: "#",
    submenu: [
      { title: t.MenuBlogGrid, href: "blog-grid-2" },
      { title: t.MenuBlogDetails, href: "blog-details-2" },
      { title: t.MenuBlogSidebar, href: "blog-large-right-sidebar" },
    ],
  },
  {
    title: t.MenuContactUs,
    href: "contact-us-2",
  },
];

export const getFooterList = (t) => [
  {
    title: t.FooterLinks,
    subtitle: [
      { name: t.MenuHome, url: "/" },
      { name: t.MenuAboutUs, url: "/about-us-2" },
      { name: t.MenuServices, url: "/services-2" },
      { name: t.MenuTeam, url: "/team-2" },
      { name: t.MenuBlog, url: "/blog-grid-2" },
    ],
  },
  {
    title: t.FooterServices,
    subtitle: [
      { name: t.FooterStrategy, url: "#" },
      { name: t.FooterWebDev, url: "#" },
      { name: t.FooterWebSolution, url: "#" },
      { name: t.FooterDigitalMarketing, url: "#" },
      { name: t.FooterAppDesign, url: "#" },
    ],
  },
  {
    title: t.FooterOtherLinks,
    subtitle: [
      { name: t.MenuFaq, url: "/faq-2" },
      { name: t.MenuPortfolio, url: "#" },
      { name: t.MenuPrivacyPolicy, url: "#" },
      { name: t.MenuTermsConditions, url: "#" },
      { name: t.MenuSupport, url: "#" },
    ],
  },
];
