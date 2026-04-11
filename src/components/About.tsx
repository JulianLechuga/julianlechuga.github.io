import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const skills = [
  { name: 'React / Redux', level: 95 },
  { name: 'Node.js / Express', level: 90 },
  { name: 'TypeScript / JavaScript', level: 90 },
  { name: 'PostgreSQL / SQL', level: 85 },
  { name: 'HTML / CSS / Tailwind', level: 90 },
  { name: 'Java / Python / C', level: 75 },
];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section about-section">
      <div className="container">
        
        <div className="about-grid">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <h2 className="section-title">
              {t('about.title1')} <span className="text-gradient">{t('about.title2')}</span>
            </h2>
            <p className="about-text">{t('about.p1')}</p>
            <p className="about-text">{t('about.p2')}</p>
            
            <div className="skills-container">
              <h3 className="skills-title"><Code className="inline-icon" size={24}/> {t('about.skillsTitle')}</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="skill-bar-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cv-grid"
          >
            {/* Experience Timeline */}
            <div className="cv-section">
              <h3 className="cv-title"><Briefcase className="inline-icon" size={24} /> {t('about.experienceTitle')}</h3>
              
              <div className="timeline">
                <div className="timeline-item glass">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-role">{t('cv.exp1.title')}</h4>
                  <p className="timeline-company">{t('cv.exp1.company')} <span>| {t('cv.exp1.date')}</span></p>
                  <p className="timeline-description text-sm mt-2 opacity-80">{t('cv.exp1.desc')}</p>
                </div>
                
                <div className="timeline-item glass">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-role">{t('cv.exp2.title')}</h4>
                  <p className="timeline-company">{t('cv.exp2.company')} <span>| {t('cv.exp2.date')}</span></p>
                  <p className="timeline-description text-sm mt-2 opacity-80">{t('cv.exp2.desc')}</p>
                </div>
                
                <div className="timeline-item glass">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-role">{t('cv.exp3.title')}</h4>
                  <p className="timeline-company">{t('cv.exp3.company')} <span>| {t('cv.exp3.date')}</span></p>
                  <p className="timeline-description text-sm mt-2 opacity-80">{t('cv.exp3.desc')}</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="cv-section mt-4">
              <h3 className="cv-title"><GraduationCap className="inline-icon" size={24} /> {t('about.educationTitle')}</h3>
              
              <div className="timeline">
                <div className="timeline-item glass">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-role">{t('cv.edu1.title')}</h4>
                  <p className="timeline-company">{t('cv.edu1.company')} <span>| {t('cv.edu1.date')}</span></p>
                </div>
                
                <div className="timeline-item glass">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-role">{t('cv.edu2.title')}</h4>
                  <p className="timeline-company">{t('cv.edu2.company')}</p>
                </div>
              </div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
