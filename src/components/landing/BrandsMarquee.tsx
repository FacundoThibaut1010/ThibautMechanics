import { ShieldCheck } from 'lucide-react';

const BRANDS = [
  'Bosch',
  'Brembo',
  'Fric-Rot',
  'Sachs',
  'Monroe',
  'Castrol',
  'SKF',
  'Fram',
  'Corven',
  'TRW'
];

export const BrandsMarquee = () => {
  // Duplicate the array to ensure a seamless infinite scrolling loop
  const displayBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="w-full bg-slate-950/40 border-y border-slate-900/60 backdrop-blur-md py-4 overflow-hidden relative z-10 select-none">
      {/* Soft gradient fade overlays on the sides */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

      <div className="flex whitespace-nowrap min-w-full">
        <div className="flex gap-16 md:gap-24 animate-marquee items-center">
          {displayBrands.map((brand, index) => (
            <div key={index} className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-primary opacity-80 flex-shrink-0" />
              <span className="text-xs md:text-sm font-extrabold uppercase tracking-widest text-slate-400 hover:text-slate-100 transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
