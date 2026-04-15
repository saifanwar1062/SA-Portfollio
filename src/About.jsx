// components/About.js
import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Target,
  Award,
  Brain,
  Rocket,
  Sparkles,
  Layers,
  Palette,
  Server,
  Cloud,
  Globe,
  Terminal,
  GitBranch,
  Cpu,
  Database,
  Shield,
  Zap,
  Code2,
  TrendingUp,
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
  CpuIcon,
  Infinity as InfinityIcon,
  Sparkle,
  Zap as Lightning,
  ShieldCheck
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');
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
      color: "#0ea5e9",
      description: "React development"
    },
    { 
      label: "Projects Delivered", 
      value: counterValues.projects, 
      suffix: "+", 
      icon: Target, 
      color: "#3b82f6",
      description: "Live web projects"
    },
    { 
      label: "Happy Clients", 
      value: counterValues.clients, 
      suffix: "+", 
      icon: Users, 
      color: "#06b6d4",
      description: "Satisfied customers"
    },
    { 
      label: "Coding Hours", 
      value: counterValues.hours, 
      suffix: "+", 
      icon: Clock, 
      color: "#00B4D8",
      description: "Lines of React code"
    },
  ];

  // Journey timeline
  const journey = [
    {
      year: "2021",
      title: "React Developer Journey Begins",
      description: "Fell in love with React.js — mastered hooks, state management, and component architecture",
      icon: Code2,
      tags: ["React", "JavaScript", "CSS3"],
      color: "#0ea5e9",
      achievements: ["First React App", "UI Component Library"]
    },
    {
      year: "2022",
      title: "Frontend Freelancing",
      description: "Built production React apps for clients — improved performance, responsiveness & UX",
      icon: Rocket,
      tags: ["React", "Tailwind CSS", "Next.js"],
      color: "#3b82f6",
      achievements: ["5+ Client Sites", "Mobile-First Design"]
    },
    {
      year: "2023",
      title: "Travel Tech Platforms",
      description: "Developed 8+ live Hajj/Umrah & travel booking portals with React at production scale",
      icon: Globe,
      tags: ["Next.js", "TypeScript", "Framer Motion"],
      color: "#0077B6",
      achievements: ["8 Live Sites", "Pixel‑Perfect UI"]
    },
    {
      year: "2024",
      title: "Enterprise React at HCL",
      description: "Built GenAI-powered PV Intake frontend using Next.js + TypeScript for a U.S. life sciences client",
      icon: Code2,
      tags: ["Next.js", "TypeScript", "Enterprise"],
      color: "#0077B6",
      achievements: ["Enterprise App", "99.9% Uptime"]
    },
    {
      year: "2025",
      title: "Advanced UI / Animations",
      description: "Levelled up with 3D interactions, Framer Motion, and cutting-edge React performance patterns",
      icon: Sparkles,
      tags: ["Framer Motion", "Three.js", "WebGL"],
      color: "#f59e0b",
      achievements: ["3D Animations", "Performance Boost"]
    },
  ];

  // Skills data — frontend focused
  const skills = {
    frontend: [
      { name: "React.js", level: 96, icon: Code2, description: "Hooks, Context, Patterns" },
      { name: "Next.js", level: 92, icon: Zap, description: "SSR, ISR, App Router" },
      { name: "TypeScript", level: 88, icon: Terminal, description: "Type safety & interfaces" },
      { name: "Tailwind CSS", level: 98, icon: Palette, description: "Utility-first styling" },
    ],
    animations: [
      { name: "Framer Motion", level: 90, icon: Sparkles, description: "Gestures & transitions" },
      { name: "CSS Animations", level: 95, icon: Palette, description: "Keyframes & transitions" },
      { name: "GSAP", level: 80, icon: Zap, description: "Advanced timelines" },
      { name: "Three.js", level: 72, icon: Brain, description: "3D web graphics" },
    ],
    tooling: [
      { name: "Git / GitHub", level: 95, icon: GitBranch, description: "Version control" },
      { name: "Vite / Webpack", level: 88, icon: Zap, description: "Build tools" },
      { name: "Figma", level: 85, icon: Palette, description: "Design handoff" },
      { name: "Vercel / Netlify", level: 90, icon: Rocket, description: "Deployment" },
    ],
  };

  // Hobbies with blue theme colors
  const hobbies = [
    { icon: BookOpen, label: "Tech Reading", color: "#0ea5e9", description: "Stay updated with trends" },
    { icon: Camera, label: "Photography", color: "#3b82f6", description: "Creative compositions" },
    { icon: Music, label: "Music Production", color: "#06b6d4", description: "Electronic & ambient" },
    { icon: Gamepad2, label: "Strategy Games", color: "#0077B6", description: "Problem solving" },
    { icon: Dumbbell, label: "Fitness", color: "#00B4D8", description: "Health & wellness" },
    { icon: Plane, label: "Travel", color: "#0077B6", description: "Explore new places" },
    { icon: Coffee, label: "Coffee Art", color: "#023E84", description: "Morning ritual" },
    { icon: Wifi, label: "Tech Gadgets", color: "#0077B6", description: "Latest devices" },
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/90 to-[#011627]/95" />
          
          {/* Animated gradient circles */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-sky-500/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-sky-500/10 to-blue-500/10 blur-3xl"
          />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px),
                             linear-gradient(0deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
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
              className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-400/40 to-sky-400/40"
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
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-sky-500/20 backdrop-blur-xl rounded-2xl border border-blue-400/30 shadow-lg shadow-blue-500/20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-blue-300" />
            </motion.div>
            <span className="text-lg font-semibold text-blue-100">
              About Md. Saif Anwar
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="block text-blue-100">Frontend</span>
            <span className="block bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 bg-clip-text text-transparent">
              React Developer
            </span>
          </h1>

          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Building pixel-perfect React experiences from{' '}
            <span className="text-blue-300 font-semibold">New Delhi, India</span>.
            Turning complex designs into lightning-fast, responsive, and beautiful web applications.
          </p>


          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#023E84] to-[#0077B6] text-white font-semibold rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-blue-400/50 transition-all flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-950/60 backdrop-blur-xl border border-blue-400/30 text-blue-100 font-semibold rounded-xl hover:bg-blue-900/70 hover:border-blue-300/50 transition-all flex items-center gap-3"
            >
              <ExternalLink className="w-5 h-5" />
              View GitHub
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 lg:mb-24"
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
                className="group relative bg-gradient-to-br from-blue-900/40 to-sky-900/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/20 hover:border-blue-300/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-sky-500/20"
                  >
                    <Icon className="w-6 h-6 text-blue-300" />
                  </motion.div>
                  <div>
                    <div className="text-3xl font-black text-blue-100 mb-1">
                      {stat.value}
                      <span className="text-blue-400">{stat.suffix}</span>
                    </div>
                    <div className="text-sm font-medium text-blue-200/80">{stat.label}</div>
                    <div className="text-xs text-blue-300/60 mt-1">{stat.description}</div>
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
              className="group relative bg-gradient-to-br from-blue-950/80 to-sky-950/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl shadow-blue-900/50 overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-full w-full bg-blue-950 rounded-3xl" />
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-500/30 to-sky-500/30 p-1"
                    >
                      <div className="w-full h-full rounded-2xl bg-blue-950 flex items-center justify-center">
                        <Brain className="w-20 h-20 text-blue-400" />
                      </div>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50"
                    >
                      <Code2 className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>


                  <div className="flex-1">
                    <h2 className="text-3xl font-black text-blue-50 mb-3">
                      Md. Saif Anwar
                    </h2>
                    <div className="flex items-center gap-2 text-blue-300 mb-2">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">New Delhi, India</span>
                    </div>
                    <div className="text-sm font-semibold text-sky-400 mb-6">Frontend React Developer</div>

                    <p className="text-lg text-blue-100/80 leading-relaxed mb-8">
                      Dedicated Frontend React Developer with 3+ years of hands-on experience building
                      pixel-perfect, high-performance web applications. Passionate about React, Next.js,
                      Tailwind CSS and bringing stunning UI/UX designs to life.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {["React Expert", "Next.js", "Tailwind CSS", "Framer Motion", "Figma"].map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="px-4 py-2 bg-blue-900/50 backdrop-blur-sm rounded-full text-sm font-medium text-blue-300 border border-blue-700/50 hover:bg-blue-800/50 transition-all"
                        >
                          #{tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Current Focus */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-blue-400/20">
                  <div className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-xl">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-lg">
                      <Code2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-100">React & Next.js</h4>
                      <p className="text-sm text-blue-300/80">Production-ready frontends</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-blue-900/30 rounded-xl">
                    <div className="p-3 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-lg">
                      <Sparkles className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-100">UI / Animations</h4>
                      <p className="text-sm text-blue-300/80">Framer Motion & Tailwind</p>
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
                { id: 'journey', label: 'My Journey', icon: Layers },
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
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#023E84] to-[#0077B6] text-white shadow-lg shadow-blue-500/30'
                        : 'bg-blue-900/30 text-blue-200 hover:bg-blue-800/30'
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
              {activeTab === 'journey' && (
                <motion.div
                  key="journey"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-sky-400 to-transparent" />

                  {journey.map((item, i) => {
                    const Icon = item.icon;
                    const isEven = i % 2 === 0;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative mb-12 md:flex md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-blue-950"
                            style={{
                              background: `linear-gradient(135deg, ${item.color}40, ${item.color}20)`,
                              borderColor: item.color
                            }}
                          >
                            <Icon className="w-8 h-8" style={{ color: item.color }} />
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className={`ml-24 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                          <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-blue-900/40 to-sky-900/40 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 hover:border-blue-300/50 transition-all"
                          >
                            <div className="text-2xl font-black text-blue-50 mb-2">{item.year}</div>
                            <h4 className="text-xl font-bold text-blue-100 mb-3">{item.title}</h4>
                            <p className="text-blue-200/80 mb-4">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900/50 text-blue-300 border border-blue-700/50"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}

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
                      className="bg-gradient-to-br from-blue-900/40 to-sky-900/40 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-all"
                    >
                      <h3 className="text-2xl font-black text-blue-50 mb-8 capitalize">
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
                                  <div className="p-2 bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-blue-400" />
                                  </div>
                                  <span className="font-semibold text-blue-100">
                                    {skill.name}
                                  </span>
                                </div>
                                <span className="text-blue-300 font-mono">
                                  {skill.level}%
                                </span>
                              </div>

                              <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className="h-full bg-gradient-to-r from-blue-500 to-sky-500 rounded-full"
                                />
                              </div>
                              <p className="text-xs text-blue-300/60 mt-1">{skill.description}</p>
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
                        className="bg-gradient-to-br from-blue-900/40 to-sky-900/40 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-all group"
                      >
                        <div className="flex items-start gap-4 mb-6">
                          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-sky-500/20 rounded-2xl group-hover:scale-110 transition-transform">
                            <Icon className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-2xl font-black text-blue-50 mb-2">{item.title}</h4>
                            <p className="text-blue-200/80">{item.description}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.principles.map((principle, j) => (
                            <motion.span
                              key={j}
                              whileHover={{ scale: 1.05 }}
                              className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-700/50 hover:bg-blue-800/30 transition-colors"
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
              className="bg-gradient-to-br from-blue-950/80 to-blue-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl shadow-blue-900/50"
            >
              <h3 className="text-2xl font-black text-blue-50 mb-8 flex items-center gap-3">
                <Coffee className="w-6 h-6 text-blue-400" />
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
                      className="group relative p-4 bg-blue-900/30 rounded-2xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="p-3 rounded-xl group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${hobby.color}20` }}
                        >
                          <Icon className="w-6 h-6" style={{ color: hobby.color }} />
                        </motion.div>
                        <span className="text-sm font-medium text-blue-200">
                          {hobby.label}
                        </span>
                        <p className="text-xs text-blue-300/60">{hobby.description}</p>
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
              className="bg-gradient-to-br from-blue-950/80 to-blue-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl shadow-blue-900/50"
              >
              <h3 className="text-2xl font-black text-blue-50 mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-blue-400" />
                Quick Stats
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Code Quality</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Project Delivery</span>
                  <span className="text-blue-300 font-semibold">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Client Satisfaction</span>
                  <span className="text-blue-300 font-semibold">100%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-200">Bug Free Code</span>
                  <span className="text-blue-300 font-semibold">99.5%</span>
                </div>
              </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-blue-950/80 to-blue-900/80 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30 shadow-2xl shadow-blue-900/50"
              >
              <h3 className="text-2xl font-black text-blue-50 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Figma", "Vite", "Git"].map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-blue-900/50 text-blue-300 rounded-lg text-sm font-medium border border-blue-700/50"
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
          <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-blue-950/80 to-blue-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-blue-400/30 shadow-2xl shadow-blue-900/50 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-3xl font-black text-blue-50 mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-blue-200/80 text-lg">
                Let's collaborate on your next project and create something extraordinary together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#023E84] to-[#0077B6] text-white font-bold rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-blue-400/50 transition-all flex items-center gap-3"
              >
                <span>Start a Project</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-900/50 backdrop-blur-sm border border-blue-400/30 text-blue-100 font-bold rounded-xl hover:bg-blue-800/50 transition-all"
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