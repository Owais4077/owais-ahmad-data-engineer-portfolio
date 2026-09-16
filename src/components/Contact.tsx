'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle, 
  MessageSquare,
  Loader2
} from 'lucide-react';
import { personalData } from '@/data/personal';
import { MotionWrapper } from './MotionWrapper';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to send via FormSubmit');
      }
    } catch {
      // Fallback to mailto link if direct AJAX post fails or offline
      const mailtoSubject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${personalData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white/50 dark:bg-[#060913] relative transition-colors duration-200">
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
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {"Let's Build Reliable Data Systems"}
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
          
          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <MotionWrapper delay={0.1} direction="left">
              <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {"I'm open to "}
                <strong className="text-slate-900 dark:text-white">Data Engineering opportunities</strong>
                {", collaborations, and projects involving scalable data pipelines, Lakehouse platforms, analytics infrastructure, and API integrations."}
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.2} direction="left">
              <div className="space-y-4 pt-2">
                
                {/* Email Card */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      {personalData.email}
                    </div>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      linkedin.com/in/owais-ahmad-79a431292
                    </div>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-sm transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">GitHub Repositories</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      github.com/Owais4077
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalData.location}
                    </div>
                  </div>
                </div>

              </div>
            </MotionWrapper>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <MotionWrapper delay={0.3} direction="right">
              <div className="p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md dark:shadow-2xl relative">
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Send a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-3"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {"Thank you for reaching out! Your message has been sent directly to "}
                      <span className="text-cyan-700 dark:text-cyan-300 font-mono font-semibold">{personalData.email}</span>.
                      {" I will review your message and reply to you shortly."}
                    </p>
                    <button
                      onClick={() => {
                        setFormData({ name: '', email: '', subject: '', message: '' });
                        setIsSubmitted(false);
                      }}
                      className="mt-4 px-4 py-2 text-xs font-mono text-cyan-700 dark:text-cyan-300 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-xs font-mono text-slate-600 dark:text-slate-400">Your Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Hiring Manager"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-xs font-mono text-slate-600 dark:text-slate-400">Your Email *</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-xs font-mono text-slate-600 dark:text-slate-400">Subject</label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Data Engineer Opportunity / Project Inquiry"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-xs font-mono text-slate-600 dark:text-slate-400">Message *</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your role requirements or project scope..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border border-cyan-400/30 shadow-md flex items-center justify-center gap-2 transition-all active:scale-98 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>{"Let's Connect"}</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                  </form>
                )}

              </div>
            </MotionWrapper>
          </div>

        </div>
      </div>
    </section>
  );
};
