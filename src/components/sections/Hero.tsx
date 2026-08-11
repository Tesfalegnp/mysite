import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, Bot, Database, Cpu, Terminal, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.playbackRate = 0.6;
      } catch (err) {
        console.warn('Unable to set video playback rate:', err);
      }
    }
  }, []);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      try {
        videoRef.current.playbackRate = 0.6;
      } catch (err) {
        console.warn('Unable to set video playback rate:', err);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const stackNodes = [
    { icon: Code2, label: 'Frontend', text: 'React & TypeScript' },
    { icon: Terminal, label: 'REST API', text: 'Node.js & FastAPI' },
    { icon: Bot, label: 'AI / RAG', text: 'GraphRAG & Agents' },
    { icon: Database, label: 'Databases', text: 'PostgreSQL & Redis' },
    { icon: Cpu, label: 'Automation', text: 'n8n & Pipelines' }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-tech-grid overflow-hidden">
      {/* Background Video */}
      {!videoError && (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 motion-reduce:hidden">
          <video
            ref={videoRef}
            src="/images/make_just_working_office_short.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            onLoadedMetadata={handleLoadedMetadata}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* Dark / Gradient Overlay for Maximum Text Readability */}
      <div className="absolute inset-0 bg-[#0b0f19]/75 bg-gradient-to-b from-[#0b0f19]/85 via-[#0b0f19]/65 to-[#0b0f19]/90 pointer-events-none z-[1]" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-[2]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-[2]" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/50 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-purple-300">
                Available for Engineering Opportunities
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Building Intelligent Systems & <span className="text-gradient">Scalable Software</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-purple-400/90 font-mono">
                {profileData.title}
              </p>
            </div>

            {/* Tagline / Subheading */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {profileData.tagline}
            </p>

            {/* Current Roles Pill */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-slate-400">ENGAGED WITH:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs font-medium">
                iCog-Labs (AI Engineer)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs font-medium">
                Hemin Business PLC (Full-Stack)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-purple-950/60 transition-all hover:scale-[1.02] group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all hover:scale-[1.02]"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>View GitHub Repos</span>
              </a>
            </div>

            {/* Direct Contact Icons */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs font-mono text-slate-500">CONNECT:</span>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-purple-950/60 text-slate-300 hover:text-purple-300 border border-slate-800 hover:border-purple-700 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-purple-950/60 text-slate-300 hover:text-purple-300 border border-slate-800 hover:border-purple-700 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/60 hover:bg-purple-950/60 text-slate-300 hover:text-purple-300 border border-slate-800 hover:border-purple-700 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual System Node Diagram */}
          <div className="lg:col-span-5">
            <div className="relative glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-6">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-purple-400/80 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>system_architecture.ts</span>
                </div>
              </div>

              {/* Stack Flow Visual Nodes */}
              <div className="space-y-3 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-5 bottom-5 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-400 z-0 opacity-40"></div>

                {stackNodes.map((node, idx) => {
                  const IconComp = node.icon;
                  return (
                    <div
                      key={idx}
                      className="relative z-10 flex items-center gap-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-purple-500/50 transition-all hover:translate-x-1"
                    >
                      <div className="w-9 h-9 rounded-lg bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-300 shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-mono text-purple-300">{node.label}</div>
                        <div className="text-sm font-semibold text-slate-100 truncate">{node.text}</div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-800/80">
                        L{idx + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Code Snippet Summary */}
              <div className="p-3.5 rounded-xl bg-[#070a12] border border-slate-800/90 font-mono text-xs text-slate-300 space-y-1">
                <div className="text-slate-500">// Engineering Mandate</div>
                <div>
                  <span className="text-purple-400">const</span> mindset ={' '}
                  <span className="text-cyan-300">'Architect'</span> →{' '}
                  <span className="text-cyan-300">'Integrate'</span> →{' '}
                  <span className="text-cyan-300">'Automate'</span> →{' '}
                  <span className="text-cyan-300">'Deploy'</span>;
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
