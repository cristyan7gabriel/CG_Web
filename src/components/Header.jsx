import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          CG<span className="text-cgweb-primary">.</span>WEB
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-cgweb-textMuted">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">Sobre</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
          <a href="#benefits" className="hover:text-white transition-colors">Benefícios</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a href="#contact" className="bg-cgweb-primary hover:bg-cgweb-secondary text-white px-7 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(22,95,242,0.4)] hover:shadow-[0_0_25px_rgba(22,95,242,0.6)]">
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-panel py-5 px-6 flex flex-col gap-4 border-t border-white/5"
        >
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-cgweb-primary text-white">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-cgweb-primary text-white">Sobre</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-cgweb-primary text-white">Portfólio</a>
          <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-cgweb-primary text-white">Benefícios</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-cgweb-primary text-white">FAQ</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-cgweb-primary text-white text-center py-3 rounded-full font-semibold mt-2">
            Fale Conosco
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
