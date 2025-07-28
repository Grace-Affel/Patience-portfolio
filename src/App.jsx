import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-[#EAEEF7] min-h-screen text-white pt-20">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience/>
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
