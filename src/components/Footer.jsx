// src/components/Footer.jsx
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Soil Sustainability Hub - </p>
    </footer>
  );
}
