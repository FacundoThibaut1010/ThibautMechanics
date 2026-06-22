import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Clock, PhoneCall } from 'lucide-react';

export const Footer = () => {
  const location = useLocation();

  const handleScroll = (id: string, e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      if (id === 'inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <footer id="footer" className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link to="/" onClick={(e) => handleScroll('inicio', e)} className="flex items-center text-2xl font-black tracking-tight group">
              <img
                src="/images/Thibaut Mechanics-Photoroom.png"
                alt="ThibautMechanics Logo"
                className="w-16 h-16 object-contain drop-shadow-[0_0_8px_rgba(220,38,38,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.7)] transition-all duration-300"
              />
              <span className="ml-3 text-xl md:text-2xl font-extrabold text-white">
                Thibaut<span className="text-primary">Mechanics</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Llevamos el taller mecánico directo a la comodidad de tu hogar. Calidad profesional, repuestos de primera marca y sin que pierdas tu tiempo.
            </p>
            <div className="flex items-center space-x-4">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/5491112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-slate-400 hover:text-primary transition-all duration-300 shadow-md"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a
                href="https://instagram.com/thibautmechanics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-slate-400 hover:text-primary transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Gmail Icon */}
              <a
                href="mailto:thibautmechanics@gmail.com"
                className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-slate-400 hover:text-primary transition-all duration-300 shadow-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#inicio" onClick={(e) => handleScroll('inicio', e)} className="text-sm text-slate-400 hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/#services" onClick={(e) => handleScroll('services', e)} className="text-sm text-slate-400 hover:text-primary transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/#videos" onClick={(e) => handleScroll('videos', e)} className="text-sm text-slate-400 hover:text-primary transition-colors">Trabajos</Link>
              </li>
              <li>
                <Link to="/agendar" className="text-sm text-slate-400 hover:text-primary transition-colors">Agendar Turno</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Atención a domicilio en CABA, GBA Norte y GBA Oeste</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Lunes a Sábado: 8:00 - 19:00 hs</span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <PhoneCall className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="https://wa.me/5491112345678" className="hover:text-primary transition-colors">+54 9 11 1234-5678</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-900 mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} ThibautMechanics. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link to="/admin" className="hover:text-slate-300 transition-colors">Acceso Administración</Link>
            <a href="#" className="hover:text-slate-300 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
