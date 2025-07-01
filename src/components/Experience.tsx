
const Experience = () => {
  const experiences = [
    {
      title: 'Front-End Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Developed responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UI components.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Built custom websites for clients using modern web technologies. Optimized website performance and implemented SEO best practices.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc.',
      period: '2020 - 2021',
      description: 'Assisted in developing web applications and learned full-stack development principles. Participated in code reviews and agile development processes.',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express'],
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-cyan-600"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full border-4 border-gray-900"></div>
                
                {/* Content */}
                <div className="ml-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <span className="text-purple-400 font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-cyan-300 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
