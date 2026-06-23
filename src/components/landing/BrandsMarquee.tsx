const BRANDS = [
  { name: 'Bosch', logo: '/imagenesMarcas/bosch.png', scale: 'scale-[1.25] md:scale-[1.35]' },
  { name: 'Brembo', logo: '/imagenesMarcas/brembo.png', scale: 'scale-[1.2] md:scale-[1.3]' },
  { name: 'Fric-Rot', logo: '/imagenesMarcas/fric-rot.png', scale: 'scale-[0.8] md:scale-[0.85]' },
  { name: 'Sachs', logo: '/imagenesMarcas/sachs.png', scale: 'scale-[1.2] md:scale-[1.3]' },
  { name: 'Monroe', logo: '/imagenesMarcas/monroe.png', scale: 'scale-[0.8] md:scale-[0.85]' },
  { name: 'Castrol', logo: '/imagenesMarcas/castrol.png', scale: 'scale-[0.75] md:scale-[0.8]' },
  { name: 'SKF', logo: '/imagenesMarcas/skf.png', scale: 'scale-[1.4] md:scale-[1.5]' },
  { name: 'Fram', logo: '/imagenesMarcas/fram.png', scale: 'scale-[0.8] md:scale-[0.85]' },
  { name: 'Corven', logo: '/imagenesMarcas/corven.png', scale: 'scale-[1.25] md:scale-[1.35]' },
  { name: 'TRW', logo: '/imagenesMarcas/trw.png', scale: 'scale-[1.4] md:scale-[1.5]' }
];

export const BrandsMarquee = () => {
  // Duplicate the array to ensure a seamless infinite scrolling loop
  const displayBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="w-full bg-slate-950/40 border-y border-slate-900/60 backdrop-blur-md py-5 overflow-hidden relative z-10 select-none">
      {/* Soft gradient fade overlays on the sides */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

      <div className="flex whitespace-nowrap min-w-full">
        <div className="flex gap-16 md:gap-24 animate-marquee items-center">
          {displayBrands.map((brand, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-center shrink-0 w-24 md:w-32 h-10 md:h-12 transition-all duration-300 hover:scale-110 active:scale-110 group ${brand.scale}`}
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="max-h-full max-w-full object-contain filter grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 group-active:grayscale-0 group-active:opacity-100 transition-all duration-300 cursor-pointer pointer-events-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
