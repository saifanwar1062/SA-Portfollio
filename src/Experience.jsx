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
   
  ];

  const projects = [
    {
      title: "Klyrosys",
      description: "Modern high-performance React web platform with immersive UI and smooth animations.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://klyrosys.com",
      stats: "Live Production"
    },
    {
      title: "Galaxy Hajj",
      description: "Hajj & Umrah travel booking portal with dynamic packages and real-time enquiry flow.",
      tech: ["React", "Next.js", "REST API"],
      link: "https://galaxyhajj.com",
      stats: "Live Project"
    },
    {
      title: "Al Ziyarah Tours",
      description: "Premium Islamic tour operator site with elegant design and conversion-focused UX.",
      tech: ["React", "Styled Components", "Responsive"],
      link: "https://alziyarahtours.com",
      stats: "Live Project"
    },
    {
      title: "Umra Chalo",
      description: "Umrah service platform with lazy-loaded images, animated sections and booking enquiry system.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "https://umrachalo.com",
      stats: "Live Project"
    },
    {
      title: "Blue Wave Cruise",
      description: "Luxury cruise site with hero video, animated counters and WhatsApp-integrated enquiry.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      link: "https://bluewavecruise.in",
      stats: "Live Project"
    },
    {
      title: "Insha Umrah",
      description: "Umrah package booking site with clean navigation, comparison cards, and testimonials.",
      tech: ["React", "CSS3", "JavaScript"],
      link: "https://inshaumrah.com",
      stats: "Live Project"
    },
    {
      title: "Safar e Muqaddas",
      description: "Sacred journey travel platform with smooth transitions, gallery, and testimonial carousel.",
      tech: ["React", "Tailwind CSS", "Swiper.js"],
      link: "https://safaremuqaddas.in",
      stats: "Live Project"
    },
    {
      title: "A Rumah Services",
      description: "Professional Umrah services portal with WhatsApp CTA, service pages and SEO optimisation.",
      tech: ["React", "Next.js", "Tailwind CSS"],
      link: "https://arumrahservices.com",
      stats: "Live Project"
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
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-full blur-3xl animate-pulse mx-auto left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white rounded-3xl border border-slate-200 shadow-sm mx-auto max-w-max">
            <Briefcase className="w-7 h-7 text-indigo-500" />
            <span className="text-xl font-bold text-slate-800">Professional Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-slate-800 leading-tight">
            Experience &
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              Live React Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From internships to enterprise solutions - delivering results that matter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Experience Timeline */}
          <div ref={timelineRef}>
            <h3 className="text-3xl font-black text-slate-800 mb-12 flex items-center gap-4 justify-center">
              <Calendar className="w-10 h-10 text-indigo-500" />
              Work Experience
            </h3>

            {/* Interactive Timeline */}
            <div className="relative space-y-8 max-w-2xl mx-auto">
              {experiences.map((exp, index) => {
                const isActive = activeTimeline === index;
                return (
                  <div
                    key={index}
                    className={`group relative p-8 lg:p-10 bg-white rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-indigo-100 hover:border-indigo-300 hover:scale-105 hover:-translate-y-2 transition-all duration-700 cursor-pointer ${isActive ? 
                               'border-indigo-400 shadow-indigo-100 ring-4 ring-indigo-50' : ''}`}
                    onClick={() => setActiveTimeline(index)}
                  >
                    {/* Magnetic glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'opacity-100' : ''} -z-10`} />
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-20 h-20 bg-indigo-50 rounded-2xl mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:bg-indigo-100 transition-all">
                      <span className="text-3xl">{exp.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-2xl lg:text-3xl font-black text-slate-800 mb-3">
                        {exp.title}
                      </h4>
                      <div className="flex items-center justify-center gap-2 mb-4 text-indigo-600">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
                        <span className="font-bold">{exp.company}</span>
                        <span className="text-slate-500">• {exp.duration}</span>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">{exp.description}</p>

                      {/* Achievements */}
                      {isActive && (
                        <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                          {exp.achievements.map((ach, i) => (
                            <div key={i} className="group flex items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all border border-slate-100">
                              <Star className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 font-medium">{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-500 px-6 py-2 rounded-2xl shadow-md">
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

          
          </div>

          {/* Projects Showcase */}
          <div>
            <h3 className="text-3xl font-black text-slate-800 mb-12 flex items-center gap-4 justify-center">
              <Rocket className="w-10 h-10 text-indigo-500" />
              Featured Projects
            </h3>

            {/* Project Cards */}
            <div className="space-y-6 max-h-[800px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-indigo-100 hover:border-indigo-300 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-violet-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-black text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2.5 py-0.5 bg-indigo-50 rounded-lg text-indigo-600 border border-indigo-100 text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-auto">
                      <a href={project.link} target="_blank" rel="noopener noreferrer"
                         className="p-2 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-all">
                        <ExternalLink className="w-4 h-4 text-slate-500" />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Stats + live badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-indigo-600 font-semibold text-xs uppercase tracking-wide">
                      {project.stats}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                      <span className="text-xs text-emerald-600 font-medium">Live Site</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
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
