
const Experience = () => {
  const experiences = [
    {
      title: 'React JS Developer Intern',
      company: 'The Entrepreneurship Network (TEN)',
      period: 'May 2025 - Present',
      description: 'Developed a personal portfolio web application using React.js, showcasing interactive UI components and responsive design. Gained hands-on experience with modern JavaScript (ES6+), React hooks, and component-based architecture.',
      technologies: ['React.js', 'JavaScript (ES6+)', 'React Hooks', 'Component Architecture', 'Git'],
    },
    {
      title: 'Web Developer Intern',
      company: 'STUINTERN',
      period: 'May 2024 - July 2024',
      description: 'Developed & optimized responsive web pages using HTML, CSS, and JavaScript. Improved user experience across devices and assisted in debugging front-end issues, reducing error rate and enhancing overall site performance.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Debugging'],
    },
    {
      title: 'Cybersecurity Trainee',
      company: 'ACMEGRADE',
      period: 'July 2023 - August 2023',
      description: 'Covered core principles: CIA Triad, authentication, access control, firewalls, encryption. Learned basics of network security, common attack types (phishing, malware, DDoS). Gained introductory hands-on experience using tools like Wireshark and Kali Linux.',
      technologies: ['Network Security', 'CIA Triad', 'Wireshark', 'Kali Linux', 'Risk Management'],
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
