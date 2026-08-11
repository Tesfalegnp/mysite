import { useState } from 'react';
import { Cpu, Code2, Server, Smartphone, Database, Bot, Workflow, Wrench } from 'lucide-react';
import { skillsData } from '../data/skills';
import { SkillDomain, SkillTier, Skill } from '../types';

export default function Skills() {
  const [selectedDomain, setSelectedDomain] = useState<SkillDomain | 'all'>('all');
  const [selectedTier, setSelectedTier] = useState<SkillTier | 'all'>('all');

  const domainCategories: { id: SkillDomain | 'all'; label: string; icon: any }[] = [
    { id: 'all', label: 'All Domains', icon: Cpu },
    { id: 'ai-llm', label: 'AI & LLM', icon: Bot },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'mobile', label: 'Mobile AI', icon: Smartphone },
    { id: 'automation', label: 'Automation', icon: Workflow },
    { id: 'devops', label: 'DevOps', icon: Wrench },
  ];

  const filteredSkills = skillsData.filter((skill: Skill) => {
    if (selectedDomain !== 'all' && skill.domain !== selectedDomain) return false;
    if (selectedTier !== 'all' && skill.tier !== selectedTier) return false;
    return true;
  });

  return (
    <section id="skills" className="py-20 bg-[#0d1322] border-y border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE SKILL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Technical Stack & <span className="text-gradient">Proficiencies</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Categorized by engineering domains and verified production experience.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {domainCategories.map((domain) => {
            const IconComp = domain.icon;
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  selectedDomain === domain.id
                    ? 'bg-purple-600 text-white font-semibold shadow-lg shadow-purple-950 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{domain.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tier Filter Pills */}
        <div className="flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
          <span>TIER:</span>
          {(['all', 'core', 'applied', 'supporting'] as const).map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`capitalize px-3 py-1 rounded-lg border transition-colors ${
                selectedTier === tier
                  ? 'bg-purple-950 text-purple-300 border-purple-700 font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill: Skill, idx: number) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 border border-slate-800 hover:border-purple-500/40 transition-all space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-100">{skill.name}</h3>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono capitalize ${
                      skill.tier === 'core'
                        ? 'bg-purple-950 text-purple-300 border border-purple-800'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {skill.tier}
                  </span>
                </div>
                {skill.description && (
                  <p className="text-xs text-slate-300 leading-relaxed">{skill.description}</p>
                )}
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-purple-400/80 uppercase">
                {skill.domain}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}