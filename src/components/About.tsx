// C:\Users\Hope\Desktop\Project_package\mysite\src\components\About.tsx
import { GraduationCap, Briefcase, Award } from 'lucide-react'; // Remove unused imports

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">
            About Me
          </h2>
          <p className="text-center text-slate-600 mb-12 text-base sm:text-lg">
            Get to know the person behind the code
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                I'm Tesfalegn Petros, a passionate AI Engineer and Full Stack Developer with a strong foundation
                in software engineering. My journey in tech started with curiosity about how things work,
                which evolved into a deep passion for creating intelligent solutions.
              </p>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                Currently, I'm focusing on bridging the gap between AI research and practical applications.
                I believe in the power of technology to solve real-world problems and make a positive impact
                on people's lives.
              </p>
              
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">2+</div>
                  <div className="text-sm text-slate-600">Years of Learning</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">10+</div>
                  <div className="text-sm text-slate-600">Technologies</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">6+</div>
                  <div className="text-sm text-slate-600">Certifications</div>
                </div>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">Education</h3>
                    <p className="text-slate-700">Bachelor's Degree in Software Engineering</p>
                    <p className="text-purple-600 font-medium mt-1">Mizan Tepi University (2020-2024)</p>
                    <p className="text-sm text-slate-600 mt-2">GPA: 3.7/4.0</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">Internship</h3>
                    <p className="text-slate-700">AI Research & Development Intern</p>
                    <p className="text-blue-600 font-medium mt-1">iCog Labs, Addis Ababa</p>
                    <p className="text-sm text-slate-600 mt-2">• Contributed to OpenPsi cognitive architecture</p>
                    <p className="text-sm text-slate-600">• Worked on AI research projects</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900">Achievements</h3>
                    <p className="text-slate-700">• AI/ML Certification - Coursera</p>
                    <p className="text-slate-700">• Full Stack Development - Udemy</p>
                    <p className="text-slate-700">• Flutter Development - Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coding Profiles */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-slate-900">
              Coding Profiles
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://leetcode.com/u/Tesfish-12/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all hover:scale-105"
              >
                <img src="https://leetcode.com/favicon.ico" alt="LeetCode" className="w-5 h-5" />
                <span className="font-medium">LeetCode</span>
              </a>
              <a
                href="https://codeforces.com/profile/Tesfalegn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all hover:scale-105"
              >
                <img src="https://codeforces.com/favicon.ico" alt="CodeForces" className="w-5 h-5" />
                <span className="font-medium">CodeForces</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}