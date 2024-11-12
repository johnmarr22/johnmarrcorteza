import React from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Experience />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
