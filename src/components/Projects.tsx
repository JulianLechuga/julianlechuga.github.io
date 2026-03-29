import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 11,
    title: 'ReMusic App',
    category: 'Full Stack',
    description: 'Music social network where users can review songs/artists, live chat, and manage playlists.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL']
  },
  {
    id: 12,
    title: 'Videogames App',
    category: 'Full Stack',
    description: 'A videogame library application including search, filtering, and user-created games.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Redux', 'Express', 'Sequelize'],
    repoUrl: 'https://github.com/JulianLechuga/PI-Videogames'
  },
  {
    id: 1,
    title: 'Physiotherapy Clinic Demo',
    category: 'Healthcare',
    description: 'A modern, professional website for a physiotherapy clinic in Spain featuring service lists and appointment booking previews.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    demoUrl: 'https://julianlechuga.github.io/Physiotherapy-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Physiotherapy-demo'
  },
  {
    id: 2,
    title: 'Restaurant Website Demo',
    category: 'Hospitality',
    description: 'A beautiful, appetizing site for a Spanish restaurant featuring a rich menu, gallery, and elegant typography.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'CSS Modules', 'Framer'],
    demoUrl: 'https://julianlechuga.github.io/Restaurant-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Restaurant-demo'
  },
  {
    id: 3,
    title: 'Home Renovation Company',
    category: 'Services',
    description: 'A trustworthy portfolio site for a construction and renovation business showcasing before/after projects.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Custom CSS', 'SEO'],
    demoUrl: 'https://julianlechuga.github.io/RepairCompany-demo/',
    repoUrl: 'https://github.com/JulianLechuga/RepairCompany-demo'
  },
  {
    id: 4,
    title: 'Dental Clinic Demo',
    category: 'Healthcare',
    description: 'A clean and professional web presence for a dental clinic, emphasizing trust, hygiene, and modern treatments.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://julianlechuga.github.io/DentalClinic-demo/',
    repoUrl: 'https://github.com/JulianLechuga/DentalClinic-demo'
  },
  {
    id: 5,
    title: 'Gym & Fitness Center',
    category: 'Lifestyle',
    description: 'An bold, energetic website for a local gym or personal trainer featuring membership plans and trainer profiles.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Framer Motion'],
    demoUrl: 'https://julianlechuga.github.io/Gym-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Gym-demo'
  },
  {
    id: 6,
    title: 'Psychologist Portfolio',
    category: 'Healthcare',
    description: 'A calming and minimalist website for a psychological therapy practice in Spain with appointment booking.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Vite', 'Minimal UI'],
    demoUrl: 'https://julianlechuga.github.io/Psychologist-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Psychologist-demo'
  },
  {
    id: 7,
    title: 'Auto Repair Shop Demo',
    category: 'Automotive',
    description: 'A robust and straightforward site for a mechanic and auto repair shop with service listings.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'CSS'],
    demoUrl: 'https://julianlechuga.github.io/MechanicWorkshop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/MechanicWorkshop-demo'
  },
  {
    id: 8,
    title: 'Premium Hair Salon',
    category: 'Beauty',
    description: 'A highly aesthetic, premium UI/UX demo for a local hair salon with Google Maps integration.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Google Maps API'],
    demoUrl: 'https://julianlechuga.github.io/HairSalon-demo/',
    repoUrl: 'https://github.com/JulianLechuga/HairSalon-demo'
  },
  {
    id: 9,
    title: 'Weather App',
    category: 'Utility',
    description: 'A highly optimized weather forecast application achieving a 100 Lighthouse score.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'OpenWeather API', 'Performance'],
    demoUrl: 'https://julianlechuga.github.io/AtmosphereWeatherApp/',
    repoUrl: 'https://github.com/JulianLechuga/AtmosphereWeatherApp'
  },
  {
    id: 10,
    title: 'Stock Portfolio Dashboard',
    category: 'Finance',
    description: 'A complex data visualization application featuring real-time stock charts and dark mode.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'Chart.js', 'Finance API', 'TSX'],
    demoUrl: 'https://julianlechuga.github.io/StockHoldings-demo/',
    repoUrl: 'https://github.com/JulianLechuga/StockHoldings-demo'
  },
  {
    id: 13,
    title: 'Tattoo Shop Demo',
    category: 'Lifestyle',
    description: 'A dark, artistic portfolio site for a tattoo studio featuring responsive galleries and artist profiles.',
    image: 'https://images.unsplash.com/photo-1590246814883-578332cb1601?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'CSS Modules'],
    demoUrl: 'https://julianlechuga.github.io/TatooShop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/TatooShop-demo'
  },
  {
    id: 14,
    title: 'Barbershop Demo',
    category: 'Beauty',
    description: 'A classic, gentleman-style website for a local barbershop including services and booking integration.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TypeScript', 'Tailwind'],
    demoUrl: 'https://julianlechuga.github.io/Barbershop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/Barbershop-demo'
  },
  {
    id: 15,
    title: 'Beauty Shop Demo',
    category: 'Beauty',
    description: 'An elegant, pastel-themed website for an aesthetic center with detailed treatments and pricing tables.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'CSS', 'Vite'],
    demoUrl: 'https://julianlechuga.github.io/BeautyShop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/BeautyShop-demo'
  },
  {
    id: 16,
    title: 'Flower Shop Demo',
    category: 'Lifestyle',
    description: 'A vibrant, botanical ecommerce showcase for a local florist with product galleries and contact details.',
    image: 'https://images.unsplash.com/photo-1563241527-2004ab3ba185?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'CSS', 'Responsive'],
    demoUrl: 'https://julianlechuga.github.io/FlowerShop-demo/',
    repoUrl: 'https://github.com/JulianLechuga/FlowerShop-demo'
  },
  {
    id: 17,
    title: 'Nail Salon Demo',
    category: 'Beauty',
    description: 'A highly visual, trendy portfolio for a nail salon focusing on high-quality artwork displays.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=600&q=80',
    tech: ['React', 'TSX', 'Framer Motion'],
    demoUrl: 'https://julianlechuga.github.io/NailSaloon-demo/',
    repoUrl: 'https://github.com/JulianLechuga/NailSaloon-demo'
  }
];

const categories = ['All', 'Full Stack', 'Healthcare', 'Hospitality', 'Services', 'Lifestyle', 'Automotive', 'Beauty', 'Utility', 'Finance'];

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  const filteredProjects = projectsData.filter(project => 
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNo: number) => {
    setCurrentPage(pageNo);
    // Smooth scroll specifically to the filter buttons container on pagination
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
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category === 'All' ? t('projects.filter.all') : category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode='popLayout'>
            {paginatedProjects.map((project) => (
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
                  <img src={project.image} alt={project.title} className="project-image" />
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
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
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
