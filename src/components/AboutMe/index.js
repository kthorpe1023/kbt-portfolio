import React from "react";
import pdf from '../Project/assets/KatieThorpesResumeGH.pdf'
import "./style.css"

const AboutMe = () => {
    return(
      <div className="aboutbg">
    <div  id="aboutme">
        <img id="katie" src="https://raw.githubusercontent.com/kthorpe1023/kbt-portfolio/master/src/components/AboutMe/KThorpe.PNG" alt="Me in front of the Lennon Wall"></img>
        </div>
        <div className="container">
        <div className="row">
      <div clasName="col s12 col m8">
        <p>I live in Denver, CO, and while working full time as an admissions counselor, I have been learning to code in University of Denver's Full Stack Coding Boot Camp.</p>
        <p>Some of my favorite projects to work on were the group projects, Pantry Pirates, Code Connect, and Volunteer Calendar. Having worked on three team projects, I have worked with others to tackle merge conflicts, code review peer’s work, and meet deadlines for functioning, maintainable code to be deployed. In these group projects, I took on tasks that were not included in our curriculum, including implementing OAuth to login, targeting a user on a social media platform after logging in by passing the userID from the back end to the front end, and utilizing a modal to display data rendered from an API. In our most recent project, volunteer calendar, I worked with an API to pull data, pass that data through React components and convert it to the date formatting we wanted, as well as sending event data to the Mongo database. To see the code and projects I have worked on, you can <a className="resume linkprop" href={pdf} target="_blank" rel="noopener noreferrer"><strong>look at my updated resume</strong></a>, review my portfolio listed above, or follow the link at the top of the page to my github profile.</p>
        <p>When I'm not coding, I love getting out to the mountains and hiking. I really value time with my family and close friends. Gameboard nights, time spent in with a book, and rewatching Parks and Recreation are a favorite past time of mine. Put me in front of a puzzle or a project and I will dive into it for hours. I also have a cat that is the poster child for cat obesity, Harold, and he is very wonderful. Thanks for reading!
        </p>
      </div>
      </div>
      </div>
      </div>

    )
}

export default AboutMe