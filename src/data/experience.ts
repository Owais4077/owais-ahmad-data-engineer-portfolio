import { ExperienceItem } from '@/types/portfolio';

export const experienceData: ExperienceItem[] = [
  {
    id: "ybix-data-engineer",
    role: "Data Engineer",
    company: "YBIX",
    companyUrl: "https://ybix.ai/",
    companyLinkLabel: "Visit Company Website",
    companyLinkType: "official",
    ariaLabel: "Visit YBIX official website",
    location: "Lahore, Pakistan",
    period: "May 2026 - Present",
    isCurrent: true,
    summary: "Designing, building, and maintaining production-grade Lakehouse architectures and data pipelines for scalable analytics.",
    responsibilities: [
      "Build and maintain production-grade ETL/ELT pipelines using Python, PySpark, Databricks, and Spark SQL.",
      "Design Bronze, Silver, and Gold Lakehouse layers using Delta Lake and Medallion Architecture.",
      "Perform data profiling, cleansing, transformation, validation, and quality checks.",
      "Implement Delta Lake MERGE operations for incremental loading and upserts.",
      "Create analytical datasets, KPI dashboards, and business reports.",
      "Develop reusable, modular, and maintainable Data Engineering workflows.",
      "Document pipeline architecture and data flows.",
      "Collaborate with analysts and business stakeholders to translate requirements into scalable data solutions."
    ],
    technologies: [
      "Python",
      "PySpark",
      "Apache Spark",
      "Databricks",
      "Delta Lake",
      "Spark SQL",
      "Medallion Architecture",
      "ETL/ELT",
      "Data Profiling",
      "Power BI"
    ]
  },
  {
    id: "oasis-house-data-entry",
    role: "Data Entry Operator",
    company: "Oasis House General Contracting Co. L.L.C.",
    companyUrl: "https://www.protenders.com/companies/oasis-house-general-contracting",
    companyLinkLabel: "View Company Profile",
    companyLinkType: "third-party",
    ariaLabel: "View Oasis House General Contracting company profile on ProTenders",
    location: "Abu Dhabi, UAE",
    period: "January 2023 - January 2025",
    isCurrent: false,
    summary: "Worked as a Data Entry Operator at Oasis House General Contracting Co. L.L.C. in Abu Dhabi, UAE. Employment was from January 2023 to January 2025.",
    employmentDetails: [
      "Data Entry Operator role",
      "Employment period: 10 January 2023 - 9 January 2025",
      "Location: Abu Dhabi, UAE",
      "Experience letter available"
    ],
    experienceLetterUrl: "/experience/oasis-house-experience-letter.pdf",
    responsibilities: [],
    technologies: []
  }
];
