import { useEffect } from 'react';
import { X, Github, ExternalLink, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-950 text-purple-300 border border-purple-800">
              {project.typeLabel}
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-base leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Problem & Approach */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold">
              <AlertCircle className="w-4 h-4" />
              <span>THE CHALLENGE</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>ENGINEERING APPROACH</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{project.approach}</p>
          </div>
        </div>

        {/* Architecture Flow Steps (If present) */}
        {project.architectureSteps && project.architectureSteps.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>System Architecture Breakdown</span>
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.architectureSteps.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#080d1a] border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-purple-300 font-semibold">
                    0{idx + 1}. {step.label}
                  </div>
                  <div className="text-xs text-slate-400">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
            Key Features & Capabilities
          </h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="text-purple-400">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-4 border-t border-slate-800 space-y-2">
          <div className="text-xs font-mono text-slate-400">TECHNOLOGY STACK:</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-slate-900 text-purple-300 text-xs font-mono border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all"
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>View Source Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-lg shadow-purple-900/50"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
