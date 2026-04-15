// App.js - Main Application Component
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Testimonials from './Testimonials';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#011627] text-white font-sans">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;