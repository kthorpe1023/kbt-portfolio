import React from 'react';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Social from "./components/Social/social"
import Project from "./components/Project/project"
import projects from "./components/Project/portfolio.json";

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
        <Intro />
        <Social />
        <div className="container">
        <div className="row" id="portfolio">
          {projects.map((project) => {
            // let projectImage = "./images/codeConnect.PNG"
            // console.log(projectImage)
            return(<Project
              name={project.name}
              description={project.description}
              image={project.img}
              link={project.link}
              ghlink={project.gitHub}
            />)
          })}
          <AboutMe />
          </div>
    </div>
    </div>
  );
}

export default App;
