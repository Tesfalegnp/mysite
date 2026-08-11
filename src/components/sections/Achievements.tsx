import { Trophy, Award, GraduationCap, Users } from 'lucide-react';
import { achievementsData } from '../../data/achievements';

export default function Achievements() {
  const getIcon = (id: string) => {
    if (id.includes('bsc')) return GraduationCap;
    if (id.includes('student-union')) return Users;
    if (id.includes('deeplearning')) return Award;
    return Trophy;
  };

  return (
    <section id="achievements" className="py-20 bg-[#0b0f19] relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>EDUCATION & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Academic Degree & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Verified academic milestones, certifications, and institutional leadership roles.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((ach) => {
            const IconComp = getIcon(ach.id);
            return (
              <div
                key={ach.id}
                className="glass-card rounded-2xl p-6 hover:border-purple-500/40 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-950/90 border border-purple-700/60 flex items-center justify-center text-purple-300 shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{ach.title}</h3>
                        <div className="text-xs text-purple-400 font-mono mt-0.5">{ach.issuer}</div>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800 shrink-0">
                      {ach.badgeText}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{ach.period}</span>
                  {ach.highlight && (
                    <span className="text-emerald-400 font-semibold">{ach.highlight}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
