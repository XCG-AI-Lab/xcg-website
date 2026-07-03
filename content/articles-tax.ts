import type { Article } from "./types";

export const taxArticles: Article[] = [
  {
    slug: "e-invoicing-malaysia-sme-guide",
    cluster: "tax",
    seoTitle: "E-Invoicing Malaysia 2026: Deadlines, Phases & Compliance | XCG",
    metaDescription:
      "Malaysia's LHDN e-invoicing mandate explained — phases, turnover thresholds, exemptions and how XCG helps SMEs go live on MyInvois. Get expert help.",
    keywords: ["e-invoicing malaysia", "LHDN e-invoice", "MyInvois"],
    h1: "E-Invoicing in Malaysia: The Complete SME Guide (2026)",
    excerpt:
      "Every phase, threshold and exemption of Malaysia's e-invoicing mandate — and a practical path to going live on MyInvois.",
    datePublished: "2026-06-01",
    dateModified: "2026-07-03",
    serviceSlug: "e-invoicing",
    readMins: 6,
    sections: [
      {
        h2: "What is an e-invoice?",
        paragraphs: [
          "An e-invoice is a digitally structured transaction record validated in near real time by LHDN (the Inland Revenue Board) through the MyInvois system. It covers B2B, B2C and B2G transactions — sales invoices, credit notes, debit notes and refunds — in a structured XML or JSON format, not a PDF.",
          "Once validated, each e-invoice receives a unique identifier and QR code from LHDN, giving both supplier and buyer a tamper-evident record for tax purposes.",
        ],
      },
      {
        h2: "Implementation timeline by turnover",
        paragraphs: [
          "LHDN is rolling out the mandate in phases based on annual turnover or revenue:",
        ],
        table: {
          headers: ["Annual turnover / revenue", "Mandatory from"],
          rows: [
            ["More than RM100 million", "1 August 2024"],
            ["More than RM25m up to RM100m", "1 January 2025"],
            ["More than RM5m up to RM25m", "1 July 2025"],
            ["Up to RM5 million", "1 January 2026"],
            ["Less than RM1 million", "Exempted (timeline updated 7 Dec 2025)"],
          ],
        },
      },
      {
        h2: "How the process works",
        paragraphs: [
          "The supplier submits the invoice to MyInvois (via the free portal or API). LHDN validates it and returns a unique ID and QR code. The validated e-invoice is then shared with the buyer. A short window allows the buyer to reject, or the supplier to cancel, before the invoice becomes final.",
          "For certain transactions — such as sales to end consumers who don't request an e-invoice — suppliers may issue consolidated e-invoices monthly, subject to LHDN's rules on which industries must always issue individual e-invoices.",
        ],
      },
      {
        h2: "How XCG helps you go live",
        paragraphs: [
          "XCG delivers end-to-end implementation: readiness assessment, choice of submission method (MyInvois Portal, API or middleware), system integration, master-data clean-up (TINs, MSIC codes, buyer details), team training and monthly post-go-live support.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is my small business exempt from e-invoicing?",
        a: "Businesses with annual turnover below RM1 million are currently exempt under LHDN's updated timeline (7 December 2025). Thresholds can change — always check the current LHDN guidance or ask XCG to confirm your position.",
      },
      {
        q: "What are the penalties for non-compliance?",
        a: "Failure to issue e-invoices where mandated is an offence under the Income Tax Act and can attract fines and, in serious cases, prosecution.",
      },
      {
        q: "Can I use the free MyInvois Portal?",
        a: "Yes — the portal is free and suits low transaction volumes. High-volume businesses typically need API or middleware integration with their accounting, ERP or POS systems.",
      },
    ],
    related: ["myinvois-portal-vs-api", "sst-explained-sales-tax-vs-service-tax", "corporate-income-tax-malaysia"],
  },
  {
    slug: "sst-explained-sales-tax-vs-service-tax",
    cluster: "tax",
    seoTitle: "SST Malaysia 2026: Sales & Service Tax Rates & Scope | XCG",
    metaDescription:
      "Malaysia's SST made clear — current sales tax (5%/10%) and service tax (6%/8%) rates, the 2025 scope expansion, and who must register. Ask XCG.",
    keywords: ["sst malaysia", "service tax", "sales tax"],
    h1: "SST Explained: Sales Tax vs Service Tax (2025 Expansion Update)",
    excerpt:
      "The two halves of Malaysia's SST, current rates, and what the 1 July 2025 scope expansion means for your business.",
    datePublished: "2026-06-03",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 5,
    sections: [
      {
        h2: "The two components of SST",
        paragraphs: [
          "SST has two parts, both administered by the Royal Malaysian Customs Department. Sales tax is a single-stage ad valorem tax on taxable goods manufactured locally or imported, charged at 5% or 10% depending on the class of goods.",
          "Service tax applies to prescribed taxable services, generally at 8% — but at 6% for food & beverage, construction, telecommunication, private healthcare and education services.",
        ],
      },
      {
        h2: "What changed in the 2025 expansion",
        paragraphs: [
          "Effective 1 July 2025, the sales tax scope widened — certain imported premium fish, specific fruits and construction materials became taxable at 5%/10% — and the service tax net was broadened to cover more service categories.",
          "Businesses newly in scope must check the registration threshold for their category, register on MySST, and update their invoicing and pricing. Contracts signed before the expansion may need transitional treatment.",
        ],
      },
      {
        h2: "Registration and filing",
        paragraphs: [
          "Registration is triggered when your taxable turnover exceeds the prescribed threshold for your category. Registered businesses file returns for each bi-monthly taxable period and pay the tax due by the statutory deadline.",
          "XCG advises on applicability, handles MySST registration and manages your periodic returns — integrated with your accounting and e-invoicing so the numbers always reconcile.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between sales tax and service tax?",
        a: "Sales tax applies to taxable goods (manufactured locally or imported) at 5% or 10%. Service tax applies to prescribed taxable services at 6% or 8%. Some businesses are caught by both.",
      },
      {
        q: "Did SST change in 2025?",
        a: "Yes. From 1 July 2025 the sales tax scope expanded to more goods and the service tax scope was broadened. If you weren't registered before, it's worth a fresh assessment.",
      },
      {
        q: "How often do I file SST returns?",
        a: "Returns are filed for each bi-monthly taxable period — six returns a year, due by the statutory deadline after each period ends.",
      },
    ],
    related: ["sales-tax-vs-service-tax-which-applies", "e-invoicing-malaysia-sme-guide", "malaysia-tax-deadlines-calendar"],
  },
  {
    slug: "corporate-income-tax-malaysia",
    cluster: "tax",
    seoTitle: "Corporate Tax Malaysia 2026: SME Rates, CP204 & Deadlines | XCG",
    metaDescription:
      "Malaysian corporate tax for SMEs — YA2026 rates (15%/17%/24%), CP204 estimates and Form C deadlines. Stay compliant with LHDN via XCG.",
    keywords: ["corporate tax malaysia", "CP204", "SME tax rate"],
    h1: "Corporate Income Tax in Malaysia: Rates, CP204 and Deadlines",
    excerpt:
      "YA2026 corporate tax rates, the SME preferential bands, CP204 estimates and the Form C filing deadline — in one guide.",
    datePublished: "2026-06-05",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 6,
    sections: [
      {
        h2: "Who pays corporate income tax",
        paragraphs: [
          "Corporate income tax applies to income accruing in or derived from Malaysia. Resident companies are also taxed on foreign-sourced income received in Malaysia, subject to available exemptions.",
        ],
      },
      {
        h2: "YA2026 rates",
        paragraphs: [
          "The standard rate is 24%. A qualifying resident SME — paid-up capital of RM2.5 million or less, gross business income of RM50 million or less, and meeting the control/ownership conditions — enjoys preferential bands:",
        ],
        table: {
          headers: ["Chargeable income", "Rate"],
          rows: [
            ["First RM150,000", "15%"],
            ["Next RM450,000 (RM150,001–RM600,000)", "17%"],
            ["Above RM600,000", "24%"],
          ],
        },
      },
      {
        h2: "CP204 estimates and Form C",
        paragraphs: [
          "Companies must file Form CP204 (estimate of tax payable) before the basis period begins and pay monthly instalments through the year. Underestimating beyond the permitted margin attracts penalties, so estimates should be revised at the statutory windows if business conditions change.",
          "The annual return, Form C, must be lodged within seven months of the financial year-end.",
        ],
      },
      {
        h2: "Pillar Two: the 15% global minimum tax",
        paragraphs: [
          "Malaysia adopted the OECD Pillar Two qualified domestic minimum top-up tax (QDMTT) and multinational top-up tax (MTT) at 15% for financial years starting from 1 January 2025. This is relevant to members of large multinational groups (consolidated revenue of EUR750 million or more) — most Malaysian SMEs are unaffected.",
        ],
      },
    ],
    faqs: [
      {
        q: "When is my company's tax return due?",
        a: "Form C is due within seven months of your financial year-end.",
      },
      {
        q: "What is CP204?",
        a: "CP204 is your company's estimate of tax payable, filed before the basis period begins and paid via monthly instalments. It can be revised at the statutory revision windows.",
      },
      {
        q: "Do SMEs really get a lower rate?",
        a: "Yes — qualifying resident SMEs pay 15% on the first RM150,000 and 17% on the next RM450,000 of chargeable income, with 24% only above RM600,000.",
      },
    ],
    related: ["tax-planning-malaysian-smes", "capital-allowances-malaysia", "malaysia-tax-deadlines-calendar"],
  },
  {
    slug: "personal-income-tax-malaysia",
    cluster: "tax",
    seoTitle: "Personal Income Tax Malaysia 2026: Rates & Deadlines | XCG",
    metaDescription:
      "Who must file personal tax in Malaysia, the progressive rate bands, e-Filing deadlines and common reliefs. Practical guidance from XCG.",
    keywords: ["personal income tax malaysia", "e-filing", "tax relief"],
    h1: "Personal Income Tax in Malaysia: Who Files and How",
    excerpt:
      "Progressive rates up to 30%, BE vs B forms, e-Filing deadlines and the reliefs that actually reduce your bill.",
    datePublished: "2026-06-08",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 5,
    sections: [
      {
        h2: "Rates for residents and non-residents",
        paragraphs: [
          "Malaysian tax residents are taxed on a progressive scale from 0% up to 30%, with the top band applying to chargeable income above RM2,000,000. Non-residents pay a flat 30% on employment and most other Malaysian-sourced income.",
        ],
      },
      {
        h2: "Which form, and when",
        paragraphs: [
          "Employees report on the BE form; individuals with business income use the B form. Both are filed through LHDN's e-Filing system. Deadlines are typically 30 April for non-business income and 30 June for business income — verify each year, as grace periods for e-Filing can apply.",
        ],
      },
      {
        h2: "Reliefs reduce your chargeable income",
        paragraphs: [
          "Reliefs for EPF contributions, life and medical insurance, education fees, lifestyle spending, medical expenses and dependents all reduce chargeable income. Keep receipts — LHDN can request proof for seven years.",
          "XCG assists with registration, relief optimisation and accurate e-Filing, and coordinates director and company tax planning so remuneration is structured efficiently.",
        ],
      },
    ],
    faqs: [
      {
        q: "Must I file if PCB is already deducted from my salary?",
        a: "Often yes. PCB is an estimate deducted monthly; a return reconciles your actual position and may produce a refund. Some employees qualify to treat PCB as final tax, but conditions apply.",
      },
      {
        q: "What is the filing deadline?",
        a: "Typically 30 April for non-business income (BE form) and 30 June for business income (B form). Confirm the current year's dates on the LHDN portal.",
      },
      {
        q: "What rate do non-residents pay?",
        a: "A flat 30% on most Malaysian-sourced income, with no personal reliefs.",
      },
    ],
    related: ["tax-planning-malaysian-smes", "epf-socso-eis-pcb-employer-guide", "malaysia-tax-deadlines-calendar"],
  },
  {
    slug: "tax-planning-malaysian-smes",
    cluster: "tax",
    seoTitle: "Tax Planning for SMEs in Malaysia: Legal Strategies | XCG",
    metaDescription:
      "Practical, lawful tax-planning strategies for Malaysian SMEs — capital allowances, incentives, timing and structure. Plan ahead with XCG.",
    keywords: ["tax planning malaysia", "sme tax savings"],
    h1: "Tax Planning for Malaysian SMEs: Legal Ways to Reduce Your Bill",
    excerpt:
      "The lawful levers — allowances, incentives, timing and structure — that reduce an SME's tax bill without crossing any lines.",
    datePublished: "2026-06-10",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 5,
    sections: [
      {
        h2: "Planning is legal; evasion is not",
        paragraphs: [
          "Tax planning means arranging your affairs lawfully to minimise tax — claiming what the law allows, when it allows it. Evasion (hiding income, inflating expenses) is a criminal offence. The line is bright, and good planning never goes near it.",
        ],
      },
      {
        h2: "The levers available to SMEs",
        list: [
          "Capital allowances on qualifying plant, machinery and equipment — the tax system's replacement for depreciation",
          "Timing of income recognition and deductible expenses around year-end",
          "Tax incentives and reinvestment allowances for qualifying activities and sectors",
          "Efficient remuneration structuring for directors and key staff",
          "Keeping the company within SME thresholds for the preferential 15%/17% rates where commercially sensible",
        ],
      },
      {
        h2: "The foundation: year-round bookkeeping",
        paragraphs: [
          "None of these levers work without accurate, current books. Planning done in the last week of the financial year is triage; planning done quarterly is strategy. XCG builds a tax plan aligned to your business goals and supports you through any subsequent LHDN queries or audits.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is tax planning legal?",
        a: "Yes — arranging your affairs to lawfully minimise tax is legitimate. Tax evasion, by contrast, is a criminal offence.",
      },
      {
        q: "When should I start planning?",
        a: "Before year-end, not after. Most levers — asset purchases, expense timing, remuneration structure — only work if actioned within the basis period.",
      },
      {
        q: "Can XCG help during a tax audit?",
        a: "Yes. We represent clients throughout LHDN audits and investigations, including appeals.",
      },
    ],
    related: ["capital-allowances-malaysia", "corporate-income-tax-malaysia", "tax-audits-investigations-malaysia"],
  },
  {
    slug: "withholding-tax-malaysia",
    cluster: "tax",
    seoTitle: "Withholding Tax Malaysia: Rates & Deadlines | XCG",
    metaDescription:
      "A clear guide to Malaysian withholding tax — what payments to non-residents are caught, the rates, and remittance deadlines. XCG keeps you compliant.",
    keywords: ["withholding tax malaysia"],
    h1: "Withholding Tax in Malaysia: When You Must Deduct and Remit",
    excerpt:
      "Paying a non-resident for royalties, interest or services? You may need to withhold tax — here's when, how much, and by when.",
    datePublished: "2026-06-12",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 4,
    sections: [
      {
        h2: "What withholding tax is",
        paragraphs: [
          "Withholding tax (WHT) is tax that a Malaysian payer must deduct from certain payments to non-residents — such as royalties, interest, technical and service fees, and contract payments — and remit to LHDN, usually within one month of paying or crediting the non-resident.",
        ],
      },
      {
        h2: "Rates and treaty relief",
        paragraphs: [
          "Rates vary by payment type under the Income Tax Act. Where Malaysia has a double taxation agreement (DTA) with the recipient's country, the treaty may reduce the rate — typically on royalties, interest and technical fees — provided you hold the right documentation, including the recipient's certificate of residence.",
        ],
      },
      {
        h2: "The cost of getting it wrong",
        paragraphs: [
          "Failure to withhold and remit doesn't just attract a penalty — the underlying expense can be disallowed as a tax deduction until the WHT is settled, inflating your own tax bill. XCG identifies WHT obligations in your payment flows, applies the correct treaty rates and handles remittance on time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who is responsible for deducting WHT?",
        a: "The Malaysian payer. The obligation — and the penalty exposure — sits with you, not the non-resident recipient.",
      },
      {
        q: "What happens if I don't remit?",
        a: "You face a penalty on the unpaid amount, and the related expense can be disallowed as a deduction until the WHT and penalty are paid.",
      },
      {
        q: "Do tax treaties help?",
        a: "Often, yes — a DTA can reduce the applicable rate. You'll need the recipient's certificate of residence and to meet the treaty's conditions.",
      },
    ],
    related: ["double-taxation-agreements-malaysia", "corporate-income-tax-malaysia", "tax-planning-malaysian-smes"],
  },
  {
    slug: "sales-tax-vs-service-tax-which-applies",
    cluster: "tax",
    seoTitle: "Sales Tax or Service Tax? Which SST Applies to You | XCG",
    metaDescription:
      "Confused by SST? Learn whether your business charges sales tax or service tax, at what rate, and when to register. XCG assesses your position.",
    keywords: ["sales tax service tax difference", "sst registration"],
    h1: "Sales Tax vs Service Tax: Which One Applies to Your Business?",
    excerpt:
      "A quick decision framework for working out which side of SST — or both — your business falls on after the 2025 expansion.",
    datePublished: "2026-06-15",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 4,
    sections: [
      {
        h2: "The quick test",
        paragraphs: [
          "If you manufacture or import taxable goods, sales tax (5%/10%) is likely relevant. If you provide prescribed taxable services, service tax (6%/8%) applies. Trading businesses that neither manufacture nor provide prescribed services often sit outside SST entirely — but the 2025 scope expansion moved the boundaries, so yesterday's answer may be wrong today.",
        ],
      },
      {
        h2: "Some businesses face both",
        paragraphs: [
          "A manufacturer that also provides installation or maintenance services, or a café that manufactures packaged goods, can be caught by both regimes — each with its own registration, rates and returns.",
        ],
      },
      {
        h2: "Registration thresholds",
        paragraphs: [
          "Registration is triggered when taxable turnover exceeds the prescribed threshold for your category, which varies — verify your category on MySST. Once registered, you must charge, collect and remit the tax and file bi-monthly returns.",
          "XCG maps your activities to the correct tax treatment, manages registration and prepares your returns.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can both sales tax and service tax apply to one business?",
        a: "Yes — businesses with both manufacturing and prescribed service activities can be registered for both.",
      },
      {
        q: "What is the registration threshold?",
        a: "It varies by category. Check your specific category on MySST, or ask XCG to assess your position.",
      },
      {
        q: "What changed in 2025?",
        a: "The sales tax scope expanded to more goods and the service tax scope was broadened from 1 July 2025 — businesses previously out of scope should reassess.",
      },
    ],
    related: ["sst-explained-sales-tax-vs-service-tax", "e-invoicing-malaysia-sme-guide", "malaysia-tax-deadlines-calendar"],
  },
  {
    slug: "myinvois-portal-vs-api",
    cluster: "tax",
    seoTitle: "MyInvois Portal vs API: Best E-Invoicing Method | XCG",
    metaDescription:
      "Free MyInvois Portal or full API integration? Compare Malaysia's e-invoicing methods by volume, cost and complexity. XCG helps you choose and implement.",
    keywords: ["myinvois portal", "e-invoice api integration"],
    h1: "The MyInvois Portal vs API Integration: Choosing Your E-Invoicing Method",
    excerpt:
      "Portal, API or middleware? How to pick the right MyInvois submission route for your volume, systems and team.",
    datePublished: "2026-06-17",
    dateModified: "2026-07-03",
    serviceSlug: "e-invoicing",
    readMins: 4,
    sections: [
      {
        h2: "Two official routes",
        paragraphs: [
          "LHDN offers two submission routes. The MyInvois Portal is a free web interface — ideal for low transaction volumes and manual entry. API or middleware integration connects your accounting, ERP or POS system to MyInvois for automated, high-volume submission.",
        ],
      },
      {
        h2: "How to choose",
        list: [
          "Under ~20 invoices a month, simple products: the free Portal is usually enough",
          "Hundreds of invoices, or invoices generated by your billing system: API or middleware — manual re-keying will not survive month-end",
          "Retail with POS: consider LHDN's MyInvois e-POS option built for point-of-sale environments",
          "Mixed models (e.g. B2B via system + occasional manual invoices): a hybrid setup is common",
        ],
      },
      {
        h2: "What implementation involves",
        paragraphs: [
          "Whichever route you choose, the hard work is the same: clean master data (TINs, MSIC codes, item classifications), mapped invoice fields, staff who know how to handle validations, rejections and consolidated invoices. XCG assesses your workflow, implements the right method and trains your team.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the MyInvois Portal really free?",
        a: "Yes — LHDN provides the portal at no cost. Your costs are the manual effort of entry and the risk of keying errors at volume.",
      },
      {
        q: "When do I need API integration?",
        a: "When invoice volumes are high or invoices originate in your billing/ERP/POS system. Automation removes re-keying and validation errors.",
      },
      {
        q: "Can XCG integrate my existing software?",
        a: "Yes — we implement API and middleware integrations for major accounting, ERP and POS platforms, including MyInvois e-POS for retail.",
      },
    ],
    related: ["e-invoicing-malaysia-sme-guide", "sst-explained-sales-tax-vs-service-tax", "corporate-income-tax-malaysia"],
  },
  {
    slug: "tax-audits-investigations-malaysia",
    cluster: "tax",
    seoTitle: "Tax Audit Malaysia: What to Expect & How to Prepare | XCG",
    metaDescription:
      "What triggers an LHDN tax audit, how the process works, and how to prepare your records. XCG supports you through audits and appeals.",
    keywords: ["tax audit malaysia", "lhdn investigation"],
    h1: "Tax Audits and Investigations in Malaysia: How to Be Ready",
    excerpt:
      "What triggers an LHDN audit, the difference between desk and field audits, and the record-keeping that keeps you safe.",
    datePublished: "2026-06-19",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 5,
    sections: [
      {
        h2: "Desk audits, field audits and investigations",
        paragraphs: [
          "LHDN conducts desk audits (correspondence-based reviews) and field audits (visits to your premises) to verify that returns are accurate. Investigations are the serious end of the spectrum, where evasion is suspected. Triggers include inconsistencies between returns and financial statements, unusually low margins for your industry, related-party transactions — and plain random selection.",
        ],
      },
      {
        h2: "Being ready is a records exercise",
        paragraphs: [
          "Readiness means keeping complete, well-organised records for the statutory retention period (generally seven years): books of account, invoices, contracts, bank statements and supporting schedules that reconcile cleanly to your filed returns.",
          "Respond to LHDN queries promptly and accurately — silence and improvisation both make things worse. Never guess at answers; reconcile first.",
        ],
      },
      {
        h2: "How XCG supports you",
        paragraphs: [
          "We represent clients during audits and investigations, manage correspondence with LHDN, prepare reconciliations and documentation, negotiate where appropriate and handle appeals when findings are wrong. If your books are behind, we fix that first — before LHDN asks.",
        ],
      },
    ],
    faqs: [
      {
        q: "How far back can LHDN audit?",
        a: "Generally within the statutory time limits — commonly five years of assessment, but with no time limit where fraud or wilful default is involved. Keep records for at least seven years.",
      },
      {
        q: "What records do I need to keep?",
        a: "Books of account, invoices, contracts, bank records and supporting schedules — organised so they reconcile to your filed returns.",
      },
      {
        q: "Can XCG represent me before LHDN?",
        a: "Yes — we manage the audit end to end, from document preparation through correspondence and appeals.",
      },
    ],
    related: ["tax-planning-malaysian-smes", "corporate-income-tax-malaysia", "statutory-records-registers-ssm"],
  },
  {
    slug: "capital-allowances-malaysia",
    cluster: "tax",
    seoTitle: "Capital Allowances Malaysia: Tax Relief on Assets | XCG",
    metaDescription:
      "How capital allowances let Malaysian businesses claim tax relief on qualifying assets — initial and annual allowances explained. Maximise claims with XCG.",
    keywords: ["capital allowance malaysia"],
    h1: "Understanding Capital Allowances in Malaysia",
    excerpt:
      "Depreciation isn't deductible in Malaysia — capital allowances are the replacement. Here's how they work and how to claim them.",
    datePublished: "2026-06-22",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 4,
    sections: [
      {
        h2: "Why depreciation doesn't count",
        paragraphs: [
          "Accounting depreciation is not tax-deductible in Malaysia — it's added back in the tax computation. In its place, the tax system grants capital allowances on qualifying capital expenditure: plant, machinery, equipment, computers, motor vehicles (with restrictions) and certain other assets.",
        ],
      },
      {
        h2: "Initial and annual allowances",
        paragraphs: [
          "Capital allowances typically comprise an initial allowance in the year the asset is acquired and brought into use, plus annual allowances over the asset's life, at rates set by the tax rules for each asset class. Small-value assets may qualify for accelerated treatment, and specific incentives (such as for automation or ICT equipment) periodically enhance the rates.",
        ],
      },
      {
        h2: "Getting the claim right",
        paragraphs: [
          "Correctly identifying qualifying expenditure — including installation and incidental costs — can significantly reduce chargeable income. Disposals trigger balancing allowances or charges, so the fixed-asset register must be maintained accurately.",
          "XCG prepares capital allowance computations from your fixed-asset register as part of tax filing, and flags planning opportunities before year-end purchases.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why can't I just claim depreciation?",
        a: "Depreciation is added back in the tax computation; capital allowances replace it as the tax-deductible equivalent.",
      },
      {
        q: "What assets qualify?",
        a: "Qualifying plant, machinery, equipment, computers and certain other business assets. Rules and rates vary by class — motor vehicles carry restrictions.",
      },
      {
        q: "Who prepares the computation?",
        a: "XCG prepares it from your fixed-asset register as part of your annual tax filing.",
      },
    ],
    related: ["corporate-income-tax-malaysia", "tax-planning-malaysian-smes", "annual-return-statutory-filings"],
  },
  {
    slug: "malaysia-tax-deadlines-calendar",
    cluster: "tax",
    seoTitle: "Malaysia Tax Deadlines 2026: CP204, Form C & SST | XCG",
    metaDescription:
      "A single calendar of Malaysia's key tax deadlines — CP204, Form C, SST returns, personal e-Filing and EA forms. Never miss a date with XCG.",
    keywords: ["malaysia tax deadlines", "tax calendar"],
    h1: "Malaysia Tax Deadlines: An Annual Compliance Calendar",
    excerpt:
      "CP204, Form C, SST, personal e-Filing, Form E and EA forms — every recurring deadline in one place.",
    datePublished: "2026-06-24",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 4,
    sections: [
      {
        h2: "The recurring deadlines",
        table: {
          headers: ["Obligation", "Deadline"],
          rows: [
            ["CP204 (estimate of tax payable)", "Before the basis period begins; instalments monthly"],
            ["Form C (company return)", "Within 7 months of financial year-end"],
            ["SST returns (SST-02)", "After each bi-monthly taxable period"],
            ["Personal e-Filing (BE form)", "Around 30 April"],
            ["Personal e-Filing (B form, business income)", "Around 30 June"],
            ["Form EA to employees", "By end of February"],
            ["Form E to LHDN", "Around 31 March (e-Filing grace periods may apply)"],
            ["EPF / SOCSO / EIS / PCB remittance", "By the 15th of the following month"],
          ],
        },
        paragraphs: [
          "Exact dates depend on your financial year-end and filing category, and e-Filing grace periods change — always confirm against the official portals for the current year.",
        ],
      },
      {
        h2: "Deadlines compound",
        paragraphs: [
          "A missed CP204 revision cascades into instalment penalties; late audited accounts delay Form C; late payroll remittances attract separate penalties from three different agencies. XCG maintains a per-client compliance calendar with reminders, so every deadline is tracked in one place.",
        ],
      },
    ],
    faqs: [
      {
        q: "When is Form C due?",
        a: "Within seven months of your company's financial year-end.",
      },
      {
        q: "How often is SST filed?",
        a: "For each bi-monthly taxable period — six times a year.",
      },
      {
        q: "Does XCG send deadline reminders?",
        a: "Yes — every client gets a personalised compliance calendar with proactive reminders.",
      },
    ],
    related: ["corporate-income-tax-malaysia", "payroll-deadlines-employer-checklist", "annual-return-statutory-filings"],
  },
  {
    slug: "double-taxation-agreements-malaysia",
    cluster: "tax",
    seoTitle: "Double Tax Agreements Malaysia: Cross-Border Relief | XCG",
    metaDescription:
      "How Malaysia's double taxation agreements reduce withholding tax and prevent being taxed twice on cross-border income. XCG advises on treaty relief.",
    keywords: ["double taxation agreement malaysia", "treaty relief"],
    h1: "Double Taxation Agreements: How Malaysian Businesses Benefit",
    excerpt:
      "How DTAs stop the same income being taxed twice — and cut the withholding tax on your cross-border payments.",
    datePublished: "2026-06-26",
    dateModified: "2026-07-03",
    serviceSlug: "taxation",
    readMins: 4,
    sections: [
      {
        h2: "What a DTA does",
        paragraphs: [
          "Malaysia has an extensive network of Double Taxation Agreements that allocate taxing rights between countries, so the same income isn't fully taxed twice. For businesses, the most tangible benefit is usually reduced withholding tax on cross-border royalties, interest and technical or service fees.",
        ],
      },
      {
        h2: "Claiming treaty benefits",
        paragraphs: [
          "Treaty relief isn't automatic. You generally need the recipient's certificate of residence from their home tax authority, and the payment must genuinely fall within the treaty article you're relying on. Documentation must be in place before you apply the reduced rate — not reconstructed afterwards.",
        ],
      },
      {
        h2: "Common scenarios for Malaysian SMEs",
        list: [
          "Paying software licence fees or royalties to a foreign vendor — treaty may cut WHT",
          "Engaging foreign consultants or technical specialists — service fee articles may apply",
          "Receiving income from abroad — foreign tax credits may offset Malaysian tax",
          "Expanding overseas — permanent establishment rules determine where profits are taxed",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a DTA?",
        a: "A treaty between two countries that allocates taxing rights and prevents the same income from being taxed twice in full.",
      },
      {
        q: "How do I claim treaty relief?",
        a: "Hold the recipient's certificate of residence, confirm the payment falls within the relevant treaty article, and apply the treaty rate when withholding. XCG handles the documentation.",
      },
      {
        q: "Can XCG advise on cross-border payments?",
        a: "Yes — we identify WHT obligations, apply the correct treaty rates and manage remittance and documentation.",
      },
    ],
    related: ["withholding-tax-malaysia", "corporate-income-tax-malaysia", "hiring-foreign-employees-malaysia"],
  },
];
