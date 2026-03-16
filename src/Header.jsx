// components/Header.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Code2,
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Cpu,
  Satellite,
  Brain,
  Rocket,
  ChevronRight,
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

// Small helper: pointer-based 3D tilt (desktop), graceful fallback for touch.
function useTilt3D({ max = 10, spring = { stiffness: 220, damping: 18 } } = {}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const rX = useMotionValue(0);
  const rY = useMotionValue(0);

  const rotateX = useSpring(rX, spring);
  const rotateY = useSpring(rY, spring);

  const onPointerMove = (e) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    // Centered -0.5..0.5
    const dx = px - 0.5;
    const dy = py - 0.5;

    // Invert X for natural tilt
    rX.set((-dy) * max);
    rY.set((dx) * max);
  };

  const onPointerLeave = () => {
    rX.set(0);
    rY.set(0);
  };

  return { ref, rotateX, rotateY, onPointerMove, onPointerLeave, reduce };
}

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [volume, setVolume] = useState(60);
  const [activeSection, setActiveSection] = useState("home");

  // Desktop "3D card" tilt for the header inner container
  const tilt = useTilt3D({ max: 8 });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      const sections = ["home", "about", "projects", "skills", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          if (y >= top) current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const menuItems = useMemo(
    () => [
      { label: "Home", href: "#home", id: "home", icon: Satellite },
      { label: "About", href: "#about", id: "about", icon: Brain },
      { label: "Projects", href: "#projects", id: "projects", icon: Rocket },
      { label: "Skills", href: "#skills", id: "skills", icon: Cpu },
      { label: "Contact", href: "#contact", id: "contact", icon: Mail },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      { icon: Github, href: "https://github.com", label: "GitHub" },
      { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
      { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
      { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    ],
    []
  );

  return (
    <>

      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-violet-950/80 backdrop-blur-xl border-b border-purple-500/30 shadow-lg"
            : "bg-gradient-to-b from-violet-950/80 via-violet-950/40 to-transparent"
        }`}
      >
        {/* 3D Scene wrapper: keep 3D only on md+ to stay smooth on mobile */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={tilt.ref}
            onPointerMove={tilt.onPointerMove}
            onPointerLeave={tilt.onPointerLeave}
            style={
              tilt.reduce
                ? undefined
                : {
                    rotateX: tilt.rotateX,
                    rotateY: tilt.rotateY,
                  }
            }
            className="
              md:perspective-distant md:transform-3d
              will-change-transform
            "
          >
            <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
              {/* Brand / Logo */}
              <motion.button
                whileHover={tilt.reduce ? undefined : { y: -2, rotateZ: -0.6 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById("home");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-3 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/45 to-purple-300/35 blur-lg opacity-70 group-hover:opacity-90 transition-opacity" />
                  <motion.div
                    whileHover={tilt.reduce ? undefined : { rotateX: 10, rotateY: -10 }}
                    className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border border-purple-500/40 bg-violet-950/90 md:transform-3d"
                  >
                    <Code2 className="w-5 h-5 text-purple-100" />
                    {/* Fake depth highlight */}
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
                  </motion.div>
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                    Md. Saif Anwar
                  </span>
                  <span className="text-[11px] sm:text-xs text-purple-200/80">
                    Full Stack Developer
                  </span>
                </div>
              </motion.button>

              {/* Desktop navigation */}
              <nav className="hidden md:flex items-center gap-1 rounded-full bg-violet-950/80 backdrop-blur-lg border border-purple-700/40 px-2 py-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => {
                        const el = document.querySelector(item.href);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      whileHover={
                        tilt.reduce
                          ? undefined
                          : { y: -2, rotateX: 10, rotateY: -6, scale: 1.02 }
                      }
                      whileTap={{ scale: 0.98 }}
                      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isActive
                          ? "bg-purple-500/20 text-slate-50 border border-purple-400/60 shadow-sm shadow-purple-500/40"
                          : "text-purple-100/80 hover:text-slate-50 hover:bg-violet-900/60"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-purple-200" : "text-purple-300/80"}`} />
                      <span>{item.label}</span>

                      {isActive && (
                        <motion.span
                          layoutId="active-underline"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-purple-400"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Social icons (desktop) */}
                <div className="hidden md:flex items-center gap-1">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={tilt.reduce ? undefined : { y: -2, rotateX: 12, rotateY: 10 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-700/60 bg-violet-950/90 text-purple-100/80 hover:text-slate-50 hover:border-purple-400/80 hover:bg-violet-900/80 transition"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Mobile menu button */}
                <motion.button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  whileTap={{ scale: 0.96 }}
                  className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-violet-950/90 border border-purple-700/60 text-purple-100 hover:bg-violet-900/90 transition"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-purple-800/40 bg-violet-950/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`w-full flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      isActive
                        ? "bg-violet-900/70 border-purple-400/70 text-slate-50"
                        : "bg-violet-900/50 border-violet-800/80 text-purple-100"
                    }`}
                  >
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-violet-900/70">
                      <Icon className={`w-5 h-5 ${isActive ? "text-purple-200" : "text-purple-300/80"}`} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-[11px] text-purple-200/70">
                        {item.id === "home"
                          ? "Welcome"
                          : item.id === "about"
                          ? "About me"
                          : item.id === "projects"
                          ? "My work"
                          : item.id === "skills"
                          ? "Tech stack"
                          : "Say hello"}
                      </p>
                    </div>

                    <ChevronRight className="w-4 h-4 text-purple-400/80" />
                  </motion.button>
                );
              })}

              {/* Mobile social icons */}
              <div className="pt-3 border-t border-violet-900/80">
                <div className="flex items-center justify-between gap-2">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center rounded-xl border border-purple-700/60 bg-violet-950/90 py-2 text-purple-100 hover:text-slate-50 hover:border-purple-400/80 hover:bg-violet-900/90 transition"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
};

export default Header;
