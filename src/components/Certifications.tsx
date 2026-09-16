'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { certificationsData } from '@/data/certifications';
import { Certification } from '@/types/portfolio';
import { MotionWrapper } from './MotionWrapper';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 bg-white/50 dark:bg-[#060913] relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <MotionWrapper>
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-0.5 bg-cyan-500 rounded-full"
            />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-semibold">
              PROFESSIONAL CREDENTIALS
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Certifications & Training
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Technical training and course credentials across Databricks Academy, IBM, and regional IT boards.
              </p>
            </div>
          </div>
        </MotionWrapper>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <MotionWrapper key={cert.id} delay={idx * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="h-full p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-slate-700 transition-all shadow-md dark:shadow-lg backdrop-blur-md flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  
                  {/* Issuer Badge Header */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                      cert.badgeType === 'Databricks'
                        ? 'bg-red-100 dark:bg-red-950/40 text-red-800 dark:text-red-300 border-red-300 dark:border-red-800/40'
                        : cert.badgeType === 'IBM'
                        ? 'bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800/40'
                        : 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800/40'
                    }`}>
                      {cert.issuer}
                    </span>
                    <Award className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:rotate-6 transition-transform" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Date & Credential ID */}
                  <div className="space-y-1 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                    <div>Issued: {cert.date}</div>
                    {cert.credentialId && (
                      <div className="text-cyan-700 dark:text-cyan-400/90 font-semibold truncate">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>

                  {/* Skills Covered Pills */}
                  {cert.skillsCovered && cert.skillsCovered.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skillsCovered.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[9px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

                {/* Card Footer: Status & View Certificate Button */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono">
                  {cert.credentialId || cert.isVerifiedCredential ? (
                    <span className="flex items-center gap-1 text-cyan-700 dark:text-cyan-400 font-semibold text-[10px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Credential
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-[10px]">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      Training Course
                    </span>
                  )}

                  {/* View Certificate Action Button */}
                  {cert.certificateUrl && (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      aria-label={`View ${cert.title} certificate`}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800/60 hover:border-cyan-500/60 transition-all active:scale-95 shadow-sm group/btn"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-3 h-3 text-cyan-600 dark:text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  )}
                </div>

              </motion.div>
            </MotionWrapper>
          ))}
        </div>

      </div>

      {/* PDF Modal Viewer */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
