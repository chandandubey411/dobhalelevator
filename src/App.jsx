import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import OurCompany from "./pages/OurCompany";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Aesthetics from "./pages/Aesthetics";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import FloatingCTA from "./components/FloatingCTA";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="bg-[#F2F2F2] min-h-screen">
        <Routes>
          <Route path="/" element={<><Home /><Products /><Services /></>} />
          <Route path="/our-company" element={<OurCompany />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aesthetics" element={<Aesthetics />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
      <FloatingCTA/>
    </Router>
  );
};

export default App;
