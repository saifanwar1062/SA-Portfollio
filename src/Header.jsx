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
  const [activeSection, setActiveSection] = useState("home");

  // Desktop "3D card" tilt for the header inner container
  const tilt = useTilt3D({ max: 8 });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      const sections = ["home", "about", "projects", "skills", "experience", "contact"];
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
    ],
    []
  );

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
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
                className="inline-flex items-center gap-2 sm:gap-3 group cursor-pointer"
              >
                <motion.div
                  whileHover={tilt.reduce ? undefined : { rotateX: 8, rotateY: -8, scale: 1.02 }}
                  className="relative flex items-center justify-start h-8 sm:h-10 md:h-12 w-auto md:transform-3d drop-shadow-lg transition-transform duration-300"
                >
                  <img
                    src="/SA_Logo.png"
                    alt="Md. Saif Anwar Logo"
                    className="max-h-full w-auto object-contain block drop-shadow-md brightness-150"
                  />
                </motion.div>

                {/* Name text beside logo */}
                <div className="flex flex-col items-start">
                  <span className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-gold via-silver to-gold-dark bg-clip-text text-transparent">
                    MD. Saif Anwar
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">
                    Frontend React.js Developer
                  </span>
                </div>
              </motion.button>

              {/* Desktop navigation */}
              <nav className="hidden md:flex items-center gap-1 rounded-full bg-slate-900/80 backdrop-blur-xl border border-gold/10 px-2 py-1 shadow-2xl shadow-black/50">
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
                      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${isActive
                        ? "bg-gradient-to-r from-gold-dark to-gold text-black shadow-lg shadow-gold/20"
                        : "text-slate-400 hover:text-gold hover:bg-slate-800/80"
                        }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                      <span>{item.label}</span>

                      {isActive && (
                        <motion.span
                          layoutId="active-underline"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gold"
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
                        className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-gold hover:border-gold/50 hover:bg-slate-800/80 transition shadow-lg"
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
                  className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:bg-slate-800 transition shadow-lg"
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
            className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-4 space-y-3">
              {/* Mobile header with name */}
              <div className="flex items-center gap-3 pb-3 mb-2 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center shadow-lg shadow-gold/20">
                  <span className="text-black font-bold text-lg">SA</span>
                </div>
                <div>
                  <p className="font-bold text-white">MD. Saif Anwar</p>
                  <p className="text-xs text-slate-500">Frontend React.js Developer</p>
                </div>
              </div>

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
                    className={`w-full flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${isActive
                      ? "bg-gold/10 border-gold/30 text-gold shadow-lg shadow-gold/5"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800"
                      }`}
                  >
                    <div className={`flex items-center justify-center w-9 h-9 rounded-xl ${isActive ? 'bg-gold/20' : 'bg-slate-800'}`}>
                      <Icon className={`w-5 h-5 ${isActive ? "text-gold" : "text-slate-500"}`} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-[11px] text-slate-500">
                        {item.id === "home"
                          ? "Welcome"
                          : item.id === "about"
                            ? "About me"
                            : item.id === "projects"
                              ? "Live work"
                              : item.id === "skills"
                                ? "Tech stack"
                                : "Say hello"}
                      </p>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </motion.button>
                );
              })}

              {/* Mobile social icons */}
              <div className="pt-3 border-t border-slate-200/60">
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
                        className="flex-1 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 py-2 text-slate-400 hover:text-gold hover:border-gold/50 hover:bg-slate-800 transition shadow-lg"
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