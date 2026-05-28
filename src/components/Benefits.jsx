import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Seja encontrado",
      desc: "Coloque sua empresa no digital e seja visto por clientes todos os dias."
    },
    {
      id: 2,
      title: "Venda mais",
      desc: "Apresente seus produtos ou serviços online e facilite a decisão de compra."
    },
    {
      id: 3,
      title: "Credibilidade instantânea",
      desc: "Transmita confiança com um site profissional desde o primeiro acesso."
    },
    {
      id: 4,
      title: "Marketing imbatível",
      desc: "Atraia novos clientes e fortaleça o relacionamento com os atuais."
    },
    {
      id: 5,
      title: "Venda todos os dias",
      desc: "Seu site ativo 24h, gerando oportunidades mesmo fora do horário comercial."
    },
    {
      id: 6,
      title: "Destaque-se no mercado",
      desc: "Seja competitivo e supere seus concorrentes com um site moderno e eficiente."
    }
  ];

  return (
    <section id="benefits" className="py-32 relative z-10 bg-cgweb-bg/80 backdrop-blur-md border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white uppercase tracking-wide">
            O que um site <span className="text-gradient">Profissional</span><br className="hidden md:block" /> pode fazer pelo seu negócio?
          </h2>
          <p className="text-cgweb-textMuted text-lg md:text-xl flex items-center justify-center gap-2">
            <span className="text-cgweb-primary">✦</span> 6 Razões pelas quais um site é essencial para o seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-cgweb-primary/10 border border-cgweb-primary/20 flex items-center justify-center mb-6 group-hover:bg-cgweb-primary/20 transition-colors duration-300">
                <span className="text-2xl font-bold text-cgweb-primary">{benefit.id}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-cgweb-textMuted leading-relaxed text-lg">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
