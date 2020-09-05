import React from 'react';
import Navbar from "./components/Navbar";
import IntroBG from "./components/IntroBG";
import AboutMe from "./components/AboutMe";
// import Social from "./components/Social/social"
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
          </div>

  );
}

export default App;
