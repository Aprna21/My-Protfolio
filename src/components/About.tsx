
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
                Hello! I'm Aparna Gupta, a passionate Full Stack Developer with expertise in 
                modern web technologies and cybersecurity. Currently pursuing BTECH-C.S.E from 
                Amity University, Patna, with a strong foundation in React.js, Node.js, and 
                cutting-edge development practices.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans from cybersecurity training at ACMEGRADE to hands-on web 
                development experience at STUINTERN and The Entrepreneurship Network (TEN). 
                I specialize in creating responsive, user-friendly applications with a focus 
                on performance and security.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 text-purple-300">
                  Problem Solver
                </div>
                <div className="px-4 py-2 bg-cyan-900/30 rounded-full border border-cyan-500/30 text-cyan-300">
                  Cybersecurity Enthusiast
                </div>
                <div className="px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 text-purple-300">
                  AI Explorer
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white">Patna, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Age</span>
                    <span className="text-white">21 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Education</span>
                    <span className="text-white">BTECH-C.S.E (Expected 2026)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Focus</span>
                    <span className="text-white">Full Stack Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-green-400">Open to Work</span>
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
