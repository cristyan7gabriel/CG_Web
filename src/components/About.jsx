import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MonitorSmartphone, Search } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const features = [
    {
      icon: <Zap size={32} className="text-cgweb-primary" />,
      title: "Velocidade Extrema",
      description: "Sites otimizados para carregar em milissegundos, garantindo a melhor experiência e maior retenção de usuários."
    },
    {
      icon: <MonitorSmartphone size={32} className="text-cgweb-primary" />,
      title: "Design Responsivo",
      description: "Interfaces fluidas e modernas que se adaptam perfeitamente a qualquer dispositivo, de celulares a monitores ultrawide."
    },
    {
      icon: <Search size={32} className="text-cgweb-primary" />,
      title: "Otimização SEO",
      description: "Estrutura semântica focada em mecanismos de busca para colocar sua marca nas primeiras posições do Google."
    }
  ];

  return (
    <section id="about" className="py-32 relative z-10 bg-cgweb-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Nossos <span className="text-gradient">Diferenciais</span>
          </h2>
          <p className="text-cgweb-textMuted max-w-2xl mx-auto text-lg leading-relaxed">
            Entregamos soluções tecnológicas completas unindo estética premium, usabilidade e performance impecável.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-cgweb-bgSecondary border border-white/5 rounded-2xl p-8 hover:border-cgweb-primary/30 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
            >
              <div className="bg-cgweb-bgTertiary w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cgweb-primary/10 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cgweb-primary transition-colors">{feature.title}</h3>
              <p className="text-cgweb-textMuted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
