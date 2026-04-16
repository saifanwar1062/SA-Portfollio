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
    <section id="testimonials" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-gold/30 rounded-full animate-float opacity-30"
            style={{ left: `${10 + i * 8}%`, top: `${10 + (i % 3) * 30}%`, animationDelay: `${i * 0.3}s`, animationDuration: `${4 + i * 0.2}s` }} />
        ))}
      </div>

      <div ref={containerRef} className="relative z-20">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 mb-4 px-5 py-2.5 bg-slate-900 rounded-lg border border-slate-800 shadow-md shadow-gold/5 mx-auto max-w-max">
             <Users className="w-5 h-5 text-gold" />
             <span className="text-sm font-bold text-slate-200">Social Proof</span>
          </div>
          <h2 className="text-2.5xl lg:text-3.5xl xl:text-4.5xl font-black mb-3 text-white leading-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm lg:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what clients from HCL, startups, and agencies are saying.
          </p>
        </div>

        {/* Main Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className={`group relative w-full h-64 lg:h-72 bg-slate-900/90 backdrop-blur-2xl rounded-lg p-6 kg:p-8 border border-slate-800 shadow-xl shadow-gold/5 hover:shadow-gold/20 transition-all duration-1000 cursor-pointer overflow-hidden ${hoveredCard === currentTestimonial ? 'ring-4 ring-gold/10 z-20' : ''}`}
            onMouseEnter={() => setHoveredCard(currentTestimonial)}
            style={{ transform: `perspective(1000px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-silver/5 to-gold/5 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-all" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <Quote className="w-8 h-8 text-gold" />
            </div>
            <div className="relative z-20 h-full flex flex-col justify-center">
              <div className="text-slate-300 text-sm lg:text-base leading-relaxed mb-4 lg:mb-6 h-24 lg:h-28 flex items-center">
                {typedText}
                {isTyping && <span className="inline-block w-2 h-5 bg-gold ml-1 animate-blink" />}
              </div>
              <div className="flex items-center gap-3 pt-4 lg:pt-6 border-t border-slate-800">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-all">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <h4 className="text-base lg:text-lg font-black text-white">{testimonials[currentTestimonial].author}</h4>
                  <p className="text-xs lg:text-sm text-slate-400">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < testimonials[currentTestimonial].rating ? 'text-gold fill-gold' : 'text-slate-200'}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentTestimonial(i)}
                className={`h-3 rounded-full transition-all duration-300 ${currentTestimonial === i ? 'w-8 bg-gradient-to-r from-gold-dark to-gold' : 'w-3 bg-slate-800 hover:bg-slate-700'}`} />
            ))}
          </div>
        </div>

        {/* Additional testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={`small-${index}`} onMouseEnter={() => setHoveredCard(index + 10)}
              className="group relative h-64 bg-gradient-to-br from-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl p-8 border border-slate-800 shadow-xl shadow-gold/5 hover:shadow-gold/20 hover:scale-105 hover:-translate-y-3 transition-all duration-700 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-silver/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm -z-10" />
              <Quote className="w-12 h-12 text-gold/30 mb-6 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all mx-auto" />
              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6 h-24 overflow-hidden">"{testimonial.text.slice(0, 100)}..."</blockquote>
              <div className="flex items-center gap-4 absolute bottom-6 left-6 right-6">
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-gold/10">{testimonial.avatar}</div>
                <div>
                  <h5 className="font-bold text-white text-lg">{testimonial.author}</h5>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-20 border-t border-slate-800">
          {[['25+', 'gold', 'Happy Clients'], ['5.0', 'silver', 'Avg Rating'], ['100%', 'gold', 'On Time'], ['0%', 'silver', 'Churn Rate']].map(([v, c, l]) => (
            <div key={l} className="text-center">
              <div className={`text-4xl font-black mb-3 ${c === 'gold' ? 'text-gold' : 'text-silver'}`}>{v}</div>
              <div className="text-slate-400 font-semibold">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
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
