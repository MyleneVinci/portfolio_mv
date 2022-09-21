import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './navbar.css';


const Navbar = () => {

const [click, setClick] = useState(false);
const [color, setColor] = useState(false);

const handleClick = () => {
    setClick(!click);
}

const changeColor = () => {
    if(window.scrollY >= 100) {
        setColor(true);
    } else {
        setColor(false);
    }
}

window.addEventListener("scroll", changeColor);

    return (
        <div className={ color ? 'header header-bg' : 'header' }>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to="/" onClick={handleClick}>Accueil</Link>
                </li>
                <li>
                    <Link to="/apropos" onClick={handleClick}>A propos de moi</Link>
                </li>
                <li>
                    <Link to="/projets" onClick={handleClick}>Projets</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={handleClick}>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick= {handleClick}>
                {click ? <FaTimes size={30} style={{color:'#fff'}} /> : <FaBars size={30} style={{color:'#fff'}} /> }
            </div>
        </div>
    )
}

export default Navbar;