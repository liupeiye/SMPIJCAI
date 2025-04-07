import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">MyCompetition</Link>
        <div className="space-x-4">
          <Link to="/dataset" className="hover:underline">Dataset</Link>
          <Link to="/competition" className="hover:underline">Competition</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
}
