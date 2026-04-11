import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact Me',
    'hero.badge': 'Available for new opportunities',
    'hero.title1': 'Crafting Digital',
    'hero.title2': 'Experiences',
    'hero.title3': 'that Inspire',
    'hero.subtitle': "Hi, I'm Julián Lechuga. Full Stack Software Engineer with 5+ years of experience building scalable web applications and improving development workflows through automation. Specialized in React, TypeScript, Node.js, and CI/CD.",
    'hero.viewWork': 'View Work',
    'hero.techStack': 'Tech Stack:',
    'projects.title1': 'My',
    'projects.title2': 'Projects',
    'projects.subtitle': "A collection of web applications, demos, and professional sites I've built.",
    'projects.filter.all': 'All',
    'projects.viewMore': 'View more on GitHub',
    'about.title1': 'About',
    'about.title2': 'Me',
    'about.p1': "I'm a Full Stack Software Engineer based in Buenos Aires, Argentina & Oviedo, Spain. I specialize in building scalable web applications and improving development workflows through automation.",
    'about.p2': "My portfolio features 20+ live applications demonstrating end-to-end development, perfect Lighthouse performance scores, and robust DevOps practices including CI/CD pipelines natively managed via GitHub Actions.",
    'about.skillsTitle': 'Core Skills',
    'about.experienceTitle': 'Experience',
    'about.educationTitle': 'Education',
    'contact.title1': 'Get in',
    'contact.title2': 'Touch',
    'contact.subtitle': "Have a project in mind or looking for a full stack developer? Let's talk!",
    'contact.infoCard.title': 'Contact Information',
    'contact.infoCard.desc': 'Fill out the form and I will get back to you within 24 hours.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'footer.desc': 'Building beautiful, performant, and accessible digital experiences.',
    'footer.quickLinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.rights': 'All rights reserved.',
    
    'cv.exp1.title': 'Independent Full Stack Engineer',
    'cv.exp1.company': 'Freelance',
    'cv.exp1.date': 'May 2024 - Present',
    'cv.exp1.desc': 'Designed and deployed 20+ applications, built CI/CD workflows, achieved 90+ Lighthouse scores.',
    
    'cv.exp2.title': 'Full Stack Developer & Scrum Master',
    'cv.exp2.company': 'Banco Comafi',
    'cv.exp2.date': 'Nov 2022 - May 2024',
    'cv.exp2.desc': 'Developed fintech applications, acted as Scrum Master improving coordination, and introduced strong QA practices.',
    
    'cv.exp3.title': 'Full Stack Developer',
    'cv.exp3.company': 'LiveData',
    'cv.exp3.date': 'Apr 2020 - Apr 2022',
    'cv.exp3.desc': 'Maintained enterprise applications, fixed bugs, and modernized UI components using React and Node.js.',
    
    'cv.edu1.title': 'B.S. Information Technology Engineering',
    'cv.edu1.company': 'Escuela Politécnica de Ingeniería de Gijón',
    'cv.edu1.date': 'Ongoing',
    
    'cv.edu2.title': 'Full Stack Web Developer',
    'cv.edu2.company': 'Henry Bootcamp',
    'cv.edu2.date': '2022',
  },
  es: {
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'hero.badge': 'Disponible para nuevas oportunidades',
    'hero.title1': 'Creando Experiencias',
    'hero.title2': 'Digitales',
    'hero.title3': 'que Inspiran',
    'hero.subtitle': "Hola, soy Julián Lechuga. Ingeniero de Software Full Stack con más de 5 años de experiencia construyendo aplicaciones escalables y automatizando flujos de despliegue con React, TypeScript y Node.js.",
    'hero.viewWork': 'Ver Proyectos',
    'hero.techStack': 'Tecnologías:',
    'projects.title1': 'Mis',
    'projects.title2': 'Proyectos',
    'projects.subtitle': "Una colección de aplicaciones web, demos y sitios profesionales que he construido.",
    'projects.filter.all': 'Todos',
    'projects.viewMore': 'Ver más en GitHub',
    'about.title1': 'Sobre',
    'about.title2': 'Mí',
    'about.p1': "Soy un Ingeniero de Software Full Stack de Buenos Aires, Argentina y Oviedo, España. Me especializo en construir aplicaciones escalables y optimizar el desarrollo mediante automatización y CI/CD.",
    'about.p2': "Mi portfolio cuenta con más de 20 aplicaciones activas que demuestran desarrollo de principio a fin, puntuaciones perfectas en Lighthouse y prácticas sólidas de DevOps mediante GitHub Actions.",
    'about.skillsTitle': 'Habilidades Principales',
    'about.experienceTitle': 'Experiencia Profesional',
    'about.educationTitle': 'Educación y Logros',
    'contact.title1': 'Ponte en',
    'contact.title2': 'Contacto',
    'contact.subtitle': "¿Tienes un proyecto en mente o buscas un desarrollador full stack? ¡Hablemos!",
    'contact.infoCard.title': 'Información de Contacto',
    'contact.infoCard.desc': 'Completa el formulario y te responderé en un plazo de 24 horas.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'footer.desc': 'Construyendo experiencias digitales hermosas, accesibles y de alto rendimiento.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.connect': 'Conecta',
    'footer.rights': 'Todos los derechos reservados.',
    
    'cv.exp1.title': 'Ingeniero Full Stack Independiente',
    'cv.exp1.company': 'Freelance',
    'cv.exp1.date': 'Mayo 2024 - Presente',
    'cv.exp1.desc': 'Diseñé y desplegué más de 20 aplicaciones de producción, desarrollé pipelines CI/CD y logré optimizar el código obteniendo puntuaciones Lighthouse de 90+.',
    
    'cv.exp2.title': 'Desarrollador Full Stack & Scrum Master',
    'cv.exp2.company': 'Banco Comafi',
    'cv.exp2.date': 'Nov 2022 - Mayo 2024',
    'cv.exp2.desc': 'Construí aplicaciones fintech con React, actué como Scrum Master facilitando coordinación e introduje fuertes prácticas de pruebas QA.',
    
    'cv.exp3.title': 'Desarrollador Full Stack',
    'cv.exp3.company': 'LiveData',
    'cv.exp3.date': 'Abr 2020 - Abr 2022',
    'cv.exp3.desc': 'Mantuve aplicaciones empresariales, solucioné defectos estructurales y estandaricé interfaces usando NodeJS y React.',
    
    'cv.edu1.title': 'Grado en Ingeniería Informática (Tecnologías de la Información)',
    'cv.edu1.company': 'Escuela Politécnica de Ingeniería de Gijón',
    'cv.edu1.date': 'En Curso',
    
    'cv.edu2.title': 'Full Stack Web Developer',
    'cv.edu2.company': 'Henry Bootcamp',
    'cv.edu2.date': '2022',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
