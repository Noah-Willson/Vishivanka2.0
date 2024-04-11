import React, { useState } from "react";
import './Navbar.css'
import logo from '../../../Assets/Images/Logo.ico'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">

      <span className='navbar-toggle' id='js-navbar-toggle' onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </span>

      <a href="/" className='logo'>

        <img src={logo} alt="logo" id='logo-picutre-header' />

      </a>

      <h2>
        Vishivankas
      </h2>


      <ul className={`main-nav ${isOpen ? 'active' : ''}`} id="js-menu">
        <li>
          <Link to="/" className="nav-links">Головна</Link>
        </li>
        <li>
          <Link to="/about" className="nav-links">Про нас</Link>
        </li>
        <li >
          <Link to="/items"  className="nav-links">Послуги</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-links">Контакти</Link>
        </li>
      </ul>




    </nav>

  )

}

export default Navbar