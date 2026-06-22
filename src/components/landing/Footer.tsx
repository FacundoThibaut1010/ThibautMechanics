import { Link } from 'react-router-dom';
import { Mail, MapPin, Clock, PhoneCall } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center text-2xl font-black tracking-tight group">
              <img 
                src="/images/logo.png" 
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
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437.002 9.861-4.416 9.864-9.854.002-2.634-1.02-5.11-2.881-6.973C16.492 1.915 14.021.872 11.397.872c-5.44 0-9.864 4.42-9.867 9.858 0 1.968.528 3.89 1.527 5.617l-.994 3.63 3.731-.978s.002-.001.003-.001zm11.367-6.851c-.302-.15-1.786-.881-2.062-.982-.278-.101-.48-.15-.68.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.302-.15-1.272-.469-2.423-1.495-.895-.798-1.5-1.784-1.276-2.083.224-.3.076-.462-.075-.612-.135-.135-.3-.35-.45-.525-.15-.175-.2-.3-.3-.5s-.05-.375-.025-.525C9.22 6.8 9.82 5.35 10.12 5.05c.3-.3.4-.375.55-.225.15.15.35.35.5.525.15.175.225.375.125.575-.1.2-.55.88-.675 1.03-.125.15-.25.225-.55.075-.3-.15-1.24-.51-2.362-1.51-.872-.778-1.46-1.74-1.63-2.039-.17-.3-.018-.461.13-.61.135-.135.302-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525C6.812 3.125 5.25.95 4.65.35c-.584-.583-1.11-.475-1.525-.475-.375 0-.725.025-1.025.3-.3.275-1.15 1.125-1.15 2.75s1.175 3.175 1.325 3.375c.15.2 2.3 3.513 5.575 4.925.78.337 1.387.538 1.862.689.782.248 1.49.213 2.05.13.628-.094 1.787-.73 2.037-1.438.25-.7.25-1.3.175-1.425-.076-.12-.276-.2-.576-.35z" />
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
                <Link to="/" className="text-sm text-slate-400 hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <a href="#services" className="text-sm text-slate-400 hover:text-primary transition-colors">Servicios</a>
              </li>
              <li>
                <a href="#videos" className="text-sm text-slate-400 hover:text-primary transition-colors">Trabajos</a>
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
                <span>Atención a domicilio en CABA y GBA Norte</span>
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
