import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge glass"
          >
            <span className="badge-dot"></span>
            {t('hero.badge')}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
          >
            {t('hero.title1')} <br />
            <span className="text-gradient">{t('hero.title2')}</span> {t('hero.title3')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
            dangerouslySetInnerHTML={{ __html: t('hero.subtitle').replace('Julián Lechuga', '<span class="text-highlight">Julián Lechuga</span>') }}
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-cta"
          >
            <a href="#projects" className="btn btn-primary">
              {t('hero.viewWork')} <ArrowRight size={20} />
            </a>
            <a href="https://github.com/julianlechuga" target="_blank" rel="noopener noreferrer" className="btn btn-secondary glass">
              <Github size={20} /> GitHub
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="tech-stack-preview"
          >
            <p>{t('hero.techStack')}</p>
            <div className="tech-icons">
              {['React', 'TypeScript', 'Node.js', 'SQL', 'Python', 'Java', 'C'].map((tech, i) => (
                <span key={i} className="tech-tag glass">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="visual-card-wrapper">
            <div className="visual-blob"></div>
            <div className="code-card glass">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="filename">developer.ts</span>
              </div>
              <pre className="code-body">
                <code>
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                  <br/>
                  {'  '}name: <span className="string">'Julián Lechuga'</span>,
                  <br/>
                  {'  '}role: <span className="string">'Frontend Engineer'</span>,
                  <br/>
                  {'  '}focus: [<span className="string">'UI/UX'</span>, <span className="string">'React'</span>, <span className="string">'Animations'</span>],
                  <br/>
                  {'  '}passionate: <span className="boolean">true</span>
                  <br/>
                  {'}'};
                  <br/><br/>
                  <span className="function">buildAwesomeApps</span>(developer);
                </code>
              </pre>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="floating-element glass el-1"
            >
              <Code2 size={24} className="icon-gradient" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="floating-element glass el-2"
            >
              <ExternalLink size={20} className="icon-gradient-alt" />
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
