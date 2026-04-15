// components/Skills.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Server, 
  Cloud, 
  Zap, 
  Brain,
  Mountain,
  Award,
  Leaf
} from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  // Skills data — Frontend React focused
  const skillsData = [
    { 
      category: 'Core React', 
      icon: Code2, 
      color: 'blue', 
      skills: [
        { name: 'React.js', level: 96, icon: '⚛️' },
        { name: 'Next.js', level: 92, icon: '▲' },
        { name: 'TypeScript', level: 88, icon: '🔷' },
        { name: 'JavaScript', level: 96, icon: '⭐' },
      ]
    },
    { 
      category: 'Styling & UI', 
      icon: Palette, 
      color: 'sky', 
      skills: [
        { name: 'Tailwind CSS', level: 98, icon: '🎨' },
        { name: 'CSS3 / SCSS', level: 95, icon: '💎' },
        { name: 'Styled Comp.', level: 85, icon: '💅' },
        { name: 'Figma', level: 83, icon: '🖌️' },
      ]
    },
    { 
      category: 'Animation', 
      icon: Zap, 
      color: 'blue', 
      skills: [
        { name: 'Framer Motion', level: 90, icon: '🎬' },
        { name: 'GSAP', level: 78, icon: '🌀' },
        { name: 'CSS Animate', level: 95, icon: '✨' },
        { name: 'Three.js', level: 70, icon: '🌐' },
      ]
    },
    { 
      category: 'Tools & Deploy', 
      icon: Cloud, 
      color: 'sky', 
      skills: [
        { name: 'Git / GitHub', level: 95, icon: '🌿' },
        { name: 'Vite / Webpack', level: 88, icon: '⚡' },
        { name: 'Vercel', level: 92, icon: '🚀' },
        { name: 'React Query', level: 85, icon: '🔄' },
      ]
    },
  ];

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY - containerRef.current?.offsetTop + window.innerHeight) / 2;
      setScrollProgress(Math.min(scrolled / 500, 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SkillOrb = ({ skill, index, categoryColor }) => (
    <div
      className="group relative aspect-square rounded-3xl p-6 flex flex-col items-center justify-center 
                 bg-gradient-to-br from-blue-950/70 to-slate-900/70 backdrop-blur-xl border 
                 border-blue-500/40 shadow-2xl shadow-blue-500/25 hover:shadow-blue-400/50 
                 hover:scale-110 hover:-rotate-3 hover:border-blue-400/70 transition-all duration-500 
                 cursor-pointer hover:from-blue-900/80 hover:to-slate-800/80"
      onMouseEnter={() => setHoveredSkill(skill.name)}
      style={{ 
        '--rotate': `${index * 90}deg`,
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Orb glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-sky-500/20 
                      rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all" />
      
      {/* Icon */}
      <div className="text-3xl mb-2 group-hover:scale-125 transition-transform z-10">
        {skill.icon}
      </div>
      
      {/* Skill name */}
      <div className="text-sm font-bold text-blue-50 text-center leading-tight z-10">
        {skill.name}
      </div>
      
      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={`url(#grad-${skill.name})`}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${skill.level * 1.32}, 132`}
          className="transform -rotate-90 origin-center"
        />
        <defs>
          <linearGradient id={`grad-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#023E84" />
            <stop offset="100%" stopColor="#0077B6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particle burst on hover */}
      {hoveredSkill === skill.name && (
        <div className="absolute inset-0">
          {[0, 90, 180, 270].map((deg, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-sky-400 rounded-full animate-ping"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(40px)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-sky-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-sky-500/3 rounded-full blur-3xl animate-pulse" />
      </div>

      <div ref={containerRef} className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-gradient-to-r 
                          from-blue-500/15 to-sky-500/15 rounded-3xl border 
                          border-blue-400/40 backdrop-blur-xl shadow-2xl shadow-blue-500/30">
            <Code2 className="w-7 h-7 text-blue-400" />
            <span className="text-xl font-bold text-blue-100">Technical Mastery</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r 
                         from-blue-300 via-sky-200 to-blue-100 bg-clip-text text-transparent 
                         leading-tight">
            React Frontend
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
              Skills Showcase
            </span>
          </h2>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Specialised in React ecosystem — from pixel-perfect Tailwind styling to
            silky-smooth Framer Motion animations. Pure frontend excellence.
          </p>
        </div>

        {/* Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {skillsData.map((category, idx) => (
            <div key={category.category} className="space-y-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 p-6 bg-blue-950/60 backdrop-blur-xl 
                             rounded-2xl border border-blue-700/50 group hover:border-blue-500/70">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-xl shadow-lg shadow-blue-500/30">
                  <category.icon className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-blue-50">{category.category}</h3>
                  <div className="w-full bg-blue-900/50 rounded-full h-2 mt-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-sky-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${80 + Math.sin(scrollProgress * Math.PI) * 10}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Skill Orbs */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <SkillOrb
                    key={skill.name}
                    skill={skill}
                    index={i}
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Proficiency Overview */}
        <div className="bg-gradient-to-br from-blue-950/70 to-slate-900/70 backdrop-blur-2xl 
                       rounded-3xl p-12 border border-blue-500/30 shadow-2xl shadow-blue-500/25 
                       text-center animate-fade-in-up">
          <h3 className="text-3xl font-black text-blue-50 mb-6">
            Overall Proficiency Matrix
          </h3>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'React / Next.js', value: 94 },
              { label: 'Styling & UI', value: 96 },
              { label: 'Animations', value: 88 },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-sky-400 
                               bg-clip-text text-transparent">{item.value}%</div>
                <div className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="w-full bg-blue-900/50 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-sky-500 h-3 rounded-full shadow-lg"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
