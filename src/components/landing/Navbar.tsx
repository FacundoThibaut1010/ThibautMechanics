import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Button } from '../ui/Button';
import { Menu, X, Home, Wrench, Video, Phone } from 'lucide-react';

export const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Spy Scroll Logic
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const sections = ['inicio', 'services', 'videos', 'footer'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      // If we are close to the bottom of the page, activate footer
      if (scrollY + innerHeight >= scrollHeight - 80) {
        setActiveSection('footer');
        return;
      }

      let current = 'inicio';

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 150;
          if (scrollY >= offsetTop) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle smooth scroll on load or hash change
  useEffect(() => {
    if (location.pathname !== '/') return;
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        if (id === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
    }
  }, [location.pathname, location.hash]);

  const getSectionLabel = () => {
    if (location.pathname === '/agendar') return 'Reserva';
    if (location.pathname.startsWith('/admin')) return 'Admin';
    switch (activeSection) {
      case 'inicio':
        return 'Inicio';
      case 'services':
        return 'Servicios';
      case 'videos':
        return 'Trabajos';
      case 'footer':
        return 'Contacto';
      default:
        return 'Inicio';
    }
  };

  const handleMouseEnter = () => {
    gsap.to(btnRef.current, { scale: 1.05, duration: 0.2, ease: 'power1.inOut' });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { scale: 1, duration: 0.2, ease: 'power1.inOut' });
  };

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        if (id === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (id === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="relative bg-slate-950/70 backdrop-blur-xl border border-slate-800/60 shadow-2xl shadow-black/50 rounded-full h-16 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-bold tracking-tight group flex-shrink-0">
          <img
            src="/images/logoIniciales.png"
            alt="Thibaut Mechanics Logo"
            className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-[0_0_8px_rgba(220,38,38,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.7)] transition-all duration-300 md:-my-2"
          />
        </Link>

        {/* Mobile current section indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 flex md:hidden items-center justify-center bg-slate-900/80 border border-slate-800/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 tracking-wide gap-2 shadow-lg shadow-black/30 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(220,38,38,0.8)] animate-pulse" />
          {getSectionLabel()}
        </div>

        <div className="hidden md:flex items-center bg-slate-900/50 rounded-full px-2 py-1 border border-slate-800/50">
          <button
            onClick={(e) => scrollToSection('inicio', e)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === '/' && (activeSection === 'inicio' || activeSection === '') ? 'bg-slate-800 text-primary shadow-inner' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Inicio
          </button>
          <button
            onClick={(e) => scrollToSection('services', e)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === 'services' ? 'bg-slate-800 text-primary shadow-inner' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Servicios
          </button>
          <button
            onClick={(e) => scrollToSection('videos', e)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === 'videos' ? 'bg-slate-800 text-primary shadow-inner' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Trabajos
          </button>
          <button
            onClick={(e) => scrollToSection('footer', e)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === 'footer' ? 'bg-slate-800 text-primary shadow-inner' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Contacto
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <Link to="/agendar" className="ml-2">
            <Button
              ref={btnRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="shadow-primary/20 shadow-lg rounded-full h-10 px-5 text-sm animate-pulse-glow"
            >
              Reservar
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden p-2 rounded-full border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-slate-100 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 z-40 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 px-2">
          <div className="bg-slate-950/95 backdrop-blur-2xl border border-slate-800/80 shadow-[0_10px_50px_-12px_rgba(220,38,38,0.25)] rounded-3xl p-5 flex flex-col gap-2.5">
            <button
              onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection('inicio', e); }}
              className={`w-full py-3 rounded-2xl text-left px-4 text-sm font-medium flex items-center gap-3 transition-all duration-200 ${location.pathname === '/' && (activeSection === 'inicio' || activeSection === '') ? 'bg-slate-900/80 border-l-4 border-primary text-primary font-bold shadow-inner shadow-black/20' : 'text-slate-400 border-l-4 border-transparent hover:bg-slate-900/50 hover:text-slate-100 hover:border-slate-800'}`}
            >
              <Home className={`w-4 h-4 ${location.pathname === '/' && (activeSection === 'inicio' || activeSection === '') ? 'text-primary' : 'text-slate-500'}`} />
              Inicio
            </button>
            <button
              onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection('services', e); }}
              className={`w-full py-3 rounded-2xl text-left px-4 text-sm font-medium flex items-center gap-3 transition-all duration-200 ${activeSection === 'services' ? 'bg-slate-900/80 border-l-4 border-primary text-primary font-bold shadow-inner shadow-black/20' : 'text-slate-400 border-l-4 border-transparent hover:bg-slate-900/50 hover:text-slate-100 hover:border-slate-800'}`}
            >
              <Wrench className={`w-4 h-4 ${activeSection === 'services' ? 'text-primary' : 'text-slate-500'}`} />
              Servicios
            </button>
            <button
              onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection('videos', e); }}
              className={`w-full py-3 rounded-2xl text-left px-4 text-sm font-medium flex items-center gap-3 transition-all duration-200 ${activeSection === 'videos' ? 'bg-slate-900/80 border-l-4 border-primary text-primary font-bold shadow-inner shadow-black/20' : 'text-slate-400 border-l-4 border-transparent hover:bg-slate-900/50 hover:text-slate-100 hover:border-slate-800'}`}
            >
              <Video className={`w-4 h-4 ${activeSection === 'videos' ? 'text-primary' : 'text-slate-500'}`} />
              Trabajos
            </button>
            <button
              onClick={(e) => { setIsMobileMenuOpen(false); scrollToSection('footer', e); }}
              className={`w-full py-3 rounded-2xl text-left px-4 text-sm font-medium flex items-center gap-3 transition-all duration-200 ${activeSection === 'footer' ? 'bg-slate-900/80 border-l-4 border-primary text-primary font-bold shadow-inner shadow-black/20' : 'text-slate-400 border-l-4 border-transparent hover:bg-slate-900/50 hover:text-slate-100 hover:border-slate-800'}`}
            >
              <Phone className={`w-4 h-4 ${activeSection === 'footer' ? 'text-primary' : 'text-slate-500'}`} />
              Contacto
            </button>
            <hr className="border-slate-900/80 my-1" />
            <Link
              to="/agendar"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              <Button className="w-full shadow-primary/20 shadow-lg rounded-2xl py-3.5 text-sm font-semibold animate-pulse-glow" size="lg">
                Reservar Turno
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
