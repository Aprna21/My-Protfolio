import { 
  Code2, 
  Database, 
  Globe, 
  Shield, 
  Brain, 
  GitBranch, 
  Monitor, 
  Palette,
  Zap,
  Cpu,
  Lock,
  Bot
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90, icon: 'JS', color: '#F7DF1E' },
        { name: 'TypeScript', level: 85, icon: 'TS', color: '#3178C6' },
        { name: 'Python', level: 80, icon: 'PY', color: '#3776AB' },
        { name: 'Java', level: 75, icon: 'JA', color: '#ED8B00' },
        { name: 'SQL', level: 85, icon: 'SQL', color: '#336791' },
        { name: 'C++', level: 70, icon: 'C++', color: '#00599C' },
        { name: 'C', level: 70, icon: 'C', color: '#A8B9CC' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React.js', level: 95, icon: '⚛️', color: '#61DAFB' },
        { name: 'Node.js', level: 85, icon: '🟢', color: '#339933' },
        { name: 'Tailwind CSS', level: 90, icon: 'TW', color: '#06B6D4' },
        { name: 'Material-UI', level: 80, icon: 'MUI', color: '#0081CB' },
        { name: 'Framer Motion', level: 75, icon: 'FM', color: '#0055FF' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90, icon: 'Git', color: '#F05032' },
        { name: 'VSCode', level: 95, icon: 'VS', color: '#007ACC' },
        { name: 'IntelliJ IDEA', level: 80, icon: 'IJ', color: '#000000' },
        { name: 'Figma', level: 85, icon: 'Figma', color: '#F24E1E' },
        { name: 'Wireshark', level: 70, icon: 'WS', color: '#1679A7' },
        { name: 'Kali Linux', level: 75, icon: 'KL', color: '#557C94' },
      ],
    },
    {
      title: 'Specializations',
      skills: [
        { name: 'Full-Stack Development', level: 90, icon: 'FS', color: '#8B5CF6' },
        { name: 'Front-End Engineering', level: 95, icon: 'FE', color: '#06B6D4' },
        { name: 'Cybersecurity', level: 80, icon: 'CS', color: '#EF4444' },
        { name: 'AI & Machine Learning', level: 75, icon: 'AI', color: '#10B981' },
      ],
    },
  ];

  const getSkillIcon = (skill: any) => {
    const iconStyle = {
      backgroundColor: skill.color,
      color: '#FFFFFF',
      width: '24px',
      height: '24px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
      flexShrink: 0
    };

    // Special handling for emoji icons
    if (skill.icon === '⚛️' || skill.icon === '🟢') {
      return (
        <div style={{ ...iconStyle, fontSize: '16px', backgroundColor: 'transparent' }}>
          {skill.icon}
        </div>
      );
    }

    return (
      <div style={iconStyle}>
        {skill.icon}
      </div>
    );
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-purple-300">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getSkillIcon(skill)}
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s` 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
