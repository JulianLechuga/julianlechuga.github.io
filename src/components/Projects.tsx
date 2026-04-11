import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

interface LocalizedText {
  en: string;
  es: string;
}

interface Project {
  id: number;
  title: LocalizedText;
  categoryId: string;
  description: LocalizedText;
  image: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 11,
    title: { en: 'ReMusic App', es: 'App ReMusic' },
    categoryId: 'fullstack',
    description: { 
      en: 'Music social network where users can review songs/artists, live chat, and manage playlists.', 
      es: 'Red social de música donde los usuarios pueden reseñar canciones/artistas, chatear y gestionar playlists.' 
    },
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL']
  },
  {
    id: 12,
    title: { en: 'Videogames App', es: 'App de Videojuegos' },
    categoryId: 'fullstack',
    description: { 
      en: 'A videogame library application including search, filtering, and user-created games.', 
      es: 'Aplicación de biblioteca de videojuegos que incluye búsqueda, filtros y juegos creados por usuarios.' 
    },
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Redux', 'Express', 'Sequelize'],
    repoUrl: 'https://github.com/JulianLechuga/PI-Videogames'
  },
  {
    id: 1,
    title: { en: 'Physiotherapy Clinic Demo', es: 'Demo Clínica Fisioterapia' },
    categoryId: 'healthcare',
    description: { 
      en: 'A modern, professional website for a physiotherapy clinic in Spain featuring service lists and appointment booking previews.', 
      es: 'Un sitio web moderno y profesional para una clínica de fisioterapia con lista de servicios e integración de citas.' 
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    demoUrl: 'https://julianlechuga.github.io/Physiotherapy-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Physiotherapy-demo'
  },
  {
    id: 2,
    title: { en: 'Restaurant Website Demo', es: 'Demo Restaurante' },
    categoryId: 'hospitality',
    description: { 
      en: 'A beautiful, appetizing site for a Spanish restaurant featuring a rich menu, gallery, and elegant typography.', 
      es: 'Un sitio hermoso y apetitoso para un restaurante con un menú rico, galería de platillos y tipografía elegante.' 
    },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'CSS Modules', 'Framer'],
    demoUrl: 'https://julianlechuga.github.io/Restaurant-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Restaurant-demo'
  },
  {
    id: 3,
    title: { en: 'Home Renovation Company', es: 'Empresa de Reformas' },
    categoryId: 'services',
    description: { 
      en: 'A trustworthy portfolio site for a construction and renovation business showcasing before/after projects.', 
      es: 'Un portfolio confiable para una empresa de construcción y reformas mostrando proyectos de antes/después.' 
    },
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Custom CSS', 'SEO'],
    demoUrl: 'https://julianlechuga.github.io/RepairCompany-demo/',
    repoUrl: 'https://github.com/JulianLechuga/RepairCompany-demo'
  },
  {
    id: 4,
    title: { en: 'Dental Clinic Demo', es: 'Demo Clínica Dental' },
    categoryId: 'healthcare',
    description: { 
      en: 'A clean and professional web presence for a dental clinic, emphasizing trust, hygiene, and modern treatments.', 
      es: 'Presencia web limpia y profesional para una clínica dental, enfatizando confianza, higiene y tratamientos modernos.' 
    },
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://julianlechuga.github.io/DentalClinic-demo/',
    repoUrl: 'https://github.com/JulianLechuga/DentalClinic-demo'
  },
  {
    id: 5,
    title: { en: 'Gym & Fitness Center', es: 'Gimnasio y Fitness' },
    categoryId: 'lifestyle',
    description: { 
      en: 'An bold, energetic website for a local gym or personal trainer featuring membership plans and trainer profiles.', 
      es: 'Un sitio audaz y lleno de energía para un gimnasio local o entrenador personal con perfiles y planes de membresía.' 
    },
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Framer Motion'],
    demoUrl: 'https://julianlechuga.github.io/Gym-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Gym-demo'
  },
  {
    id: 6,
    title: { en: 'Psychologist Portfolio', es: 'Portfolio Psicología' },
    categoryId: 'healthcare',
    description: { 
      en: 'A calming and minimalist website for a psychological therapy practice in Spain with appointment booking.', 
      es: 'Sitio web relajante y minimalista para un consultorio de terapia psicológica con sistema de reserva de citas.' 
    },
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Vite', 'Minimal UI'],
    demoUrl: 'https://julianlechuga.github.io/Psychologist-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Psychologist-demo'
  },
  {
    id: 7,
    title: { en: 'Auto Repair Shop Demo', es: 'Demo Taller Mecánico' },
    categoryId: 'automotive',
    description: { 
      en: 'A robust and straightforward site for a mechanic and auto repair shop with service listings.', 
      es: 'Sitio robusto y directo para un taller mecánico y reparación de autos mostrando el catálogo de servicios.' 
    },
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'CSS'],
    demoUrl: 'https://julianlechuga.github.io/MechanicWorkshop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/MechanicWorkshop-demo'
  },
  {
    id: 8,
    title: { en: 'Premium Hair Salon', es: 'Peluquería Premium' },
    categoryId: 'beauty',
    description: { 
      en: 'A highly aesthetic, premium UI/UX demo for a local hair salon with Google Maps integration.', 
      es: 'Demo premium con alta estética UI/UX para una peluquería local incluyendo integración con Google Maps.' 
    },
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Google Maps API'],
    demoUrl: 'https://julianlechuga.github.io/HairSalon-demo/',
    repoUrl: 'https://github.com/JulianLechuga/HairSalon-demo'
  },
  {
    id: 9,
    title: { en: 'Weather App', es: 'App del Clima' },
    categoryId: 'utility',
    description: { 
      en: 'A highly optimized weather forecast application achieving a 100 Lighthouse score.', 
      es: 'Aplicación de pronóstico del clima altamente optimizada obteniendo una puntuación perfecta en Lighthouse.' 
    },
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'OpenWeather API', 'Performance'],
    demoUrl: 'https://julianlechuga.github.io/AtmosphereWeatherApp/',
    repoUrl: 'https://github.com/JulianLechuga/AtmosphereWeatherApp'
  },
  {
    id: 10,
    title: { en: 'Stock Portfolio Dashboard', es: 'Dashboard de Acciones' },
    categoryId: 'finance',
    description: { 
      en: 'A complex data visualization application featuring real-time stock charts and dark mode.', 
      es: 'Compleja aplicación de visualización de datos de acciones en tiempo real con modo oscuro.' 
    },
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Chart.js', 'Finance API', 'TSX'],
    demoUrl: 'https://julianlechuga.github.io/StockHoldings-demo/',
    repoUrl: 'https://github.com/JulianLechuga/StockHoldings-demo'
  },
  {
    id: 13,
    title: { en: 'Tattoo Shop Demo', es: 'Demo Estudio de Tatuajes' },
    categoryId: 'lifestyle',
    description: { 
      en: 'A dark, artistic portfolio site for a tattoo studio featuring responsive galleries and artist profiles.', 
      es: 'Portfolio oscuro y artístico para un estudio de tatuajes con galerías responsive y perfiles de artistas.' 
    },
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'CSS Modules'],
    demoUrl: 'https://julianlechuga.github.io/TatooShop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/TatooShop-demo'
  },
  {
    id: 14,
    title: { en: 'Barbershop Demo', es: 'Demo Barbería' },
    categoryId: 'beauty',
    description: { 
      en: 'A classic, gentleman-style website for a local barbershop including services and booking integration.', 
      es: 'Sitio web estilo barbero clásico para una barbería local incluyendo servicios e integración de reservas.' 
    },
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'Tailwind'],
    demoUrl: 'https://julianlechuga.github.io/Barbershop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Barbershop-demo'
  },
  {
    id: 15,
    title: { en: 'Beauty Shop Demo', es: 'Demo Centro de Estética' },
    categoryId: 'beauty',
    description: { 
      en: 'An elegant, pastel-themed website for an aesthetic center with detailed treatments and pricing tables.', 
      es: 'Sitio web elegante con temática pastel para un centro estético con lista de tratamientos detallados y precios.' 
    },
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'CSS', 'Vite'],
    demoUrl: 'https://julianlechuga.github.io/BeautyShop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/BeautyShop-demo'
  },
  {
    id: 16,
    title: { en: 'Flower Shop Demo', es: 'Demo Floristería' },
    categoryId: 'lifestyle',
    description: { 
      en: 'A vibrant, botanical ecommerce showcase for a local florist with product galleries and contact details.', 
      es: 'Muestra de ecommerce vibrante y botánico para una floristería local con galerías de productos y detalles de contacto.' 
    },
    image: './flower-shop.png',
    tech: ['React', 'CSS', 'Responsive'],
    demoUrl: 'https://julianlechuga.github.io/FlowerShop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/FlowerShop-demo'
  },
  {
    id: 17,
    title: { en: 'Nail Salon Demo', es: 'Demo Salón de Uñas' },
    categoryId: 'beauty',
    description: { 
      en: 'A highly visual, trendy portfolio for a nail salon focusing on high-quality artwork displays.', 
      es: 'Portfolio muy visual y en tendencia para un salón de uñas enfocado en muestras de uñas de alta calidad.' 
    },
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Framer Motion'],
    demoUrl: 'https://julianlechuga.github.io/NailSaloon-demo/',
    repoUrl: 'https://github.com/JulianLechuga/NailSaloon-demo'
  },
  {
    id: 18,
    title: { en: 'Pro Code Editor', es: 'Editor de Código Pro' },
    categoryId: 'utility',
    description: { 
      en: 'A powerful, browser-based code editor with a sleek UI, syntax highlighting, and folder structures.', 
      es: 'Potente editor de código en el navegador con interfaz elegante, resaltado de sintaxis y estructura de archivos.' 
    },
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'CSS Modules'],
    demoUrl: 'https://julianlechuga.github.io/pro-code-editor/',
    repoUrl: 'https://github.com/JulianLechuga/pro-code-editor'
  },
  {
    id: 19,
    title: { en: 'Retro Fighter Game', es: 'Juego de Lucha Retro' },
    categoryId: 'lifestyle',
    description: { 
      en: 'An immersive retro-style fighting and adventure game built directly onto the browser window.', 
      es: 'Inmersivo juego de lucha y aventuras de estilo retro construido nativamente sobre la ventana del navegador.' 
    },
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'GameHooks'],
    demoUrl: 'https://julianlechuga.github.io/retro-fighter/',
    repoUrl: 'https://github.com/JulianLechuga/retro-fighter'
  },
  {
    id: 20,
    title: { en: 'Web Mockup Builder', es: 'Mockup Builder Web' },
    categoryId: 'utility',
    description: { 
      en: 'A drag-and-drop structural design tool for crafting wireframes and UI mockups effortlessly.', 
      es: 'Una herramienta drag-and-drop de diseño estructural para crear wireframes y mockups de UI sin esfuerzo.' 
    },
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Framer Motion'],
    demoUrl: 'https://julianlechuga.github.io/web-mockup-builder/',
    repoUrl: 'https://github.com/JulianLechuga/web-mockup-builder'
  }
];

const categoriesData = [
  { id: 'all', en: 'All', es: 'Todos' },
  { id: 'fullstack', en: 'Full Stack', es: 'Full Stack' },
  { id: 'healthcare', en: 'Healthcare', es: 'Salud' },
  { id: 'hospitality', en: 'Hospitality', es: 'Hostelería' },
  { id: 'services', en: 'Services', es: 'Servicios' },
  { id: 'lifestyle', en: 'Lifestyle', es: 'Estilo de Vida' },
  { id: 'automotive', en: 'Automotive', es: 'Automotor' },
  { id: 'beauty', en: 'Beauty', es: 'Belleza' },
  { id: 'utility', en: 'Utility', es: 'Utilidad' },
  { id: 'finance', en: 'Finance', es: 'Finanzas' }
];

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const filteredProjects = projectsData.filter(project => 
    activeCategoryId === 'all' ? true : project.categoryId === activeCategoryId
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNo: number) => {
    setCurrentPage(pageNo);
    const filterSection = document.getElementById('projects-filter-section');
    if (filterSection) {
      filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t('projects.title1')} <span className="text-gradient">{t('projects.title2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle"
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>

        <motion.div 
          id="projects-filter-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="filters"
        >
          {categoriesData.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategoryId === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category[language as 'en' | 'es']}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode='popLayout'>
            {paginatedProjects.map((project) => {
              const categoryMatch = categoriesData.find(c => c.id === project.categoryId);
              const categoryName = categoryMatch ? categoryMatch[language as 'en' | 'es'] : project.categoryId;

              return (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="project-card glass"
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title[language as 'en'|'es']} className="project-image" />
                    <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                      <div className="project-links">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                            title="Live Demo"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MonitorPlay size={20} />
                          </a>
                        )}

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                            title="Source Code"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-meta">
                      <span className="project-category">{categoryName}</span>
                    </div>
                    <h3 className="project-title">{project.title[language as 'en'|'es']}</h3>
                    <p className="project-description">{project.description[language as 'en'|'es']}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="page-btn page-btn-icon" 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &larr;
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNo = idx + 1;
              return (
                <button
                  key={pageNo}
                  className={`page-btn ${currentPage === pageNo ? 'active' : ''}`}
                  onClick={() => handlePageChange(pageNo)}
                >
                  {pageNo}
                </button>
              );
            })}
            <button 
              className="page-btn page-btn-icon" 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &rarr;
            </button>
          </div>
        )}
        
        <div className="projects-footer">
          <a href="https://github.com/julianlechuga" target="_blank" rel="noopener noreferrer" className="btn btn-secondary glass">
            {t('projects.viewMore')} <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
