import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer glass">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="nav-logo">
              <span className="text-gradient">JL</span>
              <span className="logo-text">.dev</span>
            </a>
            <p className="footer-desc">
              {t('footer.desc')}
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">{t('footer.quickLinks')}</h4>
            <ul>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#projects">{t('nav.projects')}</a></li>
              <li><a href="#skills">{t('nav.skills')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div className="footer-socials">
            <h4 className="footer-heading">{t('footer.connect')}</h4>
            <div className="social-icons">
              <a href="https://github.com/julianlechuga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Julián Lechuga. {t('footer.rights')}</p>
          <p className="made-with">
            Built with <Heart size={14} className="heart-icon" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
