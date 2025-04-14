import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dataset from "./pages/Dataset";
import Competition from "./pages/Competition";
import About from "./pages/About";
import Leaderboard from "./pages/Leaderboard";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="bg-[#2a2a2a] text-gray-300 text-sm py-10 mt-20 border-t border-gray-700">
          <div className="text-center text-xs text-gray-500 mt-8">Copyright © 2025. SMP Challenge Organization Committee. All rights reserved.</div>
        </footer>
      </div>
    </Router>
    
  );
}