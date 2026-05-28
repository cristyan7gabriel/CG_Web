import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Portfolio = () => {
  const projects = [
    {
      title: "Villa das Flores",
      category: "Floricultura",
      url: "https://villadasflores-2.vercel.app/",
      image: "/Projetos/floricultura.png",
    },
    {
      title: "Julyana Rosa",
      category: "Psicóloga",
      url: "https://julyana-rosa.vercel.app/",
      image: "/Projetos/psicologa.png",
    },
    {
      title: "Azula Nutrição",
      category: "Nutricionista",
      url: "https://azula-nutricionista.vercel.app/",
      image: "/Projetos/azula_nutricao.png",
    },
    {
      title: "Estúdio Móveis",
      category: "Loja de Móveis",
      url: "https://estudio-moveis.vercel.app/",
      image: "/Projetos/Estudio_moveis.png",
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Nossos <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-cgweb-textMuted max-w-xl text-lg">
              Conheça algumas das soluções digitais que desenvolvemos para transformar os negócios de nossos clientes.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-cgweb-primary font-semibold hover:text-white transition-colors">
            Ver Todos <ExternalLink size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer bg-cgweb-bgSecondary block"
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cgweb-bg via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Visitar Projeto (Centered) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 opacity-70 md:opacity-0 group-hover:opacity-100 transform md:scale-95 group-hover:scale-100 transition-all duration-500">
                  <span className="text-sm font-semibold text-white tracking-wide">Visitar Projeto</span>
                  <ExternalLink size={16} className="text-cgweb-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-cgweb-primary font-medium tracking-wider text-xs md:text-sm uppercase mb-1 md:mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:delay-100">
                  {project.category}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                
                <div className="w-12 h-1 bg-cgweb-primary rounded-full mt-2 transform origin-left scale-x-100 md:scale-x-0 group-hover:scale-x-100 transition-transform duration-500 md:delay-200"></div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/5562920039840?text=Ol%C3%A1%20Cristyan!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xl md:text-2xl py-5 px-12 md:py-6 md:px-16 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] hover:-translate-y-2"
          >
            <WhatsAppIcon size={28} />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
