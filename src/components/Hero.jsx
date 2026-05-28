import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const bgTextX = useTransform(scrollY, [0, 1000], [0, -300]);
  const yElement = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent">
      
      {/* Background Giant Text with Parallax */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[40%] left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none z-0"
      >
        <h1 className="text-[20vw] font-black text-cgweb-bgTertiary opacity-30 tracking-tighter">
          CG WEB CG WEB CG WEB
        </h1>
      </motion.div>

      {/* Futuristic 3D Element (Abstract Sphere) */}
      <motion.div 
        style={{ y: yElement }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full pointer-events-none"
      >
        {/* Glowing Core */}
        <div className="absolute inset-0 bg-cgweb-primary/10 blur-[100px] rounded-full"></div>
        
        {/* Rotating Rings */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-cgweb-primary/20 rounded-full border-dashed"
        ></motion.div>
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[40px] border border-cgweb-secondary/30 rounded-full"
        ></motion.div>
        
        {/* Holographic grid lines inside */}
        <motion.div 
          animate={{ rotate: 180 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[80px] rounded-full bg-gradient-to-tr from-transparent via-cgweb-primary/5 to-transparent border border-white/5 backdrop-blur-sm"
        ></motion.div>
      </motion.div>

      {/* Content over the elements */}
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md mb-6 shadow-lg"
        >
          <span className="text-cgweb-textMuted text-xs md:text-sm font-medium uppercase tracking-widest">
            Nós criamos sites para você
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-light mb-8 leading-[1.15] tracking-wide text-white drop-shadow-lg w-full"
        >
          Criamos a presença digital <br />
          <span className="text-gradient font-normal">que sua marca merece</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-cgweb-textMuted max-w-3xl mx-auto mb-10"
        >
          Elevamos a presença digital da sua marca com design premium, alta performance e experiências memoráveis que convertem visitantes em clientes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <a href="#portfolio" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-cgweb-primary rounded-full hover:bg-cgweb-secondary shadow-[0_0_20px_rgba(22,95,242,0.5)] overflow-hidden">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative flex items-center gap-3 text-lg md:text-xl">
              Ver Nossos Projetos
              <ArrowRight className="group-hover:translate-x-2 transition-transform w-5 h-5" />
            </span>
          </a>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
