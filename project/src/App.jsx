import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import About from './pages/About';
import HandHygiene from './pages/categories/HandHygiene';
import OralCare from './pages/categories/OralCare';
import BodyHygiene from './pages/categories/BodyHygiene';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/hand-hygiene" element={<HandHygiene />} />
            <Route path="/oral-care" element={<OralCare />} />
            <Route path="/body-hygiene" element={<BodyHygiene />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}