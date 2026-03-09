import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI Visual Recognition System',
      description: 'Advanced computer vision system for object detection and classification using deep learning models. Implemented with Python, TensorFlow, and OpenCV.',
      tags: ['Python', 'TensorFlow', 'Computer Vision', 'OpenCV'],
      github: 'https://github.com/Tesfalegnp',
      demo: null,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'OpenPsi Research Contributions',
      description: 'Contributed to the OpenPsi cognitive architecture project at iCog Labs, working on AI research and development for intelligent agent systems.',
      tags: ['AI Research', 'Python', 'Machine Learning', 'Cognitive Systems'],
      github: 'https://github.com/Tesfalegnp',
      demo: null,
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Full Stack E-Commerce Platform',
      description: 'Modern e-commerce web application with user authentication, product management, shopping cart, and payment integration. Built with React and Node.js.',
      tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
      github: 'https://github.com/Tesfalegnp',
      demo: null,
      image: 'https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Flutter Mobile App',
      description: 'Cross-platform mobile application with real-time data synchronization, offline support, and beautiful UI. Includes authentication and cloud storage.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Mobile'],
      github: 'https://github.com/Tesfalegnp',
      demo: null,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Machine Learning Model Pipeline',
      description: 'End-to-end ML pipeline for data preprocessing, model training, evaluation, and deployment. Includes automated model versioning and monitoring.',
      tags: ['Python', 'scikit-learn', 'MLOps', 'Docker'],
      github: 'https://github.com/Tesfalegnp',
      demo: null,
      image: 'https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with user authentication, group chats, file sharing, and real-time notifications. Built with React and Node.js.',
      tags: ['React', 'Node.js', 'WebSocket', 'Real-time'],
      github: 'https://github.com/Tesfalegnp',
      demo: null,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Featured Projects
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Showcasing my work in AI, full-stack development, and mobile applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={18} />
                        Demo
                      </a>
                    )}
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
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Github size={20} />
              View More Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
