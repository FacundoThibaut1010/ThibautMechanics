import { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle2, Clock } from 'lucide-react';
import type { Appointment, AppointmentStatus } from '../../types';

export const AdminTable = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const loadAppointments = () => {
      const stored = localStorage.getItem('appointments');
      if (stored) {
        setAppointments(JSON.parse(stored));
      }
    };
    
    loadAppointments();
    
    // Listen for storage events in case we have multiple tabs open
    window.addEventListener('storage', loadAppointments);
    return () => window.removeEventListener('storage', loadAppointments);
  }, []);

  const handleStatusChange = (id: string, newStatus: AppointmentStatus) => {
    const updated = appointments.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    );
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
  };

  const getStatusColor = (status: AppointmentStatus) => {
    switch (status) {
      case 'Pendiente': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'En Camino': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'Completado': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      default: return 'text-slate-500 bg-slate-500/10 border-slate-500/20';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800/50 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="text-xs uppercase bg-slate-950/50 border-b border-slate-800/50">
            <tr>
              <th className="px-6 py-4 font-medium">Cliente</th>
              <th className="px-6 py-4 font-medium">Servicio</th>
              <th className="px-6 py-4 font-medium">Dirección</th>
              <th className="px-6 py-4 font-medium">Estado</th>
              <th className="px-6 py-4 font-medium text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                  No hay turnos agendados para hoy.
                </td>
              </tr>
            ) : appointments.map((app) => (
              <tr key={app.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-slate-100">{app.client.name}</div>
                  <div className="text-xs text-slate-400">
                    Visita: {app.preferredDate || new Date(app.date).toLocaleDateString()} a las {app.preferredTime || '--:--'} hs
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-800 text-xs font-medium">
                    {app.service}
                  </span>
                </td>
                <td className="px-6 py-4 truncate max-w-xs">{app.client.address}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                    {app.status === 'Pendiente' && <Clock className="w-3 h-3" />}
                    {app.status === 'Completado' && <CheckCircle2 className="w-3 h-3" />}
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <a 
                      href={`https://wa.me/${app.client.phone.replace(/\D/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-colors"
                      title="Contactar por WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    
                    <select
                      value={app.status}
                      onChange={(e) => handleStatusChange(app.id, e.target.value as AppointmentStatus)}
                      className="bg-slate-800 border border-slate-700 text-xs rounded-lg px-2 py-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="Pendiente">Pendiente</option>
                      <option value="En Camino">En Camino</option>
                      <option value="Completado">Completado</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
