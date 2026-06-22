import { Link, useLocation } from 'react-router-dom';
import { Calendar, LayoutDashboard, Wrench, Wallet, LogOut } from 'lucide-react';
import { cn } from '../ui/Button';

interface SidebarProps {
  onLogout: () => void;
  className?: string;
}

export const Sidebar = ({ onLogout, className }: SidebarProps) => {
  const location = useLocation();

  const links = [
    { name: 'Vista General', path: '/admin', icon: LayoutDashboard },
    { name: 'Turnos del Día', path: '/admin/appointments', icon: Calendar },
    { name: 'Finanzas', path: '/admin/finances', icon: Wallet, disabled: true },
  ];

  return (
    <div className={cn("w-64 bg-slate-950 border-r border-slate-800/50 flex flex-col h-full", className)}>
      <div className="h-20 px-6 flex items-center border-b border-slate-800/50">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Wrench className="text-primary w-6 h-6" />
          <span>Admin</span>
        </Link>
      </div>

      <div className="flex-1 py-6 flex flex-col gap-2 px-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.disabled ? '#' : link.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              location.pathname === link.path && !link.disabled
                ? "bg-primary/10 text-primary"
                : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/50",
              link.disabled && "opacity-50 cursor-not-allowed pointer-events-none"
            )}
          >
            <link.icon className="w-5 h-5" />
            {link.name}
            {link.disabled && <span className="ml-auto text-xs bg-slate-800 px-1.5 py-0.5 rounded">Pronto</span>}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800/50">
        <button 
          onClick={onLogout}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};
