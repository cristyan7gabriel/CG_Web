import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const frameCount = 160;
    const images = [];
    
    // Preload all images
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/back/frame_${paddedIndex}.jpg`;
      images.push(img);
    }

    let animationFrameId;
    let lastFrameIndex = -1;

    const renderLoop = () => {
      if (canvasRef.current && images.length > 0) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        let frameIndex = 0;
        if (docHeight > 0) {
          const scrollPercent = Math.max(0, Math.min(1, scrollTop / docHeight));
          frameIndex = Math.floor(scrollPercent * (frameCount - 1));
        }

        const img = images[frameIndex];
        if (img && img.complete && frameIndex !== lastFrameIndex) {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          
          // Set canvas intrinsic size to match the first loaded image's size
          if (canvas.width !== img.width && img.width > 0) {
            canvas.width = img.width;
            canvas.height = img.height;
          }

          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          lastFrameIndex = frameIndex;
        } else if (img && !img.complete && frameIndex !== lastFrameIndex) {
            // Re-evaluate next frame if image is still loading
            lastFrameIndex = -1;
        }
      }
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    // Usa overflowX: 'clip' ao invés de 'hidden' para evitar quebra do window.scrollY
    <div className="text-cgweb-textMain min-h-screen selection:bg-cgweb-primary/30 relative" style={{ overflowX: 'clip' }}>
      
      {/* Video Background Scrubbing on Scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-cover opacity-30"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        ></canvas>
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
