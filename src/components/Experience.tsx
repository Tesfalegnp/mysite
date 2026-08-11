import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0d1322] border-y border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE & TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional Experience & <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Engineering real business systems, AI research pipelines, and institutional technology initiatives.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 z-0 opacity-30"></div>

          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative z-10 glass-card rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300 space-y-6"
            >
              {/* Card Top Row */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-mono font-medium border ${
                        exp.isCurrent
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                          : 'bg-purple-950/80 text-purple-300 border-purple-700/60'
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-purple-400">{exp.organization}</div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>

              {/* Key Responsibilities */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                  Key Responsibilities & Contributions
                </h4>
                <div className="grid sm:grid-cols-1 gap-2">
                  {exp.responsibilities.map((resp: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2">TECH STACK:</span>
                {exp.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-slate-900/90 text-purple-300 text-xs font-mono border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
