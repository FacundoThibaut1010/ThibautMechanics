import { useEffect } from 'react';
import { BookingForm } from '../components/landing/BookingForm';
import { Navbar } from '../components/landing/Navbar';
import { Footer } from '../components/landing/Footer';

export default function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Image Setup */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/booking_bg.png)' }}
      />
      {/* Overlay to ensure form readability */}
      <div className="fixed inset-0 z-0 bg-slate-950/80 backdrop-blur-sm" />

      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4 md:py-32 md:px-6 relative z-10 w-full">
        <div className="w-full max-w-4xl">
          <BookingForm />
        </div>
      </main>
      
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
