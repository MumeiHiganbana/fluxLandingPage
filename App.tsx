
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Challenges from './components/Challenges';
import Importance from './components/Importance';
import HowItWorks from './components/HowItWorks';
import AboutWQMS from './components/AboutWQMS';
import Features from './components/Features';
import Sensors from './components/Sensors';
import HelpCenter from './components/HelpCenter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <Partners />
        
        <section id="challenges" className="bg-slate-50">
          <Challenges />
        </section>

        <section id="importance" className="py-10">
          <Importance />
        </section>

        <section id="how-it-works" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
          <HowItWorks />
        </section>

        <section id="about" className="py-20">
          <AboutWQMS />
        </section>

        <section id="sensors" className="py-20 bg-slate-50">
          <Sensors />
        </section>

        <section id="features" className="py-20">
          <Features />
        </section>

        <section id="support" className="py-20 bg-slate-50">
          <HelpCenter />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
