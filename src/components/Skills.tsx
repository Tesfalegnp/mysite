// C:\Users\Hope\Desktop\Project_package\mysite\src\components\Skills.tsx
import { 
  Brain, Eye, Code, Server, Smartphone, Database, GitBranch, Cpu,
  Cloud, Shield, TestTube, Palette, PenTool, Terminal, Globe, Lock,
  Layers, Zap, BarChart, PieChart, LineChart, Box, Boxes, Workflow
} from 'lucide-react';
import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'Machine Learning', level: 85, icon: Brain },
        { name: 'Deep Learning', level: 80, icon: Layers },
        { name: 'Neural Networks', level: 75, icon: Boxes },
        { name: 'Computer Vision', level: 85, icon: Eye },
        { name: 'NLP', level: 70, icon: PenTool },
        { name: 'Model Training', level: 80, icon: Zap },
        { name: 'TensorFlow', level: 75, icon: Workflow },
        { name: 'PyTorch', level: 70, icon: Box },
        { name: 'Scikit-learn', level: 85, icon: BarChart }
      ],
      color: 'purple'
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React.js', level: 90, icon: Code },
        { name: 'TypeScript', level: 85, icon: Terminal },
        { name: 'JavaScript', level: 90, icon: Code },
        { name: 'Tailwind CSS', level: 95, icon: Palette },
        { name: 'HTML5/CSS3', level: 95, icon: Globe },
        { name: 'Next.js', level: 75, icon: Layers },
        { name: 'Redux', level: 80, icon: Workflow },
        { name: 'Material-UI', level: 85, icon: Palette }
      ],
      color: 'blue'
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85, icon: Server },
        { name: 'Python', level: 90, icon: Brain },
        { name: 'Express.js', level: 85, icon: Server },
        { name: 'REST APIs', level: 90, icon: Globe },
        { name: 'GraphQL', level: 70, icon: LineChart },
        { name: 'Django', level: 75, icon: Shield },
        { name: 'Flask', level: 80, icon: TestTube }
      ],
      color: 'green'
    },
    {
      id: 'database',
      name: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85, icon: Database },
        { name: 'MongoDB', level: 80, icon: Database },
        { name: 'Supabase', level: 85, icon: Cloud },
        { name: 'Firebase', level: 80, icon: Cloud },
        { name: 'Prisma', level: 75, icon: Workflow },
        { name: 'Redis', level: 70, icon: Zap }
      ],
      color: 'orange'
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 85, icon: Smartphone },
        { name: 'Dart', level: 80, icon: Code },
        { name: 'React Native', level: 75, icon: Code },
        { name: 'Mobile UI/UX', level: 85, icon: Palette }
      ],
      color: 'cyan'
    },
    {
      id: 'devops',
      name: 'DevOps & Tools',
      icon: GitBranch,
      skills: [
        { name: 'Git', level: 90, icon: GitBranch },
        { name: 'Docker', level: 75, icon: Boxes },
        { name: 'CI/CD', level: 70, icon: Workflow },
        { name: 'AWS', level: 65, icon: Cloud },
        { name: 'Linux', level: 80, icon: Terminal },
        { name: 'Jest', level: 75, icon: TestTube }
      ],
      color: 'red'
    },
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: Cpu,
      skills: [
        { name: 'Python', level: 90, icon: Brain },
        { name: 'JavaScript', level: 90, icon: Code },
        { name: 'TypeScript', level: 85, icon: Code },
        { name: 'Dart', level: 80, icon: Code },
        { name: 'SQL', level: 85, icon: Database },
        { name: 'C++', level: 70, icon: Cpu }
      ],
      color: 'yellow'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills' },
    ...skillCategories.map(cat => ({ id: cat.id, name: cat.name }))
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600',
      blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600',
      green: 'from-green-500 to-green-600 bg-green-100 text-green-600',
      orange: 'from-orange-500 to-orange-600 bg-orange-100 text-orange-600',
      cyan: 'from-cyan-500 to-cyan-600 bg-cyan-100 text-cyan-600',
      red: 'from-red-500 to-red-600 bg-red-100 text-red-600',
      yellow: 'from-yellow-500 to-yellow-600 bg-yellow-100 text-yellow-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">
            Skills & Expertise
          </h2>
          <p className="text-center text-slate-600 mb-8 text-base sm:text-lg">
            Technologies and tools I work with
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-purple-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((category) => {
              const Icon = category.icon;
              const colorClasses = getColorClasses(category.color);
              
              return (
                <div
                  key={category.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2 border border-slate-200"
                >
                  <div className={`bg-gradient-to-br ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 text-slate-900">
                    {category.name}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <SkillIcon size={14} className={`${colorClasses.split(' ')[2]}`} />
                              <span className="text-sm text-slate-700">{skill.name}</span>
                            </div>
                            <span className="text-xs font-medium text-slate-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-1.5">
                            <div 
                              className={`bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} h-1.5 rounded-full transition-all duration-500`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}