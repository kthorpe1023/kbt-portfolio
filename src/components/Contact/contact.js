import React from 'react';
import pdf from '../Project/assets/KatieThorpesCodeResumeGH.pdf'
import './contact.css';

const Contact = () => {
    return(
        <div className="contact" id="contact">
            <h4>Contact Me:</h4>
            <h6>kthorpe1023@gmail.com</h6>
            <h6><i class="material-icons">location_on</i>Denver, 80246</h6>
            {/* linkprop styling defined in AboutMe style.css */}
            <a className="resume linkprop" href={pdf} target="_blank">Checkout my Resume</a>
        </div>
    )
}

export default Contact