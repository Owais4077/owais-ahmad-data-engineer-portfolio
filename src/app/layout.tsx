import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ScrollProgress } from '@/components/ScrollProgress';
import { BackToTop } from '@/components/BackToTop';
import { personalData } from '@/data/personal';

export const metadata: Metadata = {
  metadataBase: new URL('https://owais-ahmad.vercel.app'),
  title: 'Owais Ahmad | Data Engineer',
  description:
    'Portfolio of Owais Ahmad, a Data Engineer specializing in Python, SQL, PySpark, Databricks, Delta Lake, ETL/ELT pipelines, Lakehouse architecture, APIs, and analytics.',
  keywords: [
    'Owais Ahmad',
    'Data Engineer',
    'Lahore Pakistan',
    'PySpark',
    'Databricks',
    'Delta Lake',
    'Medallion Architecture',
    'ETL Pipelines',
    'Azure Databricks',
    'PostgreSQL',
    'FastAPI',
    'Power BI'
  ],
  authors: [{ name: 'Owais Ahmad' }],
  creator: 'Owais Ahmad',
  openGraph: {
    title: 'Owais Ahmad | Data Engineer Portfolio',
    description:
      'Data Engineer specializing in Python, SQL, PySpark, Databricks, Delta Lake, ETL/ELT pipelines, APIs, and analytics-ready data platforms.',
    url: 'https://owais-ahmad.vercel.app',
    siteName: 'Owais Ahmad Data Engineering Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Owais Ahmad | Data Engineer',
    description:
      'Data Engineer specializing in Python, SQL, PySpark, Databricks, Delta Lake, ETL/ELT pipelines, APIs, and analytics platforms.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalData.name,
    jobTitle: personalData.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
    sameAs: [personalData.github, personalData.linkedin],
    knowsAbout: [
      'Data Engineering',
      'PySpark',
      'Databricks',
      'Delta Lake',
      'Medallion Architecture',
      'ETL/ELT Pipelines',
      'FastAPI',
      'PostgreSQL',
      'Power BI'
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-200">
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
