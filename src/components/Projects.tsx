
import { useState } from 'react';
import { Github, Arrow-right } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'API Integration', 'Chart.js', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20 backdrop-blur-sm overflow-hidden hover:border-purple-500/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Overlay Links */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                  >
                    <Arrow-right size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Arrow-right size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
