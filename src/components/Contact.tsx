
import { useState } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <Mail className="text-purple-400 group-hover:text-purple-300" size={24} />
                <span className="text-gray-300 group-hover:text-white">your.email@example.com</span>
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <Linkedin className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                <span className="text-gray-300 group-hover:text-white">LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/yourprofile"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <Github className="text-gray-400 group-hover:text-gray-300" size={24} />
                <span className="text-gray-300 group-hover:text-white">GitHub Profile</span>
              </a>

              <a
                href="https://twitter.com/yourprofile"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <Twitter className="text-blue-400 group-hover:text-blue-300" size={24} />
                <span className="text-gray-300 group-hover:text-white">Twitter Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 glow-effect"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-purple-500/20 text-center">
        <p className="text-gray-400">
          © 2024 Your Name. Made with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default Contact;
