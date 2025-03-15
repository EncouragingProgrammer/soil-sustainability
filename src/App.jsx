import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LevelingSystem from './pages/LevelUpComposting';
import CompostingGuide from './pages/CompostingGuide';
import GrowingZoneFinder from './pages/GrowingZone';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/levels" element={<LevelingSystem />} />
          <Route path="/composting" element={<CompostingGuide />} />
          <Route path="/zone-finder" element={<GrowingZoneFinder />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
