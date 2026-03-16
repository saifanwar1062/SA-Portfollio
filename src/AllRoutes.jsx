// App.js - Main Application Component
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Testimonials from './Testimonials';
import Contact from './Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;