import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Website from '../../assets/Website.png'
import  Male from'../../assets/Male.png'


function Navbar  ()  {

    // const [sticky, setSticky] = useState(false)
    // useEffect(()=>{
    //   window.addEventListener('scroll', ()=>{
    //     window.scrollY > 500 ? setSticky(true) : setSticky(false) ;
    //   })
    // },[]);

  return (

    <nav className='navbar'>
      <div className="nav">
      <img src={Website} alt="No Image " className='logo' />
      <div className='content'>
      <NavLink to="/work">What We Do</NavLink>
      <NavLink to="/about">Who We Are</NavLink>
      <NavLink to="/news">Events & News</NavLink> 
      <NavLink to="/Campus">Portfolio</NavLink>
      <NavLink to="/career">Careers</NavLink>
      <NavLink to="/contact">Contact Us</NavLink>
      
     
      </div>
      <button className='btn'>
        <img src={Male} alt="" className='logo3'/>Sign in
     </button>
    </div>
</nav>




    // <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    //   <img src={Website} alt="No Image " className='logo' />
    //   <ul>
    //     <li> What We Do</li>
    //     <li>Who We Are</li>
    //     <li>Events & News</li>
    //     <li>Careers</li>
    //     <li>Portfolio</li>
    //     <li>Contact Us </li>
    //     <input type="search" /><img src={Search} alt="" className='logo1' />
    //     <input type="search" /><img src={Browser} alt="" className='logo2' />
    //     <button className='btn'>
    //       <img src={Male} alt="" className='logo3'/>Sign in
    //     </button>
    //   </ul>
    // </nav>
  )
}

export default Navbar;
