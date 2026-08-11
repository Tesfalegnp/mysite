import { GraduationCap, Award, Compass, CheckCircle2, User } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0b0f19] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Software with <span className="text-gradient">Integrity & Precision</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Software Engineering graduate with hands-on experience across full-stack systems, AGI research, and mobile computer vision.
          </p>
        </div>

        {/* Top Grid: Bio & Education */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Compass className="w-5 h-5 text-purple-400" />
              <span>Professional Introduction</span>
            </h3>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {profileData.bio.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Facts List */}
            <div className="pt-4 border-t border-slate-800/80 grid sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>B.Sc. Software Engineering (CGPA 3.66)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AGI & Symbolic AI Research (iCog-Labs)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise ERP Development (Hemin Business PLC)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Student Union President (Mizan Tepi Univ.)</span>
              </div>
            </div>
          </div>

          {/* Education & Current Focus Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-purple-500 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-700/60 flex items-center justify-center text-purple-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-100">B.Sc. in Software Engineering</h4>
                    <div className="text-xs text-purple-400 font-mono">Mizan Tepi University</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-300 text-xs font-mono border border-purple-800">
                  CGPA 3.66
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Core Focus: Machine Learning, Distributed Systems, Algorithm Complexity, Software Architecture, and Database Management Systems.
              </p>
            </div>

            {/* Current Focus Card */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <h4 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Current Technical Focus</span>
              </h4>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                {profileData.currentFocus.map((focus: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">▹</span>
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Grid: Engineering Philosophy */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-100">Engineering Philosophy</h3>
            <p className="text-xs font-mono text-purple-400 mt-1">A disciplined 4-phase delivery framework</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profileData.philosophy.map((item: { title: string; description: string }, idx: number) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 border border-slate-800/80 hover:border-purple-500/40 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 font-bold">0{idx + 1}</span>
                  <span className="text-xs font-mono text-slate-500">PHASE</span>
                </div>
                <h4 className="text-base font-bold text-slate-100">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}