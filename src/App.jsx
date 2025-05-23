import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QA from "./pages/QA";
import Compare from "./pages/Compare";
import SpeciesDetail from "./pages/SpeciesDetail"; // ✅ new import
import CreatureGallery from "./pages/CreatureGallery"; // 

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        <Header />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<CreatureGallery />} />
            <Route path="/qa" element={<QA />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/creatures" element={<Home/>} /> {/* ✅ new route */}
            <Route path="/species/:id" element={<SpeciesDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
