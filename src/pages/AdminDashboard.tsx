import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from '../components/admin/Sidebar';
import { AdminTable } from '../components/admin/AdminTable';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { sileo } from 'sileo';
import { Lock, Menu, X } from 'lucide-react';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('admin_auth') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'casa1180') {
      sessionStorage.setItem('admin_auth', 'true');
      setIsLoggedIn(true);
      sileo.success({
        title: '¡Sesión Iniciada!',
        description: 'Bienvenido al panel de administración.',
        position: 'top-center',
        duration: 3000,
      });
    } else {
      sileo.error({
        title: 'Acceso Denegado',
        description: 'Usuario o contraseña incorrectos.',
        position: 'top-center',
        duration: 3000,
      });
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsLoggedIn(false);
    sileo.info({
      title: 'Sesión Cerrada',
      description: 'Has cerrado sesión correctamente.',
      position: 'top-center',
      duration: 3000,
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-12 relative overflow-hidden w-full">
        {/* Decorative glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="glass-card rounded-3xl p-8 max-w-md w-full border border-slate-800 shadow-2xl relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 text-primary">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-white text-center">Acceso Administración</h2>
            <p className="text-slate-400 text-sm text-center mt-1">
              Ingresa tus credenciales para continuar.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              label="Usuario"
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" className="w-full" size="lg">
              Iniciar Sesión
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-950 overflow-hidden w-full">
      {/* Mobile Top Bar */}
      <div className="flex md:hidden h-16 bg-slate-950 border-b border-slate-800/80 px-6 items-center justify-between relative z-30">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white">
          <Lock className="text-primary w-5 h-5" />
          <span>Admin</span>
        </div>
        <button 
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
        >
          {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay / Drawer */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
          {/* Sidebar Drawer */}
          <div className="relative animate-in slide-in-from-left duration-300 h-full">
            <Sidebar 
              onLogout={() => {
                setIsMobileSidebarOpen(false);
                handleLogout();
              }} 
              className="w-64 border-r border-slate-800/80" 
            />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <Sidebar onLogout={handleLogout} className="hidden md:flex" />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-950/50">
        <div className="p-6 md:p-8 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/admin/appointments" replace />} />
            <Route 
              path="/appointments" 
              element={
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-8 flex flex-col gap-2">
                    <h1 className="text-2xl font-bold text-slate-100">Turnos del Día</h1>
                    <p className="text-slate-400">Gestiona las reservas y contacta a los clientes.</p>
                  </div>
                  <AdminTable />
                </div>
              } 
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}
