const BRANDS = [
  { name: 'Bosch', logo: '/imagenesMarcas/bosch.png' },
  { name: 'Brembo', logo: '/imagenesMarcas/brembo.png' },
  { name: 'Fric-Rot', logo: '/imagenesMarcas/fric-rot.png' },
  { name: 'Sachs', logo: '/imagenesMarcas/sachs.png' },
  { name: 'Monroe', logo: '/imagenesMarcas/monroe.png' },
  { name: 'Castrol', logo: '/imagenesMarcas/castrol.png' },
  { name: 'SKF', logo: '/imagenesMarcas/skf.png' },
  { name: 'Fram', logo: '/imagenesMarcas/fram.png' },
  { name: 'Corven', logo: '/imagenesMarcas/corven.png' },
  { name: 'TRW', logo: '/imagenesMarcas/trw.png' }
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
            <div key={index} className="flex items-center justify-center shrink-0">
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="h-7 md:h-9 w-auto object-contain opacity-40 hover:opacity-90 transition-opacity duration-300 select-none pointer-events-none filter brightness-95"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
