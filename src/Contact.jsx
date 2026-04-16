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

  const inputCls = "w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:border-gold focus:outline-none transition-all focus:bg-slate-900 shadow-sm hover:border-slate-700 text-sm";

  return (
    <section id="contact" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-silver/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-gold/5 to-silver/5 rounded-full blur-3xl animate-pulse" />
        {/* Mouse follower */}
        <div className="fixed w-2 h-2 bg-gradient-to-r from-gold to-silver rounded-full z-50 blur-sm opacity-60 pointer-events-none transition-all duration-300"
          style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px`, transform: 'translate(-50%, -50%)' }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-slate-900 rounded-lg border border-slate-800 shadow-md shadow-gold/5 mx-auto max-w-max">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-sm font-bold text-slate-200">Let's Connect</span>
          </div>
          <h2 className="text-2.5xl sm:text-3.5xl lg:text-4.5xl font-black mb-3 text-white leading-tight">
            Ready to Start Your<br />
              <span className="bg-gradient-to-r from-gold to-silver bg-clip-text text-transparent">Next Project?</span>
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Whether it's a landing page, travel platform, or full React web app — I'm here to bring your vision to life with pixel-perfect precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Contact Form */}
          <div>
            <div className="bg-slate-900 rounded-lg p-5 lg:p-6 border border-slate-800 shadow-xl shadow-gold/5 hover:shadow-gold/10 transition-all duration-500">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-2 flex items-center gap-2"><span>👤</span> Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={inputCls} placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-2 flex items-center gap-2"><Mail className="w-5 h-5 text-gold/60" /> Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputCls} placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-2 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-gold/60" /> Subject</label>
                  <input type="text" name="subject" value={formData.subject || subjectTyping} onFocus={() => setFormData(p => ({ ...p, subject: '' }))} onChange={handleInputChange} className={`${inputCls} text-lg font-semibold`} placeholder={subjectTyping} />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-2 flex items-center gap-2"><span>💬</span> Message</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleInputChange} className={`${inputCls} resize-vertical`} placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full group relative px-8 py-6 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-black font-bold text-xl rounded-3xl shadow-md shadow-gold/20 hover:shadow-lg hover:shadow-gold/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <><div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" /> Send Message</>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-gold to-silver rounded-3xl opacity-0 group-hover:opacity-20 blur-sm -z-10" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Socials */}
          <div className="space-y-5 lg:pt-2">
              <div className="group relative bg-slate-900 rounded-3xl p-8 lg:p-10 border border-slate-800 shadow-xl shadow-gold/5 hover:shadow-gold/10 transition-all">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 p-4 bg-gold/10 rounded-2xl mb-6 shadow-sm border border-slate-800">
                  <MapPin className="w-6 h-6 text-gold" />
                  <span className="font-bold text-slate-200">Kalindi Kunj, New Delhi</span>
                </div>
                <div className="text-3xl font-black text-white mb-2">Md. Saif Anwar</div>
                <div className="text-gold font-semibold">Frontend React.js Developer</div>
              </div>
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-center gap-5 p-2 bg-slate-950 border border-slate-800 rounded-2xl">
                  <div className="p-3 bg-gold/10 rounded-xl"><Phone className="w-5 h-5 text-gold" /></div>
                  <span className="text-slate-300 font-medium">+91-9773577624</span>
                </div>
                <div className="flex items-center justify-center gap-5 p-2 bg-slate-950 border border-slate-800 rounded-2xl">
                  <div className="p-3 bg-gold/10 rounded-xl"><Mail className="w-5 h-5 text-gold" /></div>
                  <span className="text-slate-300 font-medium break-all">saifanwar1062@gmail.com</span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 pt-8 border-t border-slate-800">
                <a href="mailto:saifanwar1062@gmail.com" className="group flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-gold-dark to-gold text-black font-semibold rounded-2xl shadow-md shadow-gold/20 hover:shadow-gold/30 transition-all hover:scale-105">
                  <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Email Me
                </a>
                <a href="/resume.pdf" download className="flex items-center justify-center gap-3 p-4 border border-slate-800 text-slate-300 font-semibold rounded-2xl hover:bg-slate-950 transition-all hover:scale-105 shadow-sm hover:shadow-md">
                  <Download className="w-5 h-5" /> Download Resume
                </a>
              </div>
            </div>

            {/* Social Links */}
          
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-12 mt-24 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-3 text-slate-400">
              <span>🌐</span>
              <span>Made with ❤️ in New Delhi</span>
            </div>
            <span className="text-slate-300 font-semibold">© {new Date().getFullYear()} Md. Saif Anwar</span>
          </div>
          <div className="text-sm text-slate-500">All rights reserved | Designed & Developed by me 🚀</div>
        </div>
      </div>

      <style>{`
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
