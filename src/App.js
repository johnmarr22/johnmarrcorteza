import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Example of page components
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <Router>
      <Navbar /> {/* Display Navbar */}
      
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
