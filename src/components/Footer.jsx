import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

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

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', serviceType: 'Site Institucional', message: '' });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, serviceType, message } = formData;
    
    if (!name || !message) return;

    // Número do WhatsApp da agência (Substitua pelos seus dígitos. Ex: 55 seguido do DDD e número)
    const whatsappNumber = "5562920039840"; 
    
    const text = `Olá Cristyan! Me chamo *${name}*.\n\n*Tenho interesse em:* ${serviceType}\n\n*Sobre o meu projeto:*\n${message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer id="contact" className="pt-32 pb-10 border-t border-white/5 relative z-10 bg-cgweb-bg/80 backdrop-blur-md overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cgweb-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-center">
          
          {/* CTA Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white">
              Pronto para o <br/>
              <span className="text-gradient">Próximo Nível?</span>
            </h2>
            <p className="text-xl text-cgweb-textMuted mb-12 max-w-md">
              Vamos conversar sobre o seu projeto e descobrir como podemos impulsionar os seus resultados.
            </p>

            <div className="flex gap-4 mb-12">
              <a href="https://wa.me/5562920039840" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <WhatsAppIcon size={24} />
              </a>
              <a href="https://www.instagram.com/cristyan.web/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#E1306C] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <InstagramIcon size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-cgweb-bgTertiary rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative"
          >
            {/* Form Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-cgweb-primary/20 to-transparent rounded-3xl blur-md opacity-50 -z-10"></div>
            
            <form className="flex flex-col gap-6" onSubmit={handleWhatsAppSubmit}>
              <div>
                <label className="block text-sm font-medium text-cgweb-textMuted mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-cgweb-bg border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cgweb-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-cgweb-textMuted mb-2">Tipo de Serviço</label>
                <div className="relative">
                  <select 
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    className="w-full bg-cgweb-bg border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cgweb-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Site Institucional">Site Institucional</option>
                    <option value="Loja Virtual">Loja Virtual</option>
                    <option value="Landing Page/Página de Vendas">Landing Page/Página de Vendas</option>
                    <option value="Blog">Blog</option>
                    <option value="Site de Imobiliária">Site de Imobiliária</option>
                    <option value="Outros">Outros</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-cgweb-textMuted mb-2">Mensagem</label>
                <textarea 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-cgweb-bg border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cgweb-primary transition-colors resize-none"
                  placeholder="Conte-nos sobre o seu projeto..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-4 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]">
                <WhatsAppIcon size={20} />
                Enviar para o WhatsApp
              </button>
            </form>
          </motion.div>
        </div>

        {/* Structured Footer */}
        <div className="pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Desc */}
          <div className="flex flex-col gap-6">
            <div className="text-3xl font-black tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              CG<span className="text-cgweb-primary">.</span>WEB
            </div>
            <p className="text-cgweb-textMuted text-sm leading-relaxed">
              Somos especialistas em criar sites personalizados que convertem visitantes em leads e clientes.
            </p>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Contato</h4>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/5562920039840" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cgweb-textMuted hover:text-white transition-colors">
                <WhatsAppIcon size={20} className="text-[#25D366]" />
                <span className="text-sm">(62) 9 9200-3984</span>
              </a>
              <a href="mailto:Cristyan.agr.gabriel@gmail.com" className="flex items-center gap-3 text-cgweb-textMuted hover:text-white transition-colors break-all">
                <Mail size={20} className="text-cgweb-primary" />
                <span className="text-sm">Cristyan.agr.gabriel@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Menu</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#home" className="text-cgweb-textMuted hover:text-white transition-colors w-fit">Início</a>
              <a href="#about" className="text-cgweb-textMuted hover:text-white transition-colors w-fit">Sobre</a>
              <a href="#portfolio" className="text-cgweb-textMuted hover:text-white transition-colors w-fit">Portfólio</a>
              <a href="#benefits" className="text-cgweb-textMuted hover:text-white transition-colors w-fit">Benefícios</a>
              <a href="#faq" className="text-cgweb-textMuted hover:text-white transition-colors w-fit">FAQ</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold tracking-wider text-sm uppercase">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cristyan.web/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#E1306C] transition-all duration-300">
                <InstagramIcon size={18} />
              </a>
              <a href="https://wa.me/5562920039840" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] transition-all duration-300">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-cgweb-textMuted">
          <p>CG Web &copy; Copyright {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
