import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070a12] border-t border-slate-800/80 py-12 text-slate-400 text-xs font-mono">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-200 font-bold text-sm">{profileData.name}</div>
              <div className="text-[11px] text-purple-400">{profileData.title}</div>
            </div>
          </div>

          {/* Center Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-purple-400 transition-colors"
              aria-label="Email Direct"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right Credit */}
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Architected with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Addis Ababa, Ethiopia</span>
            <span>•</span>
            <span className="text-emerald-400">Remote-Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}