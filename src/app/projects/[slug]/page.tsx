import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  ArrowLeft, 
  Github, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Workflow
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found | Owais Ahmad',
    };
  }

  return {
    title: `${project.title} | Owais Ahmad Data Engineering`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} - Data Engineering Portfolio`,
      description: project.shortDescription,
      images: [project.image],
      type: 'article',
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen transition-colors duration-200 selection:bg-cyan-500 selection:text-slate-950 flex flex-col justify-between">
      
      <Navbar />

      <main className="pt-28 pb-20 flex-grow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors bg-white dark:bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Header Banner & Visual */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl relative space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300">
                {project.category}
              </span>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>View GitHub Repository</span>
                </a>
              )}
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-cyan-700 dark:text-cyan-300 mt-2 font-semibold">
                {project.subtitle}
              </p>
            </div>

            {/* Large 16:9 Project Visual Banner */}
            <div className="relative w-full aspect-video rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 overflow-hidden shadow-lg dark:shadow-2xl">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-cover object-center"
              />
            </div>

            {/* Metrics Callout Grid if present */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 text-center">
                    <div className="text-3xl font-extrabold font-mono text-cyan-700 dark:text-cyan-300">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Body Content Grid */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Problem, Solution, Overview */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Overview */}
              <section className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Project Overview
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>

              {/* Problem Statement */}
              <section className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  The Problem
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </section>

              {/* Engineering Solution */}
              <section className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  The Solution & Architecture
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>

                {/* Architecture Visual Step Box */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">System Data Flow:</div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-800 dark:text-cyan-300 font-medium">
                    {project.architecture.nodes.map((node, nodeIdx) => (
                      <React.Fragment key={nodeIdx}>
                        <span className="px-2.5 py-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                          {node}
                        </span>
                        {nodeIdx < project.architecture.nodes.length - 1 && (
                          <span className="text-slate-400 dark:text-slate-600">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </section>

              {/* Key Technical Highlights */}
              <section className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Key Engineering Highlights
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column: Tech Stack & Meta */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Tech Stack Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact / Recruiters CTA Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-100/60 to-blue-100/60 dark:from-cyan-950/40 dark:to-blue-950/40 border border-cyan-300/60 dark:border-cyan-800/40 space-y-4 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Interested in this Pipeline?
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  I can build similar production-grade Lakehouse or API data ingestion systems for your organization.
                </p>
                <Link
                  href="/#contact"
                  className="block w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-md"
                >
                  Contact Owais Ahmad
                </Link>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}
