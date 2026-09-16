import { Certification } from '@/types/portfolio';

export const certificationsData: Certification[] = [
  {
    id: "kpitb-ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    issuer: "KPITB & UET Mardan",
    date: "June 2026",
    credentialId: "144 Training Hours",
    certificateUrl: "/certificates/kpitb-ai-machine-learning.jpg",
    isVerifiedCredential: true,
    badgeType: "KPITB",
    skillsCovered: ["Machine Learning", "Artificial Intelligence", "Python", "Data Science", "Model Training"]
  },
  {
    id: "databricks-de-training",
    title: "Get Started with Databricks for Data Engineering",
    issuer: "Databricks Academy / Simplilearn",
    date: "July 2026",
    credentialId: "10490100",
    certificateUrl: "/certificates/databricks-data-engineering.pdf",
    isVerifiedCredential: true,
    badgeType: "Databricks",
    skillsCovered: ["Databricks", "PySpark", "Delta Lake", "Medallion Architecture", "Auto Loader", "Databricks Workflows"]
  },
  {
    id: "databricks-snowflake-training",
    title: "Training for Snowflake",
    issuer: "Databricks Academy / Simplilearn",
    date: "August 2026",
    credentialId: "10603969",
    certificateUrl: "/certificates/databricks-snowflake.pdf",
    isVerifiedCredential: true,
    badgeType: "Databricks",
    skillsCovered: ["Databricks", "Snowflake", "Data Lakehouse", "Spark SQL"]
  },
  {
    id: "ibm-intro-data-engineering",
    title: "Introduction to Data Engineering",
    issuer: "IBM / Coursera",
    date: "February 2025",
    credentialId: "UKQRSDQUEUUA",
    certificateUrl: "/certificates/ibm-introduction-data-engineering.pdf",
    isVerifiedCredential: true,
    badgeType: "IBM",
    skillsCovered: ["Data Engineering Fundamentals", "ETL Pipelines", "Relational Databases", "SQL"]
  },
  {
    id: "ibm-data-analytics-bi",
    title: "Data Analytics and Business Intelligence",
    issuer: "DigiSkills Training Program",
    date: "February 2024",
    credentialId: "PBQRG7QMK",
    certificateUrl: "/certificates/ibm-data-analytics-bi.pdf",
    isVerifiedCredential: true,
    badgeType: "IBM",
    skillsCovered: ["Data Analysis", "Business Intelligence", "Reporting", "Data Insights"]
  },
  {
    id: "intro-data-mining",
    title: "Introduction to Data Mining Course",
    issuer: "Simplilearn SkillUp",
    date: "December 2024",
    credentialId: "7647754",
    certificateUrl: "/certificates/introduction-data-mining.pdf",
    isVerifiedCredential: true,
    badgeType: "IBM",
    skillsCovered: ["Data Mining", "Pattern Extraction", "Feature Processing"]
  },
  {
    id: "ibm-bi-dashboards",
    title: "BI Dashboards with IBM Cognos Analytics and Google Looker",
    issuer: "IBM / Coursera",
    date: "February 2025",
    credentialId: "5TQDTAHDYCP4",
    certificateUrl: null,
    isVerifiedCredential: false,
    badgeType: "IBM",
    skillsCovered: ["Cognos Analytics", "Google Looker", "Dashboard Design", "KPI Visualization"]
  },
  {
    id: "ibm-get-started-de",
    title: "Get Started with Data Engineering",
    issuer: "IBM / Coursera",
    date: "IBM Training",
    certificateUrl: null,
    isVerifiedCredential: false,
    badgeType: "IBM",
    skillsCovered: ["Data Architecture", "Data Pipeline Concepts", "Cloud Storage"]
  }
];
