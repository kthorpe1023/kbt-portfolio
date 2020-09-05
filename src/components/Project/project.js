import React from "react";
import "./project.css"

const Project = (props) => {

    return(
<div className="card mb-3 size">
  <div className="row no-gutters">
    <div className="col-md-12">
      {console.log(props.image)}
      <img src={props.image}  className="card-img-top img-size" alt={props.name}  />
    </div>
    <div className="col-md-12">
      <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
        <ul>
        <li className="description">
          <strong>Description:</strong> {props.description}
        </li>
        <li>
          <a href={props.link} target="_blank" rel="noopener noreferrer"><strong>Review the Website</strong></a>
        </li>
        <li>
          <a href={props.ghlink} target="_blank" rel="noopener noreferrer"><strong>Github Repo</strong></a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</div>
    )
    
}

export default Project