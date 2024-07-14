import React from 'react';
import Logo from '../images/Logo.svg'; // Adjust the path as per your actual directory structure and filename

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Logo" /> {/* Make sure to include the alt attribute for accessibility */}
            <div>
                <ul>
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
            </div>

        </nav>
    )
}
export default Nav;