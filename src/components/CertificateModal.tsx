'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Award, ShieldCheck } from 'lucide-react';
import { Certification } from '@/types/portfolio';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    if (!cert) return;

    // Prevent body scroll when modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Close on Escape key press
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert || !cert.certificateUrl) return null;

  const isImage = /\.(jpg|jpeg|png|webp)$/i.test(cert.certificateUrl);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-labelledby="modal-cert-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="w-[95vw] sm:w-[90vw] max-w-4xl h-[88vh] sm:h-[85vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
            <div className="flex items-center gap-3 min-w-0 pr-4">
              <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3
                  id="modal-cert-title"
                  className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate"
                >
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>{cert.issuer}</span>
                  {cert.credentialId && (
                    <>
                      <span>•</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-semibold truncate">
                        ID: {cert.credentialId}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Main Area: Image or PDF Preview */}
          <div className="flex-grow w-full bg-slate-100 dark:bg-slate-950 relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
            {isImage ? (
              <div className="w-full h-full flex items-center justify-center overflow-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.certificateUrl}
                  alt={`${cert.title} Certificate`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md"
                />
              </div>
            ) : (
              <iframe
                src={`${cert.certificateUrl}#toolbar=0`}
                title={`${cert.title} Certificate PDF Preview`}
                className="w-full h-full border-0 rounded-lg"
              />
            )}
          </div>

          {/* Modal Footer Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Certificate Document</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-sm transition-all active:scale-95"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-500" />
                <span>Open Full Certificate</span>
              </a>

              <a
                href={cert.certificateUrl}
                download
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border border-cyan-400/30 shadow-md transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Certificate</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
