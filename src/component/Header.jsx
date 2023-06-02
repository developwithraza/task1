import React from 'react'
import SocialIcons from './SocialIcons'
import "../App.css"
import { AiOutlineWhatsApp} from "react-icons/ai";
import { MdWorkOutline} from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
function Header() {
  return (
    <header className='container'>
        <div className='header'>
            <SocialIcons />
            <img src='https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png' />
            <div className="serach">
                <div className="search_item">
                    <p><span>{<AiOutlineWhatsApp className='number_icon'/>}</span>6854861243</p>
                    <p><span>{<MdWorkOutline className='number_icon'/>}</span>Enquiry</p>
                </div>
                <div>
                <Form.Control type="search" placeholder="search" />

                </div>
            </div>
        </div>
        <nav className='nav_item'>

            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/product' >Product</NavLink>
            <NavLink to='/recipes' >Recipes</NavLink>
            <NavLink to='/carrer' >Career</NavLink>
            <NavLink to='/media' >Media</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
        </nav>
    </header>
  )
}

export default Header
