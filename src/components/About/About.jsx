import React from 'react'
import './About.css'
import unnamed from '../../assets/unnamed.png'
import Web from '../../assets/Web.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={unnamed} alt="" className='about-img'/>
        <img src={Web} alt="" className='about-web'/>
      </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Outfit is a variable font family designed</h2>
            <p>Outfit is a variable font family designed
                 by On Brand Investments Pty Ltd. You can
                  download Outfit font files in different 
                  weights and styles, or use the text 
                  generator tool to create text</p>
        </div>
    </div>
  )
}

export default About
