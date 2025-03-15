import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SoilSustainability from './pages/SoilSustainability';
import Gardening from './pages/Gardening';
import Composting from './pages/Composting';
import Farming from './pages/Farming';
import GrowingZoneFinder from './pages/GrowingZone';
import Resources from './pages/Resources';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

import './styles/App.css';

function App() {
  return (
    <Router basename="/soil-sustainability">
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soil" element={<SoilSustainability />} />
            <Route path="/gardening" element={<Gardening />} />
            <Route path="/composting" element={<Composting />} />
            <Route path="/farming" element={<Farming />} />
            <Route path="/zone-finder" element={<GrowingZoneFinder />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
