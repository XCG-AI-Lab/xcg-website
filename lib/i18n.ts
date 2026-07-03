import type { Locale } from "./site";

const en = {
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    start: "Start a Business",
    run: "Run a Business",
    grow: "Grow a Business",
    resources: "Resources",
    tools: "Free Tools",
    pricing: "Pricing",
    faq: "FAQ",
    careers: "Careers",
    contact: "Contact",
    getQuote: "Get a Free Consultation",
    whatsapp: "WhatsApp Us",
  },
  hero: {
    eyebrow: "Your Partners In Growth®",
    title: "Your One-Stop Professional Business Advisory Firm in Malaysia",
    subtitle:
      "From incorporation to e-invoicing, tax to payroll — XCG delivers end-to-end professional services and reliable business solutions to our partners across Malaysia.",
    ctaPrimary: "Book a Free Consultation",
    ctaSecondary: "Explore Our Services",
    trustLine: "Trusted by growing SMEs across Malaysia",
  },
  home: {
    journeyTitle: "Wherever your business is, we meet you there",
    journeySubtitle:
      "Nine professional services organised around your journey — start, run and grow with one accountable partner.",
    servicesTitle: "Our Services",
    whyTitle: "Why Businesses Choose XCG",
    why: [
      {
        title: "One firm, nine services",
        desc: "Cosec, accounting, tax, e-invoicing, payroll, HR, legal, licensing and valuation — under one roof, so nothing falls between providers.",
      },
      {
        title: "Award-winning team",
        desc: "SOBA Young Entrepreneur of the Year (Gold), Sin Chew Business Excellence and GEA Malaysia 100 Excellence Enterprises.",
      },
      {
        title: "Chartered expertise",
        desc: "Led by an ICAEW chartered accountant and licensed company secretary with public-listed audit and IPO experience.",
      },
      {
        title: "Two KL offices",
        desc: "Bukit Jalil HQ and Kepong branch — meet us in person, or work with us fully digitally.",
      },
    ],
    testimonialsTitle: "What Our Partners Say",
    awardsTitle: "Awards & Recognition",
    resourcesTitle: "Latest Insights",
    resourcesSubtitle:
      "Practical guides on tax, compliance, payroll and company law — written by the XCG advisory team.",
    resourcesCta: "Browse all resources",
    finalCtaTitle: "Ready to grow with the right partner?",
    finalCtaSubtitle:
      "Tell us where your business is today — we'll show you the clearest path forward. First consultation is free.",
  },
  about: {
    title: "About X Consultancy Group",
    story:
      "XCG was founded by two entrepreneurs with deep financial advisory experience who saw the same pattern everywhere: SMEs aren't lacking in potential — they're lacking the right partner. Business owners full of passion and capability were struggling with financial complexity, compliance and structure. So rather than offer basic accounting, we built XCG as a strategic advisory partner.",
    meaningsTitle: "The 5 Meanings of X",
    meanings: [
      {
        title: "X is the Unknown Variable",
        desc: "Each client's growth path is unique, full of uncertainty and potential. We help solve your growth equation and discover your success formula.",
      },
      {
        title: "X is a Crossroads",
        desc: "Startup, restructuring or expansion — we guide you through critical junctures with clarity and direction.",
      },
      {
        title: "X is a Turning Point",
        desc: "Choosing the right partner marks the moment a business shifts toward structure, strategy and scale.",
      },
      {
        title: "X is a Breakthrough",
        desc: "Hidden opportunities sit behind bottlenecks. We identify blind spots and design breakthrough strategies.",
      },
      {
        title: "X is Infinite Possibility (∞)",
        desc: "Every client holds untapped potential. We reject one-size-fits-all, collaborating to define your individual growth path.",
      },
    ],
    missionTitle: "Our Mission",
    mission:
      "To integrate finance, tax, strategy, technology and capital into a complete business ecosystem that empowers entrepreneurial growth.",
    visionTitle: "Our Vision",
    vision:
      "To serve as the bridge between professional knowledge and business growth, driving a thriving Malaysian entrepreneurial ecosystem.",
    valuesTitle: "Our Core Values: PRIME",
    values: [
      { k: "P", title: "Professionalism", desc: "High standards, integrity, excellence." },
      { k: "R", title: "Responsibility", desc: "Ownership, commitment, accountability." },
      { k: "I", title: "Innovation", desc: "Fresh ideas, challenging norms, continuous improvement." },
      { k: "M", title: "Mentorship", desc: "Shared knowledge, guidance, developing future leaders." },
      { k: "E", title: "Empowerment", desc: "Unlocking potential through knowledge." },
    ],
    teamTitle: "Meet the Visionaries Behind XCG",
    teamSubtitle: "Compliance and advisory, led from the front.",
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "Tell us about your business — we'll respond within one working day. Prefer to chat? WhatsApp us directly.",
    formName: "Your name",
    formEmail: "Email address",
    formPhone: "Phone number",
    formCompany: "Company (optional)",
    formService: "What do you need help with?",
    formMessage: "Tell us briefly about your situation",
    formSubmit: "Send Message",
    formSending: "Sending…",
    formSuccess: "Thank you! Your message has been received — we'll be in touch within one working day.",
    formError: "Something went wrong. Please try again or WhatsApp us directly.",
    officesTitle: "Our Offices",
    hoursTitle: "Office Hours",
    hqLabel: "Headquarters — Bukit Jalil",
    branchLabel: "Branch — Kepong",
  },
  footer: {
    services: "Services",
    company: "Company",
    resources: "Resources",
    tagline: "Your Partners In Growth®",
    description:
      "X Consultancy Group is a one-stop professional business advisory firm in Kuala Lumpur, Malaysia — company secretarial, accounting, taxation, e-invoicing, payroll, HR, legal, licensing and business valuation.",
    newsletter: "Get regulatory updates & SME insights",
    newsletterDesc: "Tax deadlines, e-invoicing updates and grants — straight to your inbox. No spam.",
    newsletterPlaceholder: "Your email address",
    newsletterButton: "Subscribe",
    newsletterSuccess: "Subscribed! Watch your inbox for the next update.",
    rights: "All rights reserved.",
    reg: "Company Registration No.",
  },
  faqPage: {
    title: "Frequently Asked Questions",
    subtitle:
      "Straight answers on company secretarial, accounting, tax, e-invoicing, payroll, HR, legal, licensing and valuation matters in Malaysia.",
  },
  resources: {
    title: "Resources & Insights",
    subtitle:
      "Original guides on Malaysian tax, compliance, company law, payroll and HR — written by the XCG advisory team and updated as regulations change.",
    byline: "XCG Advisory Team",
    reviewedBy: "Reviewed by Shawn Lee, Chartered Accountant (ICAEW), Licensed Company Secretary",
    updated: "Last updated",
    published: "Published",
    minRead: "min read",
    disclaimer:
      "This article is general information, not professional advice. Malaysian tax and company rules change frequently — verify current rates and deadlines against the official portals (LHDN, MySST, SSM, KWSP, PERKESO) or speak to XCG before acting.",
    ctaTitle: "Need help applying this to your business?",
    ctaSubtitle: "WhatsApp our team or book a free consultation — we'll give you a straight answer.",
    relatedTitle: "Related reading",
    inThisCluster: "articles in this topic",
    allClusters: "Browse by topic",
  },
  tools: {
    title: "Free Business Tools",
    subtitle:
      "Practical, free tools built for Malaysian SMEs — check your e-invoicing readiness, track statutory deadlines, and pre-check your company name.",
  },
  careers: {
    title: "Careers at XCG",
    subtitle:
      "Grow with a firm that practises what it advises. We build careers in accounting, tax, company secretarial and advisory — with real mentorship (the M in PRIME).",
    whyTitle: "Why join XCG",
    openingsTitle: "Current Openings",
    applyCta: "Apply now",
    applyEmail: "Send your resume to",
    noRole: "Don't see your role? We're always looking for great people — write to us anyway.",
  },
  pricing: {
    title: "Transparent Packages",
    subtitle:
      "Clear starting prices, no surprises. Every engagement is scoped and quoted before we begin — these packages show you where pricing starts.",
    from: "from",
    month: "/month",
    year: "/year",
    oneTime: "one-time",
    cta: "Get an exact quote",
    note: "Prices are indicative starting points for typical SMEs and may vary with complexity, volume and urgency. SST may apply. You'll always receive a fixed written quote before any engagement begins.",
  },
  common: {
    learnMore: "Learn more",
    viewAll: "View all",
    backTo: "Back to",
    breadcrumbHome: "Home",
    faqTitle: "Frequently Asked Questions",
    whatsIncluded: "What's included",
    whyXcg: "Why XCG",
    relatedServices: "Related services",
    fromTheBlog: "From our Resources hub",
    getStarted: "Get started",
    talkToUs: "Talk to us",
    freeConsult: "Book a free consultation",
  },
};

type Dict = typeof en;

const zh: Dict = {
  nav: {
    home: "首页",
    about: "关于我们",
    services: "服务项目",
    start: "创办企业",
    run: "经营企业",
    grow: "发展企业",
    resources: "资讯中心",
    tools: "免费工具",
    pricing: "价格方案",
    faq: "常见问题",
    careers: "加入我们",
    contact: "联系我们",
    getQuote: "免费咨询",
    whatsapp: "WhatsApp 联系",
  },
  hero: {
    eyebrow: "您的成长伙伴®",
    title: "马来西亚一站式专业商业咨询公司",
    subtitle:
      "从公司注册到电子发票，从税务到薪资——XCG为马来西亚各地的伙伴提供端到端的专业服务和可靠的商业解决方案。",
    ctaPrimary: "预约免费咨询",
    ctaSecondary: "浏览我们的服务",
    trustLine: "深受马来西亚成长型中小企业信赖",
  },
  home: {
    journeyTitle: "无论您的企业处于哪个阶段，我们都与您同行",
    journeySubtitle: "九大专业服务围绕您的企业旅程——与一个负责到底的伙伴一起创办、经营和发展。",
    servicesTitle: "我们的服务",
    whyTitle: "企业为何选择XCG",
    why: [
      {
        title: "一家公司，九项服务",
        desc: "公司秘书、会计、税务、电子发票、薪资、人力资源、法律、执照及估值——一站式服务，避免服务商之间的疏漏。",
      },
      {
        title: "屡获殊荣的团队",
        desc: "SOBA年度青年企业家金奖、星洲企业楷模奖及GEA马来西亚100卓越企业奖。",
      },
      {
        title: "特许专业资质",
        desc: "由ICAEW特许会计师兼持牌公司秘书领导，具备上市公司审计及IPO经验。",
      },
      {
        title: "吉隆坡两大办事处",
        desc: "武吉加里尔总部及甲洞分行——欢迎面谈，也可全程线上服务。",
      },
    ],
    testimonialsTitle: "伙伴心声",
    awardsTitle: "奖项与荣誉",
    resourcesTitle: "最新洞察",
    resourcesSubtitle: "关于税务、合规、薪资和公司法的实用指南——由XCG咨询团队撰写。",
    resourcesCta: "浏览全部资讯",
    finalCtaTitle: "准备好与对的伙伴一起成长了吗？",
    finalCtaSubtitle: "告诉我们您的企业现况——我们为您指明最清晰的前进路径。首次咨询免费。",
  },
  about: {
    title: "关于 X Consultancy Group",
    story:
      "XCG由两位拥有深厚财务咨询经验的企业家创立。他们发现了一个普遍现象：中小企业不缺潜力——缺的是对的伙伴。满怀热情和能力的企业主，却在财务复杂性、合规和架构上苦苦挣扎。因此，我们没有提供基础会计服务，而是将XCG打造为战略咨询伙伴。",
    meaningsTitle: "X的五重含义",
    meanings: [
      { title: "X是未知数", desc: "每位客户的成长路径都独一无二，充满不确定性与潜力。我们帮助您求解成长方程，发现成功公式。" },
      { title: "X是十字路口", desc: "创业、重组或扩张——我们以清晰的方向引导您穿越关键节点。" },
      { title: "X是转折点", desc: "选对伙伴，标志着企业迈向架构、战略与规模化的时刻。" },
      { title: "X是突破", desc: "瓶颈背后藏着机遇。我们识别盲点，设计突破战略。" },
      { title: "X是无限可能(∞)", desc: "每位客户都蕴藏未开发的潜力。我们拒绝千篇一律，与您共同定义专属成长路径。" },
    ],
    missionTitle: "我们的使命",
    mission: "整合财务、税务、战略、科技与资本，构建赋能创业成长的完整商业生态系统。",
    visionTitle: "我们的愿景",
    vision: "成为专业知识与商业成长之间的桥梁，推动马来西亚创业生态系统蓬勃发展。",
    valuesTitle: "核心价值观：PRIME",
    values: [
      { k: "P", title: "专业 Professionalism", desc: "高标准、诚信、卓越。" },
      { k: "R", title: "责任 Responsibility", desc: "主人翁精神、承诺、担当。" },
      { k: "I", title: "创新 Innovation", desc: "新思维、挑战常规、持续改进。" },
      { k: "M", title: "传承 Mentorship", desc: "知识共享、悉心指导、培养未来领袖。" },
      { k: "E", title: "赋能 Empowerment", desc: "以知识释放潜能。" },
    ],
    teamTitle: "认识XCG背后的远见者",
    teamSubtitle: "合规与咨询，身先士卒。",
  },
  contact: {
    title: "联系我们",
    subtitle: "告诉我们您的业务需求——我们将在一个工作日内回复。想直接沟通？欢迎WhatsApp联系我们。",
    formName: "您的姓名",
    formEmail: "电子邮箱",
    formPhone: "联系电话",
    formCompany: "公司名称（选填）",
    formService: "您需要什么服务？",
    formMessage: "请简述您的情况",
    formSubmit: "发送信息",
    formSending: "发送中…",
    formSuccess: "谢谢！我们已收到您的信息，将在一个工作日内与您联系。",
    formError: "发送失败。请重试或直接WhatsApp联系我们。",
    officesTitle: "办事处",
    hoursTitle: "办公时间",
    hqLabel: "总部——武吉加里尔",
    branchLabel: "分行——甲洞",
  },
  footer: {
    services: "服务项目",
    company: "公司",
    resources: "资讯",
    tagline: "您的成长伙伴®",
    description:
      "X Consultancy Group是位于马来西亚吉隆坡的一站式专业商业咨询公司——提供公司秘书、会计、税务、电子发票、薪资、人力资源、法律、执照及企业估值服务。",
    newsletter: "获取法规更新与中小企业洞察",
    newsletterDesc: "税务截止日期、电子发票更新及资助信息——直达您的邮箱，绝无垃圾邮件。",
    newsletterPlaceholder: "您的电子邮箱",
    newsletterButton: "订阅",
    newsletterSuccess: "订阅成功！请留意您的邮箱。",
    rights: "版权所有。",
    reg: "公司注册号",
  },
  faqPage: {
    title: "常见问题",
    subtitle: "关于马来西亚公司秘书、会计、税务、电子发票、薪资、人力资源、法律、执照及估值事务的直接解答。",
  },
  resources: {
    title: "资讯中心",
    subtitle: "关于马来西亚税务、合规、公司法、薪资和人力资源的原创指南——由XCG咨询团队撰写，随法规变化持续更新。",
    byline: "XCG咨询团队",
    reviewedBy: "由Shawn Lee审阅——特许会计师（ICAEW）、持牌公司秘书",
    updated: "最后更新",
    published: "发布于",
    minRead: "分钟阅读",
    disclaimer:
      "本文仅为一般信息，不构成专业建议。马来西亚税务和公司法规经常变化——请在采取行动前，通过官方网站（LHDN、MySST、SSM、KWSP、PERKESO）核实最新税率和截止日期，或咨询XCG。",
    ctaTitle: "需要帮助将这些应用到您的企业吗？",
    ctaSubtitle: "WhatsApp我们的团队或预约免费咨询——我们给您直接的答案。",
    relatedTitle: "相关阅读",
    inThisCluster: "篇相关文章",
    allClusters: "按主题浏览",
  },
  tools: {
    title: "免费商业工具",
    subtitle: "为马来西亚中小企业打造的实用免费工具——检查电子发票就绪度、跟踪法定截止日期、预查公司名称。",
  },
  careers: {
    title: "加入XCG",
    subtitle: "与一家言行一致的公司共同成长。我们在会计、税务、公司秘书和咨询领域培养人才——提供真正的导师指导（PRIME中的M）。",
    whyTitle: "为何加入XCG",
    openingsTitle: "当前职位空缺",
    applyCta: "立即申请",
    applyEmail: "请将简历发送至",
    noRole: "没有找到合适的职位？我们始终欢迎优秀人才——欢迎来信。",
  },
  pricing: {
    title: "透明价格方案",
    subtitle: "清晰的起始价格，绝无意外。每项服务在开始前都会明确范围并报价——以下方案展示价格起点。",
    from: "起",
    month: "/月",
    year: "/年",
    oneTime: "一次性",
    cta: "获取精确报价",
    note: "价格为典型中小企业的指导性起点，可能因复杂度、业务量和紧急程度而异。可能需加收SST。任何服务开始前，您都将收到固定的书面报价。",
  },
  common: {
    learnMore: "了解更多",
    viewAll: "查看全部",
    backTo: "返回",
    breadcrumbHome: "首页",
    faqTitle: "常见问题",
    whatsIncluded: "服务内容",
    whyXcg: "为何选择XCG",
    relatedServices: "相关服务",
    fromTheBlog: "来自资讯中心",
    getStarted: "立即开始",
    talkToUs: "联系我们",
    freeConsult: "预约免费咨询",
  },
};

const dictionaries: Record<Locale, Dict> = { en, zh };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? en;
}

export type { Dict };
