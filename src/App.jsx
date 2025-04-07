import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dataset from "./pages/Dataset";
import Competition from "./pages/Competition";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
