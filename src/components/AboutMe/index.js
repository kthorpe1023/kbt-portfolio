import React from "react";
import "./style.css"

const AboutMe = () => {
    return(
      <div className="aboutbg">
    <div className="container">
    <div className="row" id="aboutme">
        <img id="Katie" alt="Me and a mountain"></img>
  
      <div clasName="col s12 col m8">
        <p>I live in Denver, CO, and while working full time as an admissions counselor, I have been learning to code in DU's full stack coding bootcamp.</p>
        <p>Some of my favorite projects to work on were the group projects, Pantry Pirates and Code Connect. You can learn more about those projects and others I have worked on in my portfolio. Feel free to follow my journey as well by <a href="./images/KatieThorpesResumeGH.pdf" target="_blank">looking at my updated resume</a>.</p>
        <p>When I'm not coding, I love getting out to the mountains and hiking. I really value time with my family and close friends. Gameboard nights, time spent in with a book, and rewatching Parks and Recreation are a favorite past time of mine. Put me in front of a puzzle or a project and I will dive into it for hours. I also have a cat that is the poster child for cat obesity, Harold, and he is very wonderful. Thanks for reading!
        </p>
        
      </div>
      </div>
      </div>
      </div>
    )
}

export default AboutMe