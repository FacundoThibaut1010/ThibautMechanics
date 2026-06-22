import { Navbar } from '../components/landing/Navbar';
import { Hero } from '../components/landing/Hero';
import { Services } from '../components/landing/Services';
import { Videos } from '../components/landing/Videos';
import { Footer } from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Videos />
      </main>
      <Footer />
    </div>
  );
}
