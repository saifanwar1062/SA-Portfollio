// components/Experience.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Briefcase, 
  Code2, 
  Zap, 
  Award, 
  Star, 
  Rocket,
  Github,
  ExternalLink
} from 'lucide-react';

const Experience = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [counters, setCounters] = useState({ totalProjects: 0, totalCommits: 0 });
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  const experiences = [
    {
      title: "Web Developer",
      company: "Brain Mentors",
      duration: "2022",
      description: "Collaborated with elite team to build high-performance web applications. Integrated AI features that boosted user engagement by 10% and optimized core web vitals.",
      achievements: ["10% engagement increase", "AI feature integration", "Performance optimization"],
      icon: "🧠"
    },
    {
      title: "Web Developer Intern",
      company: "Mobisoft Technologies", 
      duration: "2022 - 2023",
      description: "Hands-on experience across full development lifecycle. Mastered React ecosystem, API integrations, and production deployment workflows.",
      achievements: ["Production deployments", "API integrations", "React mastery"],
      icon: "🚀"
    },
    {
      title: "Graduate Engineer Trainee",
      company: "HCL Technologies",
      duration: "2024 - 2025",
      description: "Developed frontend for GenAI-powered PV Intake Application using Next.js + TypeScript for U.S. life sciences client. Delivered enterprise-grade solution with 99.9% uptime.",
      achievements: ["Enterprise Next.js app", "TypeScript migration", "99.9% uptime"],
      icon: "🏢"
    },
  ];

  const projects = [
    {
      title: "NK Studio",
      description: "Modern design studio with immersive animations, parallax effects, and seamless UX. Built with Next.js + Framer Motion.",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      link: "#",
      stats: "12k+ visits"
    },
    {
      title: "Hajj & Umrah Platform",
      description: "Full-stack travel booking system with real-time availability, payment integration, and multilingual support.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
      stats: "Live project"
    },
    {
      title: "Portfolio 2025",
      description: "This very site! Cutting-edge animations, 3D interactions, and performance-optimized with a dark blue theme.",
      tech: ["React", "Tailwind", "Canvas"],
      link: "#",
      stats: "You're viewing it!"
    },
  ];

  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setCounters({ totalProjects: 24, totalCommits: 1500 });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [experiences.length]);

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-violet-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-violet-500/3 rounded-full blur-3xl animate-pulse mx-auto left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-gradient-to-r 
                          from-purple-500/15 to-violet-500/15 rounded-3xl border 
                          border-purple-400/40 backdrop-blur-xl shadow-2xl shadow-purple-500/30 mx-auto max-w-max">
            <Briefcase className="w-7 h-7 text-purple-400" />
            <span className="text-xl font-bold text-purple-100">Professional Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r 
                         from-purple-300 via-violet-200 to-purple-100 bg-clip-text text-transparent 
                         leading-tight">
            Experience & 
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-purple-100/80 max-w-3xl mx-auto leading-relaxed">
            From internships to enterprise solutions - delivering results that matter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Experience Timeline */}
          <div ref={timelineRef}>
            <h3 className="text-3xl font-black text-purple-50 mb-12 flex items-center gap-4 justify-center">
              <Calendar className="w-10 h-10 text-purple-400" />
              Work Experience
            </h3>

            {/* Interactive Timeline */}
            <div className="relative space-y-8 max-w-2xl mx-auto">
              {experiences.map((exp, index) => {
                const isActive = activeTimeline === index;
                return (
                  <div
                    key={index}
                    className={`group relative p-8 lg:p-10 bg-gradient-to-br from-violet-950/70 
                               to-slate-900/70 backdrop-blur-xl rounded-3xl border 
                               border-purple-700/50 shadow-2xl shadow-purple-500/30 
                               hover:shadow-purple-400/50 hover:scale-105 hover:-translate-y-2 
                               transition-all duration-700 cursor-pointer ${isActive ? 
                               'border-purple-500/80 shadow-purple-400/60 ring-4 ring-purple-500/30' : ''}`}
                    onClick={() => setActiveTimeline(index)}
                  >
                    {/* Magnetic glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 
                                   to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 
                                   transition-opacity ${isActive ? 'opacity-100' : ''} -z-10`} />
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br 
                                   from-purple-500/30 to-violet-500/30 rounded-2xl mb-6 mx-auto 
                                   shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all">
                      <span className="text-3xl">{exp.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-2xl lg:text-3xl font-black text-purple-50 mb-3">
                        {exp.title}
                      </h4>
                      <div className="flex items-center justify-center gap-2 mb-4 text-purple-400">
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                        <span className="font-bold">{exp.company}</span>
                        <span className="text-purple-300/70">• {exp.duration}</span>
                      </div>
                      
                      <p className="text-purple-100/90 leading-relaxed mb-6">{exp.description}</p>

                      {/* Achievements */}
                      {isActive && (
                        <div className="grid grid-cols-3 gap-3 pt-6 border-t border-violet-800/50">
                          {exp.achievements.map((ach, i) => (
                            <div key={i} className="group flex items-center gap-2 p-3 bg-violet-900/50 
                                                   rounded-xl hover:bg-violet-900/80 transition-all">
                              <Star className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <span className="text-sm text-purple-200 font-medium">{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 
                                     bg-purple-500/90 backdrop-blur-sm px-6 py-2 rounded-2xl 
                                     border border-purple-400/50 shadow-2xl shadow-purple-500/50">
                        <Zap className="w-4 h-4 text-white" />
                        <span className="text-white font-bold text-sm uppercase tracking-wide">
                          Featured Experience
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-violet-800/50">
              <div className="text-center p-6">
                <div className="text-3xl font-black text-purple-400 mb-2">
                  {counters.totalProjects || 0}+
                </div>
                <div className="text-purple-300/90 font-medium">Projects</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-black text-violet-400 mb-2">
                  {counters.totalCommits || 0}+
                </div>
                <div className="text-purple-300/90 font-medium">Commits</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-black text-purple-400 mb-2">3+</div>
                <div className="text-purple-300/90 font-medium">Companies</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-black text-purple-400 mb-2">2+</div>
                <div className="text-purple-300/90 font-medium">Years</div>
              </div>
            </div>
          </div>

          {/* Projects Showcase */}
          <div>
            <h3 className="text-3xl font-black text-purple-50 mb-12 flex items-center gap-4 justify-center">
              <Rocket className="w-10 h-10 text-purple-400" />
              Featured Projects
            </h3>

            {/* Project Cards */}
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-violet-950/70 to-slate-900/70 
                            backdrop-blur-xl rounded-3xl p-8 border border-purple-700/50 
                            shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/50 
                            hover:scale-105 hover:-translate-y-3 transition-all duration-700 
                            overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 
                                 to-violet-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 
                                 transition-opacity -z-10" />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h4 className="text-2xl lg:text-3xl font-black text-purple-50 mb-2 group-hover:text-purple-100">
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-violet-900/60 backdrop-blur-sm 
                                                  rounded-xl text-purple-300 text-sm font-medium 
                                                  group-hover:bg-violet-900/80 transition-all">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all ml-auto">
                      <a href={project.link} className="p-3 bg-purple-500/20 rounded-2xl hover:bg-purple-500/40 transition-all">
                        <Github className="w-5 h-5 text-purple-300" />
                      </a>
                      <a href={project.link} className="p-3 bg-purple-500/20 rounded-2xl hover:bg-purple-500/40 transition-all">
                        <ExternalLink className="w-5 h-5 text-purple-300" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-purple-100/90 leading-relaxed mb-6 group-hover:text-purple-100">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-violet-800/50">
                    <span className="text-purple-400/90 font-semibold text-sm uppercase tracking-wide">
                      {project.stats}
                    </span>
                    <div className="flex items-center gap-2 p-3 bg-violet-900/50 rounded-2xl 
                                   group-hover:bg-violet-900/80 transition-all">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-purple-300 font-medium">Featured</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
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
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Experience;
