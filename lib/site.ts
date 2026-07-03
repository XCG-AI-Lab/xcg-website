export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://xcg-website-beta.vercel.app";

export const site = {
  name: "X Consultancy Group",
  shortName: "XCG",
  legalName: "X CONSULTANCY GROUP SDN. BHD.",
  registration: "201801045899 (1307931-K)",
  tagline: "Your Partners In Growth®",
  email: "general@xconsultancygroup.com",
  phone: "+603-8074 7032",
  phoneAlt: "+6018-962 5988",
  whatsapp: "+60126980856",
  whatsappUrl:
    "https://wa.me/60126980856?text=Hi%20XCG%2C%20I%27d%20like%20to%20find%20out%20more%20about%20your%20services.",
  hours: "Mon–Fri: 9:00am – 6:00pm (Sat, Sun & PH closed)",
  offices: [
    {
      id: "bukit-jalil",
      name: "Bukit Jalil HQ",
      nameZh: "武吉加里尔总部",
      street: "C-11-03, Pusat Perdagangan Bandar Bukit Jalil, Persiaran Jalil 7",
      city: "Kuala Lumpur",
      postcode: "57000",
      region: "Wilayah Persekutuan Kuala Lumpur",
      country: "MY",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Pusat+Perdagangan+Bandar+Bukit+Jalil+C-11-03+Persiaran+Jalil+7+57000+Kuala+Lumpur",
      mapEmbed:
        "https://www.google.com/maps?q=Pusat+Perdagangan+Bandar+Bukit+Jalil,+Persiaran+Jalil+7,+57000+Kuala+Lumpur&output=embed",
      geo: { lat: 3.0587, lng: 101.6871 },
    },
    {
      id: "kepong",
      name: "Kepong Branch",
      nameZh: "甲洞分行",
      street: "No 108-1, Jalan Rimbunan Raya, Laman Rimbunan",
      city: "Kepong, Kuala Lumpur",
      postcode: "52100",
      region: "Wilayah Persekutuan Kuala Lumpur",
      country: "MY",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=No+108-1+Jalan+Rimbunan+Raya+Laman+Rimbunan+52100+Kepong+Kuala+Lumpur",
      mapEmbed:
        "https://www.google.com/maps?q=No+108-1,+Jalan+Rimbunan+Raya,+Laman+Rimbunan,+52100+Kepong,+Kuala+Lumpur&output=embed",
      geo: { lat: 3.2125, lng: 101.6343 },
    },
  ],
  social: {
    facebook: "https://www.facebook.com/xconsultancygroup",
    instagram: "https://www.instagram.com/xconsultancygroup",
    youtube: "https://www.youtube.com/@xconsultancygroup",
    tiktok: "https://www.tiktok.com/@xconsultancygroup",
    linkedin: "https://www.linkedin.com/company/x-consultancy-group",
  },
  founders: [
    {
      name: "Shawn Lee",
      role: "Co-Founder & Managing Director",
      roleZh: "联合创始人兼董事总经理",
      credentials: "Chartered Accountant (ICAEW) · Licensed Company Secretary · MIA Member",
      bio: "Chartered accountant with over a decade of experience serving Malaysian SMEs across company secretarial matters, taxation, auditing, accounting and business advisory. Shawn has directed audits of public-listed companies and IPO/RTO exercises, and serves as Director of APEACC Malaysia and Executive Director at property development firms. Under his leadership, XCG achieved 100% client-base growth in a single year.",
      bioZh: "特许会计师，拥有超过十年为马来西亚中小企业提供公司秘书、税务、审计、会计及商业咨询服务的经验。曾主导上市公司审计及IPO/RTO项目，现任马来西亚亚太经济商会（APEACC）董事及多家房地产开发公司执行董事。在他的带领下，XCG客户群一年内实现100%增长。",
    },
    {
      name: "Jenn See",
      role: "Co-Founder & Chief Executive Officer",
      roleZh: "联合创始人兼首席执行官",
      credentials: "Finance professional · 20+ years across Finance, Professional Services, IT, E-Commerce & Education",
      bio: "Finance leader with more than 20 years of experience, concurrently serving as Group Finance Director of a property development company. Jenn has established five branches and grown a business portfolio spanning more than 20 companies, and previously served as General Secretary of APEACC Malaysia.",
      bioZh: "拥有20多年经验的财务领袖，现兼任房地产开发公司集团财务总监。曾成功设立五家分行，业务组合涵盖20多家公司，并曾担任马来西亚亚太经济商会秘书长。",
    },
  ],
  awards: [
    {
      year: "2023",
      name: "Star Outstanding Business Awards (SOBA)",
      detail: "Young Entrepreneur of the Year — Gold",
    },
    {
      year: "2023",
      name: "Sin Chew Business Excellence Award",
      detail: "SME Business Excellence",
    },
    {
      year: "2024",
      name: "Golden Eagle Awards (GEA)",
      detail: "Malaysia 100 Excellence Enterprises",
    },
  ],
  testimonials: [
    {
      name: "Mr. Sam Lim",
      company: "The Narra Sdn. Bhd.",
      quote:
        "The speed and efficiency of XCG's monthly accounting reports are extremely high. We always know exactly where our numbers stand.",
    },
    {
      name: "Mr. Tan Leong Hong",
      company: "Coffeeprint Technology Sdn. Bhd.",
      quote:
        "XCG provides advice on the pros and cons of each decision to ensure best practices. A true advisory partner, not just a service provider.",
    },
    {
      name: "Ms. Elicia Chew",
      company: "Colibri Integration Sdn. Bhd.",
      quote:
        "Very timely, prompt and efficient. They are of great help to us.",
    },
    {
      name: "Mr. Julian Yap",
      company: "Luxworld Sdn. Bhd.",
      quote:
        "An efficient and reliable company secretary and accounting firm. Responds promptly, every time.",
    },
    {
      name: "Mr. Darren Walter Chong",
      company: "Beyonary Sdn. Bhd.",
      quote:
        "Extremely satisfied with XCG and its professional services.",
    },
  ],
} as const;

export type Locale = "en" | "zh";
export const locales: Locale[] = ["en", "zh"];
export const defaultLocale: Locale = "en";
