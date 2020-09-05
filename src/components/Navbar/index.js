import React from "react";
import "./style.css"

const Navbar = () => {
    return(
      <div className="navbar-fixed">
        <nav>
        <div className="nav-wrapper">
          <a href="#home" className="brand-logo nav-name left"><i className="material-icons">home</i></a>
          <ul className="right">
            <li><a href="#portfolio"><i className="material-icons">view_module</i></a></li>
            <li><a href="#aboutme"><i className="material-icons">person_pin</i></a></li>
            <li><a href="./components/Project/images/KatieThorpeResumeGH.pdf" target="_blank"><i className="material-icons">view_list</i></a></li>
          </ul>
        </div>
      </nav>
      </div>
    )

}

export default Navbar