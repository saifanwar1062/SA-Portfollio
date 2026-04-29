// components/About.js
import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Target,
  Zap,
  Brain,
  Rocket,
  Sparkles,
  Layers,
  Palette,
  Globe,
  Terminal,
  GitBranch,
  Code2,
  ChevronRight,
  Download,
  ExternalLink,
  Coffee,
  Music,
  Camera,
  BookOpen,
  Gamepad2,
  Dumbbell,
  Plane,
  MapPin,
  Users,
  Code,
  Clock,
  Star,
  Wifi,
  Infinity as InfinityIcon,
  Sparkle,
  Zap as Lightning,
  ShieldCheck
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import resumePdf from './assets/Saif Anwar Updated Resume 29 Apl.pdf';


const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counterValues, setCounterValues] = useState({ projects: 0, clients: 0, experience: 0, hours: 0 });

  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Counter animation for stats
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;

      Object.entries({ projects: 30, clients: 25, experience: 3, hours: 8000 }).forEach(([key, target], index) => {
        let current = 0;
        const stepValue = target / steps;
        let step = 0;

        const timer = setInterval(() => {
          current += stepValue;
          step++;
          setCounterValues(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));

          if (step >= steps) {
            clearInterval(timer);
            setCounterValues(prev => ({
              ...prev,
              [key]: target
            }));
          }
        }, duration / steps);
      });
    }
  }, [isInView]);

  // Stats with animated counters
  const stats = [
    {
      label: "Years Experience",
      value: counterValues.experience,
      suffix: "+",
      icon: Calendar,
      color: "#FFD700",
      description: "React development"
    },
    {
      label: "Projects Delivered",
      value: counterValues.projects,
      suffix: "+",
      icon: Target,
      color: "#D4AF37",
      description: "Live web projects"
    },
    {
      label: "Happy Clients",
      value: counterValues.clients,
      suffix: "+",
      icon: Users,
      color: "#C0C0C0",
      description: "Satisfied customers"
    },
    {
      label: "Coding Hours",
      value: counterValues.hours,
      suffix: "+",
      icon: Clock,
      color: "#A9A9A9",
      description: "Lines of React code"
    },
  ];



  // Skills data — frontend focused
  const skills = {
    frontend: [
      { name: "React.js", level: 96, icon: Code2, description: "Hooks, Context, Patterns" },
      { name: "Next.js", level: 92, icon: Zap, description: "SSR, ISR, App Router" },
      { name: "JavaScript", level: 88, icon: Terminal, description: "Type safety & interfaces" },
      { name: "Tailwind CSS", level: 98, icon: Palette, description: "Utility-first styling" },
    ],
    animations: [
      { name: "Framer Motion", level: 90, icon: Sparkles, description: "Gestures & transitions" },
      { name: "CSS Animations", level: 95, icon: Palette, description: "Keyframes & transitions" },
   
    ],
    tooling: [
      { name: "Git / GitHub", level: 95, icon: GitBranch, description: "Version control" },
      { name: "Vite", level: 88, icon: Zap, description: "Build tools" },
      { name: "Figma", level: 85, icon: Palette, description: "Design handoff" },
      { name: "Vercel / Netlify", level: 90, icon: Rocket, description: "Deployment" },
    ],
  };

  // Hobbies with golden and silver theme colors
  const hobbies = [
    { icon: BookOpen, label: "Tech Reading", color: "#FFD700", description: "Stay updated with trends" },
    { icon: Camera, label: "Photography", color: "#D4AF37", description: "Creative compositions" },
    { icon: Music, label: "Music Production", color: "#C0C0C0", description: "Electronic & ambient" },
    { icon: Gamepad2, label: "Strategy Games", color: "#A9A9A9", description: "Problem solving" },
    { icon: Dumbbell, label: "Fitness", color: "#b08d27", description: "Health & wellness" },
    { icon: Plane, label: "Travel", color: "#808080", description: "Explore new places" },
    { icon: Coffee, label: "Coffee Art", color: "#FFD700", description: "Morning ritual" },
    { icon: Wifi, label: "Tech Gadgets", color: "#D4AF37", description: "Latest devices" },
  ];

  // Development philosophy
  const philosophy = [
    {
      title: "Clean Code Architecture",
      description: "Write maintainable, scalable, and efficient code",
      icon: Code,
      principles: ["SOLID Principles", "Design Patterns", "Code Reviews", "Testing"],
      color: "#0ea5e9"
    },
    {
      title: "User-Centric Design",
      description: "Build intuitive and accessible user experiences",
      icon: Sparkle,
      principles: ["UX Research", "Accessibility", "Performance", "Responsive"],
      color: "#3b82f6"
    },
    {
      title: "Continuous Learning",
      description: "Stay updated with evolving technologies",
      icon: Brain,
      principles: ["Experimentation", "Documentation", "Mentorship", "Community"],
      color: "#06b6d4"
    },
    {
      title: "Performance First",
      description: "Optimize for speed and efficiency",
      icon: Lightning,
      principles: ["Lazy Loading", "Caching", "Bundle Optimization", "Monitoring"],
      color: "#00B4D8"
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden"
    >
      {/* Animated blue gradient background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-slate-950" />

          {/* Animated gradient circles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-gold/5 to-silver/5 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-silver/5 to-gold/5 blur-3xl"
          />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                             linear-gradient(0deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
                x: [0, Math.sin(i) * 100, 0],
                y: [0, Math.cos(i) * 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-gold/20 to-silver/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-14"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 mb-5 px-5 py-2.5 bg-slate-900 backdrop-blur-xl rounded-lg border border-gold/10 shadow-lg shadow-black/50"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-gold" />
            </motion.div>
            <span className="text-sm font-semibold text-slate-200">
              About Md. Saif Anwar
            </span>
          </motion.div>

          <h1 className="text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            <span className="block bg-gradient-to-r from-gold via-silver to-gold bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>

          <p className="text-sm md:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-6">
            Building pixel-perfect React experiences from{' '}
            <span className="text-gold font-semibold">New Delhi, India</span>.
            Turning complex designs into lightning-fast, responsive, and beautiful web applications.
          </p>


          <div className="flex flex-wrap justify-center gap-2.5">
            <motion.a
              href={resumePdf}
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-gold-dark to-gold text-black font-semibold rounded-lg shadow-lg shadow-gold/10 hover:shadow-gold/20 transition-all flex items-center gap-2 text-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="https://github.com/saifanwar1062"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-slate-900 border border-slate-800 text-slate-100 font-semibold rounded-lg shadow-lg hover:bg-slate-800 hover:border-gold/30 transition-all flex items-center gap-2 text-sm cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              View GitHub
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 lg:mb-14"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-slate-900 rounded-lg p-4 border border-slate-800 shadow-xl shadow-black/50 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-2 rounded-lg bg-gold/5"
                  >
                    <Icon className="w-5 h-5 text-gold" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-black text-white mb-0.5">
                      {stat.value}
                      <span className="text-gold">{stat.suffix}</span>
                    </div>
                    <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.description}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Personal Intro */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-black/50 overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-gold-dark via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-full w-full bg-slate-900 rounded-3xl" />
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-40 h-40 rounded-2xl bg-gradient-to-br from-gold/30 to-silver/30 p-1"
                    >
                      <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                        <Brain className="w-20 h-20 text-gold" />
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-gold-dark to-gold rounded-xl flex items-center justify-center shadow-lg shadow-gold/50"
                    >
                      <Code2 className="w-6 h-6 text-black" />
                    </motion.div>
                  </div>


                  <div className="flex-1">
                    <h2 className="text-3xl font-black text-white mb-3">
                      Md. Saif Anwar
                    </h2>
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium text-slate-300">New Delhi, India</span>
                    </div>
                    <div className="text-sm font-semibold text-silver mb-6">Frontend Developer</div>

                    <p className="text-lg text-slate-400 leading-relaxed mb-8">
                      Dedicated Frontend Developer specialised in React.js, responsive UI development, and REST API integration. 
                      Expertise in React.js, JavaScript, HTML, CSS, Tailwind CSS, and API Integration — delivering high-performance web applications.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {["React Expert", "Next.js", "Tailwind CSS", "Framer Motion", "Figma"].map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                          className="px-4 py-2 bg-gold/5 rounded-full text-sm font-medium text-gold border border-gold/20 hover:border-gold/50 transition-all shadow-sm"
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Current Focus */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex-1 flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl shadow-lg">
                    <div className="p-3 bg-gold/10 rounded-lg">
                      <Code2 className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">React & Next.js</h4>
                      <p className="text-sm text-slate-400">Production-ready frontends</p>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl shadow-lg">
                    <div className="p-3 bg-silver/10 rounded-lg">
                      <Sparkles className="w-6 h-6 text-silver" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">UI / Animations</h4>
                      <p className="text-sm text-slate-400">Framer Motion & Tailwind</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { id: 'skills', label: 'React Skills', icon: Code2 },
                { id: 'philosophy', label: 'Philosophy', icon: Brain },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-xl ${isActive
                      ? 'bg-gradient-to-r from-gold-dark to-gold text-black shadow-gold/20'
                      : 'bg-slate-900 border text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-gold hover:border-gold/30'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-3 gap-8"
                >
                  {Object.entries(skills).map(([category, items]) => (
                    <motion.div
                      key={category}
                      whileHover={{ y: -5 }}
                      className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-gold/30 shadow-2xl transition-all"
                    >
                      <h3 className="text-2xl font-black text-white mb-8 capitalize">
                        {category}
                      </h3>

                      <div className="space-y-6">
                        {items.map((skill, i) => {
                          const Icon = skill.icon;
                          return (
                            <motion.div
                              key={i}
                              whileHover={{ x: 5 }}
                              onHoverStart={() => setHoveredSkill(skill.name)}
                              onHoverEnd={() => setHoveredSkill(null)}
                              className="group"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 bg-gold/5 rounded-lg group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-gold" />
                                  </div>
                                  <span className="font-semibold text-slate-200">
                                    {skill.name}
                                  </span>
                                </div>
                                <span className="text-gold font-mono font-medium">
                                  {skill.level}%
                                </span>
                              </div>

                              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
                                />
                              </div>
                              <p className="text-xs text-slate-500 mt-1">{skill.description}</p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'philosophy' && (
                <motion.div
                  key="philosophy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {philosophy.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-gold/30 shadow-2xl transition-all group"
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-4 bg-gold/5 rounded-2xl group-hover:scale-110 transition-transform">
                            <Icon className="w-8 h-8 text-gold" />
                          </div>
                          <div>
                            <h4 className="text-2xl font-black text-white mb-2">{item.title}</h4>
                            <p className="text-slate-400">{item.description}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.principles.map((principle, j) => (
                            <motion.span
                              key={j}
                              whileHover={{ scale: 1.05 }}
                              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:bg-slate-700 transition-colors"
                            >
                              {principle}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Hobbies & Interests */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-black/50"
            >
              <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                <Coffee className="w-6 h-6 text-gold" />
                Beyond Code
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                {hobbies.map((hobby, i) => {
                  const Icon = hobby.icon;
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative p-4 bg-slate-800 rounded-2xl border border-slate-700 hover:border-gold/30 transition-all duration-300 cursor-pointer shadow-lg"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="p-3 rounded-xl group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${hobby.color}15` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: hobby.color }} />
                        </motion.div>
                        <span className="text-sm font-medium text-slate-200">
                          {hobby.label}
                        </span>
                        <p className="text-xs text-slate-400">{hobby.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-black/50"
            >
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-gold" />
                Quick Stats
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Code Quality</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Project Delivery</span>
                  <span className="text-gold font-semibold">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Client Satisfaction</span>
                  <span className="text-gold font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Bug Free Code</span>
                  <span className="text-gold font-semibold">99.5%</span>
                </div>
              </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-2xl shadow-black/50"
            >
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-gold" />
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "JavaScript", "Tailwind", "Framer Motion", "Figma", "Vite", "Git/GitHub"].map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-slate-800 text-gold rounded-lg text-sm font-medium border border-slate-700 shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-slate-900 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl shadow-black/50 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-black text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-slate-400 text-lg">
                Let's collaborate on your next project and create something extraordinary together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-7 py-5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-black font-bold rounded-xl shadow-lg shadow-gold/10 hover:shadow-gold/20 transition-all flex items-center gap-3"
              >
                <span>Start a Project</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-5 bg-slate-800 border border-slate-700 text-slate-100 font-bold rounded-xl hover:bg-slate-700 hover:border-gold/30 transition-all shadow-lg"
              >
                View Projects
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;