import React from 'react';
import Project from '../Project/project'
import projects from "../Project/portfolio.json";

import './projectbg.css'

const ProjectBG = () => {
    return(
    <div className="bgproject">
    <div className="container" id="portfolio">
        <br></br>
        <br></br>
    <h2 >~CHECK OUT MY PROJECTS~</h2>
    <div className="row" >
    
      {projects.map((project) => {
        // let projectImage = "../public/images/" + project.img
        // console.log(projectImage)
        return(<Project
          name={project.name}
          description={project.description}
          image={project.img}
          link={project.link}
          ghlink={project.gitHub}
        />)
      })}
      </div>
      </div>
      </div>
      )
}

export default ProjectBG