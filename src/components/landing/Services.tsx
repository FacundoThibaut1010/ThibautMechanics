import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldAlert, Car, Settings2, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Frenos',
    price: '$150.000',
    unit: 'por eje',
    description: 'Cambio de pastillas, rectificación de discos y purga de líquido. Seguridad garantizada.',
    details: [
      'Cambio de pastillas de freno',
      'Rectificado/Reemplazo de discos',
      'Purga y cambio de líquido de freno',
      'Control de calipers y mangueras'
    ],
    icon: ShieldAlert,
  },
  {
    title: 'Amortiguadores',
    price: '$200.000',
    unit: 'por amortiguador',
    description: 'Reemplazo de amortiguadores y cazoletas para recuperar el confort y la estabilidad de tu vehículo.',
    details: [
      'Reemplazo de amortiguadores premium',
      'Cambio de cazoletas y crapodinas',
      'Revisión de fuelles y topes de rebote',
      'Control final de estabilidad'
    ],
    icon: Car,
  },
  {
    title: 'Rótulas y Tren Delantero',
    price: '$120.000',
    unit: 'por lado',
    description: 'Diagnóstico y cambio de piezas del tren delantero para evitar desgastes irregulares y ruidos.',
    details: [
      'Cambio de rótulas y extremos de dirección',
      'Reemplazo de bujes de parrilla',
      'Control de juego y holgura',
      'Diagnóstico general de tren delantero'
    ],
    icon: Settings2,
  }
];

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
      });

      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.2,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-rose-600 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Nuestros <span className="text-primary">Servicios</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Especialistas en tren delantero y frenos. Llevamos el equipamiento necesario para realizar el trabajo directamente en tu domicilio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              ref={el => { cardsRef.current[idx] = el; }}
              className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-8 hover:-translate-y-2 transition-all duration-300 group flex flex-col border border-slate-800 hover:border-primary/30 shadow-2xl relative overflow-hidden"
            >
              {/* Top hover glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-4 md:mb-6 relative z-10">
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] md:text-xs text-slate-500 block uppercase tracking-wider font-semibold">Desde</span>
                  <span className="text-xl md:text-2xl font-black text-white">{service.price}</span>
                  <span className="text-[10px] md:text-xs text-slate-400 block">{service.unit}</span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 min-h-[48px] md:min-h-[72px]">
                {service.description}
              </p>

              <hr className="border-slate-800/80 mb-4 md:mb-6" />

              {/* Detail checkmarks */}
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-1">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start text-xs md:text-sm text-slate-300">
                    <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/agendar"
                className="w-full py-2.5 md:py-3 rounded-lg md:rounded-xl bg-slate-900 hover:bg-primary hover:text-slate-950 text-white font-semibold text-center text-xs md:text-sm border border-slate-800 hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 block"
              >
                Solicitar Cotización
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
