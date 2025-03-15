import { Link } from "react-router-dom";
import '../styles/Navbar.css';


export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Left side: Logo/Title */}
        <div className="navbar-logo">
          <Link to="/">Soil Hub 🌱</Link>
        </div>

        {/* Right side: Navigation Links */}
        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/soil">Soil Sustainability</Link>
          <Link to="/soil-nutrients">Soil Nutrients</Link>
          <Link to="/gardening">Gardening</Link>
          <Link to="/composting">Composting</Link>
          <Link to="/farming">Farming</Link>
          <Link to="/zone-finder">Zone Finder</Link>
          <Link to="/resources">Resources</Link>
        </nav>
      </div>
    </header>
  );
}
