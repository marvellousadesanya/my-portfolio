import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
