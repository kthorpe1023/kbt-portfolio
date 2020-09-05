import React from 'react'
import Intro from '../Intro'
import Social from '../Social/social.js'

import './introbg.css'

const IntroBG = () => {
    return(
        <div className="bg" id="home">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Intro />
            <Social />
        </div>
    )
}

export default IntroBG