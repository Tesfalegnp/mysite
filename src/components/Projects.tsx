// C:\Users\Hope\Desktop\Project_package\mysite\src\components\Projects.tsx
import { ExternalLink, Github, Eye, Star, GitFork } from 'lucide-react'; // Remove 'Code'
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'AI Visual Recognition System',
      description: 'Advanced computer vision system for object detection and classification using deep learning models. Achieved 95% accuracy on test dataset.',
      longDescription: 'Implemented YOLOv5 and ResNet architectures for real-time object detection. Built custom dataset with 10,000+ annotated images. Deployed using TensorFlow Serving.',
      tags: ['Python', 'TensorFlow', 'Computer Vision', 'OpenCV', 'YOLO', 'ResNet'],
      github: 'https://github.com/Tesfalegnp/ai-vision-system',
      demo: null,
      stars: 45,
      forks: 12,
      category: 'ai',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'OpenPsi Research Contributions',
      description: 'Contributed to OpenPsi cognitive architecture at iCog Labs. Implemented attention mechanisms and memory modules.',
      longDescription: 'Worked on implementing cognitive cycles and emotional components. Integrated with ROS for robotic applications. Published research paper in collaboration.',
      tags: ['AI Research', 'Python', 'Machine Learning', 'Cognitive Systems', 'ROS'],
      github: 'https://github.com/Tesfalegnp/openpsi-contributions',
      demo: null,
      stars: 32,
      forks: 8,
      category: 'ai',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Full Stack E-Commerce Platform',
      description: 'Modern e-commerce platform with user authentication, product management, and payment integration.',
      longDescription: 'Features include product search, filters, shopping cart, order tracking, admin dashboard, and payment gateway integration (Stripe). Used by 500+ users.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      github: 'https://github.com/Tesfalegnp/ecommerce-platform',
      demo: 'https://ecommerce-demo.com',
      stars: 78,
      forks: 23,
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Flutter Social Media App',
      description: 'Cross-platform social media app with real-time features and beautiful UI.',
      longDescription: 'Includes posts, stories, likes, comments, direct messaging, push notifications, and profile customization. Built with BLoC pattern for state management.',
      tags: ['Flutter', 'Dart', 'Firebase', 'BLoC', 'FCM'],
      github: 'https://github.com/Tesfalegnp/flutter-social-app',
      demo: null,
      stars: 56,
      forks: 15,
      category: 'mobile',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'ML Model Pipeline',
      description: 'End-to-end ML pipeline with automated training and deployment.',
      longDescription: 'Features data preprocessing, model versioning, experiment tracking with MLflow, and automated deployment to AWS. Includes monitoring and alerting.',
      tags: ['Python', 'MLOps', 'Docker', 'AWS', 'MLflow', 'CI/CD'],
      github: 'https://github.com/Tesfalegnp/ml-pipeline',
      demo: null,
      stars: 41,
      forks: 9,
      category: 'ai',
      image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat app with group chats and file sharing.',
      longDescription: 'Features include private and group chats, message reactions, typing indicators, online status, file sharing, and end-to-end encryption.',
      tags: ['React', 'Node.js', 'WebSocket', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/Tesfalegnp/real-time-chat',
      demo: 'https://chat-demo.com',
      stars: 63,
      forks: 18,
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with Kanban board.',
      longDescription: 'Features task creation, assignment, due dates, file attachments, comments, and real-time updates. Includes team analytics and productivity reports.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
      github: 'https://github.com/Tesfalegnp/task-manager',
      demo: null,
      stars: 34,
      forks: 7,
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with AI integration and animations.',
      longDescription: 'Built with React, TypeScript, and Tailwind CSS. Features dark mode, animations with Framer Motion, and AI-powered chat assistant.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/Tesfalegnp/portfolio',
      demo: 'https://tesfalegn.dev',
      stars: 28,
      forks: 5,
      category: 'frontend',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-center text-slate-600 mb-8 text-base sm:text-lg">
            Showcasing my work in AI, full-stack development, and mobile applications
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category.id
                    ? 'bg-purple-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-purple-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Project stats overlay */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <Star size={12} /> {project.stars}
                    </span>
                    <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <GitFork size={12} /> {project.forks}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-3 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-slate-700 hover:text-purple-600 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-700 hover:text-purple-600 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                    <button
                      onClick={() => {
                        // Add modal functionality here
                        alert(project.longDescription);
                      }}
                      className="flex items-center gap-1.5 text-slate-700 hover:text-purple-600 transition-colors text-sm font-medium ml-auto"
                    >
                      <Eye size={16} />
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Tesfalegnp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}