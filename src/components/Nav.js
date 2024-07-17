import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.svg'; // Adjust the path as per your actual directory structure and filename
const Nav = () => {


    return (
        <nav className='navbar'>
            <a className='logo' href='/'>
                <img src={Logo} alt="Logo" />
            </a>

            <ul className='nav-links' >
                <li>
                    <Link to='/home-page'> Home</Link>
                </li>
                <li>
                    <Link to='/about'> About</Link>
                </li>
                <li>
                    <Link to='/menu'> Menu</Link>

                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>

            </ul>

        </nav>
    )
}
export default Nav;