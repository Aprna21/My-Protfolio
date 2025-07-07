
import { useState } from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
   
    {
      title: 'InfiNews - News Aggregation Platform',
      description: 'A responsive, modern web-based news aggregator developed using HTML5, CSS3, and JavaScript. Integrated with NewsAPI to fetch real-time news updates with custom filtering by category and keyword.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'NewsAPI'],
      githubUrl: 'https://github.com/Aprna21/InfiNews',
    },
    
    {
      title: 'FinanceWiz - Smart Tax Calculator & Savings Optimizer',
      description: 'A finance-focused application designed to assist users with tax calculation and savings planning using React.js, TypeScript, and Node.js. Offers visual insights and personalized suggestions.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'Chart.js'],
      githubUrl: 'https://github.com/Aprna21/FinanceWiz',
    },
    {
      title: 'CareSync - Intelligent Routine Reminder App',
      description: 'A productivity and wellness-focused application that provides non-intrusive reminders for daily habits. Developed using React.js and TypeScript with offline capabilities and analytics.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React.js', 'TypeScript', 'Service Workers', 'IndexedDB'],
      githubUrl: 'https://github.com/Aprna21/CareSync',
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
                
                {/* Overlay Link */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
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

                {/* GitHub Link */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <Github size={16} />
                    View Code
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
