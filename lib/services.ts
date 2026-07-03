export type ServiceStage = "start" | "run" | "grow";

export interface Service {
  slug: string;
  stage: ServiceStage;
  name: string;
  nameZh: string;
  shortDesc: string;
  shortDescZh: string;
  seoTitle: string; // <= 60 chars
  metaDescription: string; // <= 155 chars
  primaryKeyword: string;
  h1: string;
  intro: string[];
  introZh: string[];
  deliverables: { title: string; titleZh: string; desc: string; descZh: string }[];
  whyXcg: string[];
  whyXcgZh: string[];
  faqs: { q: string; a: string; qZh: string; aZh: string }[];
  relatedSlugs: string[];
  relatedArticles: string[]; // article slugs
}

export const services: Service[] = [
  {
    slug: "company-secretarial",
    stage: "start",
    name: "Company Secretarial Services",
    nameZh: "公司秘书服务",
    shortDesc:
      "Named company secretary, SSM filings, statutory registers and full Companies Act 2016 compliance — from Bukit Jalil and Kepong.",
    shortDescZh: "指定公司秘书、SSM申报、法定登记册及2016年公司法全面合规——服务于武吉加里尔及甲洞。",
    seoTitle: "Company Secretary Bukit Jalil & Kepong | Cosec Malaysia | XCG",
    metaDescription:
      "Licensed company secretary in Bukit Jalil & Kepong. Incorporation, SSM filings, annual returns & Companies Act 2016 compliance. Talk to XCG today.",
    primaryKeyword: "company secretary bukit jalil",
    h1: "Company Secretarial Services in Bukit Jalil & Kepong",
    intro: [
      "Every Malaysian company must appoint a qualified company secretary within 30 days of incorporation — and keep one for the life of the company. XCG acts as your named, licensed company secretary from our Bukit Jalil headquarters and Kepong branch, keeping your company compliant with the Companies Act 2016 at all times.",
      "From incorporating your Sdn Bhd with SSM to lodging annual returns, maintaining statutory registers and advising your board, we handle the compliance so you can focus on running the business.",
    ],
    introZh: [
      "每家马来西亚公司必须在成立后30天内委任一名合格的公司秘书，并在公司存续期间持续保留。XCG从武吉加里尔总部和甲洞分行担任您的指定持牌公司秘书，确保您的公司始终符合2016年公司法。",
      "从在SSM注册您的私人有限公司（Sdn Bhd），到提交周年申报表、维护法定登记册及为董事会提供建议，我们处理所有合规事务，让您专注经营业务。",
    ],
    deliverables: [
      {
        title: "Company incorporation (Sdn Bhd)",
        titleZh: "公司注册（Sdn Bhd）",
        desc: "Name search and reservation, MyCoID submission, constitution and complete post-incorporation setup.",
        descZh: "名称查询与保留、MyCoID提交、公司章程及完整的成立后设置。",
      },
      {
        title: "Named company secretary",
        titleZh: "指定公司秘书",
        desc: "A licensed, ordinarily-resident secretary responsible for your statutory compliance.",
        descZh: "由持牌、常驻马来西亚的秘书负责您的法定合规。",
      },
      {
        title: "Annual returns & SSM filings",
        titleZh: "周年申报及SSM备案",
        desc: "Annual return lodgement, financial statement circulation deadlines, and all statutory forms.",
        descZh: "周年申报表提交、财务报表分发期限及所有法定表格。",
      },
      {
        title: "Statutory registers & minutes",
        titleZh: "法定登记册及会议记录",
        desc: "Registers of members, directors and beneficial owners; board and general meeting documentation.",
        descZh: "股东、董事及实益拥有人登记册；董事会及股东大会文件。",
      },
      {
        title: "Registered office address",
        titleZh: "注册办公地址",
        desc: "Use our Bukit Jalil or Kepong address as your registered office, with mail handling.",
        descZh: "使用我们的武吉加里尔或甲洞地址作为注册办公地址，并代收信件。",
      },
      {
        title: "Corporate changes & advisory",
        titleZh: "公司变更及咨询",
        desc: "Share transfers, director changes, constitution amendments, strike-off and restructuring.",
        descZh: "股份转让、董事变更、章程修订、除名及重组。",
      },
    ],
    whyXcg: [
      "Licensed secretaries answerable to SSM, with same-day response as standard",
      "Two KL offices — Bukit Jalil HQ and Kepong branch — for in-person meetings",
      "Seamless switch from your current secretary with a full compliance health check",
      "One firm for cosec + accounting + tax, so nothing falls between providers",
    ],
    whyXcgZh: [
      "持牌秘书对SSM负责，标准服务为当日回复",
      "吉隆坡两个办事处——武吉加里尔总部及甲洞分行——方便面谈",
      "从现任秘书无缝转换，并提供全面合规健康检查",
      "公司秘书+会计+税务一站式服务，避免服务商之间的疏漏",
    ],
    faqs: [
      {
        q: "Can I switch my company secretary to XCG immediately?",
        a: "Yes. The law allows your board to appoint a new company secretary at any time — there is no minimum lock-in period. We manage the handover, take custody of your statutory records and run a compliance review so nothing slips.",
        qZh: "我可以立即将公司秘书转换至XCG吗？",
        aZh: "可以。法律允许董事会随时委任新的公司秘书，没有最短锁定期。我们负责交接、接管法定记录并进行合规审查，确保万无一失。",
      },
      {
        q: "When must a new company appoint a secretary?",
        a: "Within 30 days of incorporation under the Companies Act 2016. The secretary must be a natural person ordinarily resident in Malaysia who is a member of a prescribed body or licensed by SSM.",
        qZh: "新公司必须何时委任秘书？",
        aZh: "根据2016年公司法，须在成立后30天内委任。秘书必须是常驻马来西亚的自然人，并且是规定专业团体的会员或持有SSM执照。",
      },
      {
        q: "Do you serve companies outside Bukit Jalil and Kepong?",
        a: "Yes. Our offices are in Bukit Jalil and Kepong, but we act as company secretary for companies across Kuala Lumpur, Selangor and all of Malaysia — most filings are done digitally via MyCoID and MBRS.",
        qZh: "你们服务武吉加里尔和甲洞以外的公司吗？",
        aZh: "是的。我们的办事处位于武吉加里尔和甲洞，但我们为吉隆坡、雪兰莪乃至全马来西亚的公司担任公司秘书——大多数备案通过MyCoID和MBRS在线完成。",
      },
    ],
    relatedSlugs: ["accounting", "taxation", "licensing"],
    relatedArticles: [
      "register-sdn-bhd-malaysia",
      "company-secretary-role-companies-act-2016",
      "annual-return-statutory-filings",
    ],
  },
  {
    slug: "accounting",
    stage: "run",
    name: "Accounting Services",
    nameZh: "会计服务",
    shortDesc:
      "Monthly bookkeeping, management reports and MPERS/MFRS-compliant financial statements that keep you decision-ready.",
    shortDescZh: "每月簿记、管理报告及符合MPERS/MFRS的财务报表，助您随时做出明智决策。",
    seoTitle: "Accounting Firm Bukit Jalil | Bookkeeping Malaysia | XCG",
    metaDescription:
      "Outsourced accounting & bookkeeping for Malaysian SMEs — monthly reports, MPERS/MFRS statements, audit-ready books. Get a quote from XCG today.",
    primaryKeyword: "accounting firm bukit jalil",
    h1: "Accounting & Bookkeeping Services for Malaysian SMEs",
    intro: [
      "Accurate, timely books are the foundation of every good business decision — and every stress-free audit and tax season. XCG delivers outsourced accounting and bookkeeping for SMEs across Kuala Lumpur from our Bukit Jalil and Kepong offices.",
      "Clients tell us the speed of our monthly reporting is what they value most: you close each month knowing your numbers, your obligations and your margins.",
    ],
    introZh: [
      "准确及时的账目是每个正确商业决策的基础，也是轻松应对审计和报税季的保障。XCG从武吉加里尔和甲洞办事处为吉隆坡各地的中小企业提供外包会计和簿记服务。",
      "客户最认可的是我们月度报告的速度：每月结账时，您都清楚自己的数字、义务和利润率。",
    ],
    deliverables: [
      {
        title: "Monthly bookkeeping",
        titleZh: "每月簿记",
        desc: "Full recording and safekeeping of financial data, on your software or ours.",
        descZh: "全面记录和保管财务数据，可使用您的软件或我们的系统。",
      },
      {
        title: "Management reports",
        titleZh: "管理报告",
        desc: "Fast monthly P&L, balance sheet and cashflow reporting with commentary.",
        descZh: "快速的月度损益表、资产负债表和现金流量报告，并附分析说明。",
      },
      {
        title: "Financial statements",
        titleZh: "财务报表",
        desc: "MPERS/MFRS-compliant statutory financial statements, ready for audit and SSM lodgement.",
        descZh: "符合MPERS/MFRS的法定财务报表，可直接用于审计和SSM备案。",
      },
      {
        title: "Audit & tax support",
        titleZh: "审计及税务支持",
        desc: "Audit-ready schedules, fixed-asset registers and capital allowance workings.",
        descZh: "审计就绪的明细表、固定资产登记册及资本免税额计算。",
      },
      {
        title: "Accounting system setup",
        titleZh: "会计系统设置",
        desc: "Cloud accounting setup, migration and e-invoicing-ready chart of accounts.",
        descZh: "云会计设置、数据迁移及支持电子发票的会计科目表。",
      },
      {
        title: "Backlog clean-up",
        titleZh: "积压账务清理",
        desc: "Behind on your books? We reconstruct and reconcile past-year accounts.",
        descZh: "账目落后？我们为您重建并核对往年账目。",
      },
    ],
    whyXcg: [
      "Fast month-end close — clients highlight our reporting speed",
      "Chartered-accountant-led team (ICAEW, MIA)",
      "Works with your existing accounting software, or migrates you to the cloud",
      "Integrated with our tax and e-invoicing teams for one seamless workflow",
    ],
    whyXcgZh: [
      "快速月结——客户一致好评的报告速度",
      "由特许会计师（ICAEW、MIA）领导的团队",
      "兼容您现有的会计软件，或协助迁移至云端",
      "与我们的税务和电子发票团队无缝协作",
    ],
    faqs: [
      {
        q: "What is the difference between accounting and bookkeeping?",
        a: "Bookkeeping is the comprehensive recording and safekeeping of financial data. Accounting analyses, interprets, classifies, summarises and reports that data so you can make decisions and meet statutory obligations. XCG provides both.",
        qZh: "会计和簿记有什么区别？",
        aZh: "簿记是全面记录和保管财务数据；会计则是对这些数据进行分析、解读、分类、汇总和报告，以支持决策并履行法定义务。XCG两者兼营。",
      },
      {
        q: "Can we keep using our current accounting software?",
        a: "Yes. If you'd like us to prepare reports using your software, you simply grant us access. We work with all major platforms and can also recommend a cloud setup if you're starting fresh.",
        qZh: "我们可以继续使用现有的会计软件吗？",
        aZh: "可以。如需我们使用您的软件编制报告，只需授予访问权限。我们支持所有主流平台，也可为新企业推荐云端方案。",
      },
      {
        q: "Do you prepare accounts for audit?",
        a: "Yes — we prepare audit-ready financial statements and supporting schedules, and liaise directly with your auditors to keep the audit to its typical 2–4 week timeline.",
        qZh: "你们准备审计用的账目吗？",
        aZh: "是的——我们编制审计就绪的财务报表和支持明细表，并直接与审计师对接，使审计保持在通常2至4周的时间内完成。",
      },
    ],
    relatedSlugs: ["taxation", "auditing", "e-invoicing"],
    relatedArticles: [
      "capital-allowances-malaysia",
      "annual-return-statutory-filings",
      "malaysia-tax-deadlines-calendar",
    ],
  },
  {
    slug: "taxation",
    stage: "run",
    name: "Taxation Services",
    nameZh: "税务服务",
    shortDesc:
      "Corporate & personal tax filing, CP204 estimates, SST, tax planning and LHDN audit representation.",
    shortDescZh: "公司及个人报税、CP204估税、SST、税务规划及LHDN税务审计代表。",
    seoTitle: "Corporate Tax Filing Malaysia | Tax Agent & SST | XCG",
    metaDescription:
      "Corporate & personal tax compliance in Malaysia — Form C, CP204, SST returns, tax planning & LHDN audit support. Stay compliant with XCG.",
    primaryKeyword: "corporate tax filing malaysia",
    h1: "Taxation Services in Malaysia — Compliance, Planning & Defence",
    intro: [
      "Malaysian tax rules change every year — rates, reliefs, SST scope, e-invoicing mandates. XCG keeps your company compliant and your tax bill lawfully minimised, handling everything from CP204 estimates and Form C filing to SST returns and personal e-Filing for directors.",
      "When LHDN comes calling, we represent you: audits, investigations, appeals and voluntary disclosures.",
    ],
    introZh: [
      "马来西亚税务法规每年都在变化——税率、减免、SST范围、电子发票强制要求。XCG确保您的公司合规，并在合法范围内将税负降至最低，服务涵盖CP204估税、Form C申报、SST申报及董事个人电子报税。",
      "当LHDN上门时，我们代表您应对：税务审计、调查、上诉及自愿披露。",
    ],
    deliverables: [
      {
        title: "Corporate tax compliance",
        titleZh: "公司税务合规",
        desc: "CP204 estimates, instalment monitoring, Form C preparation and filing within 7 months of year-end.",
        descZh: "CP204估税、分期付款监控、Form C编制及在财年结束后7个月内申报。",
      },
      {
        title: "Personal & director tax",
        titleZh: "个人及董事税务",
        desc: "BE/B form e-Filing, relief optimisation and coordinated company-director planning.",
        descZh: "BE/B表格电子报税、税务减免优化及公司与董事协同规划。",
      },
      {
        title: "SST registration & returns",
        titleZh: "SST注册及申报",
        desc: "Applicability assessment, MySST registration and bi-monthly SST-02 returns.",
        descZh: "适用性评估、MySST注册及双月SST-02申报。",
      },
      {
        title: "Tax planning",
        titleZh: "税务规划",
        desc: "Capital allowances, incentives, remuneration structuring and SME-rate optimisation.",
        descZh: "资本免税额、税务优惠、薪酬结构及中小企业税率优化。",
      },
      {
        title: "Withholding tax & DTAs",
        titleZh: "预扣税及双重征税协定",
        desc: "WHT identification on non-resident payments, treaty relief and remittance.",
        descZh: "识别非居民付款的预扣税义务、协定减免及缴纳。",
      },
      {
        title: "Audit & investigation support",
        titleZh: "税务审计及调查支持",
        desc: "Full representation before LHDN — desk audits, field audits and appeals.",
        descZh: "在LHDN面前全权代表——案头审计、实地审计及上诉。",
      },
    ],
    whyXcg: [
      "Led by a chartered accountant with public-listed audit and IPO experience",
      "Per-client compliance calendar with deadline reminders — nothing slips",
      "Strategic planning that stays firmly on the right side of the law",
      "Integrated with accounting and payroll, so filings reconcile first time",
    ],
    whyXcgZh: [
      "由具备上市公司审计及IPO经验的特许会计师领导",
      "为每位客户定制合规日历并提供截止日期提醒——绝不遗漏",
      "严格守法的战略性税务规划",
      "与会计和薪资服务整合，申报数据一次核对到位",
    ],
    faqs: [
      {
        q: "Can XCG legally reduce my tax liability?",
        a: "Yes. We provide strategic tax planning that identifies lawful tax-saving opportunities — capital allowances, incentives, timing and structure — while ensuring full compliance. Tax evasion is never on the table.",
        qZh: "XCG能合法降低我的税务负担吗？",
        aZh: "可以。我们提供战略性税务规划，发掘合法节税机会——资本免税额、税务优惠、时间安排和架构优化——同时确保完全合规。绝不涉及逃税。",
      },
      {
        q: "When is my company's tax return due?",
        a: "Form C is due within seven months of your financial year-end. Your CP204 estimate must be filed before the basis period begins, with monthly instalments through the year.",
        qZh: "我公司的报税表何时到期？",
        aZh: "Form C须在财政年度结束后七个月内提交。CP204估税须在基期开始前提交，并全年按月分期缴纳。",
      },
      {
        q: "Do you support clients during LHDN audits?",
        a: "Absolutely. We represent and support clients throughout tax audits and investigations — managing correspondence, preparing documentation and handling appeals where needed.",
        qZh: "你们在LHDN审计期间提供支持吗？",
        aZh: "当然。我们在整个税务审计和调查过程中代表并支持客户——处理往来函件、准备文件，并在需要时处理上诉。",
      },
    ],
    relatedSlugs: ["accounting", "e-invoicing", "payroll"],
    relatedArticles: [
      "corporate-income-tax-malaysia",
      "sst-explained-sales-tax-vs-service-tax",
      "tax-planning-malaysian-smes",
    ],
  },
  {
    slug: "e-invoicing",
    stage: "run",
    name: "E-Invoicing Services",
    nameZh: "电子发票服务",
    shortDesc:
      "End-to-end LHDN MyInvois implementation — readiness assessment, integration, training and monthly support.",
    shortDescZh: "端到端LHDN MyInvois实施——就绪评估、系统集成、培训及每月支持。",
    seoTitle: "E-Invoicing Malaysia Consultant | MyInvois Setup | XCG",
    metaDescription:
      "LHDN e-invoicing made simple — readiness assessment, MyInvois portal or API integration, training & monthly support for Malaysian SMEs. Ask XCG.",
    primaryKeyword: "e-invoicing malaysia consultant",
    h1: "E-Invoicing Implementation for Malaysian Businesses",
    intro: [
      "Malaysia's e-invoicing mandate now covers businesses with annual turnover above RM1 million — every in-scope invoice must be validated by LHDN through MyInvois in near real time. Non-compliance carries penalties under the Income Tax Act.",
      "XCG delivers customised, end-to-end implementation: we assess your readiness, choose the right submission method (MyInvois Portal, API or middleware), clean your master data, integrate your systems, train your team and support you monthly after go-live.",
    ],
    introZh: [
      "马来西亚的电子发票强制要求现已覆盖年营业额超过100万令吉的企业——所有范围内的发票必须通过MyInvois系统由LHDN近乎实时验证。不合规将面临所得税法下的处罚。",
      "XCG提供量身定制的端到端实施：评估就绪度、选择合适的提交方式（MyInvois门户、API或中间件）、清理主数据、集成系统、培训团队，并在上线后提供每月支持。",
    ],
    deliverables: [
      {
        title: "Readiness assessment",
        titleZh: "就绪评估",
        desc: "Map your transactions, systems and data gaps against LHDN requirements.",
        descZh: "根据LHDN要求梳理您的交易、系统和数据缺口。",
      },
      {
        title: "Portal or API setup",
        titleZh: "门户或API设置",
        desc: "Free MyInvois Portal for low volumes; API/middleware integration for automation.",
        descZh: "低交易量可使用免费MyInvois门户；高交易量则通过API/中间件集成实现自动化。",
      },
      {
        title: "System integration",
        titleZh: "系统集成",
        desc: "Connect your accounting, ERP or POS — including MyInvois e-POS for retail.",
        descZh: "连接您的会计、ERP或POS系统——包括零售业的MyInvois e-POS。",
      },
      {
        title: "Master data clean-up",
        titleZh: "主数据清理",
        desc: "TINs, MSIC codes, buyer details and item classifications validated before go-live.",
        descZh: "上线前验证税号（TIN）、MSIC代码、买家资料及商品分类。",
      },
      {
        title: "Team training",
        titleZh: "团队培训",
        desc: "Hands-on training for finance and sales teams on issuing, validating and correcting e-invoices.",
        descZh: "为财务和销售团队提供开具、验证和更正电子发票的实操培训。",
      },
      {
        title: "Monthly compliance support",
        titleZh: "每月合规支持",
        desc: "Ongoing monitoring, consolidated e-invoice handling and error resolution.",
        descZh: "持续监控、合并电子发票处理及错误解决。",
      },
    ],
    whyXcg: [
      "Proven implementations across retail, services, construction and trading",
      "We handle both the tax rules and the technology — one accountable partner",
      "Training and documentation in English and Chinese",
      "Post-go-live monthly support, not a hand-off",
    ],
    whyXcgZh: [
      "在零售、服务、建筑和贸易行业拥有成熟实施经验",
      "税务规则与技术双精通——一个负责到底的伙伴",
      "提供中英文培训和文档",
      "上线后持续每月支持，绝不撒手不管",
    ],
    faqs: [
      {
        q: "Is my small business exempt from e-invoicing?",
        a: "Businesses with annual turnover below RM1 million are currently exempt (per LHDN's updated timeline of 7 December 2025). Thresholds and timelines change — we'll confirm your position against the latest LHDN guidance.",
        qZh: "我的小型企业可以豁免电子发票吗？",
        aZh: "年营业额低于100万令吉的企业目前获得豁免（根据LHDN于2025年12月7日更新的时间表）。门槛和时间表可能变化——我们将根据最新LHDN指南确认您的情况。",
      },
      {
        q: "Should I use the free MyInvois Portal or API integration?",
        a: "The Portal suits low invoice volumes with manual entry. API or middleware integration suits higher volumes and connects directly to your accounting, ERP or POS system. We assess your workflow and implement the right fit.",
        qZh: "我应该使用免费的MyInvois门户还是API集成？",
        aZh: "门户适合发票量少、手动输入的企业。API或中间件集成适合交易量大的企业，可直接连接会计、ERP或POS系统。我们会评估您的工作流程并实施最合适的方案。",
      },
      {
        q: "What happens if I don't comply?",
        a: "Failure to issue e-invoices where mandated is an offence under the Income Tax Act and can attract fines and prosecution. Early preparation is far cheaper than remediation.",
        qZh: "如果不合规会怎样？",
        aZh: "在强制范围内未开具电子发票属于所得税法下的违法行为，可能面临罚款和起诉。提早准备远比事后补救划算。",
      },
    ],
    relatedSlugs: ["accounting", "taxation"],
    relatedArticles: [
      "e-invoicing-malaysia-sme-guide",
      "myinvois-portal-vs-api",
      "sst-explained-sales-tax-vs-service-tax",
    ],
  },
  {
    slug: "payroll",
    stage: "run",
    name: "Payroll Services",
    nameZh: "薪资服务",
    shortDesc:
      "Accurate, confidential monthly payroll — EPF, SOCSO, EIS, PCB, payslips and year-end EA forms, for local and foreign staff.",
    shortDescZh: "准确保密的每月薪资处理——EPF、SOCSO、EIS、PCB、工资单及年终EA表格，涵盖本地及外籍员工。",
    seoTitle: "Payroll Services Malaysia | EPF, SOCSO, PCB & EA Forms | XCG",
    metaDescription:
      "Outsourced payroll for Malaysian SMEs — salary computation, EPF/SOCSO/EIS/PCB remittance by the 15th, payslips & EA forms. Get a payroll quote from XCG.",
    primaryKeyword: "payroll services malaysia",
    h1: "Payroll Outsourcing Services in Malaysia",
    intro: [
      "Payroll is a monthly compliance exam with real penalties for wrong answers. Every cycle you must compute salaries correctly, deduct and remit EPF, SOCSO, EIS and PCB by the 15th of the following month, issue compliant payslips — and at year-end, deliver accurate EA forms to every employee and Form E to LHDN.",
      "XCG runs complete, confidential payroll for teams from 1 to 100+ employees, local and foreign, so your staff are paid right and the statutory bodies are paid on time.",
    ],
    introZh: [
      "薪资处理是一场每月都有真实罚款风险的合规考试。每个周期您必须正确计算工资，在次月15日前扣缴EPF、SOCSO、EIS和PCB，签发合规工资单——年终还须向每位员工提供准确的EA表格，并向LHDN提交Form E。",
      "XCG为1至100人以上的团队提供完整、保密的薪资服务，涵盖本地及外籍员工，确保员工薪酬准确、法定缴款准时。",
    ],
    deliverables: [
      {
        title: "Monthly salary computation",
        titleZh: "每月工资计算",
        desc: "Gross-to-net computation including overtime, allowances, bonuses and no-pay leave.",
        descZh: "从总额到净额的计算，包括加班费、津贴、花红及无薪假。",
      },
      {
        title: "EPF, SOCSO, EIS & PCB",
        titleZh: "EPF、SOCSO、EIS及PCB",
        desc: "Registration (where needed) and on-time monthly remittance to KWSP, PERKESO and LHDN by the 15th.",
        descZh: "注册（如需要）并于每月15日前准时向KWSP、PERKESO和LHDN缴款。",
      },
      {
        title: "Payslips & records",
        titleZh: "工资单及记录",
        desc: "Confidential e-payslips and statutory payroll records for every employee.",
        descZh: "为每位员工提供保密电子工资单及法定薪资记录。",
      },
      {
        title: "EA forms & Form E",
        titleZh: "EA表格及Form E",
        desc: "Year-end EA forms for all employees by end-February, plus Form E submission to LHDN.",
        descZh: "二月底前为所有员工准备年终EA表格，并向LHDN提交Form E。",
      },
      {
        title: "Foreign employee payroll",
        titleZh: "外籍员工薪资",
        desc: "Correct EPF/SOCSO treatment by pass type and PCB for expatriate staff.",
        descZh: "根据准证类型正确处理EPF/SOCSO，并为外派员工计算PCB。",
      },
      {
        title: "HR system integration",
        titleZh: "HR系统集成",
        desc: "Leave, claims and attendance data flows straight into payroll.",
        descZh: "请假、报销和考勤数据直接对接薪资系统。",
      },
    ],
    whyXcg: [
      "Scales from 1 employee to 100+ — startups welcome",
      "Strict confidentiality: payroll data handled on a need-to-know basis",
      "Statutory deadlines tracked on a monthly payroll calendar",
      "Backed by our tax team for PCB accuracy and year-end reconciliation",
    ],
    whyXcgZh: [
      "从1名员工到100人以上均可服务——欢迎初创企业",
      "严格保密：薪资数据按需知原则处理",
      "每月薪资日历跟踪所有法定截止日期",
      "税务团队支持，确保PCB准确及年终对账无误",
    ],
    faqs: [
      {
        q: "When are EPF, SOCSO, EIS and PCB due each month?",
        a: "Generally by the 15th of the following month. Late payment attracts interest and penalties from KWSP, PERKESO and LHDN respectively — our payroll calendar makes sure you never miss the date.",
        qZh: "每月的EPF、SOCSO、EIS和PCB何时到期？",
        aZh: "一般为次月15日前。逾期缴款将分别被KWSP、PERKESO和LHDN征收利息和罚款——我们的薪资日历确保您绝不错过截止日期。",
      },
      {
        q: "Is outsourced payroll suitable for a small team?",
        a: "Yes. Our payroll solutions are designed to scale with your business whether you have 1 employee or 100 — small teams often benefit most, because one statutory mistake is costly relative to headcount.",
        qZh: "外包薪资适合小团队吗？",
        aZh: "适合。我们的薪资方案可随业务扩展，无论您有1名还是100名员工——小团队往往受益最大，因为相对于人数而言，一次法定错误的代价很高。",
      },
      {
        q: "Can you run payroll for foreign employees?",
        a: "Yes. We handle payroll for both Malaysian and foreign employees, applying the correct EPF/SOCSO treatment by pass type and ensuring all statutory requirements are met.",
        qZh: "你们能为外籍员工处理薪资吗？",
        aZh: "可以。我们为马来西亚及外籍员工处理薪资，根据准证类型采用正确的EPF/SOCSO处理方式，确保满足所有法定要求。",
      },
    ],
    relatedSlugs: ["human-resources", "taxation", "accounting"],
    relatedArticles: [
      "epf-socso-eis-pcb-employer-guide",
      "ea-forms-year-end-payroll",
      "payroll-outsourcing-malaysia",
    ],
  },
  {
    slug: "human-resources",
    stage: "grow",
    name: "Human Resources Advisory",
    nameZh: "人力资源咨询",
    shortDesc:
      "Employment contracts, handbooks, labour-law compliance, HRDF grants and practical HR advisory for growing teams.",
    shortDescZh: "雇佣合同、员工手册、劳动法合规、HRDF资助及实用人力资源咨询，助力团队成长。",
    seoTitle: "HR Advisory Malaysia | Contracts, Handbooks & Compliance | XCG",
    metaDescription:
      "HR advisory for Malaysian SMEs — employment contracts, employee handbooks, Employment Act compliance, HRDF grants & termination guidance. Talk to XCG.",
    primaryKeyword: "hr advisory malaysia",
    h1: "Human Resources Advisory for Growing Malaysian Businesses",
    intro: [
      "People problems become legal problems fast. The Employment Act's recent amendments broadened coverage and updated entitlements — and unfair-dismissal claims at the Industrial Court are expensive whether you win or lose.",
      "XCG's HR advisory keeps your contracts, policies and processes compliant and practical: from offer letters and handbooks to onboarding, discipline, termination and HRDF grant consultations.",
    ],
    introZh: [
      "人事问题会迅速演变为法律问题。雇佣法令的最新修订扩大了适用范围并更新了福利待遇——而工业法庭的不当解雇索赔，无论输赢代价都很高。",
      "XCG的人力资源咨询确保您的合同、政策和流程既合规又务实：从聘书、员工手册到入职、纪律处分、解雇及HRDF资助咨询。",
    ],
    deliverables: [
      {
        title: "Employment contracts & offer letters",
        titleZh: "雇佣合同及聘书",
        desc: "Customised, Employment Act-compliant contracts for every role and pass type.",
        descZh: "为每个职位和准证类型定制符合雇佣法令的合同。",
      },
      {
        title: "Employee handbooks",
        titleZh: "员工手册",
        desc: "Comprehensive policies: conduct, leave, discipline, grievance, confidentiality, termination.",
        descZh: "全面的政策：行为准则、休假、纪律、申诉、保密及解雇。",
      },
      {
        title: "Labour-law compliance",
        titleZh: "劳动法合规",
        desc: "Employment Act, Minimum Wages Order and working-hours compliance reviews.",
        descZh: "雇佣法令、最低工资令及工时合规审查。",
      },
      {
        title: "Onboarding & termination advisory",
        titleZh: "入职及离职咨询",
        desc: "Probation policies, due-inquiry processes, retrenchment planning and documentation.",
        descZh: "试用期政策、正当调查程序、裁员规划及文件准备。",
      },
      {
        title: "HRDF grant consultation",
        titleZh: "HRDF资助咨询",
        desc: "Levy registration and grant applications for staff training and development.",
        descZh: "人力资源发展基金注册及员工培训发展资助申请。",
      },
      {
        title: "Recruitment advisory",
        titleZh: "招聘咨询",
        desc: "Role scoping, compensation benchmarking and hiring process design.",
        descZh: "职位规划、薪酬基准及招聘流程设计。",
      },
    ],
    whyXcg: [
      "Practical, SME-scale advice — not big-corporate boilerplate",
      "Aligned with our payroll team so policy and payslip never conflict",
      "Legal partners on call for Industrial Court matters",
      "Bilingual documentation (English/Chinese) available",
    ],
    whyXcgZh: [
      "务实的中小企业级建议——而非大企业的模板套话",
      "与薪资团队协同，政策与工资单绝不冲突",
      "法律伙伴随时支持工业法庭事务",
      "可提供中英双语文件",
    ],
    faqs: [
      {
        q: "Can you prepare employment contracts and offer letters?",
        a: "Yes. We draft customised employment contracts, offer letters and related documents in compliance with the Employment Act, tailored to your industry and each role.",
        qZh: "你们能准备雇佣合同和聘书吗？",
        aZh: "可以。我们根据雇佣法令起草定制的雇佣合同、聘书及相关文件，并针对您的行业和每个职位量身定制。",
      },
      {
        q: "Is an employee handbook legally required?",
        a: "Not strictly — but it's one of the highest-value documents an SME can have. It sets expectations, standardises discipline and grievance processes, and materially reduces dispute risk.",
        qZh: "员工手册是法律强制要求的吗？",
        aZh: "并非强制——但它是中小企业最有价值的文件之一。它设定期望、规范纪律和申诉流程，并显著降低纠纷风险。",
      },
      {
        q: "Do you advise on terminations and retrenchment?",
        a: "Yes. We advise on due inquiry for misconduct, genuine redundancy justification, fair selection, notice and termination benefits — reducing your exposure to unfair-dismissal claims.",
        qZh: "你们提供解雇和裁员咨询吗？",
        aZh: "是的。我们就不当行为的正当调查、真实裁员理由、公平筛选、通知期及离职福利提供建议——降低不当解雇索赔的风险。",
      },
    ],
    relatedSlugs: ["payroll", "legal"],
    relatedArticles: [
      "employment-contracts-employment-act",
      "employee-handbook-malaysia",
      "termination-retrenchment-malaysia",
    ],
  },
  {
    slug: "legal",
    stage: "grow",
    name: "Legal Services",
    nameZh: "法律服务",
    shortDesc:
      "Commercial contracts, shareholder agreements, company constitutions and business-friendly legal support for SMEs.",
    shortDescZh: "商业合同、股东协议、公司章程及适合中小企业的商业法律支持。",
    seoTitle: "Commercial Legal Services Malaysia | Contracts & SMEs | XCG",
    metaDescription:
      "Business-friendly legal support for Malaysian SMEs — commercial contracts, shareholder agreements, constitutions & compliance. Consult XCG today.",
    primaryKeyword: "commercial legal services malaysia",
    h1: "Legal Services for Startups and SMEs in Malaysia",
    intro: [
      "Good agreements prevent expensive disputes. XCG provides practical, business-friendly legal support for startups, growing companies and SMEs — drafting and reviewing the documents your business runs on.",
      "Because we also act as your company secretary and accountant, our legal work is grounded in the commercial reality of your business, not abstract templates.",
    ],
    introZh: [
      "好的协议能避免昂贵的纠纷。XCG为初创企业、成长型公司和中小企业提供务实、商业友好的法律支持——起草和审查您业务运营所依赖的各类文件。",
      "由于我们同时担任您的公司秘书和会计师，我们的法律工作立足于您业务的商业实际，而非抽象模板。",
    ],
    deliverables: [
      {
        title: "Commercial contracts",
        titleZh: "商业合同",
        desc: "Service agreements, supply contracts, NDAs and partnership agreements — drafted and reviewed.",
        descZh: "服务协议、供应合同、保密协议及合伙协议——起草与审查。",
      },
      {
        title: "Shareholder agreements",
        titleZh: "股东协议",
        desc: "Protect founders and investors with clear rights, exits and dispute mechanisms.",
        descZh: "以清晰的权利、退出机制和争议解决条款保护创始人和投资者。",
      },
      {
        title: "Company constitutions",
        titleZh: "公司章程",
        desc: "Tailored constitutions aligned with your shareholding and governance needs.",
        descZh: "根据您的股权结构和治理需求量身定制章程。",
      },
      {
        title: "Employment documentation",
        titleZh: "雇佣文件",
        desc: "Contracts, restrictive covenants and policies coordinated with our HR team.",
        descZh: "与我们的人力资源团队协同处理合同、限制性条款及政策。",
      },
      {
        title: "Regulatory compliance",
        titleZh: "监管合规",
        desc: "PDPA, consumer protection and sector-specific regulatory advice.",
        descZh: "个人数据保护法（PDPA）、消费者保护及行业特定监管建议。",
      },
      {
        title: "Business structuring",
        titleZh: "商业架构",
        desc: "Legal structuring for new ventures, joint ventures and reorganisations.",
        descZh: "为新企业、合资企业及重组提供法律架构建议。",
      },
    ],
    whyXcg: [
      "Practical solutions scaled for SMEs — clear drafting, fair fees",
      "Integrated view across legal, cosec, tax and accounting",
      "Fast turnaround on contract reviews",
      "Trusted legal partners for litigation and specialist matters",
    ],
    whyXcgZh: [
      "为中小企业量身定制的务实方案——条款清晰、收费公道",
      "法律、公司秘书、税务和会计的一体化视角",
      "合同审查快速交付",
      "诉讼及专业事务由可信赖的法律伙伴支持",
    ],
    faqs: [
      {
        q: "Can you draft and review commercial contracts?",
        a: "Yes. We prepare, review and advise on service contracts, partnership agreements, supply agreements, NDAs and more — in plain language your counterparties can actually sign.",
        qZh: "你们能起草和审查商业合同吗？",
        aZh: "可以。我们起草、审查各类服务合同、合伙协议、供应协议、保密协议等，并提供建议——用语清晰，对方易于签署。",
      },
      {
        q: "Do I need legal help to start a business in Malaysia?",
        a: "Legal advice at the start — on structure, founder agreements and IP protection — prevents the most common and most expensive disputes later. It costs far less than fixing problems after they surface.",
        qZh: "在马来西亚创业需要法律协助吗？",
        aZh: "创业初期的法律建议——关于架构、创始人协议和知识产权保护——能预防日后最常见、代价最高的纠纷，远比事后补救便宜。",
      },
      {
        q: "Are your legal services suitable for startups?",
        a: "Absolutely. We focus on practical, business-friendly legal solutions tailored to startups, growing companies and SMEs.",
        qZh: "你们的法律服务适合初创企业吗？",
        aZh: "当然。我们专注于为初创企业、成长型公司和中小企业提供务实、商业友好的法律解决方案。",
      },
    ],
    relatedSlugs: ["company-secretarial", "human-resources", "business-valuation"],
    relatedArticles: [
      "directors-duties-companies-act-2016",
      "employment-contracts-employment-act",
      "sdn-bhd-vs-enterprise",
    ],
  },
  {
    slug: "licensing",
    stage: "grow",
    name: "Licensing Services",
    nameZh: "执照服务",
    shortDesc:
      "Business premise licenses, signboard licenses, F&B permits, import/export permits and industry approvals — applications and renewals.",
    shortDescZh: "营业场所执照、招牌执照、餐饮许可、进出口准证及行业批文——申请与更新。",
    seoTitle: "Business Licensing Malaysia | Permits & Renewals | XCG",
    metaDescription:
      "Business licence applications & renewals in Malaysia — premise, signboard, F&B, import/export & industry approvals. Stay licensed with XCG.",
    primaryKeyword: "business licensing malaysia",
    h1: "Business Licensing & Permit Services in Malaysia",
    intro: [
      "Operating without the right licences risks fines, enforcement action and even closure. But Malaysia's licensing landscape is fragmented across local councils, ministries and agencies — each with its own forms, fees and renewal cycles.",
      "XCG identifies exactly which licences your business needs, prepares the applications, and tracks every renewal so you stay continuously compliant.",
    ],
    introZh: [
      "无照经营可能面临罚款、执法行动甚至停业。而马来西亚的执照体系分散于地方议会、部委和机构之间——各有各的表格、费用和更新周期。",
      "XCG精准识别您业务所需的执照，代办申请，并跟踪每次更新，确保您持续合规。",
    ],
    deliverables: [
      {
        title: "Licence needs assessment",
        titleZh: "执照需求评估",
        desc: "Map your industry, location and activities to the licences you actually need.",
        descZh: "根据您的行业、地点和活动确定实际所需的执照。",
      },
      {
        title: "Premise & signboard licences",
        titleZh: "营业场所及招牌执照",
        desc: "DBKL and local council applications for business premises and signage.",
        descZh: "向吉隆坡市政局（DBKL）及地方议会申请营业场所和招牌执照。",
      },
      {
        title: "F&B permits",
        titleZh: "餐饮许可",
        desc: "Food handling, halal-related applications and health-related permits.",
        descZh: "食品处理、清真相关申请及卫生许可。",
      },
      {
        title: "Import/export permits",
        titleZh: "进出口准证",
        desc: "Customs registration and product-specific import/export approvals.",
        descZh: "海关注册及特定产品进出口批文。",
      },
      {
        title: "Industry-specific approvals",
        titleZh: "行业特定批文",
        desc: "Sector regulators — from construction (CIDB) to education, logistics and more.",
        descZh: "行业监管机构批文——从建筑业（CIDB）到教育、物流等。",
      },
      {
        title: "Renewal management",
        titleZh: "更新管理",
        desc: "A tracked renewal calendar so no licence ever lapses.",
        descZh: "更新日历跟踪，确保执照永不过期。",
      },
    ],
    whyXcg: [
      "Experience across DBKL and Klang Valley local councils",
      "Bundled with incorporation for new businesses — licensed from day one",
      "Renewal tracking with proactive reminders",
      "Transparent, per-licence quotations",
    ],
    whyXcgZh: [
      "熟悉吉隆坡市政局及巴生谷地方议会流程",
      "可与公司注册捆绑——开业第一天即持照经营",
      "更新跟踪及主动提醒",
      "按执照透明报价",
    ],
    faqs: [
      {
        q: "How do I know what licences my business needs?",
        a: "Requirements vary by industry, location and activity. We assess your business model and premises and give you a definitive licence checklist with costs and timelines.",
        qZh: "我如何知道我的企业需要哪些执照？",
        aZh: "要求因行业、地点和活动而异。我们评估您的商业模式和场所后，提供明确的执照清单，包括费用和时间表。",
      },
      {
        q: "Do you handle renewals for existing licences?",
        a: "Absolutely. We assist with both new applications and renewals, ensuring your business stays compliant — and we track expiry dates so you never operate on a lapsed licence.",
        qZh: "你们处理现有执照的更新吗？",
        aZh: "当然。我们协助新申请及更新，确保您的业务持续合规——并跟踪到期日，让您绝不因执照过期而经营。",
      },
      {
        q: "What happens if I operate without a required licence?",
        a: "You risk fines, enforcement action and potential business closure by the local authority or regulator. Getting licensed correctly the first time is always cheaper.",
        qZh: "如果无照经营会怎样？",
        aZh: "您可能面临地方当局或监管机构的罚款、执法行动及停业风险。一次性正确办证永远是更便宜的选择。",
      },
    ],
    relatedSlugs: ["company-secretarial", "legal"],
    relatedArticles: [
      "register-sdn-bhd-malaysia",
      "sdn-bhd-vs-enterprise",
      "statutory-records-registers-ssm",
    ],
  },
  {
    slug: "business-valuation",
    stage: "grow",
    name: "Business Valuation",
    nameZh: "企业估值",
    shortDesc:
      "Independent, defensible valuations for acquisitions, divestments, fundraising and strategic planning.",
    shortDescZh: "为收购、出售、融资及战略规划提供独立、可靠的企业估值。",
    seoTitle: "Business Valuation Malaysia | M&A & Fundraising | XCG",
    metaDescription:
      "Independent business valuation in Malaysia using market comparables, asset-based & earnings methods — for M&A, fundraising & planning. Engage XCG.",
    primaryKeyword: "business valuation malaysia",
    h1: "Business Valuation Services in Malaysia",
    intro: [
      "Whether you're buying, selling, raising funds or planning succession, decisions are only as good as the valuation behind them. XCG delivers objective company valuations using internationally accepted methodologies — market comparables, asset-based valuation and earnings multiples.",
      "Our valuations are led by a chartered accountant with public-listed audit and IPO/RTO experience, so they stand up to scrutiny from banks, investors and counterparties.",
    ],
    introZh: [
      "无论是收购、出售、融资还是继任规划，决策的质量取决于背后的估值。XCG采用国际公认的方法——市场可比法、资产基础法和盈利倍数法——提供客观的公司估值。",
      "我们的估值由具备上市公司审计及IPO/RTO经验的特许会计师主导，经得起银行、投资者和交易对手的审视。",
    ],
    deliverables: [
      {
        title: "M&A valuations",
        titleZh: "并购估值",
        desc: "Buy-side and sell-side valuations for acquisitions and divestments.",
        descZh: "为收购和出售提供买方及卖方估值。",
      },
      {
        title: "Fundraising & loan support",
        titleZh: "融资及贷款支持",
        desc: "Valuations that support investor negotiations and bank financing applications.",
        descZh: "支持投资者谈判和银行融资申请的估值报告。",
      },
      {
        title: "Shareholder transactions",
        titleZh: "股东交易",
        desc: "Fair value for share buy-backs, exits, disputes and succession planning.",
        descZh: "为股份回购、退出、纠纷及继任规划提供公允价值。",
      },
      {
        title: "Restructuring valuations",
        titleZh: "重组估值",
        desc: "Group reorganisations, mergers and scheme support.",
        descZh: "集团重组、合并及方案支持。",
      },
      {
        title: "Financial modelling",
        titleZh: "财务建模",
        desc: "Forecasts and sensitivity analysis underpinning the valuation.",
        descZh: "支撑估值的财务预测及敏感性分析。",
      },
      {
        title: "Valuation reports",
        titleZh: "估值报告",
        desc: "Clear, defensible written reports with methodology and assumptions documented.",
        descZh: "方法与假设记录完整、清晰可靠的书面报告。",
      },
    ],
    whyXcg: [
      "Chartered-accountant-led, with listed-company and IPO experience",
      "Internationally accepted methodologies, transparently documented",
      "Grounded in real Malaysian SME transaction experience",
      "Coordinated tax advice on transaction structure",
    ],
    whyXcgZh: [
      "特许会计师主导，具备上市公司及IPO经验",
      "采用国际公认方法，过程透明、记录完整",
      "立足马来西亚中小企业真实交易经验",
      "同步提供交易架构的税务建议",
    ],
    faqs: [
      {
        q: "When do I need a business valuation?",
        a: "Typically when buying or selling a business, raising funds, applying for significant financing, undergoing M&A or restructuring, resolving shareholder matters, or assessing performance for strategic planning.",
        qZh: "什么时候需要企业估值？",
        aZh: "通常在买卖企业、融资、申请大额贷款、并购或重组、解决股东事务，或为战略规划评估业绩时需要。",
      },
      {
        q: "What methods do you use?",
        a: "We apply internationally accepted valuation methodologies such as market comparables, asset-based valuation and earnings multiples — selecting and cross-checking methods appropriate to your business and purpose.",
        qZh: "你们使用什么估值方法？",
        aZh: "我们采用国际公认的估值方法，如市场可比法、资产基础法和盈利倍数法——根据您的业务和目的选择并交叉验证。",
      },
      {
        q: "What information do I need to provide?",
        a: "Financial statements, business plans or forecasts, asset and liability details, and operational data. We provide a full checklist at engagement and treat everything with strict confidentiality.",
        qZh: "我需要提供什么资料？",
        aZh: "财务报表、商业计划或预测、资产负债明细及运营数据。签约时我们提供完整清单，并对所有资料严格保密。",
      },
    ],
    relatedSlugs: ["accounting", "taxation", "legal"],
    relatedArticles: [
      "striking-off-vs-winding-up",
      "sdn-bhd-vs-enterprise",
      "corporate-income-tax-malaysia",
    ],
  },
  {
    slug: "auditing",
    stage: "run",
    name: "Auditing Support",
    nameZh: "审计支持",
    shortDesc:
      "Statutory audit coordination, internal control reviews and audit-ready financials through our audit partners.",
    shortDescZh: "通过审计合作伙伴提供法定审计协调、内部控制审查及审计就绪的财务报表。",
    seoTitle: "Statutory Audit Support Malaysia | Audit-Ready Books | XCG",
    metaDescription:
      "Statutory audit coordination for Malaysian companies — audit-ready financials, internal control & compliance reviews via licensed partners. Ask XCG.",
    primaryKeyword: "statutory audit malaysia",
    h1: "Audit Support & Assurance Coordination",
    intro: [
      "Every Malaysian Sdn Bhd must have its financial statements audited annually by an approved auditor (unless it qualifies for audit exemption). A statutory audit provides independent assurance that your financial statements are true, fair and compliant with approved accounting standards.",
      "XCG prepares your books to audit-ready standard and coordinates the statutory audit through licensed audit partners — most standard audits complete within 2 to 4 weeks once documents are ready. We also arrange internal control assessments, compliance reviews and special-purpose audits.",
    ],
    introZh: [
      "每家马来西亚私人有限公司必须由核准审计师每年审计其财务报表（除非符合审计豁免条件）。法定审计为财务报表的真实、公允及合规提供独立保证。",
      "XCG将您的账目准备至审计就绪标准，并通过持牌审计合作伙伴协调法定审计——文件齐备后，大多数标准审计在2至4周内完成。我们还安排内部控制评估、合规审查及特殊目的审计。",
    ],
    deliverables: [
      {
        title: "Audit-ready financial statements",
        titleZh: "审计就绪财务报表",
        desc: "MPERS/MFRS statements with complete supporting schedules.",
        descZh: "附完整支持明细表的MPERS/MFRS报表。",
      },
      {
        title: "Statutory audit coordination",
        titleZh: "法定审计协调",
        desc: "Engagement and liaison with approved auditors from start to sign-off.",
        descZh: "从委任到签署，全程与核准审计师对接。",
      },
      {
        title: "Internal control reviews",
        titleZh: "内部控制审查",
        desc: "Assessments of controls, processes and segregation of duties.",
        descZh: "评估控制、流程及职责分离。",
      },
      {
        title: "Compliance & special audits",
        titleZh: "合规及特殊审计",
        desc: "Special-purpose audits and compliance reviews as required.",
        descZh: "按需提供特殊目的审计及合规审查。",
      },
      {
        title: "Audit query resolution",
        titleZh: "审计问询处理",
        desc: "We answer auditor queries directly, saving your team's time.",
        descZh: "我们直接回复审计师问询，节省您团队的时间。",
      },
      {
        title: "Audit exemption assessment",
        titleZh: "审计豁免评估",
        desc: "Check whether your company qualifies for audit exemption under SSM criteria.",
        descZh: "评估您的公司是否符合SSM审计豁免标准。",
      },
    ],
    whyXcg: [
      "Led by a chartered accountant who has directed public-listed audits",
      "Books prepared to audit standard — fewer queries, faster sign-off",
      "Typical audits complete in 2–4 weeks once documents are provided",
      "One point of contact across accounting, audit and tax",
    ],
    whyXcgZh: [
      "由曾主导上市公司审计的特许会计师领导",
      "账目按审计标准准备——问询更少、签署更快",
      "文件齐备后，标准审计通常2至4周完成",
      "会计、审计和税务事务单一联络窗口",
    ],
    faqs: [
      {
        q: "What documents are needed for an audit?",
        a: "Commonly: financial statements, general ledger, bank statements, invoices, contracts and payroll records. We prepare and organise these for you as part of our accounting service.",
        qZh: "审计需要哪些文件？",
        aZh: "通常包括：财务报表、总账、银行对账单、发票、合同及薪资记录。作为会计服务的一部分，我们为您准备和整理这些文件。",
      },
      {
        q: "How long does an audit take?",
        a: "Most standard audits take 2 to 4 weeks once all necessary documents are provided. Well-prepared books are the single biggest factor in a fast audit.",
        qZh: "审计需要多长时间？",
        aZh: "文件齐备后，大多数标准审计需要2至4周。账目准备充分是快速完成审计的最大因素。",
      },
      {
        q: "Is an auditor the same as an accountant?",
        a: "No. Accountants maintain and report your financial records on an ongoing basis; auditors independently examine those records, typically annually, to provide assurance. Independence rules mean they must be separate.",
        qZh: "审计师和会计师一样吗？",
        aZh: "不一样。会计师持续维护和报告您的财务记录；审计师则独立审查这些记录（通常每年一次）以提供保证。独立性规则要求两者必须分离。",
      },
    ],
    relatedSlugs: ["accounting", "taxation", "company-secretarial"],
    relatedArticles: [
      "tax-audits-investigations-malaysia",
      "annual-return-statutory-filings",
      "statutory-records-registers-ssm",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const stages = {
  start: {
    label: "Start a Business",
    labelZh: "创办企业",
    desc: "Set up your business with full compliance and confidence.",
    descZh: "以全面合规和十足信心创办您的企业。",
  },
  run: {
    label: "Run a Business",
    labelZh: "经营企业",
    desc: "Manage finances, taxes and people with clarity and control.",
    descZh: "清晰掌控财务、税务与人事。",
  },
  grow: {
    label: "Grow a Business",
    labelZh: "发展企业",
    desc: "Scale smarter with expert HR, legal and licensing support.",
    descZh: "凭借专业人力资源、法律和执照支持，更智慧地扩张。",
  },
} as const;
