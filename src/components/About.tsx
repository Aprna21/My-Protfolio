const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Aparna Gupta, a dedicated Full Stack Web Developer with a strong foundation in modern web technologies and a keen interest in cybersecurity.I am continuously expanding my skills to stay aligned with the latest industry trends and technologies. My journey into technology has been driven by curiosity and a problem-solving mindset, allowing me to approach challenges with creativity and persistence. I am deeply interested in exploring the intersections of AI, cybersecurity, and web development to create solutions that make a positive impact.
              </p>
              
              

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 text-purple-300">
                  Problem Solver
                </div>
                <div className="px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 text-purple-300">
                  Cybersecurity Enthusiast
                </div>
                <div className="px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 text-purple-300">
                  AI Explorer
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300 ">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">📍Location</span>
                    <span className="text-white">Patna, India</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">🎓 Education</span>
                    <div className="text-white text-right space-y-1">
                      <div>Btech-C.S.E (Expected 2026)</div>
                      <div>BSc-Data Science (Expected 2028)</div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-400">🚀 Focus</span>
                    <span className="text-white">Full Stack Web Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">⏳️ Availability </span>
                    <span className="text-green-400">Open to Work</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-400">📄 Resume</span>
                    <div className="flex gap-4">
                      <a
                        href="/aparna-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-purple-400 hover:text-purple-600 transition-colors duration-200 focus:outline-none"
                        title="View Resume"
                      >
                        👁️
                      </a>
                      <a
                        href="/aparna-resume.pdf"
                        download
                        className="text-xl text-purple-400 hover:text-purple-600 transition-colors duration-200 focus:outline-none"
                        title="Download Resume"
                      >
                        ⬇️
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
