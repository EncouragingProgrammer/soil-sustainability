import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white px-6 py-4 flex justify-between">
      <div className="text-xl font-bold">Soil Hub</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/levels">Levels</Link>
        <Link to="/composting">Composting</Link>
        <Link to="/growingzone">Zone Finder</Link>
      </div>
    </nav>
  );
}
