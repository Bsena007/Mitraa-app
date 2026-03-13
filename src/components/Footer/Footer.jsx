import React from "react";
import './Footer.css'
import Website1 from '../../assets/Website1.png'
import X from '../../assets/X.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Linkdin from '../../assets/Linkdin.png'
import Website from '../../assets/Website.png'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <img src={Website1} />
          <p>
            Your big dreams deserve the right strategy. Fill out the form,
            pick a time that works for you, and let's connect!
          </p>

          <div className="socials">
            <h4>Follow Us</h4>
            <img src={Instagram} alt="" />
            <img src={Linkdin} alt="" /> 
            <img src={Facebook} alt="" /> 
            <img src={X} alt="" /> 
          </div>
        </div>


        <div className="footer-service">
          <h4>Services</h4>
          <ul>
            <li>Generative AI Solutions</li>
            <li>Web & App Development</li>
            <li>Blockchain (Web3)</li>
            <li>Enterprise Agile Development</li>
            <li>Cyber Security</li>
            <li>Enterprise Technology & Performance</li>
          </ul>
        </div>


        <div className="footer-link">
          <h4>Quick Links</h4>
          <ul>
            <li>Portfolio</li>
            <li>Case Study</li>
            <li>Resource Argumentation</li>
            <li>Careers</li>
            <li>News & Events</li>
          </ul>
        </div>

      </div>
    <div className="line"></div>
      <p className="copyright">
        © 2026 MY MITRAA. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;