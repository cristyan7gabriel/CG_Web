import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "Qual a importância de um site para minha empresa?",
    answer: "Um site funciona como a vitrine virtual do seu negócio aberta 24h por dia. Ele transmite profissionalismo, aumenta sua credibilidade, atrai novos clientes através do Google e permite que você venda ou seja contatado a qualquer momento."
  },
  {
    question: "O que é hospedagem de site?",
    answer: "É o 'terreno' onde o seu site é construído na internet. Trata-se de um servidor que armazena os arquivos, textos e imagens do seu site, permitindo que ele seja acessado por qualquer pessoa no mundo sem interrupções."
  },
  {
    question: "Quais os gastos eu tenho para manter um site?",
    answer: "Os principais custos recorrentes são o Domínio (anual) e a Hospedagem (mensal ou anual). Dependendo da complexidade do projeto, também podem haver custos com manutenção ou atualizações."
  },
  {
    question: "O que é E-mail Profissional?",
    answer: "É um endereço de e-mail personalizado com o nome da sua empresa (ex: contato@suaempresa.com.br) ao invés de provedores genéricos. Ele transmite muito mais seriedade e confiança para seus clientes."
  },
  {
    question: "Meu site irá aparecer no sistema de busca do Google?",
    answer: "Sim! Nossos sites são desenvolvidos com as melhores práticas estruturais. Para garantir o topo do Google rapidamente, também aplicamos estratégias avançadas de SEO e indicamos campanhas de tráfego."
  },
  {
    question: "O que é o Domínio de um site?",
    answer: "O domínio é o endereço do seu site na internet, aquilo que as pessoas digitam no navegador (ex: www.suaempresa.com.br). É a sua marca registrada e propriedade no mundo digital."
  },
  {
    question: "Qual a diferença entre site Institucional, Loja Virtual e Portal?",
    answer: "O Institucional foca na apresentação da empresa e serviços. A Loja Virtual possui catálogo com carrinho de compras e pagamento online. Já o Portal é focado em grande volume de conteúdo e notícias."
  },
  {
    question: "Qual domínio eu devo escolher?",
    answer: "Recomendamos um domínio curto, fácil de pronunciar e que represente o nome exato da sua empresa. As terminações '.com.br' e '.com' são indispensáveis para o mercado nacional."
  },
  {
    question: "Quanto custa para desenvolver um site?",
    answer: "O valor varia de acordo com a complexidade e as funcionalidades exigidas. Criamos soluções sob medida focadas no seu retorno sobre o investimento, com orçamentos personalizados após análise do seu negócio."
  },
  {
    question: "O que é SEO?",
    answer: "SEO (Search Engine Optimization) é um conjunto de técnicas e códigos aplicados ao site para que ele apareça organicamente (sem pagar por anúncios) nas primeiras posições do Google nas buscas de clientes."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-cgweb-primary' : 'text-white group-hover:text-cgweb-primary/80'}`}>
          {faq.question}
        </span>
        <div className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'bg-cgweb-primary text-white border-cgweb-primary' : 'border-white/20 text-white/70 group-hover:border-cgweb-primary/50 group-hover:text-cgweb-primary'}`}>
          {isOpen ? <X size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-cgweb-textMuted leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Separa o array em duas colunas intercaladas
  const col1 = faqs.filter((_, i) => i % 2 === 0);
  const col2 = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" className="py-32 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            FAQ - Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-cgweb-textMuted text-lg md:text-xl max-w-2xl mx-auto">
            Tire suas dúvidas sobre desenvolvimento web, hospedagem e como funciona o nosso processo de criação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-0">
          {/* Coluna 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-6 md:p-8 rounded-2xl h-fit"
          >
            {col1.map((faq, index) => {
              const globalIndex = index * 2;
              return (
                <FAQItem 
                  key={globalIndex} 
                  faq={faq} 
                  isOpen={openIndex === globalIndex} 
                  toggleOpen={() => toggleOpen(globalIndex)} 
                />
              );
            })}
          </motion.div>

          {/* Coluna 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-6 md:p-8 rounded-2xl h-fit mt-8 lg:mt-0"
          >
            {col2.map((faq, index) => {
              const globalIndex = index * 2 + 1;
              return (
                <FAQItem 
                  key={globalIndex} 
                  faq={faq} 
                  isOpen={openIndex === globalIndex} 
                  toggleOpen={() => toggleOpen(globalIndex)} 
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
