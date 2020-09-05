import React from "react";
import "./project.css"

const Project = (props) => {

    return(
<div class="card">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src={props.image} alt={props.name} />
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">{props.name}<i class="material-icons right">more_vert</i></span>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">{props.name}<i class="material-icons right">close</i></span>
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
/* <div className="card mb-3 size">
  <div className="row no-gutters">
    <div className="col-md-12">
      {console.log(props.image)}
      <img src={props.image}  className="activator card-img-top img-size" alt={props.name}  />
    </div>
    <div className="col-md-12">
      <div className="card-body">
        <h5 className="card-title activator">Name: {props.name}</h5>
        </div>
        <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
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
  </div> */
    )
    
}



export default Project