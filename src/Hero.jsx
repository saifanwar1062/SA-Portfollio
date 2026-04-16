// components/Hero.js
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowDown,
  Code2,
  Cpu,
  Server,
  Database,
  Cloud,
  Sparkles,
  Terminal,
  Layers,
  GitBranch,
  Zap,
  ChevronRight,
  Globe,
  Shield,
  Rocket,
  Brain,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useInView,

  useTransform,
  useScroll,
} from "framer-motion";

// Import background assets
// import backgroundVideo from "./assets/Herovideo.mp4";

// Enhanced 3D tilt effect with better physics
function useTilt3D({
  max = 6,
  spring = { stiffness: 180, damping: 25 },
  scale = 1.03
} = {}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const scaleVal = useMotionValue(1);
  const shadowX = useMotionValue(0);
  const shadowY = useMotionValue(0);

  const rotateX = useSpring(rX, spring);
  const rotateY = useSpring(rY, spring);
  const scaleSpring = useSpring(scaleVal, spring);
  const shadowXSpring = useSpring(shadowX, spring);
  const shadowYSpring = useSpring(shadowY, spring);

  const onPointerMove = (e) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    rX.set(py * max);
    rY.set(px * max);
    scaleVal.set(scale);
    shadowX.set(px * 15);
    shadowY.set(py * 15);
  };

  const onPointerLeave = () => {
    rX.set(0);
    rY.set(0);
    scaleVal.set(1);
    shadowX.set(0);
    shadowY.set(0);
  };

  return {
    ref,
    rotateX,
    rotateY,
    scale: scaleSpring,
    shadowX: shadowXSpring,
    shadowY: shadowYSpring,
    onPointerMove,
    onPointerLeave,
    reduce,
  };
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const waveAnimation = {
  x: [0, 5, 0, -5, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Hero = () => {
  const [typedName, setTypedName] = useState("");
  const [stats, setStats] = useState({ projects: 0, clients: 0, lines: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const isInView = useInView(contentRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  // Typewriter effect
  useEffect(() => {
    const fullName = "Saif Anwar";
    let index = 0;

    const typeNextChar = () => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index < fullName.length) {
        setTimeout(typeNextChar, 100 + Math.random() * 50);
      }
    };

    typeNextChar();
  }, []);

  // Stats animation
  useEffect(() => {
    const timer = setTimeout(() => {
      const animateCount = (start, end, duration, callback) => {
        const steps = 40;
        const stepDuration = duration / steps;
        let step = 0;

        const t = setInterval(() => {
          step++;
          const progress = step / steps;
          const easeOut = 1 - Math.pow(1 - progress, 3);
          callback(Math.floor(start + easeOut * (end - start)));
          if (step >= steps) {
            clearInterval(t);
            callback(end);
          }
        }, stepDuration);
      };

      animateCount(0, 42, 1800, (val) => setStats((prev) => ({ ...prev, projects: val })));
      animateCount(0, 27, 1600, (val) => setStats((prev) => ({ ...prev, clients: val })));
      animateCount(0, 150, 2000, (val) => setStats((prev) => ({ ...prev, lines: val })));
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heroTilt = useTilt3D({ max: 4, scale: 1.02 });

  const colorClasses = {
    gold: {
      border: "border-gold/30 hover:border-gold/50",
      bg: "bg-gold/10",
      text: "text-gold",
      gradient: "from-gold-dark",
      glow: "shadow-gold/20",
    },
    silver: {
      border: "border-silver/30 hover:border-silver/50",
      bg: "bg-silver/10",
      text: "text-silver",
      gradient: "from-silver-dark",
      glow: "shadow-silver/20",
    },
    accent: {
      border: "border-gold-light/30 hover:border-gold-light/50",
      bg: "bg-gold-light/10",
      text: "text-gold-light",
      gradient: "from-gold",
      glow: "shadow-gold-light/20",
    },
    sky: {
      border: "border-silver/30 hover:border-silver/50",
      bg: "bg-silver/10",
      text: "text-silver",
      gradient: "from-silver-dark",
      glow: "shadow-silver/20",
    },
    blue: {
      border: "border-gold-dark/30 hover:border-gold-dark/50",
      bg: "bg-gold-dark/10",
      text: "text-gold-dark",
      gradient: "from-gold",
      glow: "shadow-gold/20",
    },
    cyan: {
      border: "border-gold-light/30 hover:border-gold-light/50",
      bg: "bg-gold-light/10",
      text: "text-gold-light",
      gradient: "from-gold",
      glow: "shadow-gold-light/20",
    },
    indigo: {
      border: "border-gold/30 hover:border-gold/50",
      bg: "bg-gold/10",
      text: "text-gold",
      gradient: "from-gold-dark",
      glow: "shadow-gold/20",
    },
  };

  const Particle = ({ index, type = "default" }) => {
    const particleOpacity = type === "large" ? 0.4 : 0.2;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, particleOpacity, 0],
          scale: [0, 1, 0],
          x: [0, Math.sin(index) * 50, 0],
          y: [0, Math.cos(index) * 30, 0],
        }}
        transition={{
          duration: Math.random() * 15 + 15,
          repeat: Infinity,
          delay: index * 0.2,
          ease: "easeInOut",
        }}
        className={`absolute rounded-full bg-gradient-to-r from-gold/40 to-silver/40 ${type === "large" ? "w-2 h-2" : "w-1 h-1"}`}
      />
    );
  };



  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 overflow-hidden"
    >
      {/* Background with imported assets */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-950" />
        </motion.div>



        <div className="absolute inset-0 bg-black/40" />



        {/* Floating tech icons */}
        <div className="absolute inset-0 pointer-events-none">
          {["sm", "md", "lg"].map((size, idx) => (
            <div
              key={size}
              className={`absolute ${size === "sm" ? "top-20 left-10" : size === "md" ? "bottom-32 right-20" : "top-40 right-32"}`}
            >
              <motion.div
                animate={{
                  y: [0, size === "sm" ? -20 : size === "md" ? 15 : -25, 0],
                  rotate: [0, size === "sm" ? 5 : size === "md" ? -3 : 8, 0],
                }}
                transition={{
                  duration: size === "sm" ? 8 : size === "md" ? 6 : 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx,
                }}
                className={`opacity-10 ${size === "sm" ? "w-16 h-16 md:w-20 md:h-20" : size === "md" ? "w-12 h-12 md:w-16 md:h-16" : "w-20 h-20 md:w-24 md:h-24"}`}
              >
                {size === "sm" ? (
                  <Code2 className="w-full h-full text-gold/30" />
                ) : size === "md" ? (
                  <Server className="w-full h-full text-silver/30" />
                ) : (
                  <Database className="w-full h-full text-gold-dark/30" />
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <Particle key={i} index={i} type={i % 3 === 0 ? "large" : "default"} />
          ))}
        </div>
      </div>

      {/* Main content - Rest of the component remains exactly the same */}
      <motion.div
        ref={(el) => {
          heroTilt.ref.current = el;
          contentRef.current = el;
        }}
        onPointerMove={heroTilt.onPointerMove}
        onPointerLeave={heroTilt.onPointerLeave}
        style={
          !heroTilt.reduce
            ? {
              rotateX: heroTilt.rotateX,
              rotateY: heroTilt.rotateY,
              scale: heroTilt.scale,
            }
            : undefined
        }
        className="relative z-10 w-full max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Reordered grid: Left content first on mobile, right content second */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left column - Content (Shows first on all screens) */}
          <div className="order-1">
            <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                </motion.div>
                <span className="text-sm md:text-base font-medium text-gold-light">
                  Available for Opportunities
                </span>
              </div>
            </motion.div>

            <motion.div variants={slideInLeft}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-gold via-silver to-gold-dark bg-clip-text text-transparent">
                  {typedName}
                  <motion.span
                    className="inline-block w-0.5 h-8 md:h-12 ml-1 bg-gold"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
              </h1>

              <div className="mb-6 md:mb-8">
                <motion.h2
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-200 mb-3 md:mb-4 leading-relaxed"
                  variants={fadeInUp}
                >
                  Frontend React.js Developer &<br className="hidden sm:block" /> UI Craftsman
                </motion.h2>

                <motion.p
                  className="text-base sm:text-lg text-slate-400 leading-relaxed"
                  variants={fadeInUp}
                >
                  I craft pixel-perfect, high-performance React applications with stunning UI/UX.
                  Specialising in React, Next.js &amp; Tailwind CSS — let's build something amazing together.
                </motion.p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-8"
              variants={containerVariants}
            >
              {[
                { value: stats.projects, label: "Projects", suffix: "+", icon: Rocket },
                { value: stats.clients, label: "Clients", suffix: "+", icon: Globe },
                { value: stats.lines, label: "Code Lines", suffix: "k+", icon: Code2 },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.03 }}
                  onHoverStart={() => setHoveredCard(`stat-${i}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-gold/50 shadow-md shadow-gold/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold" />
                    <motion.div
                      animate={{
                        scale: hoveredCard === `stat-${i}` ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                    >
                      {stat.value}
                      <span className="text-gold">{stat.suffix}</span>
                    </motion.div>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={containerVariants}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("projects")}
                className="group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-gold-dark to-gold text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-md shadow-gold/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  View My Work
                  <motion.div animate={waveAnimation}>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-silver to-gold"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("contact")}
                className="px-6 sm:px-8 py-3 bg-slate-900 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 hover:border-gold/30 shadow-sm transition-all duration-300 text-sm sm:text-base"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Right column - Visual elements (Shows second on mobile) */}
          <div className="order-2 lg:order-2 relative mt-8 lg:mt-0">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
              {[
                { icon: Cpu, label: "React / Next.js", color: "gold", position: "top-0 left-4 sm:left-8 md:left-1/4", rotation: -6, content: "React 18, Next.js 14, Vite" },
                { icon: Layers, label: "Styling", color: "silver", position: "top-1/3 right-4 sm:right-8 md:right-0", rotation: 4, content: "Tailwind CSS, CSS Modules" },
                { icon: Zap, label: "Animations", color: "accent", position: "bottom-1/3 left-4 sm:left-8 md:left-0", rotation: -3, content: "Framer Motion, GSAP" },
                { icon: GitBranch, label: "Tooling", color: "gold", position: "bottom-0 right-4 sm:right-8 md:right-1/4", rotation: 5, content: "Git, Vercel, Figma" },
              ].map((tech, i) => {
                const colorClass = colorClasses[tech.color];
                return (
                  <motion.div
                    key={tech.label}
                    variants={fadeInUp}
                    animate={{
                      y: [0, -12, 0],
                      rotate: [tech.rotation, tech.rotation + 1.5, tech.rotation],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                    onHoverStart={() => setHoveredCard(`tech-${i}`)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`absolute ${tech.position} w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 p-4 sm:p-5 md:p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl ${colorClass.border} transition-all duration-300 cursor-pointer shadow-xl border ${colorClass.glow}`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div
                        animate={{
                          rotate: hoveredCard === `tech-${i}` ? 360 : 0,
                          scale: hoveredCard === `tech-${i}` ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`p-2.5 sm:p-3 rounded-xl ${colorClass.bg}`}
                      >
                        <tech.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClass.text}`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-base sm:text-lg font-bold ${colorClass.text} mb-1 truncate`}>
                          {tech.label}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-tight">{tech.content}</p>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: hoveredCard === `tech-${i}` ? "100%" : "0%" }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className={`h-0.5 bg-gradient-to-r ${colorClass.gradient} to-transparent mt-2`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tech stack tags */}
            <motion.div
              className="mt-6 md:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center"
              variants={containerVariants}
            >
              {[
                { icon: Layers, label: "React", color: "sky" },
                { icon: GitBranch, label: "Next.js", color: "blue" },
                { icon: Zap, label: "JavaScript", color: "cyan" },
                { icon: Terminal, label: "Tailwind", color: "indigo" },
                { icon: Brain, label: "Framer Motion", color: "sky" },

              ].map((tech, i) => {
                const colorClass = colorClasses[tech.color] || colorClasses.gold;
                return (
                  <motion.div
                    key={tech.label}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-slate-900 border ${colorClass.border} shadow-sm transition-all duration-200`}
                  >
                    <tech.icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${colorClass.text}`} />
                    <span className="text-xs sm:text-sm font-medium text-slate-300 whitespace-nowrap">
                      {tech.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Desktop scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors group"
            aria-label="Scroll to next section"
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-xs sm:text-sm font-medium"
            >
              Explore More
            </motion.span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile scroll indicator */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, ease: "easeOut" }}
        onClick={() => scrollToSection("about")}
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden p-2.5 sm:p-3 rounded-full bg-slate-900/80 backdrop-blur-xl border border-gold/30 shadow-lg"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;