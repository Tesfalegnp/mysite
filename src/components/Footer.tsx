// C:\Users\Hope\Desktop\Project_package\mysite\src\components\Footer.tsx
import { Github, Mail, Linkedin, Heart, Phone, MessageCircle, Facebook, Code2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Tesfalegn Petros
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                AI Engineer & Full Stack Developer passionate about creating intelligent solutions
                and building impactful applications that make a difference.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-purple-400 transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-purple-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-purple-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-purple-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-slate-400">
                  <Mail size={16} className="text-purple-400" />
                  <a href="mailto:peterhope935@gmail.com" className="hover:text-purple-400 transition-colors">
                    peterhope935@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Phone size={16} className="text-purple-400" />
                  <a href="tel:+251916225842" className="hover:text-purple-400 transition-colors">
                    +251 916 225 842
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <MessageCircle size={16} className="text-purple-400" />
                  <a href="https://t.me/tesfa935" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                    @tesfa935
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex flex-wrap gap-3 mb-4">
                <a
                  href="https://github.com/Tesfalegnp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2.5 rounded-lg hover:bg-slate-700 transition-all hover:scale-110"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/developertesfalegn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2.5 rounded-lg hover:bg-slate-700 transition-all hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://web.facebook.com/tesfalegn.petrosson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2.5 rounded-lg hover:bg-slate-700 transition-all hover:scale-110"
                  title="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/Tesfish-12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2.5 rounded-lg hover:bg-slate-700 transition-all hover:scale-110"
                  title="LeetCode"
                >
                  <Code2 size={20} />
                </a>
              </div>
              <p className="text-slate-400 text-xs">
                Open to collaborations and exciting opportunities
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
                &copy; {currentYear} Tesfalegn Petros. All rights reserved.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm flex items-center gap-2">
                Built with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}