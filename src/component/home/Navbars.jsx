import React from 'react'
import Logo from '../../assest/Logo.png'
import '../../style/home.css'

import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { TbGridDots } from "react-icons/tb";

function Navbars() {
  return (
    <nav className='navbars'>
      <div className="logos">
        <img src={Logo} alt='logo' />
      </div>
      <div class="header3">
        <div class="menu3">
          <li><Link to='/' onClick={()=>alert("Sorry no route")}> Home</Link></li>
          <li><Link to='/about' onClick={()=>alert("Sorry no route")}> About Us</Link></li>
          <li><Link to='/service' onClick={()=>alert("Sorry no route")}> Service</Link></li>
          <li><Link to='/career' onClick={()=>alert("Sorry no route")}> Carrer</Link></li>
          <li><Link to='/contact' onClick={()=>alert("Sorry no route")}> Contact Us</Link></li>
        </div>
      </div>
      <div className="search">
        <FiSearch className='nav_icon' />
        <TbGridDots className='nav_icon' />
      </div>
    </nav>
  )
}

export default Navbars