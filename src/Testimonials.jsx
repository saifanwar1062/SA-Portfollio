// components/Testimonials.js
import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, Users, Award, Zap } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const testimonials = [
    { text: "Saif is a visionary developer whose attention to detail and creativity transformed our project into a massive success. His work ethic is unmatched!", author: "Yash Sahu", role: "Software Engineer, HCL Technologies", avatar: "🧑‍💻", rating: 5 },
    { text: "Working with Saif was pure magic! He blends design thinking with flawless code execution. Our platform now converts 3x better thanks to his expertise.", author: "Heather Forster", role: "Lead UI/UX Designer, PixelWorks", avatar: "🎨", rating: 5 },
    { text: "From concept to production, Saif delivered enterprise-grade quality ahead of schedule. His full-stack mastery saved us $50K in development costs.", author: "Amy Jacobson", role: "Tech Manager, CodeEmpire", avatar: "👩‍💼", rating: 5 },
    { text: "Saif completely modernized our legacy platform. The new system handles 10x traffic with 99.9% uptime. True rockstar developer!", author: "Carry Smith", role: "CTO, Innovate Labs", avatar: "🔬", rating: 5 },
    { text: "Saif's travel platform for Hajj & Umrah bookings is now serving 5K+ pilgrims monthly. His attention to cultural details made it perfect.", author: "Ahmed Khan", role: "Travel Tech Entrepreneur", avatar: "🕌", rating: 5 },
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentTestimonial(p => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const t = testimonials[currentTestimonial];
    setIsTyping(true); setTypedText('');
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(t.text.slice(0, i)); i++;
      if (i > t.text.length) { clearInterval(timer); setIsTyping(false); }
    }, 50);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  useEffect(() => {
    const fn = e => setMousePos({ x: (e.clientX / window.innerWidth) * 20 - 10, y: (e.clientY / window.innerHeight) * 20 - 10 });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float"
            style={{ left: `${10 + i * 8}%`, top: `${10 + (i % 3) * 30}%`, animationDelay: `${i * 0.3}s`, animationDuration: `${4 + i * 0.2}s` }} />
        ))}
      </div>

      <div ref={containerRef} className="relative z-20">
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 mb-12 px-10 py-5 bg-gradient-to-r from-purple-500/15 to-violet-500/15 rounded-3xl border border-purple-400/40 backdrop-blur-2xl shadow-2xl shadow-purple-500/40 mx-auto max-w-max">
            <Users className="w-8 h-8 text-purple-400" />
            <div>
              <span className="text-2xl font-black text-purple-100 block">25+</span>
              <span className="text-purple-300/90 text-sm font-medium">Happy Clients</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black mb-8 bg-gradient-to-r from-purple-300 via-violet-200 to-purple-100 bg-clip-text text-transparent leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl lg:text-2xl text-purple-100/80 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what clients from HCL, startups, and agencies are saying.
          </p>
        </div>

        {/* Main Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-24">
          <div
            className={`group relative w-full h-80 lg:h-96 bg-gradient-to-br from-violet-950/80 to-slate-900/80 backdrop-blur-2xl rounded-3xl p-10 border border-purple-500/40 shadow-2xl shadow-purple-500/30 hover:shadow-purple-400/50 transition-all duration-1000 cursor-pointer overflow-hidden ${hoveredCard === currentTestimonial ? 'ring-4 ring-purple-500/50 z-20' : ''}`}
            onMouseEnter={() => setHoveredCard(currentTestimonial)}
            style={{ transform: `perspective(1000px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-3xl flex items-center justify-center opacity-20 group-hover:opacity-50 group-hover:scale-110 transition-all">
              <Quote className="w-10 h-10 text-purple-400" />
            </div>
            <div className="relative z-20 h-full flex flex-col justify-center">
              <div className="text-purple-100/90 text-lg lg:text-xl leading-relaxed mb-8 h-32 lg:h-40 flex items-center">
                {typedText}
                {isTyping && <span className="inline-block w-2 h-6 bg-purple-400 ml-1 animate-blink" />}
              </div>
              <div className="flex items-center gap-4 pt-8 border-t border-violet-800/50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-violet-500/30 rounded-3xl flex items-center justify-center text-2xl shadow-2xl shadow-purple-500/40 group-hover:scale-110 transition-all">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-black text-purple-50">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-purple-300/90">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-purple-400 fill-purple-400' : 'text-violet-700/50'}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentTestimonial(i)}
                className={`h-3 rounded-full transition-all duration-300 ${currentTestimonial === i ? 'w-8 bg-gradient-to-r from-purple-400 to-violet-400' : 'w-3 bg-violet-700/50 hover:bg-violet-600/50'}`} />
            ))}
          </div>
        </div>

        {/* Additional testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={`small-${index}`} onMouseEnter={() => setHoveredCard(index + 10)}
              className="group relative h-64 bg-gradient-to-br from-violet-950/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-purple-700/50 shadow-xl shadow-purple-500/20 hover:shadow-purple-400/40 hover:scale-105 hover:-translate-y-3 transition-all duration-700 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-violet-500/15 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm -z-10" />
              <Quote className="w-12 h-12 text-purple-400/50 mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all mx-auto" />
              <blockquote className="text-purple-100/90 text-lg leading-relaxed mb-6 h-24 overflow-hidden">"{testimonial.text.slice(0, 100)}..."</blockquote>
              <div className="flex items-center gap-4 absolute bottom-6 left-6 right-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-purple-500/30">{testimonial.avatar}</div>
                <div>
                  <h5 className="font-bold text-purple-50 text-lg">{testimonial.author}</h5>
                  <p className="text-purple-300/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-20 border-t border-violet-800/50">
          {[['25+', 'purple', 'Happy Clients'], ['5.0', 'violet', 'Avg Rating'], ['100%', 'purple', 'On Time'], ['0%', 'purple', 'Churn Rate']].map(([v, c, l]) => (
            <div key={l} className="text-center">
              <div className={`text-4xl font-black text-${c}-400 mb-3`}>{v}</div>
              <div className="text-purple-300/90 font-semibold">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-blink { animation: blink 1s infinite; }
      `}</style>
    </section>
  );
};

export default Testimonials;
