// components/Projects.jsx
import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Globe,
  Rocket,
  Sparkles,
  Code2,
  ArrowUpRight,
  Star,
  Eye,
  Image as ImageIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import project images
import klyrosysImg from "./assets/klyrosys.png";
import galaxyHajjImg from "./assets/Galaxy.png";
import alZiyarahImg from './assets/Alziyarah.png';
import umraChaloImg from './assets/Umrachalo.png';
import blueWaveImg from './assets/Bluewave.png';
import inshaUmrahImg from './assets/Inshaumrah.png';
import safarMuqaddasImg from './assets/Safar.png';
import arUmrahImg from './assets/AR Umrah.png';

// Fallback images in case imports fail
const fallbackImages = {
  klyrosys: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  galaxyHajj: 'https://images.unsplash.com/photo-1582653291997-079a1b04e6a1?w=600&h=400&fit=crop',
  alZiyarah: 'https://images.unsplash.com/photo-1584555614927-5f8dbf4b7c71?w=600&h=400&fit=crop',
  umraChalo: 'https://images.unsplash.com/photo-1582653291997-079a1b04e6a1?w=600&h=400&fit=crop',
  blueWave: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
  inshaUmrah: 'https://images.unsplash.com/photo-1584555614927-5f8dbf4b7c71?w=600&h=400&fit=crop',
  safarMuqaddas: 'https://images.unsplash.com/photo-1584555614927-5f8dbf4b7c71?w=600&h=400&fit=crop',
  arUmrah: 'https://images.unsplash.com/photo-1582653291997-079a1b04e6a1?w=600&h=400&fit=crop',
};

const projects = [
  {
    id: 1,
    title: 'Klyrosys',
    url: 'https://klyrosys.com',
    description:
      'A modern, high-performance web platform built with React. Features sleek UI components, smooth animations, and a fully responsive layout designed to deliver an outstanding user experience.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    category: 'Web Platform',
    color: '#FFD700', // Gold
    accentColor: '#C0C0C0', // Silver
    featured: true,
    image: klyrosysImg,
    fallbackImage: fallbackImages.klyrosys,
  },
  {
    id: 2,
    title: 'Galaxy Hajj',
    url: 'https://galaxyhajj.com',
    description:
      'Feature-rich Hajj & Umrah travel booking portal. Includes dynamic package listings, real-time availability, inquiry forms, and a clean multi-page React architecture targeting pilgrims worldwide.',
    tags: ['React', 'Next.js', 'CSS Modules', 'REST API'],
    category: 'Travel & Booking',
    color: '#C0C0C0', // Silver
    accentColor: '#FFD700', // Gold
    featured: true,
    image: galaxyHajjImg,
    fallbackImage: fallbackImages.galaxyHajj,
  },
  {
    id: 3,
    title: 'Al Ziyarah Tours',
    url: 'https://alziyarahtours.com',
    description:
      'Premium Islamic tour operator website with elegant design. Showcases Umrah packages, Hajj services, and tour itineraries with immersive visuals and a conversion‑focused contact flow.',
    tags: ['React', 'Styled Components', 'Responsive Design'],
    category: 'Travel & Tourism',
    color: '#D4AF37', // Dark Gold
    accentColor: '#FFD700', // Gold
    featured: false,
    image: alZiyarahImg,
    fallbackImage: fallbackImages.alZiyarah,
  },
  {
    id: 4,
    title: 'Umra Chalo',
    url: 'https://umrachalo.com',
    description:
      'Engaging Umrah service platform with seamless user journey. Built for performance with lazy-loaded images, animated sections, and an intuitive booking enquiry system.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'EmailJS'],
    category: 'Travel & Booking',
    color: '#A9A9A9', // Light Silver
    accentColor: '#C0C0C0', // Silver
    featured: false,
    image: umraChaloImg,
    fallbackImage: fallbackImages.umraChalo,
  },
  {
    id: 5,
    title: 'Blue Wave Cruise',
    url: 'https://bluewavecruise.in',
    description:
      'Luxury cruise service website with rich visual storytelling. Features hero video, animated counters, service showcase, and WhatsApp-integrated enquiry system for seamless client communication.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'WhatsApp API'],
    category: 'Cruise & Hospitality',
    color: '#b08d27', // Medium Dark Gold
    accentColor: '#D4AF37', // Dark Gold
    featured: true,
    image: blueWaveImg,
    fallbackImage: fallbackImages.blueWave,
  },
  {
    id: 6,
    title: 'Insha Umrah',
    url: 'https://inshaumrah.com',
    description:
      'Comprehensive Umrah package booking website built with React. Clean navigation, package comparison cards, customer testimonials, and a mobile-first design approach for global audiences.',
    tags: ['React', 'CSS3', 'JavaScript', 'Responsive'],
    category: 'Travel & Booking',
    color: '#808080', // Medium Silver
    accentColor: '#A9A9A9', // Light Silver
    featured: false,
    image: inshaUmrahImg,
    fallbackImage: fallbackImages.inshaUmrah,
  },
  {
    id: 7,
    title: 'Safar e Muqaddas',
    url: 'https://safaremuqaddas.in',
    description:
      'Sacred journey travel platform offering Hajj and Umrah packages. Features smooth page transitions, multilingual-ready structure, gallery sections, and a trust-building testimonials carousel.',
    tags: ['React', 'Tailwind CSS', 'Swiper.js', 'AOS'],
    category: 'Travel & Pilgrimage',
    color: '#856a1b', // Dark Gold
    accentColor: '#b08d27', // Medium Dark Gold
    featured: false,
    image: safarMuqaddasImg,
    fallbackImage: fallbackImages.safarMuqaddas,
  },
  {
    id: 8,
    title: 'A.R Umrah Services',
    url: 'https://arumrahservices.com',
    description:
      'Professional Umrah services portal with a modern corporate feel. Includes detailed service pages, package inquiry forms, WhatsApp CTA integration, and optimised load performance.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'SEO Optimised'],
    category: 'Travel & Services',
    color: '#595959', // Dark Silver
    accentColor: '#808080', // Medium Silver
    featured: false,
    image: arUmrahImg,
    fallbackImage: fallbackImages.arUmrah,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col bg-slate-900 rounded-3xl border border-slate-800 shadow-xl shadow-gold/5 overflow-hidden transition-all duration-500 hover:shadow-gold/20 hover:border-gold/50 hover:-translate-y-2"
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${project.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Top accent bar */}
      <div
        className="h-1 w-full rounded-t-3xl"
        style={{ background: `linear-gradient(90deg, ${project.color}, ${project.accentColor})` }}
      />

      {/* Website Thumbnail Image */}
      <div className="relative w-full h-40 sm:h-48 bg-slate-950 overflow-hidden rounded-t-2xl">
        {!imageError ? (
          <>
            <img
              src={project.image}
              alt={`${project.title} website thumbnail`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                setImageError(true);
                if (project.fallbackImage) {
                  e.target.src = project.fallbackImage;
                }
              }}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
                <div className="animate-pulse flex flex-col items-center gap-2">
                  <ImageIcon className="w-8 h-8 text-slate-700" />
                  <span className="text-xs text-slate-500">Loading...</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
            <div
              className="flex flex-col items-center gap-2 p-4"
              style={{ color: project.color }}
            >
              <Globe className="w-8 h-8" />
              <span className="text-[10px] text-center text-slate-400">Website Preview</span>
            </div>
          </div>
        )}

        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered && imageLoaded ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black pointer-events-none"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-3">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex flex-col gap-0.5">
            {project.featured && (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold w-fit"
                style={{ background: `${project.color}15`, color: project.accentColor }}
              >
                <Star className="w-2.5 h-2.5" />
                Featured
              </span>
            )}
            <h3 className="text-sm sm:text-base font-black text-white leading-tight group-hover:text-gold transition-colors">
              {project.title}
            </h3>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          {/* Live Site Button */}
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold text-black shadow-lg transition-all duration-300"
            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.accentColor})` }}
          >
            <Globe className="w-3 h-3" />
            Live
            <ArrowUpRight className="w-2.5 h-2.5" />
          </motion.a>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-800">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-gold/10 text-gold border border-gold/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1.5">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            Live & Active
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-semibold text-gold hover:text-gold-light transition-colors group/link"
          >
            <Eye className="w-3 h-3" />
            View Site
            <ExternalLink className="w-2.5 h-2.5 group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-silver/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2.5 mb-4 px-5 py-2.5 bg-slate-900 rounded-lg border border-slate-800 shadow-md shadow-gold/5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              <Rocket className="w-5 h-5 text-gold" />
            </motion.div>
            <span className="text-sm font-bold text-slate-200">Live Projects</span>
          </div>

          <h2 className="text-2.5xl sm:text-3.5xl lg:text-4.5xl font-black mb-3 leading-tight">
            <span className="block text-white">
              Real Websites,
            </span>
            <span className="block bg-gradient-to-r from-gold to-silver bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Every project below is live, production-ready, and crafted with React. From pilgrimage
            platforms to cruise services — pixel-perfect UI delivered for real clients.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { label: 'Live Projects', value: '8+', icon: Globe },
              { label: 'React Powered', value: '100%', icon: Code2 },
              { label: 'Happy Clients', value: '8+', icon: Star },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.04 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 shadow-sm"
              >
                <stat.icon className="w-4 h-4 text-gold" />
                <span className="text-lg font-black text-white">{stat.value}</span>
                <span className="text-xs text-slate-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-4 text-sm">More projects available on request</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-dark to-gold text-black font-semibold rounded-2xl shadow-md shadow-gold/20 hover:shadow-gold/30 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Hire Me for Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;