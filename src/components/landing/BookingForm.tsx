import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import type { ServiceType } from '../../types';
import { sileo } from 'sileo';

gsap.registerPlugin(ScrollTrigger);

export const BookingForm = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const todayStr = new Date().toISOString().split('T')[0];
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '' as ServiceType | '',
    preferredDate: '',
    preferredTime: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate preferredTime is between 08:00 and 20:00
    if (formData.preferredTime) {
      const [hours, minutes] = formData.preferredTime.split(':').map(Number);
      const timeInMinutes = hours * 60 + minutes;
      const minTime = 8 * 60; // 08:00
      const maxTime = 20 * 60; // 20:00
      
      if (timeInMinutes < minTime || timeInMinutes > maxTime) {
        sileo.error({
          title: 'Horario no disponible',
          description: 'Nuestro horario de atención es de 08:00 a 20:00 hs.',
          position: 'top-center',
          duration: 4000
        });
        return;
      }
    }
    
    // Simulate saving to localStorage for Admin panel demo
    const existingStr = localStorage.getItem('appointments');
    const existing = existingStr ? JSON.parse(existingStr) : [];
    
    const newAppointment = {
      id: Math.random().toString(36).substr(2, 9),
      clientId: Math.random().toString(36).substr(2, 9),
      client: {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
      },
      service: formData.service as ServiceType,
      date: new Date().toISOString(),
      status: 'Pendiente',
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
    };

    localStorage.setItem('appointments', JSON.stringify([newAppointment, ...existing]));

    sileo.success({
      title: '¡Reserva Confirmada!',
      description: `Turno agendado para el ${formData.preferredDate} a las ${formData.preferredTime} hs. Nos contactaremos por WhatsApp.`,
      position: 'top-center',
      duration: 5000
    });

    setFormData({
      name: '',
      phone: '',
      address: '',
      service: '' as ServiceType | '',
      preferredDate: '',
      preferredTime: '',
    });
  };

  return (
    <section id="booking" className="py-2 md:py-6 relative">
      <div className="max-w-3xl mx-auto px-0 md:px-6 relative z-10" ref={formRef}>
        <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-10 shadow-2xl">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Reserva tu <span className="text-primary">Turno</span></h2>
            <p className="text-slate-400 text-sm md:text-base">Completa tus datos y nos acercaremos a tu domicilio.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-5 md:grid-cols-2">
              <Input
                label="Nombre Completo"
                placeholder="Juan Pérez"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Teléfono (WhatsApp)"
                type="tel"
                placeholder="+54 11 1234-5678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <Input
              label="Dirección Exacta"
              placeholder="Av. Siempreviva 742, CABA"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />

            <div className="grid md:grid-cols-2 gap-5">
              <Input
                label="Fecha de Visita"
                type="date"
                min={todayStr}
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                onClick={(e) => {
                  try {
                    e.currentTarget.showPicker();
                  } catch {
                    // Browser might not support showPicker
                  }
                }}
                required
              />
              <Input
                label="Horario de Visita (8:00 a 20:00)"
                type="time"
                min="08:00"
                max="20:00"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                onClick={(e) => {
                  try {
                    e.currentTarget.showPicker();
                  } catch {
                    // Browser might not support showPicker
                  }
                }}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-slate-300">Servicio Requerido</label>
              <select
                className="flex h-11 w-full rounded-md border border-slate-800 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceType })}
                required
              >
                <option value="" disabled>Seleccione un servicio...</option>
                <option value="Frenos">Frenos</option>
                <option value="Amortiguadores">Amortiguadores</option>
                <option value="Rotulas">Rótulas y Extremos</option>
              </select>
            </div>

            <Button type="submit" className="w-full mt-2" size="lg">
              Confirmar Reserva
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
