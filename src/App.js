import React from 'react';
import Navbar from "./components/Navbar";
import IntroBG from "./components/IntroBG";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact/contact"
import ProjectBG from "./components/ProjectBG/projectbg"
// import projects from "./components/Project/portfolio.json";

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
        <IntroBG />
          <ProjectBG />
          <AboutMe />
          <Contact />
          </div>

  );
}

export default App;
