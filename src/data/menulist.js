export const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Pages",
      href: "#",
      submenu: [
        { title: "About Us", href: "about-us-2" },
        { title: "Faq", href: "faq-2" },
        { title: "Pricing Table", href: "pricing-table-2" },
        { title: "Team", href: "team-2" },
        { title: "Team Details", href: "team-detail-2" },
        { title: "Company History", href: "company-history" },
        { title: "Coming Soon", href: "coming-soon" },
        { title: "Error 404", href: "error-404" },
        { title: "Site Down", href: "sitedown" },
      ],
    },
    {
      title: "Services",
      href: "#",
      submenu: [
        { title: "Services", href: "services-2" },
        { title: "Services Details", href: "services-details-2" },
      ],
    },
    {
      title: "Post Layout",
      href: "#",
      submenu: [
        { title: "Post Standard", href: "post-standard" },
        { title: "Post Left Sidebar", href: "post-left-sidebar" },
        { title: "Post Header Image", href: "post-header-image" },
        { title: "Post Slide Show", href: "post-slide-show" },
        { title: "Post Side Image", href: "post-side-image" },
        { title: "Post Gallery", href: "post-gallery" },
        { title: "Post Gallery Alt", href: "post-gallery-alternative" },
        { title: "Post Link", href: "post-link" },
        { title: "Post Audio", href: "post-audio" },
        { title: "Post Video", href: "post-video" },
        { title: "Post With Pagination", href: "post-pagination" },
        { title: "Post Open Gutenberg", href: "post-open-gutenberg" },
      ],
    },
    {
      title: "Blog",
      href: "#",
      submenu: [
        { title: "Blog Grid 2", href: "blog-grid-2" },
        { title: "Blog Details", href: "blog-details-2" },
        { title: "Large Right Sidebar", href: "blog-large-right-sidebar" },
      ],
    },
    {
      title: "Contact Us",
      href: "contact-us-2",
    },
];

export const footerlist = [
    {
        title: "OUR LINKS",
        subtitle: [
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about-us-2" },
            { name: "Services", url: "/services-2" },
            { name: "Team", url: "/team-2" },
            { name: "Blog", url: "/blog-grid-2" }
        ]
    },
    {
        title: "OUR SERVICES",
        subtitle: [
            { name: "Strategy & Research", url: "#" },
            { name: "Web Development", url: "#" },
            { name: "Web Solution", url: "#" },
            { name: "Digital Marketing", url: "#" },
            { name: "App Design", url: "#" }
        ]
    },
    {
        title: "OTHER LINKS",
        subtitle: [
            { name: "FAQ", url: "/faq-2" },
            { name: "Portfolio", url: "#" },
            { name: "Privacy Policy", url: "#" },
            { name: "Terms & Conditions", url: "#" },
            { name: "Support", url: "#" }
        ]
    }
];

export const allMenuList = [
    ...menuItems,
    ...footerlist,
];