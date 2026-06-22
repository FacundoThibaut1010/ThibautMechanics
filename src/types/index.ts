export type ServiceType = 'Frenos' | 'Amortiguadores' | 'Rotulas';

export type AppointmentStatus = 'Pendiente' | 'En Camino' | 'Completado';

export interface Client {
  id: string;
  name: string;
  phone: string;
  address: string;
}

export interface Appointment {
  id: string;
  clientId: string;
  client: Client;
  service: ServiceType;
  date: string; // ISO String
  status: AppointmentStatus;
  preferredDate: string;
  preferredTime: string;
}
