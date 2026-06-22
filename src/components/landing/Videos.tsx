import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: 1,
    title: 'Cambio de Suspensión Deportiva',
    thumb: '/images/video_thumb_1.png',
    duration: '03:45'
  },
  {
    id: 2,
    title: 'Reemplazo de Pastillas de Freno',
    thumb: '/images/video_thumb_2.png',
    duration: '02:15'
  },
  {
    id: 3,
    title: 'Diagnóstico Computarizado',
    thumb: '/images/video_thumb_3.png',
    duration: '01:50'
  }
];

export const Videos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.videos-header', {
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
    <section id="videos" ref={sectionRef} className="py-24 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="videos-header text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestros <span className="text-primary">Trabajos</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mira de primera mano la calidad y el profesionalismo con el que tratamos cada vehículo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <div 
              key={video.id}
              ref={el => { cardsRef.current[idx] = el; }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors duration-300"
            >
              {/* Thumbnail Image */}
              <div className="aspect-video relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${video.thumb})` }}
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-slate-950 flex items-center justify-center shadow-lg shadow-primary/30 backdrop-blur-md">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-slate-950/80 backdrop-blur-sm text-xs font-medium text-slate-100">
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-lg text-slate-100 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
