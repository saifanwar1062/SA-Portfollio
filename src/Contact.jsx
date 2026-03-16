// components/Contact.js
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Download, Github, Linkedin, Instagram, Youtube, MapPin, Phone, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [subjectTyping, setSubjectTyping] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const formRef = useRef(null);

  useEffect(() => {
    const subjects = ["Project collaboration", "Freelance opportunity", "Tech consultation", "Just saying hello"];
    let index = 0, charIndex = 0, deleting = false;
    const type = () => {
      if (!deleting) {
        setSubjectTyping(subjects[index].slice(0, charIndex)); charIndex++;
        if (charIndex > subjects[index].length) { deleting = true; setTimeout(type, 2000); return; }
      } else {
        setSubjectTyping(subjects[index].slice(0, charIndex)); charIndex--;
        if (charIndex < 0) { deleting = false; index = (index + 1) % subjects.length; setTimeout(type, 500); return; }
      }
      setTimeout(type, deleting ? 50 : 100);
    };
    type();
  }, []);

  useEffect(() => {
    const fn = e => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault(); setIsSubmitting(true);
    setTimeout(() => { alert('Message sent! 🚀 (Demo mode)'); setFormData({ name: '', email: '', subject: '', message: '' }); setIsSubmitting(false); }, 2000);
  };

  const socials = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  const inputCls = "w-full px-4 py-4 bg-violet-950/60 border border-purple-700/50 rounded-2xl text-purple-100 placeholder-purple-400/60 focus:border-purple-400/80 focus:outline-none transition-all focus:bg-violet-950/80 shadow-inner";

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-violet-500/5 rounded-full blur-3xl animate-pulse" />
        {/* Mouse follower */}
        <div className="fixed w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full z-50 blur-sm opacity-60 pointer-events-none transition-all duration-300"
          style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, transform: 'translate(-50%, -50%)' }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-gradient-to-r from-purple-500/15 to-violet-500/15 rounded-3xl border border-purple-400/40 backdrop-blur-xl shadow-2xl shadow-purple-500/30 mx-auto max-w-max">
            <MapPin className="w-7 h-7 text-purple-400" />
            <span className="text-xl font-bold text-purple-100">Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-purple-300 via-violet-200 to-purple-100 bg-clip-text text-transparent leading-tight">
            Ready to Start Your<br />
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Next Project?</span>
          </h2>
          <p className="text-xl text-purple-100/80 max-w-3xl mx-auto leading-relaxed">
            Whether it's a travel platform, web app, or custom solution — I'm here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-violet-950/70 to-slate-900/70 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-purple-500/40 shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/50 transition-all duration-500">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-100/90 font-semibold mb-2 flex items-center gap-2"><span>👤</span> Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={inputCls} placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-purple-100/90 font-semibold mb-2 flex items-center gap-2"><Mail className="w-5 h-5" /> Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputCls} placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-purple-100/90 font-semibold mb-2 flex items-center gap-2"><MessageCircle className="w-5 h-5" /> Subject</label>
                  <input type="text" name="subject" value={formData.subject || subjectTyping} onFocus={() => setFormData(p => ({ ...p, subject: '' }))} onChange={handleInputChange} className={`${inputCls} text-lg font-semibold`} placeholder={subjectTyping} />
                </div>
                <div>
                  <label className="block text-purple-100/90 font-semibold mb-2 flex items-center gap-2"><span>💬</span> Message</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleInputChange} className={`${inputCls} resize-vertical`} placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full group relative px-8 py-6 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 text-white font-bold text-xl rounded-3xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/70 hover:from-purple-600 hover:to-violet-600 transition-all duration-500 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <><div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" /> Send Message</>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-sm -z-10" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-12 lg:pt-12">
              <div className="group relative bg-gradient-to-br from-violet-950/70 to-slate-900/70 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 border border-purple-500/40 shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/50 transition-all">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 p-4 bg-purple-500/20 rounded-2xl mb-6">
                  <MapPin className="w-6 h-6 text-purple-300" />
                  <span className="font-bold text-purple-50">Ghaziabad, Uttar Pradesh</span>
                </div>
                <div className="text-3xl font-black text-purple-50 mb-2">Md. Saif Anwar</div>
                <div className="text-purple-200/90 font-semibold">Full Stack Developer</div>
              </div>
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center gap-4 p-4 bg-violet-900/50 rounded-2xl">
                  <div className="p-3 bg-purple-500/20 rounded-xl"><Phone className="w-5 h-5 text-purple-300" /></div>
                  <span className="text-purple-200 font-medium">+91-XXXXXXXXX</span>
                </div>
                <div className="flex items-center justify-center gap-4 p-4 bg-violet-900/50 rounded-2xl">
                  <div className="p-3 bg-purple-500/20 rounded-xl"><Mail className="w-5 h-5 text-purple-300" /></div>
                  <span className="text-purple-200 font-medium break-all">saif@example.com</span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 pt-8 border-t border-violet-800/50">
                <a href="mailto:saif@example.com" className="group flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-violet-600 shadow-lg shadow-purple-500/40 hover:shadow-purple-400/60 transition-all hover:scale-105">
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Email Me
                </a>
                <a href="/resume.pdf" download className="flex items-center justify-center gap-3 p-4 border-2 border-purple-500/60 text-purple-200 font-semibold rounded-2xl hover:bg-purple-500/20 hover:border-purple-400/80 hover:text-purple-100 transition-all hover:scale-105 shadow-lg hover:shadow-purple-400/40">
                  <Download className="w-5 h-5" /> Download Resume
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-12 border-t border-violet-800/50">
              <h4 className="text-2xl font-black text-purple-50 mb-8 text-center">Find Me Online</h4>
              <div className="flex flex-wrap justify-center gap-6">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                      className="group relative p-6 bg-violet-950/70 backdrop-blur-xl rounded-3xl border border-purple-700/50 hover:border-purple-500/70 hover:bg-violet-900/80 shadow-xl shadow-purple-500/30 hover:shadow-purple-400/50 hover:scale-110 hover:-translate-y-2 transition-all duration-500 flex items-center justify-center w-16 h-16">
                      <Icon className="w-7 h-7 text-purple-300 group-hover:text-purple-100 group-hover:rotate-12 transition-all duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-sm -z-10" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-violet-800/50 pt-12 mt-24 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-3 text-purple-400">
              <span>🌐</span>
              <span>Made with ❤️ in Ghaziabad</span>
            </div>
            <span className="text-purple-500/80 font-semibold">© {new Date().getFullYear()} Md. Saif Anwar</span>
          </div>
          <div className="text-sm text-purple-400/70">All rights reserved | Designed & Developed by me 🚀</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Contact;
