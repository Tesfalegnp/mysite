import { Github, Mail, Download, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-10 bg-cover bg-center"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Tesfalegn Petros
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-blue-300 mb-6">
              AI Engineer & Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into intelligent solutions through cutting-edge AI and full-stack development.
              Experienced in machine learning, computer vision, and building scalable applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              View Projects
            </button>
            <a
              href="/cv.pdf"
              download
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="https://github.com/Tesfalegnp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 border border-slate-600"
            >
              <Github size={20} />
              Visit GitHub
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Tesfalegnp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:tesfalegn@example.com"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowDown size={32} className="text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
