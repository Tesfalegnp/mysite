import { Github, Mail, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Tesfalegn Petros
              </h3>
              <p className="text-slate-400 mb-4">
                AI Engineer & Full Stack Developer passionate about creating intelligent solutions
                and building impactful applications.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://github.com/Tesfalegnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:tesfalegn@example.com"
                  className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
              <p className="text-slate-400 text-sm">
                Open to collaborations and exciting opportunities
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                &copy; {currentYear} Tesfalegn Petros. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                Built with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
