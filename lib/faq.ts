export interface FaqItem {
  q: string;
  a: string;
  qZh: string;
  aZh: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  nameZh: string;
  serviceSlug: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "company-secretarial",
    name: "Company Secretarial",
    nameZh: "公司秘书",
    serviceSlug: "company-secretarial",
    items: [
      {
        q: "What is a company secretary?",
        a: "An officer chosen by the director or directors and charged with making sure the company operates in accordance with all applicable laws and regulations — lodging statutory forms with SSM, maintaining registers and advising the board.",
        qZh: "什么是公司秘书？",
        aZh: "由董事委任的高级职员，负责确保公司遵守所有适用法律法规——向SSM提交法定表格、维护登记册并为董事会提供建议。",
      },
      {
        q: "Can I replace my current company secretary immediately?",
        a: "Yes! There is no minimum lock-in period — the law allows the board to appoint a new company secretary at any time. XCG manages the full handover.",
        qZh: "我可以立即更换现任公司秘书吗？",
        aZh: "可以！没有最短锁定期——法律允许董事会随时委任新的公司秘书。XCG负责完整交接。",
      },
      {
        q: "Why should I have a company secretary on a retainer basis?",
        a: "Having a company secretary is mandatory in Malaysia. A retainer arrangement provides flexibility and cost-effectiveness, with support ready during peak compliance periods.",
        qZh: "为什么要以聘用制委任公司秘书？",
        aZh: "在马来西亚，委任公司秘书是强制性的。聘用制安排灵活且具成本效益，在合规高峰期也能随时获得支持。",
      },
      {
        q: "Can a company secretary handle all my professional services?",
        a: "No — company secretaries shouldn't handle accounting, legal counsel or taxation. Those require specialised professionals, which is why XCG brings all these teams under one roof.",
        qZh: "公司秘书能处理我所有的专业服务吗？",
        aZh: "不能——公司秘书不应处理会计、法律或税务事务。这些需要专业人士，因此XCG将所有专业团队汇聚一堂。",
      },
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    nameZh: "会计",
    serviceSlug: "accounting",
    items: [
      {
        q: "What is the difference between accounting and bookkeeping?",
        a: "Accounting refers to analysing, interpreting, classifying, summarising and reporting of financial data. Bookkeeping refers to comprehensive recording and safekeeping of financial data.",
        qZh: "会计和簿记有什么区别？",
        aZh: "会计是指对财务数据进行分析、解读、分类、汇总和报告；簿记是指全面记录和保管财务数据。",
      },
      {
        q: "Is an auditor the same thing as an accountant?",
        a: "No. Accounting maintains financial records on an ongoing basis; auditing examines those records annually through an independent body.",
        qZh: "审计师和会计师一样吗？",
        aZh: "不一样。会计师持续维护财务记录；审计师则通过独立机构每年审查这些记录。",
      },
      {
        q: "Why is proper accounting important for my business?",
        a: "Accurate accounting monitors financial health, ensures regulatory compliance, and improves transparency for stakeholders — it's the foundation for tax, audit and financing.",
        qZh: "妥善的会计为何对我的企业重要？",
        aZh: "准确的会计能监控财务健康、确保合规，并提高对利益相关方的透明度——是税务、审计和融资的基础。",
      },
      {
        q: "My company already uses accounting software. Can we keep using it?",
        a: "Yes, you can keep using it. If you need us to prepare accounting reports using your software, you simply grant us access.",
        qZh: "我的公司已在使用会计软件，可以继续用吗？",
        aZh: "可以继续使用。如需我们用您的软件编制会计报告，只需授予访问权限。",
      },
    ],
  },
  {
    id: "taxation",
    name: "Taxation",
    nameZh: "税务",
    serviceSlug: "taxation",
    items: [
      {
        q: "What types of tax services does XCG provide?",
        a: "Tax return preparation, CP204 estimates, tax planning, compliance advisory, SST and representation before LHDN in audits and investigations.",
        qZh: "XCG提供哪些税务服务？",
        aZh: "报税表编制、CP204估税、税务规划、合规咨询、SST，以及在LHDN审计和调查中的代表服务。",
      },
      {
        q: "Who needs to file a tax return in Malaysia?",
        a: "Any individual or company earning taxable income must file annually — residents, non-residents, partnerships and companies alike.",
        qZh: "在马来西亚谁需要报税？",
        aZh: "任何有应税收入的个人或公司都必须每年申报——包括居民、非居民、合伙企业和公司。",
      },
      {
        q: "Can XCG help reduce my tax liability legally?",
        a: "Yes. We provide strategic tax planning that helps identify tax-saving opportunities while ensuring full compliance.",
        qZh: "XCG能合法降低我的税负吗？",
        aZh: "可以。我们提供战略性税务规划，在确保完全合规的前提下发掘节税机会。",
      },
      {
        q: "What are the penalties for late or incorrect tax filings?",
        a: "Late filings incur penalties, interest charges, and potentially legal action by LHDN. Timely, accurate filing is always cheaper.",
        qZh: "逾期或错误报税有什么处罚？",
        aZh: "逾期申报将产生罚款、利息，甚至可能面临LHDN的法律行动。准时准确的申报永远更划算。",
      },
      {
        q: "Do you provide support during a tax audit or investigation?",
        a: "Absolutely. We represent and support our clients throughout tax audits and investigations, including appeals.",
        qZh: "税务审计或调查期间你们提供支持吗？",
        aZh: "当然。我们在整个税务审计和调查过程中代表并支持客户，包括上诉。",
      },
    ],
  },
  {
    id: "auditing",
    name: "Auditing",
    nameZh: "审计",
    serviceSlug: "auditing",
    items: [
      {
        q: "What is a statutory audit, and who is required to conduct one in Malaysia?",
        a: "A statutory audit is a legally required review of a company's financial statements to ensure accuracy and compliance. Malaysian Sdn Bhds require one annually unless they qualify for audit exemption.",
        qZh: "什么是法定审计？在马来西亚谁需要进行？",
        aZh: "法定审计是法律要求的财务报表审查，以确保准确性和合规性。马来西亚私人有限公司每年都需进行，除非符合审计豁免条件。",
      },
      {
        q: "What is the purpose of an audit?",
        a: "An audit provides independent assurance that a company's financial statements are true, fair, and comply with applicable accounting standards.",
        qZh: "审计的目的是什么？",
        aZh: "审计提供独立保证，确认公司财务报表真实、公允，并符合适用的会计准则。",
      },
      {
        q: "What documents are needed for an audit?",
        a: "Common documents include the company's financial statements, general ledger, bank statements, invoices, contracts and payroll records.",
        qZh: "审计需要哪些文件？",
        aZh: "常见文件包括公司财务报表、总账、银行对账单、发票、合同及薪资记录。",
      },
      {
        q: "How long does an audit typically take?",
        a: "Most standard audits take 2 to 4 weeks once all necessary documents are provided.",
        qZh: "审计通常需要多长时间？",
        aZh: "文件齐备后，大多数标准审计需要2至4周。",
      },
      {
        q: "Can XCG assist with internal control reviews or compliance audits?",
        a: "Yes. In addition to statutory audit coordination, we offer internal control assessments, compliance reviews, and special-purpose audits.",
        qZh: "XCG能协助内部控制审查或合规审计吗？",
        aZh: "可以。除法定审计协调外，我们还提供内部控制评估、合规审查及特殊目的审计。",
      },
    ],
  },
  {
    id: "e-invoicing",
    name: "E-Invoicing",
    nameZh: "电子发票",
    serviceSlug: "e-invoicing",
    items: [
      {
        q: "What is e-invoicing and why is it required in Malaysia?",
        a: "E-invoicing is a digital format of issuing and receiving invoices, validated in real time by the Inland Revenue Board (LHDN) through MyInvois. It is being mandated in phases for Malaysian businesses.",
        qZh: "什么是电子发票？为什么马来西亚要求使用？",
        aZh: "电子发票是以数字格式开具和接收发票，由内陆税收局（LHDN）通过MyInvois实时验证，正分阶段在马来西亚强制实施。",
      },
      {
        q: "Who needs to implement e-invoicing?",
        a: "Implementation occurs in phases based on annual turnover thresholds. Businesses above RM1 million turnover are now in scope; those below are currently exempt.",
        qZh: "谁需要实施电子发票？",
        aZh: "按年营业额门槛分阶段实施。营业额超过100万令吉的企业现已纳入范围；低于此门槛的目前豁免。",
      },
      {
        q: "How does the e-invoicing process work?",
        a: "Invoices are generated in a structured format (XML or JSON), submitted to LHDN's MyInvois system for validation, and then delivered to the buyer with a unique ID and QR code.",
        qZh: "电子发票流程如何运作？",
        aZh: "发票以结构化格式（XML或JSON）生成，提交至LHDN的MyInvois系统验证，然后连同唯一ID和二维码交付买家。",
      },
      {
        q: "What are the benefits of using e-invoicing?",
        a: "Reduced errors, improved record-keeping, shorter processing times and real-time tax compliance.",
        qZh: "使用电子发票有什么好处？",
        aZh: "减少错误、改善记录保存、缩短处理时间并实现实时税务合规。",
      },
      {
        q: "How can XCG assist with e-invoicing implementation?",
        a: "We provide system setup, software integration, training, validation support and ongoing compliance monitoring — end to end.",
        qZh: "XCG如何协助实施电子发票？",
        aZh: "我们提供系统设置、软件集成、培训、验证支持及持续合规监控——端到端服务。",
      },
    ],
  },
  {
    id: "human-resources",
    name: "Human Resources",
    nameZh: "人力资源",
    serviceSlug: "human-resources",
    items: [
      {
        q: "What HR services does XCG provide beyond payroll?",
        a: "Contract drafting, handbook development, recruitment advisory, compliance audits and HRDF grant consultations.",
        qZh: "除薪资外，XCG还提供哪些人力资源服务？",
        aZh: "合同起草、员工手册编制、招聘咨询、合规审计及HRDF资助咨询。",
      },
      {
        q: "Can you help us prepare employment contracts and offer letters?",
        a: "Yes. We draft customised employment contracts, offer letters, and related documents in compliance with the Employment Act.",
        qZh: "你们能帮我们准备雇佣合同和聘书吗？",
        aZh: "可以。我们根据雇佣法令起草定制的雇佣合同、聘书及相关文件。",
      },
      {
        q: "Do you assist with employee onboarding and termination processes?",
        a: "Absolutely. We provide advisory on onboarding procedures, probation policies and termination best practices.",
        qZh: "你们协助员工入职和离职流程吗？",
        aZh: "当然。我们就入职程序、试用期政策及离职最佳实践提供咨询。",
      },
      {
        q: "Can you help create an employee handbook for my company?",
        a: "Yes. We develop comprehensive employee handbooks that outline company policies, code of conduct and leave entitlements.",
        qZh: "你们能为我的公司制作员工手册吗？",
        aZh: "可以。我们编制全面的员工手册，涵盖公司政策、行为准则及休假福利。",
      },
      {
        q: "Do you provide HR advisory for labour law compliance?",
        a: "Yes. We guide businesses in complying with Malaysia's Employment Act, Minimum Wages Order and working-hour regulations.",
        qZh: "你们提供劳动法合规咨询吗？",
        aZh: "是的。我们指导企业遵守马来西亚雇佣法令、最低工资令及工时规定。",
      },
    ],
  },
  {
    id: "legal",
    name: "Legal",
    nameZh: "法律",
    serviceSlug: "legal",
    items: [
      {
        q: "What type of legal services does XCG provide?",
        a: "Contract drafting, shareholder agreements, employment contracts, company constitutions and regulatory compliance advice.",
        qZh: "XCG提供哪类法律服务？",
        aZh: "合同起草、股东协议、雇佣合同、公司章程及监管合规建议。",
      },
      {
        q: "Can you help draft and review commercial contracts?",
        a: "Yes. We prepare, review and advise on various types of commercial agreements such as service contracts and partnership agreements.",
        qZh: "你们能起草和审查商业合同吗？",
        aZh: "可以。我们起草、审查各类商业协议（如服务合同、合伙协议）并提供建议。",
      },
      {
        q: "Do I need legal assistance to start a business in Malaysia?",
        a: "Legal advice helps with business structuring, intellectual property protection and dispute prevention — cheapest at the start, priceless later.",
        qZh: "在马来西亚创业需要法律协助吗？",
        aZh: "法律建议有助于商业架构、知识产权保护和纠纷预防——创业初期成本最低，日后价值无穷。",
      },
      {
        q: "Are your legal services suitable for startups and SMEs?",
        a: "Absolutely. We focus on practical, business-friendly legal solutions tailored to startups, growing companies and SMEs.",
        qZh: "你们的法律服务适合初创企业和中小企业吗？",
        aZh: "当然。我们专注于为初创企业、成长型公司和中小企业提供务实、商业友好的法律解决方案。",
      },
    ],
  },
  {
    id: "licensing",
    name: "Licensing",
    nameZh: "执照",
    serviceSlug: "licensing",
    items: [
      {
        q: "What types of business licenses can XCG help with?",
        a: "Premise licenses, signboard licenses, food & beverage permits, import/export permits and industry-specific approvals.",
        qZh: "XCG能协助办理哪些营业执照？",
        aZh: "营业场所执照、招牌执照、餐饮许可、进出口准证及行业特定批文。",
      },
      {
        q: "How do I know what licenses my business needs?",
        a: "Requirements vary by industry, location and activity — our team assesses your business and advises exactly which licences you need.",
        qZh: "我如何知道我的企业需要哪些执照？",
        aZh: "要求因行业、地点和活动而异——我们的团队评估您的业务后，明确告知所需执照。",
      },
      {
        q: "Do you offer renewal services for expired licenses?",
        a: "Absolutely. We assist with both new applications and renewals, ensuring your business stays compliant.",
        qZh: "你们提供过期执照的更新服务吗？",
        aZh: "当然。我们协助新申请及更新，确保您的业务持续合规。",
      },
      {
        q: "What happens if I operate without the required business licenses?",
        a: "Operating unlicensed risks fines, enforcement action and potential business closure.",
        qZh: "无照经营会有什么后果？",
        aZh: "无照经营可能面临罚款、执法行动及停业风险。",
      },
    ],
  },
  {
    id: "payroll",
    name: "Payroll",
    nameZh: "薪资",
    serviceSlug: "payroll",
    items: [
      {
        q: "Is your payroll service suitable for small teams or new startups?",
        a: "Yes. Our payroll solutions are designed to scale with your business whether you have 1 employee or 100.",
        qZh: "你们的薪资服务适合小团队或新创公司吗？",
        aZh: "适合。我们的薪资方案可随业务扩展，无论您有1名还是100名员工。",
      },
      {
        q: "Do you handle EPF, SOCSO, EIS and PCB submissions?",
        a: "Yes. Our payroll services include full compliance handling, including registration (if needed) and monthly submissions.",
        qZh: "你们处理EPF、SOCSO、EIS和PCB的提交吗？",
        aZh: "是的。我们的薪资服务包括全面合规处理，含注册（如需）及每月提交。",
      },
      {
        q: "Can you issue EA Forms for my employees?",
        a: "Absolutely. At the end of each financial year, we prepare and issue EA Forms for all employees.",
        qZh: "你们能为我的员工开具EA表格吗？",
        aZh: "当然。每个财政年度结束时，我们为所有员工准备并签发EA表格。",
      },
      {
        q: "Can you assist with payroll for both local and foreign employees?",
        a: "Yes. We handle payroll for both Malaysian and foreign employees, ensuring all relevant statutory requirements are met.",
        qZh: "你们能处理本地和外籍员工的薪资吗？",
        aZh: "可以。我们处理马来西亚及外籍员工的薪资，确保满足所有相关法定要求。",
      },
      {
        q: "What documents are needed to start payroll services with XCG?",
        a: "Company details, employee information, employment contracts and your preferred payroll cycle.",
        qZh: "开始使用XCG薪资服务需要哪些文件？",
        aZh: "公司资料、员工信息、雇佣合同及您偏好的薪资周期。",
      },
    ],
  },
  {
    id: "business-valuation",
    name: "Business Valuation",
    nameZh: "企业估值",
    serviceSlug: "business-valuation",
    items: [
      {
        q: "When do I need a business valuation?",
        a: "For buying/selling a business, fundraising, loan applications, M&A, restructuring or performance assessment.",
        qZh: "什么时候需要企业估值？",
        aZh: "买卖企业、融资、贷款申请、并购、重组或业绩评估时。",
      },
      {
        q: "What methods are used to value a business?",
        a: "We apply internationally accepted valuation methodologies such as Market Comparables, Asset-Based Valuation and Earnings Multiples.",
        qZh: "企业估值使用什么方法？",
        aZh: "我们采用国际公认的估值方法，如市场可比法、资产基础法和盈利倍数法。",
      },
      {
        q: "What information do I need to provide for a valuation?",
        a: "Financial statements, business plans, asset/liability details and operational data.",
        qZh: "估值需要提供哪些资料？",
        aZh: "财务报表、商业计划、资产负债明细及运营数据。",
      },
      {
        q: "Why is business valuation important?",
        a: "Valuation determines fair market value for transactions, financing, tax planning and informed stakeholder decisions.",
        qZh: "企业估值为何重要？",
        aZh: "估值为交易、融资、税务规划及利益相关方决策确定公允市场价值。",
      },
      {
        q: "What factors can affect the value of a business?",
        a: "Financial performance, industry conditions, competition, assets, growth potential, management quality and the economic environment.",
        qZh: "哪些因素会影响企业价值？",
        aZh: "财务表现、行业状况、竞争、资产、增长潜力、管理质量及经济环境。",
      },
    ],
  },
];
