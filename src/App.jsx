import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let lastTargetTime = -1;

    // Hack essencial para navegadores modernos (especialmente Chrome/Safari):
    // Forçar um pequeno "play()" e "pause()" para destravar o controle de currentTime do vídeo
    const unlockVideo = async () => {
      if (videoRef.current) {
        try {
          // O vídeo é mutado, então o autoplay deve ser permitido
          await videoRef.current.play();
          videoRef.current.pause();
        } catch (error) {
          console.warn("Aviso: Navegador bloqueou o play inicial.", error);
        }
      }
    };
    
    unlockVideo();

    const renderLoop = () => {
      if (videoRef.current) {
        const dur = videoRef.current.duration;
        
        // Garante que a duração existe, não é NaN e nem Infinity
        if (dur && !isNaN(dur) && isFinite(dur)) {
           // Lemos o scroll da janela e a altura total do corpo do site
           const scrollTop = window.scrollY || document.documentElement.scrollTop;
           const docHeight = document.documentElement.scrollHeight - window.innerHeight;
           
           if (docHeight > 0) {
             const scrollPercent = scrollTop / docHeight;
             const targetTime = scrollPercent * dur;
             
             // Só aplica o currentTime se a mudança for significativa (evita lag e engasgos de hardware)
             if (Math.abs(lastTargetTime - targetTime) > 0.08) {
                 videoRef.current.currentTime = targetTime;
                 lastTargetTime = targetTime;
             }
           }
        }
      }
      
      // O loop contínuo garante que o tracking de scroll nunca falhe
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    // Inicia o tracking contínuo
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    // Usa overflowX: 'clip' ao invés de 'hidden' para evitar quebra do window.scrollY
    <div className="text-cgweb-textMain min-h-screen selection:bg-cgweb-primary/30 relative" style={{ overflowX: 'clip' }}>
      
      {/* Video Background Scrubbing on Scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover opacity-30"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          src="/back/Visão_aérea_descendo_entre_prédios_202605272209.mp4"
          muted
          playsInline
          preload="auto"
        ></video>
        {/* Dark overlay to keep the aesthetic and contrast */}
        <div className="absolute inset-0 bg-cgweb-bg/50"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Benefits />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
