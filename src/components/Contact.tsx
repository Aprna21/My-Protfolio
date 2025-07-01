
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-semibold mb-6 text-purple-300">Let's Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 animate-fade-in">
                  <div className="p-3 bg-purple-900/30 rounded-full border border-purple-500/30">
                    <Mail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Primary Email</p>
                    <a href="mailto:aparnagupta.302003@gmail.com" className="text-white hover:text-purple-400 transition-colors">
                      aparnagupta.302003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 animate-fade-in">
                  <div className="p-3 bg-cyan-900/30 rounded-full border border-cyan-500/30">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Academic Email</p>
                    <a href="mailto:24f1000747@ds.study.iitm.ac.in" className="text-white hover:text-cyan-400 transition-colors">
                      24f1000747@ds.study.iitm.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 animate-fade-in">
                  <div className="p-3 bg-purple-900/30 rounded-full border border-purple-500/30">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Patna, Bihar, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                <a
                  href="https://github.com/Aprna21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-purple-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
