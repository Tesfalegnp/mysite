import { useState } from 'react';
import { Mail, Phone, Send, Linkedin, Github, MessageSquare, CheckCircle, Code, Globe, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatus('submitting');

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    setTimeout(() => {
      setStatus('success');
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#0d1322] border-t border-slate-800 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Let's Build <span className="text-gradient">Something Meaningful</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Available for AI engineering, full-stack software development, RAG architecture, and consulting opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Verified Contact Channels</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-purple-400">EMAIL</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-purple-400">PHONE</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`https://t.me/${profileData.telegram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all text-slate-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-purple-400">TELEGRAM</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {profileData.telegram}
                    </div>
                  </div>
                </a>
              </div>

              {/* Developer Profiles Grid */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="text-xs font-mono text-slate-400">DEVELOPER PROFILES:</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  {profileData.leetcode && (
                    <a
                      href={profileData.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                    >
                      <Code className="w-4 h-4 text-amber-400" />
                      <span>LeetCode</span>
                    </a>
                  )}

                  {profileData.codeforces && (
                    <a
                      href={profileData.codeforces}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800"
                    >
                      <Globe className="w-4 h-4 text-rose-400" />
                      <span>Codeforces</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800"
            >
              <h3 className="text-xl font-bold text-white">Send Direct Message</h3>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-200 text-xs font-mono">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-xs font-mono flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Preparing message in your default email client...</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080d19] border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono text-slate-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080d19] border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-slate-300">Subject</label>
                <input
                  type="text"
                  placeholder="e.g. AI Engineering Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080d19] border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-xs font-mono text-slate-300">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project, timeline, or engineering opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080d19] border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-purple-950 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Processing...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}