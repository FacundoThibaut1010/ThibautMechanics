import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import AdminDashboard from './pages/AdminDashboard';
import { Toaster } from 'sileo';
import 'sileo/styles.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-primary/30 selection:text-primary">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendar" element={<BookingPage />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
        <Toaster theme="dark" />
      </div>
    </Router>
  );
}

export default App;
