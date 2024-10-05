import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const heroContent = document.querySelector('#hero .hero-content');
    heroContent.classList.add('fade-in');
  }, []);

  return (
    <div>
      <Nav isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
      <Hero />
      <Features />
      <Benefits />
      <About />
      <Contact />
      <Footer />

      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ▲
        </button>
      )}
    </div>
  );
}

export default App;
