import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Landing/Navbar";
import MobileNav from "./Components/Landing/MobileNav";
import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <MobileNav />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
