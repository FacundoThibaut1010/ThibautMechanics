import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, delay: 0.2 })
        .from('.hero-title', { y: 40, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToBooking = () => {
    navigate('/agendar');
  };

  return (
    <section id="inicio" ref={containerRef} className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden min-h-screen flex items-center">
      {/* Background Image Setup */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: 'url(/images/hero_bg.png)' }}
      />
      {/* Background Gradients & Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-rose-600/20 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
        <img
          src="/images/logoGrande.png"
          alt="Thibaut Mechanics Logo"
          className="hero-badge w-48 h-48 md:w-64 md:h-64 object-contain mx-auto -mb-4 md:-mb-8 drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-transform duration-300 hover:scale-105"
        />

        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Servicio mecánico a domicilio
        </div>

        <h1 className="hero-title text-4xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-5 text-slate-50">
          El taller va <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-300">
            a tu casa.
          </span>
        </h1>

        <p className="hero-desc text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
          Frenos, amortiguadores y rótulas listos en la puerta de tu hogar.
          Servicio premium, rápido y sin ensuciarte las manos.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={scrollToBooking} className="w-full sm:w-auto group animate-pulse-glow">
            Agendar turno
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Ver Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};
