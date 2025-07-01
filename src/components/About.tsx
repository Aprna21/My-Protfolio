
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
                Hello! I'm a passionate Full Stack Developer with a keen eye for creating 
                exceptional digital experiences. My journey in web development started with 
                curiosity and has evolved into a deep love for crafting elegant solutions 
                to complex problems.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern web technologies and enjoy working on projects that 
                challenge me to learn and grow. My goal is to build applications that not 
                only look beautiful but also provide seamless user experiences.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 text-purple-300">
                  Problem Solver
                </div>
                <div className="px-4 py-2 bg-cyan-900/30 rounded-full border border-cyan-500/30 text-cyan-300">
                  Creative Thinker
                </div>
                <div className="px-4 py-2 bg-purple-900/30 rounded-full border border-purple-500/30 text-purple-300">
                  Team Player
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white">Your City, Country</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-white">3+ Years</span>
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
