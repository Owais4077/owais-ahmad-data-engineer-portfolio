import { Project } from '@/types/portfolio';

export const projectsData: Project[] = [
  {
    slug: "end-to-end-data-pipeline",
    title: "End-to-End Data Engineering & AI Pipeline",
    subtitle: "Metadata-driven Lakehouse automation with Databricks, Delta Lake, & Unity Catalog",
    shortDescription: "Built an automated end-to-end Data Engineering pipeline using Databricks, PySpark, Delta Lake, and Medallion Architecture.",
    fullDescription: "Built an end-to-end data platform that automates multi-source ingestion into a structured Lakehouse. Utilizing Databricks Auto Loader for file ingestion and JDBC connectors for relational databases, raw data is ingested into Bronze tables. PySpark scripts perform cleansing, validation, and deduplication into Silver tables, before business rules enrich Gold layer aggregate tables powering Databricks SQL dashboards and AI-BI analytics.",
    problem: "Raw data arriving from heterogeneous sources (files and relational databases) suffered from inconsistent schemas and duplicate records, preventing downstream analysts from accessing timely datasets.",
    solution: "Architected a metadata-driven Medallion Lakehouse platform on Databricks with Auto Loader and JDBC ingestion, automated data validation rules, Delta Lake upserts via MERGE, and governance managed through Unity Catalog.",
    architecture: {
      nodes: [
        "Data Sources (Files / RDBMS)",
        "Auto Loader / JDBC",
        "Bronze (Raw Delta)",
        "Silver (Cleaned & Validated)",
        "Gold (Business Aggregates)",
        "Databricks SQL / AI-BI"
      ],
      description: "Data Sources → Auto Loader / JDBC → Bronze → Silver → Gold → Databricks SQL / AI-BI"
    },
    technologies: [
      "Databricks",
      "PySpark",
      "SQL",
      "Delta Lake",
      "Auto Loader",
      "JDBC",
      "Unity Catalog",
      "Databricks Workflows",
      "Databricks SQL"
    ],
    highlights: [
      "Automated ingestion using Auto Loader and JDBC connectors",
      "Bronze, Silver, and Gold Delta Lake tables implementation",
      "Automated data cleansing, schema validation, and deduplication",
      "Business-rule enrichment and dynamic data transformation",
      "Metadata-driven workflows scheduled via Databricks Workflows",
      "Pipeline monitoring, automated error handling, and alert mechanisms",
      "Unity Catalog governance and secret management for secure credentials",
      "Databricks SQL dashboards and AI/BI analytics integrations"
    ],
    featured: true,
    category: "Lakehouse",
    image: "/projects/end-to-end-pipeline/cover.webp",
    imageAlt: "Databricks medallion architecture showing data sources flowing through Auto Loader, Bronze, Silver, Gold and analytics"
  },
  {
    slug: "fmcg-pipeline",
    title: "FMCG Data Engineering & Analytics Pipeline",
    subtitle: "Scalable sales, product, and customer analytics platform for FMCG data",
    shortDescription: "End-to-end FMCG data engineering pipeline transforming raw sales and inventory records into Gold-layer analytics.",
    fullDescription: "Designed and deployed a comprehensive FMCG data pipeline utilizing Databricks and PySpark to process fast-moving consumer goods transactions. The pipeline handles data profiling, cleansing, deduplication, and business-rule processing across Bronze, Silver, and Gold layers to produce metrics across sales performance, product turn rates, and customer purchasing patterns.",
    problem: "FMCG business teams were unable to track sales KPIs or perform customer segmentation due to fragmented transaction logs and unvalidated product catalog entries.",
    solution: "Implemented a unified Delta Lake pipeline using Spark SQL and PySpark that ingests raw FMCG data, cleanses bad records, executes Delta MERGE incremental updates, and presents normalized sales and customer analytics in Databricks dashboards.",
    architecture: {
      nodes: [
        "Raw FMCG Data",
        "Bronze Layer",
        "Silver Layer",
        "Gold Layer",
        "Sales & Business Analytics"
      ],
      description: "Raw FMCG Data → Bronze → Silver → Gold → Sales Analytics"
    },
    technologies: [
      "Databricks",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "Medallion Architecture"
    ],
    highlights: [
      "End-to-end FMCG data pipeline architecture",
      "Cleansing and schema validation routines",
      "Data transformation and duplicate removal logic",
      "Business-rule processing tailored for FMCG metrics",
      "Gold sales datasets for reporting",
      "Product analytics and customer purchasing insights",
      "Delta MERGE operations for incremental upserts",
      "Spark SQL optimizations and Databricks KPI dashboards"
    ],
    featured: true,
    category: "Lakehouse",
    image: "/projects/fmcg-pipeline/cover.webp",
    imageAlt: "FMCG data pipeline showing sales, product and customer data processed through Bronze, Silver and Gold layers"
  },
  {
    slug: "retail-lakehouse",
    title: "Online Retail Lakehouse & Analytics Pipeline",
    subtitle: "Transactional analytics processing over 540K records with Power BI",
    shortDescription: "Processed 541,909 raw retail transactions to yield 527,390 valid records, powering Gold-layer sales KPIs and Power BI dashboards.",
    fullDescription: "Engineered an Azure Databricks Lakehouse solution for an online retail dataset. The pipeline ingests raw transaction feeds, identifies cancellations, handles missing values, and applies deduplication logic. Out of 541,909 raw transactions ingested into Bronze, the Silver layer validated 527,390 clean records. Aggregated Gold datasets drive revenue dashboards and customer behavior models directly inside Power BI.",
    problem: "Transaction volumes contained duplicate orders, cancellation records, and missing customer IDs, causing skewed revenue metrics and inaccurate product performance reporting.",
    solution: "Architected a multi-stage Azure Databricks pipeline that filters non-standard transactions, executes Delta MERGE operations for incremental updates, and delivers audited sales KPIs to Power BI.",
    architecture: {
      nodes: [
        "Raw Retail Transactions",
        "Azure Databricks Ingestion",
        "Bronze Layer",
        "Silver Layer (527k Validated)",
        "Gold Layer (KPIs)",
        "Power BI Dashboards"
      ],
      description: "Raw Retail Transactions → Azure Databricks → Bronze → Silver → Gold → Power BI"
    },
    technologies: [
      "Azure Databricks",
      "PySpark",
      "SQL",
      "Spark SQL",
      "Delta Lake",
      "Power BI"
    ],
    metrics: [
      { label: "Raw Transactions Ingested", value: "541,909" },
      { label: "Validated Records Cleaned", value: "527,390" }
    ],
    highlights: [
      "Processed approximately 541,909 raw retail transactions",
      "Produced 527,390 valid records after automated cleansing and filtering",
      "Removed duplicate transactions and filtered out cancellation orders",
      "Handled missing values and malformed records systematically",
      "Implemented full Bronze/Silver/Gold Lakehouse architecture",
      "Used Delta MERGE for incremental data processing and stateful updates",
      "Built curated revenue, customer analytics, and product performance datasets",
      "Connected Gold-layer data tables to Power BI dashboards"
    ],
    featured: true,
    category: "Lakehouse",
    image: "/projects/online-retail/cover.webp",
    imageAlt: "Online retail analytics pipeline from Azure Databricks Lakehouse to Power BI"
  },
  {
    slug: "automated-etl-pipeline",
    title: "Automated ETL Pipeline",
    subtitle: "Batch processing framework with data quality checks & monitoring",
    shortDescription: "Automated extraction, transformation, validation, loading, and monitoring system for distributed batch data processing.",
    fullDescription: "Developed a Python and PySpark-driven ETL framework designed for automated batch data processing. The system orchestrates extraction from source systems, applies business transformations, runs quality assertions before loading, and maintains operational logs for failure monitoring and automated retry execution.",
    problem: "Manual batch data jobs were prone to silent failures, missing validation checks, and lack of alerting.",
    solution: "Created an automated modular ETL pipeline on Databricks with explicit data quality assertions, batch scheduling, and retry mechanisms.",
    architecture: {
      nodes: [
        "Source Databases / Files",
        "Extraction Module",
        "Validation & Transformation",
        "Target Storage / Databricks",
        "Monitoring & Alerts"
      ],
      description: "Source → Extraction → Validation & Transformation → Loading → Monitoring"
    },
    technologies: [
      "Python",
      "SQL",
      "PySpark",
      "Databricks"
    ],
    highlights: [
      "Automated extraction from diverse data sources",
      "Scalable PySpark transformation engine",
      "Data quality checks and validation rules",
      "Reliable automated loading routines",
      "Distributed batch processing capabilities",
      "Pipeline monitoring and error logging"
    ],
    featured: false,
    category: "ETL/ELT",
    image: "/projects/automated-etl/cover.webp",
    imageAlt: "Automated ETL pipeline showing extraction, PySpark transformation, validation and Databricks processing"
  },
  {
    slug: "anviz-integration",
    title: "Anviz Attendance Data Integration Pipeline",
    subtitle: "Biometric attendance sync pipeline linking hardware API to PostgreSQL & Odoo ERP",
    shortDescription: "Automated biometric punch-record ingestion with validation, employee ID mapping, duplicate prevention, and Odoo ERP sync.",
    fullDescription: "Built an integration pipeline that ingests biometric attendance logs from Anviz devices via FastAPI REST services, validates punch events, maps employee IDs, prevents duplicate punches, and persists records into PostgreSQL before synchronizing with Odoo ERP. Containerized with Docker and deployed with retry logic to ensure reliable scheduled synchronization.",
    problem: "Biometric attendance records required manual export and formatting before payroll processing, resulting in missing punches, duplicate entries, and delayed HR reporting.",
    solution: "Engineered a containerized FastAPI ETL pipeline with PostgreSQL persistence and Odoo ERP API integration that automatically syncs punch records, maps employee IDs, and handles network retries.",
    architecture: {
      nodes: [
        "Anviz Biometric Device",
        "FastAPI Service",
        "Python ETL & Validation",
        "PostgreSQL Storage",
        "Odoo ERP System"
      ],
      description: "Anviz Biometric Device → API → Python ETL → Validation → PostgreSQL → Odoo ERP"
    },
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Odoo API",
      "ETL"
    ],
    highlights: [
      "Automated biometric punch-record ingestion from Anviz hardware",
      "Data transformation and validation rules",
      "Relational persistence using PostgreSQL",
      "Odoo ERP system integration",
      "Employee ID mapping and duplicate punch prevention",
      "Synchronization status tracking and audit logging",
      "Scheduled synchronization with retry handling",
      "Containerized deployment using Docker"
    ],
    featured: true,
    category: "API & Integration",
    image: "/projects/anviz-integration/cover.webp",
    imageAlt: "Biometric attendance integration pipeline from biometric device through Python ETL and PostgreSQL to Odoo ERP"
  },
  {
    slug: "linkedin-tracker",
    title: "LinkedIn Connection Tracker",
    subtitle: "REST API & OAuth 2.0 application tracking connection lifecycle states",
    shortDescription: "FastAPI REST service with OAuth 2.0 tracking LinkedIn connection lifecycles across Pending, Accepted, Rejected, and Withdrawn states.",
    fullDescription: "Developed a specialized tracking tool using Python, FastAPI, and PostgreSQL to manage LinkedIn network expansion. Authenticated via OAuth 2.0, the system tracks connection invite states, maintains historical records in PostgreSQL, and generates analytical dashboard statistics to measure network response rates.",
    problem: "Tracking outgoing networking outreach and connection status across industry contacts was difficult without automated state tracking.",
    solution: "Built a secure FastAPI backend with OAuth 2.0 integration that persists connection request state changes to PostgreSQL and provides statistical summaries via REST endpoints.",
    architecture: {
      nodes: [
        "LinkedIn OAuth 2.0 API",
        "FastAPI Backend",
        "State Manager",
        "PostgreSQL Database",
        "Dashboard Statistics"
      ],
      description: "LinkedIn API → OAuth 2.0 → FastAPI Backend → PostgreSQL → Analytics"
    },
    technologies: [
      "Python",
      "FastAPI",
      "LinkedIn API",
      "OAuth 2.0",
      "PostgreSQL",
      "REST API"
    ],
    highlights: [
      "OAuth 2.0 authentication flow",
      "LinkedIn API integration for network data",
      "Connection lifecycle state tracking (Pending, Accepted, Rejected, Withdrawn)",
      "Structured persistence in PostgreSQL database",
      "Dashboard statistics for outreach metrics",
      "API unit and integration testing"
    ],
    featured: false,
    category: "API & Integration",
    image: "/projects/linkedin-tracker/cover.webp",
    imageAlt: "LinkedIn connection tracker architecture using OAuth 2.0, FastAPI and PostgreSQL"
  },
  {
    slug: "ai-personal-assistant",
    title: "AI Personal Assistant",
    subtitle: "FastAPI & Streamlit assistant application for workflow automation",
    shortDescription: "AI-powered personal assistant application using FastAPI REST endpoints and Streamlit for workflow automation.",
    fullDescription: "Created an AI assistant application leveraging FastAPI backend services and a Streamlit user interface to automate personal productivity workflows, task management, and information processing.",
    problem: "Streamlining developer workflows required a lightweight UI connected to backend AI endpoints.",
    solution: "Designed a modular Streamlit frontend communicating with FastAPI microservices for automated task execution.",
    architecture: {
      nodes: [
        "Streamlit UI",
        "FastAPI REST Endpoints",
        "AI Workflow Automation Engine"
      ],
      description: "Streamlit UI → FastAPI Endpoints → Automation Engine"
    },
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit"
    ],
    highlights: [
      "FastAPI REST endpoint architecture",
      "Interactive Streamlit user interface",
      "Workflow automation and task processing",
      "Modular Python codebase"
    ],
    featured: false,
    category: "AI & Automation",
    image: "/projects/ai-assistant/cover.webp",
    imageAlt: "AI personal assistant architecture connecting Streamlit interface with FastAPI and AI processing"
  }
];
