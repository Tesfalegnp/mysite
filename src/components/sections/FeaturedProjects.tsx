import { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles, FolderGit2 } from 'lucide-react';
import { curatedProjects } from '../../data/projects';
import { Project, ProjectCategory } from '../../types';
import ProjectModal from '../projects/ProjectModal';

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'ai-rag', label: 'AI & RAG' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile AI' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? curatedProjects
    : curatedProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-[#0d1322] border-y border-slate-800/80 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CURATED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="text-gradient">Engineering Work</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Detailed technical breakdowns of key software systems, AI pipelines, and enterprise architectures I have designed and built.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/50 font-semibold scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Top Badge & Title */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-950/90 text-purple-300 border border-purple-800/80">
                      {project.typeLabel}
                    </span>
                    <FolderGit2 className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Problem Summary snippet */}
                <div className="p-3 rounded-xl bg-[#080d19] border border-slate-800/80 text-xs text-slate-300 space-y-1">
                  <span className="font-mono text-[10px] text-purple-400 uppercase font-bold block">PROBLEM & APPROACH</span>
                  <p className="line-clamp-2 text-slate-300 text-[11px] leading-normal">{project.problem}</p>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900 text-purple-300/90 text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[11px] font-mono border border-slate-800">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                >
                  <Eye className="w-4 h-4" />
                  <span>Case Study</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-purple-950 hover:bg-purple-900 text-purple-300 border border-purple-800 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
