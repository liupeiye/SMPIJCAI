import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      {/* <img src={logo} alt="logo" className="h-12 w-12 object-contain" />
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">Home</Link> */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-blue-600">
          <img src={logo} alt="logo" className="h-12 object-contain" />
        </Link>
        <div className="space-x-6 text-gray-700 text-sm font-medium">
          <Link to="/dataset" className="hover:text-blue-600 transition">Dataset</Link>
          <Link to="/competition" className="hover:text-blue-600 transition">Competition</Link>
          <Link to="/leaderboard" className="hover:text-blue-600 transition">Leaderboard</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        </div>
      </div>
    </nav>
  );
}