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
    'hero.subtitle': "Hi, I'm Julián Lechuga, a Full Stack Developer turning complex problems into elegant, beautiful, and intuitive interfaces. Specializing in modern React, sleek UI/UX, and performant web apps.",
    'hero.viewWork': 'View Work',
    'hero.techStack': 'Tech Stack:',
    'projects.title1': 'My',
    'projects.title2': 'Projects',
    'projects.subtitle': "A collection of web applications, demos, and professional sites I've built.",
    'projects.filter.all': 'All',
    'projects.viewMore': 'View more on GitHub',
    'about.title1': 'About',
    'about.title2': 'Me',
    'about.p1': "I'm a Full Stack Developer and Web Designer based in Ciudad Jardín, Buenos Aires, Argentina. I consider myself an organized and efficient person when tackling tasks, approaching them methodically with creative thinking, teamwork, communication, and autonomy.",
    'about.p2': 'My experience includes working with NodeJS, React, Redux, SQL among other technologies. I recently led the creation of a music social network, ReMusic App, allowing users to review songs/artists, with live chat and email notifications.',
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
    'cv.exp1.title': 'Full Stack Developer - Scrum Master',
    'cv.exp1.company': 'Banco Comafi',
    'cv.exp1.date': 'Nov 2022 - May 2024',
    'cv.exp2.title': 'Full Stack Developer TA',
    'cv.exp2.company': 'Henry Bootcamp',
    'cv.exp2.date': 'Jun 2022 - Aug 2022',
    'cv.exp3.title': 'Full Stack Developer',
    'cv.exp3.company': 'LiveData',
    'cv.exp3.date': 'Apr 2020 - Apr 2022',
    'cv.edu1.title': 'Full Stack Web Developer',
    'cv.edu1.company': 'Henry Bootcamp (+800 hrs)',
    'cv.edu1.date': '2022',
    'cv.edu2.title': 'English C2 Proficient (CAE)',
    'cv.edu2.company': 'EF SET English Certificate 81/100',
    'cv.edu2.date': '',
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
    'hero.subtitle': "Hola, soy Julián Lechuga, Desarrollador Full Stack transformando problemas complejos en interfaces elegantes e intuitivas. Especializado en React moderno, UI/UX y aplicaciones de alto rendimiento.",
    'hero.viewWork': 'Ver Proyectos',
    'hero.techStack': 'Tecnologías:',
    'projects.title1': 'Mis',
    'projects.title2': 'Proyectos',
    'projects.subtitle': "Una colección de aplicaciones web, demos y sitios profesionales que he construido.",
    'projects.filter.all': 'Todos',
    'projects.viewMore': 'Ver más en GitHub',
    'about.title1': 'Sobre',
    'about.title2': 'Mí',
    'about.p1': "Soy un Desarrollador Full Stack y Diseñador Web de Ciudad Jardín, Buenos Aires, Argentina. Me considero una persona organizada y eficiente, afrontando las tareas de forma metódica con pensamiento creativo, trabajo en equipo, comunicación y autonomía.",
    'about.p2': "Tengo experiencia trabajando en NodeJS, React, Redux, SQL, entre otras. Lideré la creación de una red social musical, ReMusic App, permitiendo reseñas de canciones, chat en vivo y notificaciones por correo.",
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
    'cv.exp1.title': 'Desarrollador Full Stack - Scrum Master',
    'cv.exp1.company': 'Banco Comafi',
    'cv.exp1.date': 'Nov 2022 - May 2024',
    'cv.exp2.title': 'Full Stack Developer TA',
    'cv.exp2.company': 'Henry Bootcamp',
    'cv.exp2.date': 'Jun 2022 - Ago 2022',
    'cv.exp3.title': 'Desarrollador Full Stack',
    'cv.exp3.company': 'LiveData',
    'cv.exp3.date': 'Abr 2020 - Abr 2022',
    'cv.edu1.title': 'Full Stack Web Developer',
    'cv.edu1.company': 'Henry Bootcamp (+800 hrs)',
    'cv.edu1.date': '2022',
    'cv.edu2.title': 'Inglés C2 Proficient (CAE)',
    'cv.edu2.company': 'EF SET English Certificate 81/100',
    'cv.edu2.date': '',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

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
