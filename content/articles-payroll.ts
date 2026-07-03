import type { Article } from "./types";

export const payrollArticles: Article[] = [
  {
    slug: "epf-socso-eis-pcb-employer-guide",
    cluster: "payroll-hr",
    seoTitle: "EPF, SOCSO, EIS & PCB: Employer Guide 2026 | XCG",
    metaDescription:
      "A plain-English guide to Malaysia's statutory payroll deductions — EPF, SOCSO, EIS and PCB — with 2026 rates, employer duties and deadlines. Outsource to XCG.",
    keywords: ["epf socso eis pcb", "payroll malaysia", "statutory contributions"],
    h1: "EPF, SOCSO, EIS and PCB: The Employer's Statutory Payroll Guide",
    excerpt:
      "The four statutory items every Malaysian employer handles each pay cycle — rates, deadlines and the penalties for missing them.",
    datePublished: "2026-06-02",
    dateModified: "2026-07-03",
    serviceSlug: "payroll",
    readMins: 6,
    sections: [
      {
        h2: "The four statutory items",
        paragraphs: [
          "Every pay cycle, Malaysian employers handle four statutory obligations: EPF (retirement savings, administered by KWSP), SOCSO (social security, PERKESO), EIS (employment insurance, PERKESO) and PCB/MTD (the employee's monthly income tax deduction, remitted to LHDN).",
        ],
      },
      {
        h2: "EPF rates (employees under 60)",
        table: {
          headers: ["Monthly wages", "Employer", "Employee"],
          rows: [
            ["RM5,000 and below", "13%", "11%"],
            ["Above RM5,000", "12%", "11%"],
          ],
        },
        paragraphs: [
          "SOCSO and EIS are contributed by both employer and employee on a wage-band basis per PERKESO's contribution schedules. PCB is computed from LHDN's schedules or approved payroll software, reflecting the employee's category and reliefs.",
        ],
      },
      {
        h2: "The deadline that matters: the 15th",
        paragraphs: [
          "EPF, SOCSO, EIS and PCB payments are generally due by the 15th of the following month. Late payment attracts interest and penalties from three different agencies — each with its own enforcement. Employers must also register new employees with each body within the prescribed windows.",
        ],
      },
      {
        h2: "What XCG handles",
        paragraphs: [
          "XCG runs full payroll — salary computation, statutory contributions, remittances, payslips and year-end EA forms — for local and foreign staff, with a monthly payroll calendar so the 15th never arrives unnoticed.",
        ],
      },
    ],
    faqs: [
      {
        q: "When are contributions due?",
        a: "Generally by the 15th of the following month, for EPF, SOCSO, EIS and PCB alike.",
      },
      {
        q: "What is the employer's EPF rate?",
        a: "13% for monthly wages of RM5,000 and below, 12% for wages above RM5,000 (employees under 60). Employees contribute 11%.",
      },
      {
        q: "Do foreign workers contribute?",
        a: "Treatment differs by pass type — SOCSO coverage for foreign workers is mandatory in most cases, while EPF rules differ. Check the current KWSP/PERKESO position or ask XCG.",
      },
    ],
    related: ["ea-forms-year-end-payroll", "payroll-deadlines-employer-checklist", "socso-eis-employee-protection"],
  },
  {
    slug: "ea-forms-year-end-payroll",
    cluster: "payroll-hr",
    seoTitle: "EA Form Malaysia: What Employers Must Prepare | XCG",
    metaDescription:
      "Understand Form EA and Form E, when they're due, and your year-end payroll duties as a Malaysian employer. XCG prepares them accurately for your team.",
    keywords: ["ea form malaysia", "form e", "year-end payroll"],
    h1: "Preparing EA Forms and Year-End Payroll Compliance",
    excerpt:
      "Form EA by end-February, Form E to LHDN — what goes in them, what goes wrong, and how to close the payroll year cleanly.",
    datePublished: "2026-06-05",
    dateModified: "2026-07-03",
    serviceSlug: "payroll",
    readMins: 4,
    sections: [
      {
        h2: "EA vs E: two forms, two audiences",
        paragraphs: [
          "Form EA is the annual statement of remuneration an employer gives each employee — salary, bonuses, benefits-in-kind, and statutory deductions — which employees need to file their personal tax. Form E is the employer's own annual declaration to LHDN, summarising all employees and remuneration paid.",
          "Form EA must be issued to employees by the end of February; Form E is due to LHDN around 31 March (with e-Filing grace periods that change year to year).",
        ],
      },
      {
        h2: "Where employers go wrong",
        list: [
          "Missing benefits-in-kind — company cars, accommodation, phone plans",
          "Mismatches between EA totals, monthly PCB remitted and the payroll ledger",
          "Forgetting employees who resigned mid-year — they still get an EA",
          "Treating director remuneration inconsistently between payroll and accounts",
        ],
      },
      {
        h2: "A clean year-end",
        paragraphs: [
          "Accurate EA forms start with reconciled monthly payroll. XCG prepares EA forms for all employees, reconciles the full year's payroll against remittances, and submits Form E — so your employees file their taxes without queries landing back on you.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between Form EA and Form E?",
        a: "Form EA goes to each employee (their remuneration statement); Form E goes to LHDN (the employer's declaration).",
      },
      {
        q: "When is Form EA due?",
        a: "It must be provided to employees by the end of February following the tax year.",
      },
      {
        q: "Who prepares these forms?",
        a: "XCG prepares EA forms for every employee and submits Form E as part of our payroll service.",
      },
    ],
    related: ["epf-socso-eis-pcb-employer-guide", "payroll-outsourcing-malaysia", "personal-income-tax-malaysia"],
  },
  {
    slug: "employment-contracts-employment-act",
    cluster: "payroll-hr",
    seoTitle: "Employment Contracts Malaysia: Act Essentials | XCG",
    metaDescription:
      "What every Malaysian SME should include in employment contracts and know about the Employment Act — hours, leave, termination. HR guidance from XCG.",
    keywords: ["employment contract malaysia", "employment act", "offer letter"],
    h1: "Employment Contracts and the Employment Act: Essentials for SMEs",
    excerpt:
      "The clauses every contract needs, the minimums the Employment Act sets, and why recent amendments demand a review.",
    datePublished: "2026-06-08",
    dateModified: "2026-07-03",
    serviceSlug: "human-resources",
    readMins: 5,
    sections: [
      {
        h2: "Why the contract matters",
        paragraphs: [
          "A clear written contract protects both sides and reduces disputes. At minimum it should cover job scope, remuneration, working hours, leave, probation, confidentiality, notice and termination. Ambiguity in any of these is where Industrial Court claims are born.",
        ],
      },
      {
        h2: "The Employment Act sets the floor",
        paragraphs: [
          "The Employment Act prescribes minimum standards — working hours, rest days, public holidays, annual and sick leave, overtime and notice periods. Contracts can be more generous than the Act, never less. Recent amendments broadened the Act's coverage to most employees and updated entitlements (including reduced weekly hours and expanded parental leave), so older contracts and handbooks should be reviewed for alignment.",
        ],
      },
      {
        h2: "Practical drafting tips",
        list: [
          "Put probation terms, confirmation criteria and extension rights in writing",
          "Define working hours and overtime eligibility precisely",
          "Include confidentiality and IP clauses appropriate to the role",
          "State notice periods that comply with the Act's minimums",
          "Keep bilingual versions consistent — one language should be stated as governing",
        ],
        paragraphs: [
          "XCG's HR and legal team drafts and reviews contracts, offer letters and handbooks, and advises on labour-law compliance for SMEs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a written contract legally required?",
        a: "Written particulars are expected by law for employees within the Act's scope — and a full written contract is strongly recommended for everyone.",
      },
      {
        q: "Can XCG write our employee handbook?",
        a: "Yes — we develop comprehensive, Employment Act-aligned handbooks covering conduct, leave, discipline and termination.",
      },
      {
        q: "Do the recent amendments affect existing contracts?",
        a: "Potentially yes — coverage broadened and entitlements changed, so contracts predating the amendments should be reviewed.",
      },
    ],
    related: ["employee-handbook-malaysia", "termination-retrenchment-malaysia", "hiring-foreign-employees-malaysia"],
  },
  {
    slug: "payroll-outsourcing-malaysia",
    cluster: "payroll-hr",
    seoTitle: "Payroll Outsourcing Malaysia: Benefits & Costs | XCG",
    metaDescription:
      "Should you outsource payroll? The benefits, what's included, and how XCG runs accurate, compliant payroll for Malaysian SMEs. Get a quote today.",
    keywords: ["payroll outsourcing malaysia"],
    h1: "Payroll Outsourcing in Malaysia: Is It Right for Your Business?",
    excerpt:
      "What outsourced payroll includes, who benefits most, and the questions to ask any provider before signing.",
    datePublished: "2026-06-11",
    dateModified: "2026-07-03",
    serviceSlug: "payroll",
    readMins: 4,
    sections: [
      {
        h2: "The case for outsourcing",
        paragraphs: [
          "Payroll is high-stakes, repetitive and unforgiving: one statutory error affects real people's pay and attracts penalties from KWSP, PERKESO or LHDN. Outsourcing frees your team from the monthly compliance burden and replaces key-person risk (the one admin who knows the system) with a professional process.",
        ],
      },
      {
        h2: "What a good provider includes",
        list: [
          "Gross-to-net salary computation including overtime, allowances and no-pay leave",
          "EPF, SOCSO, EIS and PCB computation and on-time remittance",
          "Confidential e-payslips and statutory records",
          "Year-end EA forms and Form E submission",
          "Support for both local and foreign employees",
          "A named contact who answers questions — not a ticket queue",
        ],
      },
      {
        h2: "Who benefits most",
        paragraphs: [
          "Small teams without a dedicated HR function, growing headcounts crossing compliance thresholds, and businesses with foreign employees where pass-type rules complicate contributions. XCG delivers end-to-end payroll tailored to your size and industry, with strict confidentiality.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is outsourced payroll suitable for small teams?",
        a: "Yes — solutions scale from 1 employee to 100+. Small teams often gain the most, since a single statutory error is costly relative to headcount.",
      },
      {
        q: "What's included in the service?",
        a: "Salary computation, statutory contributions and remittances, payslips, statutory reporting and year-end EA forms and Form E.",
      },
      {
        q: "Is my payroll data secure?",
        a: "Yes — data is handled confidentially, on a need-to-know basis, with secure transfer and storage.",
      },
    ],
    related: ["epf-socso-eis-pcb-employer-guide", "ea-forms-year-end-payroll", "payroll-deadlines-employer-checklist"],
  },
  {
    slug: "socso-eis-employee-protection",
    cluster: "payroll-hr",
    seoTitle: "SOCSO & EIS Malaysia: What Employers Must Know | XCG",
    metaDescription:
      "How Malaysia's SOCSO and EIS schemes protect employees against injury, invalidity and job loss — and employer duties. XCG manages contributions for you.",
    keywords: ["socso malaysia", "eis", "perkeso"],
    h1: "Understanding SOCSO and EIS: Protecting Your Employees",
    excerpt:
      "What PERKESO's schemes actually cover, who must contribute, and the June 2026 extension employers should know about.",
    datePublished: "2026-06-14",
    dateModified: "2026-07-03",
    serviceSlug: "payroll",
    readMins: 4,
    sections: [
      {
        h2: "SOCSO: injury and invalidity protection",
        paragraphs: [
          "SOCSO (PERKESO) provides social security protection through two main schemes: the Employment Injury Scheme (workplace accidents and occupational diseases — medical care, temporary and permanent disablement benefits, dependants' benefits) and the Invalidity Scheme (invalidity pension and related benefits regardless of cause).",
          "Coverage keeps broadening: a Non-Employment Injury Scheme, extending protection to accidents outside working hours, took effect on 1 June 2026.",
        ],
      },
      {
        h2: "EIS: a safety net for job loss",
        paragraphs: [
          "The Employment Insurance System provides temporary financial assistance to workers who lose their jobs, plus re-employment support — job-search allowances, training and placement help. It's the difference between a retrenchment being a crisis or a transition.",
        ],
      },
      {
        h2: "Employer obligations",
        paragraphs: [
          "Both employer and employee contribute monthly on a wage-band basis per PERKESO's schedules, due by the 15th of the following month. New employees must be registered promptly, and workplace accidents reported within prescribed timelines. XCG registers employees and manages accurate monthly contributions as part of payroll.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does SOCSO cover?",
        a: "Employment injury (workplace accidents and occupational disease) and invalidity — with coverage extended to non-work accidents under the scheme effective 1 June 2026.",
      },
      {
        q: "What is EIS for?",
        a: "Temporary financial help and re-employment support for workers who lose their jobs.",
      },
      {
        q: "Who contributes?",
        a: "Both employer and employee, monthly, on a wage-band basis — remitted by the 15th of the following month.",
      },
    ],
    related: ["epf-socso-eis-pcb-employer-guide", "hiring-foreign-employees-malaysia", "termination-retrenchment-malaysia"],
  },
  {
    slug: "hiring-foreign-employees-malaysia",
    cluster: "payroll-hr",
    seoTitle: "Hiring Foreign Employees in Malaysia: Compliance | XCG",
    metaDescription:
      "What Malaysian employers must know about payroll, statutory contributions and tax when hiring foreign staff. XCG handles multi-national payroll correctly.",
    keywords: ["foreign employee payroll malaysia", "expatriate tax"],
    h1: "Hiring Foreign Employees in Malaysia: Payroll and Compliance",
    excerpt:
      "Pass types, statutory contribution rules and tax residence — the extra layers of hiring foreign talent, made manageable.",
    datePublished: "2026-06-17",
    dateModified: "2026-07-03",
    serviceSlug: "payroll",
    readMins: 4,
    sections: [
      {
        h2: "Start with the pass",
        paragraphs: [
          "Everything flows from the employee's work authorisation — Employment Pass, Professional Visit Pass, or foreign worker permits. The pass type determines what work is permitted, and it drives how EPF and SOCSO apply. Employing someone on the wrong pass is an immigration offence before it's ever a payroll issue.",
        ],
      },
      {
        h2: "Statutory treatment differs",
        paragraphs: [
          "SOCSO coverage is mandatory for most foreign workers under the Employment Injury Scheme, while EPF treatment differs from locals (participation rules and rates vary by category — verify the current KWSP position). PCB applies to employment income, with the rate and reliefs depending on the employee's tax residence status.",
        ],
      },
      {
        h2: "Tax residence changes everything",
        paragraphs: [
          "An employee present in Malaysia 182 days or more in a basis year is generally tax-resident — progressive rates and reliefs apply. Below that, the flat non-resident rate of 30% typically applies to employment income. Arrival and departure years need careful day-counting, and getting PCB wrong in either direction creates real problems for employee and employer alike.",
          "XCG manages payroll for mixed local/foreign teams and coordinates expatriate tax treatment, including residence transitions.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do foreign workers pay EPF and SOCSO?",
        a: "SOCSO coverage is mandatory for most foreign workers; EPF treatment differs by category and is subject to current KWSP rules. Each hire should be verified individually.",
      },
      {
        q: "Is a foreign employee's income taxed in Malaysia?",
        a: "Yes — per residence rules. Tax residents (generally 182+ days) get progressive rates and reliefs; non-residents typically pay a flat 30% on employment income.",
      },
      {
        q: "Can XCG handle a mixed local/foreign team?",
        a: "Yes — we run payroll applying the correct statutory and tax treatment per employee, and coordinate expatriate tax filings.",
      },
    ],
    related: ["epf-socso-eis-pcb-employer-guide", "personal-income-tax-malaysia", "employment-contracts-employment-act"],
  },
  {
    slug: "employee-handbook-malaysia",
    cluster: "payroll-hr",
    seoTitle: "Employee Handbook Malaysia: What to Include | XCG",
    metaDescription:
      "A practical guide to creating an employee handbook that sets clear policies and aligns with Malaysian labour law. XCG drafts handbooks for SMEs.",
    keywords: ["employee handbook malaysia", "hr policies"],
    h1: "Building an Employee Handbook for Your Malaysian Business",
    excerpt:
      "The policies worth writing down, the legal alignment that matters, and how to keep a handbook alive as laws change.",
    datePublished: "2026-06-21",
    dateModified: "2026-07-03",
    serviceSlug: "human-resources",
    readMins: 4,
    sections: [
      {
        h2: "Why a handbook earns its keep",
        paragraphs: [
          "A handbook sets expectations and reduces disputes by documenting the rules everyone plays by. When discipline or termination is later challenged, a consistently applied handbook is often the difference between a defensible process and an expensive settlement.",
        ],
      },
      {
        h2: "What to include",
        list: [
          "Code of conduct and workplace behaviour",
          "Working hours, attendance and flexible-work arrangements",
          "Leave: annual, sick, maternity/paternity, compassionate — aligned with the Employment Act",
          "Remuneration, claims and benefits administration",
          "Disciplinary procedure and grievance mechanism",
          "Confidentiality, IT use and data protection (PDPA)",
          "Termination, resignation and exit procedures",
        ],
      },
      {
        h2: "Keep it living",
        paragraphs: [
          "Labour law moves — the Employment Act amendments changed hours, leave and coverage; minimum wage orders update. A handbook last touched years ago quietly drifts out of compliance. XCG prepares tailored, legally-aligned handbooks and updates them when regulations shift, in English and Chinese where needed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a handbook legally required?",
        a: "Not strictly — but it's highly recommended. It standardises processes and materially reduces dispute risk.",
      },
      {
        q: "What should it cover?",
        a: "Conduct, hours, leave, pay and claims, discipline, grievance, confidentiality and termination — aligned with the Employment Act and your actual practices.",
      },
      {
        q: "Can XCG tailor one for us?",
        a: "Yes — tailored to your industry and practices, kept updated as laws change.",
      },
    ],
    related: ["employment-contracts-employment-act", "termination-retrenchment-malaysia", "payroll-outsourcing-malaysia"],
  },
  {
    slug: "payroll-deadlines-employer-checklist",
    cluster: "payroll-hr",
    seoTitle: "Payroll Deadlines Malaysia: Monthly Checklist | XCG",
    metaDescription:
      "A month-by-month payroll checklist for Malaysian employers — EPF, SOCSO, EIS, PCB remittances and year-end forms. Stay on time with XCG.",
    keywords: ["payroll deadlines malaysia", "employer checklist"],
    h1: "Payroll Deadlines in Malaysia: An Employer's Monthly Checklist",
    excerpt:
      "The monthly cycle, the 15th-of-month remittances, and the year-end forms — one checklist to run payroll on time.",
    datePublished: "2026-06-23",
    dateModified: "2026-07-03",
    serviceSlug: "payroll",
    readMins: 4,
    sections: [
      {
        h2: "The monthly cycle",
        list: [
          "Cut-off: collect attendance, overtime, claims and leave data",
          "Compute gross-to-net for every employee, including variances",
          "Pay salaries per your contractual pay date",
          "Issue payslips (a statutory record — keep copies)",
          "Remit EPF, SOCSO, EIS and PCB by the 15th of the following month",
          "Register any new hires with KWSP, PERKESO and LHDN promptly",
        ],
      },
      {
        h2: "The annual additions",
        paragraphs: [
          "Year-end adds two obligations: Form EA to every employee by end-February, and Form E to LHDN around 31 March. January is also when annual figures — minimum wage changes, EPF rate updates, new PCB schedules — take effect, so the first payroll of the year deserves extra review.",
        ],
      },
      {
        h2: "Missing a date is never cheap",
        paragraphs: [
          "Each agency imposes its own interest and penalties for late remittance, and repeated lateness invites audits. XCG runs a monthly payroll calendar for every client so nothing slips — computation, remittance, payslips and the year-end forms, all on time.",
        ],
      },
    ],
    faqs: [
      {
        q: "When are monthly contributions due?",
        a: "EPF, SOCSO, EIS and PCB are generally due by the 15th of the following month.",
      },
      {
        q: "What's due at year-end?",
        a: "Form EA to employees by end-February and Form E to LHDN around 31 March.",
      },
      {
        q: "Does XCG track these deadlines?",
        a: "Yes — a monthly payroll calendar per client, with proactive reminders.",
      },
    ],
    related: ["epf-socso-eis-pcb-employer-guide", "ea-forms-year-end-payroll", "malaysia-tax-deadlines-calendar"],
  },
  {
    slug: "termination-retrenchment-malaysia",
    cluster: "payroll-hr",
    seoTitle: "Termination & Retrenchment Malaysia: Legal Guide | XCG",
    metaDescription:
      "How to handle termination and retrenchment lawfully in Malaysia — fair process, notice, benefits and documentation. XCG's HR/legal team guides you.",
    keywords: ["termination malaysia", "retrenchment"],
    h1: "Termination and Retrenchment in Malaysia: Getting It Right",
    excerpt:
      "Due inquiry, genuine redundancy, fair selection and proper notice — the process that keeps employers out of the Industrial Court.",
    datePublished: "2026-06-25",
    dateModified: "2026-07-03",
    serviceSlug: "human-resources",
    readMins: 5,
    sections: [
      {
        h2: "There's no casual dismissal in Malaysia",
        paragraphs: [
          "Employment in Malaysia can only end lawfully with just cause or excuse, following a fair process. An employee who believes they were dismissed unfairly can bring a claim, and the Industrial Court can order reinstatement or substantial compensation. Process failures sink employers as often as substance does.",
        ],
      },
      {
        h2: "Termination for misconduct",
        paragraphs: [
          "Misconduct dismissals require due inquiry: a clear charge in writing, a genuine opportunity for the employee to respond, an impartial hearing, and a penalty proportionate to the offence. Skipping the inquiry — even for apparently obvious misconduct — is the classic fatal error.",
        ],
      },
      {
        h2: "Retrenchment done properly",
        list: [
          "Genuine business justification, documented before selection begins",
          "Fair selection criteria — foreign employees first, then LIFO within categories unless justified otherwise",
          "Proper notice per contract and the Employment Act",
          "Termination benefits where the Employment (Termination and Lay-Off Benefits) Regulations apply",
          "PK form notification to the Labour Department within the prescribed timeline",
        ],
        paragraphs: [
          "XCG advises on process, documentation and compliance for terminations and retrenchments — reducing legal exposure before decisions are executed, not after.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I dismiss an employee for misconduct?",
        a: "Yes — with a due inquiry: written charge, chance to respond, impartial hearing and a proportionate penalty.",
      },
      {
        q: "Is notice always required?",
        a: "Generally yes, per the contract and the Employment Act's minimums — except in justified summary dismissal after due inquiry.",
      },
      {
        q: "What if the process goes wrong?",
        a: "You risk an unfair-dismissal claim, where the Industrial Court can award reinstatement or significant compensation.",
      },
    ],
    related: ["employment-contracts-employment-act", "employee-handbook-malaysia", "socso-eis-employee-protection"],
  },
];
