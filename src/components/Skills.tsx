import { Brain, Eye, Code, Server, Smartphone, Database, GitBranch, Cpu } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      items: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Model Training'],
      color: 'blue'
    },
    {
      category: 'Computer Vision',
      icon: Eye,
      items: ['Visual Recognition', 'Image Processing', 'Object Detection', 'CNN'],
      color: 'cyan'
    },
    {
      category: 'Frontend Development',
      icon: Code,
      items: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
      color: 'blue'
    },
    {
      category: 'Backend Development',
      icon: Server,
      items: ['Node.js', 'REST APIs', 'Express.js', 'Authentication'],
      color: 'cyan'
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      items: ['Flutter', 'Dart', 'Cross-platform', 'Mobile UI'],
      color: 'blue'
    },
    {
      category: 'Programming Languages',
      icon: Cpu,
      items: ['Python', 'JavaScript', 'Dart', 'TypeScript'],
      color: 'cyan'
    },
    {
      category: 'Database & Tools',
      icon: Database,
      items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'],
      color: 'blue'
    },
    {
      category: 'Version Control',
      icon: GitBranch,
      items: ['Git', 'GitHub', 'Collaboration', 'CI/CD'],
      color: 'cyan'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Skills & Expertise
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 border border-slate-200"
                >
                  <div className={`bg-gradient-to-br from-${skill.color}-500 to-${skill.color}-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-slate-900">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="text-slate-600 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
