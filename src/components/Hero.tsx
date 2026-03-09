// src/components/Hero.tsx

import { Github, Mail, Download, ArrowDown, Phone, Linkedin, Code, Facebook } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {

  const roles = [
    "AI Engineer",
    "Full Stack Developer",
    "ML Enthusiast",
    "Problem Solver",
    "Tech Innovator"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const topIndex = (index - 1 + roles.length) % roles.length;
  const centerIndex = index;
  const bottomIndex = (index + 1) % roles.length;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* PROFILE IMAGE */}
          <div className="relative group">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-spin-slow"></div>

            <div className="absolute inset-2 rounded-full bg-slate-900"></div>

            <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">

              <img
                src="../../images/profile.jpg"
                alt="Tesfalegn Petros"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full">

              <Code size={22} />

            </div>

          </div>

          {/* CONTENT */}
          <div className="flex-1 text-center lg:text-left">

            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Tesfalegn Petros
              </span>
            </h1>

            {/* ROTATING ROLE TEXT */}
            <div className="flex items-center justify-center lg:justify-start mb-6">

              <span className="text-xl text-purple-300 mr-3 font-semibold">
                I'm a
              </span>

              <div className="relative w-[260px] h-[90px] overflow-hidden">

                {/* TOP */}
                <div
                  key={topIndex}
                  className="absolute w-full text-center lg:text-left transition-all duration-700"
                  style={{
                    top: "0%",
                    opacity: 0.25,
                    transform: "scale(0.9)",
                    filter: "blur(1px)"
                  }}
                >
                  <span className="text-sm bg-purple-600/10 px-3 py-1 rounded-lg">
                    {roles[topIndex]}
                  </span>
                </div>

                {/* CENTER */}
                <div
                  key={centerIndex}
                  className="absolute w-full text-center lg:text-left transition-all duration-700"
                  style={{
                    top: "35%",
                    opacity: 1
                  }}
                >
                  <span className="text-xl font-medium bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-lg shadow-lg">
                    {roles[centerIndex]}
                  </span>
                </div>

                {/* BOTTOM */}
                <div
                  key={bottomIndex}
                  className="absolute w-full text-center lg:text-left transition-all duration-700"
                  style={{
                    top: "75%",
                    opacity: 0.25,
                    transform: "scale(0.9)",
                    filter: "blur(1px)"
                  }}
                >
                  <span className="text-sm bg-purple-600/10 px-3 py-1 rounded-lg">
                    {roles[bottomIndex]}
                  </span>
                </div>

              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-300 max-w-xl mb-8">
              Transforming ideas into intelligent solutions through AI and full-stack development.
              Passionate about machine learning, scalable systems, and solving real-world problems.
            </p>

            {/* STATS */}
            <div className="flex justify-center lg:justify-start gap-8 mb-8">

              <div>
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-slate-400">Years Learning</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>

              <div>
                <div className="text-2xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">

              <button
                onClick={() => scrollToSection("projects")}
                className="px-7 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
              >
                <Code size={18} />
                View Projects
              </button>

              <a
                href="/cv.pdf"
                download
                className="px-7 py-3 bg-slate-700 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div className="flex justify-center lg:justify-start gap-3">

              <a href="https://github.com/Tesfalegnp" target="_blank" className="bg-slate-800 p-3 rounded-lg hover:scale-110 transition">
                <Github size={18} />
              </a>

              <a href="https://www.linkedin.com/in/developertesfalegn/" target="_blank" className="bg-slate-800 p-3 rounded-lg hover:scale-110 transition">
                <Linkedin size={18} />
              </a>

              <a href="mailto:peterhope935@gmail.com" className="bg-slate-800 p-3 rounded-lg hover:scale-110 transition">
                <Mail size={18} />
              </a>

              <a href="tel:+251916225842" className="bg-slate-800 p-3 rounded-lg hover:scale-110 transition">
                <Phone size={18} />
              </a>

              <a href="https://web.facebook.com/tesfalegn.petrosson" target="_blank" className="bg-slate-800 p-3 rounded-lg hover:scale-110 transition">
                <Facebook size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={30} className="text-purple-400" />
        </button>

      </div>

    </section>
  );
}
