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
      skills: [
        { name: 'React.js', level: 96, icon: '⚛️' },
        { name: 'Next.js', level: 92, icon: '▲' },
        { name: 'JavaScript', level: 96, icon: '⭐' },
      ]
    },
    {
      category: 'Styling & UI',
      icon: Palette,
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
                 bg-slate-900 border border-slate-800 shadow-md shadow-gold/5 hover:shadow-lg hover:shadow-gold/20 
                 hover:scale-110 hover:-rotate-3 hover:border-gold/50 transition-all duration-500 
                 cursor-pointer hover:bg-slate-800"
      onMouseEnter={() => setHoveredSkill(skill.name)}
      style={{
        '--rotate': `${index * 90}deg`,
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Orb glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-silver/5 
                      rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all" />

      {/* Icon */}
      <div className="text-3xl mb-2 group-hover:scale-125 transition-transform z-10">
        {skill.icon}
      </div>

      {/* Skill name */}
      <div className="text-sm font-bold text-slate-200 text-center leading-tight z-10">
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
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>
        </defs>
      </svg>

      {/* Particle burst on hover */}
      {hoveredSkill === skill.name && (
        <div className="absolute inset-0">
          {[0, 90, 180, 270].map((deg, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-gold to-silver rounded-full animate-ping"
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
    <section id="skills" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-silver/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-gold/5 to-silver/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div ref={containerRef} className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-slate-900 rounded-lg border border-slate-800 shadow-md shadow-gold/5">
            <Code2 className="w-5 h-5 text-gold" />
            <span className="text-sm font-bold text-slate-200">Technical Mastery</span>
          </div>
          <h2 className="text-2.5xl sm:text-3.5xl lg:text-4.5xl font-black mb-3 text-white leading-tight">
            React Frontend
            <br />
            <span className="bg-gradient-to-r from-gold to-silver bg-clip-text text-transparent">
              Skills Showcase
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Specialised in React ecosystem — from pixel-perfect Tailwind styling to
            silky-smooth Framer Motion animations. Pure frontend excellence.
          </p>
        </div>

        {/* Skills Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {skillsData.map((category, idx) => (
            <div key={category.category} className="space-y-8">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 p-6 bg-slate-900 shadow-sm rounded-2xl border border-slate-800 group hover:border-gold/50 transition-all">
                <div className="p-3 bg-gold/10 rounded-xl">
                  <category.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-200">{category.category}</h3>
                  <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
                    <div
                      className="bg-gradient-to-r from-gold to-silver h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${80 + Math.sin(scrollProgress * Math.PI) * 10}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Skill Orbs */}
              <div className="grid grid-cols-2 gap-2.5">
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
        <div className="bg-slate-900 rounded-lg p-8 border border-slate-800 shadow-xl shadow-gold/5 
                       text-center animate-fade-in-up">
          <h3 className="text-xl font-black text-white mb-4">
            Overall Proficiency Matrix
          </h3>
          <div className="grid grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { label: 'React / Next.js', value: 94 },
              { label: 'Styling & UI', value: 96 },
              { label: 'Animations', value: 88 },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="text-4xl font-black bg-gradient-to-r from-gold to-silver 
                               bg-clip-text text-transparent">{item.value}%</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-gold to-silver h-3 rounded-full shadow-sm"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
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
