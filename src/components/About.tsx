import { GraduationCap, Briefcase, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            About Me
          </h2>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              I'm Tesfalegn Petros, a passionate AI Engineer and Full Stack Developer with a strong foundation
              in software engineering and a keen interest in artificial intelligence and machine learning.
              I specialize in creating intelligent, scalable solutions that bridge the gap between cutting-edge
              AI research and practical applications.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to solve real-world problems
              using innovative approaches. From computer vision systems to full-stack web applications, I enjoy
              the challenge of building products that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Education</h3>
              <p className="text-slate-700">
                Bachelor's Degree in Software Engineering
              </p>
              <p className="text-blue-600 font-medium mt-2">
                Mizan Tepi University
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Internship</h3>
              <p className="text-slate-700">
                6-month AI Research & Development Internship
              </p>
              <p className="text-blue-600 font-medium mt-2">
                iCog Labs, Addis Ababa
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Research</h3>
              <p className="text-slate-700">
                Contributed to AI research projects
              </p>
              <p className="text-blue-600 font-medium mt-2">
                OpenPsi Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
