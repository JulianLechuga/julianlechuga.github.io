import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully! (Demo)');
    }, 1500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t('contact.title1')} <span className="text-gradient">{t('contact.title2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="contact-card glass">
              <h3 className="contact-card-title">{t('contact.infoCard.title')}</h3>
              <p className="contact-card-desc">{t('contact.infoCard.desc')}</p>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <Mail size={20} className="info-icon" />
                  </div>
                  <div className="info-text">
                    <p className="info-label">Email</p>
                    <p className="info-value">julianlechuga12@gmail.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <MapPin size={20} className="info-icon" />
                  </div>
                  <div className="info-text">
                    <p className="info-label">Location</p>
                    <p className="info-value">Spain / Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <form onSubmit={handleSubmit} className="contact-form glass">
              <div className="form-group">
                <label htmlFor="name" className="form-label">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="form-input" 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="form-input" 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">{t('contact.form.subject')}</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  className="form-input" 
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div className="form-group form-group-full">
                <label htmlFor="message" className="form-label">{t('contact.form.message')}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="form-input form-textarea" 
                  placeholder="..."
                  rows={5}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>{t('contact.form.send')} <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
