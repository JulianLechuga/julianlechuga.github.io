import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <span className="text-gradient">JL</span>
          <span className="logo-text">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#about" className="nav-link">{t('nav.about')}</a>
          <a href="#projects" className="nav-link">{t('nav.projects')}</a>
          <a href="#skills" className="nav-link">{t('nav.skills')}</a>
          
          <div className="lang-slider-container" onClick={toggleLanguage} title="Toggle Language">
            <div className={`lang-slider ${language === 'en' ? 'en-active' : 'es-active'}`}>
              <div className="lang-slider-knob"></div>
              <span className="lang-icon es-icon" title="Español">
                <svg viewBox="0 0 36 36"><path fill="#C60A1D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/><path fill="#FFC400" d="M0 12h36v12H0z"/><path fill="#E8112D" d="M12.5 17.5h-1a1.5 1.5 0 0 1-1.5-1.5v-2h-1v2a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-2h-1v2a1.5 1.5 0 0 1-1.5 1.5z"/><path fill="#FFB02E" d="M8 19h5v2H8z"/><path fill="#E8112D" opacity="1" d="M8 20h5v1H8z"/></svg>
              </span>
              <span className="lang-icon en-icon" title="English">
                <svg viewBox="0 0 36 36"><path fill="#012169" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/><path fill="#FFF" d="m26.791 5 9.209 6.22V5zm-15.586.277L0 12.879V5z"/><path fill="#C8102E" d="M11.666 5 0 12.879v2.227l12.434-8.4zM36 12.879 24.334 5h-2.905l14.571 9.845z"/><path fill="#FFF" d="M.463 31 11.205 23.743 0 24.316zm35.074.277L24.334 22.84 36 22.31z"/><path fill="#C8102E" d="M0 24.316V26.6l10-6.758-1.579-1.066zm36 .6-11.205-7.568 1.488-.046 9.717 6.56z"/><path fill="#FFF" d="M15 5h6v26h-6zM0 15h36v6H0z"/><path fill="#C8102E" d="M16 5h4v26h-4zM0 16h36v4H0z"/></svg>
              </span>
            </div>
          </div>
          
          <a href="#contact" className="nav-link nav-btn">{t('nav.contact')}</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open glass' : ''}`}>
        <a href="#about" className="mobile-link" onClick={toggleMobileMenu}>{t('nav.about')}</a>
        <a href="#projects" className="mobile-link" onClick={toggleMobileMenu}>{t('nav.projects')}</a>
        <a href="#skills" className="mobile-link" onClick={toggleMobileMenu}>{t('nav.skills')}</a>
        
        <div className="mobile-link lang-slider-mobile-wrapper" onClick={() => { toggleLanguage(); setTimeout(toggleMobileMenu, 300); }}>
          <span className="mobile-lang-text">Language</span>
          <div className={`lang-slider ${language === 'en' ? 'en-active' : 'es-active'}`}>
            <div className="lang-slider-knob"></div>
            <span className="lang-icon es-icon">
              <svg viewBox="0 0 36 36"><path fill="#C60A1D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/><path fill="#FFC400" d="M0 12h36v12H0z"/><path fill="#E8112D" d="M12.5 17.5h-1a1.5 1.5 0 0 1-1.5-1.5v-2h-1v2a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-2h-1v2a1.5 1.5 0 0 1-1.5 1.5z"/><path fill="#FFB02E" d="M8 19h5v2H8z"/><path fill="#E8112D" opacity=".5" d="M8 20h5v1H8z"/></svg>
            </span>
            <span className="lang-icon en-icon">
              <svg viewBox="0 0 36 36"><path fill="#012169" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/><path fill="#FFF" d="m26.791 5 9.209 6.22V5zm-15.586.277L0 12.879V5z"/><path fill="#C8102E" d="M11.666 5 0 12.879v2.227l12.434-8.4zM36 12.879 24.334 5h-2.905l14.571 9.845z"/><path fill="#FFF" d="M.463 31 11.205 23.743 0 24.316zm35.074.277L24.334 22.84 36 22.31z"/><path fill="#C8102E" d="M0 24.316V26.6l10-6.758-1.579-1.066zm36 .6-11.205-7.568 1.488-.046 9.717 6.56z"/><path fill="#FFF" d="M15 5h6v26h-6zM0 15h36v6H0z"/><path fill="#C8102E" d="M16 5h4v26h-4zM0 16h36v4H0z"/></svg>
            </span>
          </div>
        </div>

        <a href="#contact" className="mobile-link mobile-btn" onClick={toggleMobileMenu}>{t('nav.contact')}</a>
        <div className="mobile-socials">
          <a href="https://github.com/julianlechuga" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
          <a href="mailto:contact@example.com"><Mail size={24} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
