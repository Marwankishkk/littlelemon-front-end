import React from 'react';
import Logo from '../images/Logo.svg'; // Adjust the path as per your actual directory structure and filename
const Nav = () => {


    return (
        <nav className='navbar'>
            <a className='logo' href='/'>
                <img src={Logo} alt="Logo" />
            </a>

            <ul className='nav-links' >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
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