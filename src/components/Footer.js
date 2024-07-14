import React from 'react';
import Logo from '../images/logofooter.png'; // Adjust the path as per your actual directory structure and filename

const Footer = () => {
    return (
        <footer>
            <img src={Logo}></img>
            <div>
                <h5>Doormat navigation</h5>
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
            <div>
                <h5>Contact </h5>
                <ul>
                    <li>
                        <a href="/">Adress</a>
                    </li>
                    <li>
                        <a href="/">Phone number</a>
                    </li>
                    <li>
                        <a href="/">Email</a>
                    </li>
                </ul >
            </div>
            <div>
                <h5>Social Media Links </h5>
                <ul>
                    <li>
                        <a href="/">Adress</a>
                    </li>
                    <li>
                        <a href="/">Phone number</a>
                    </li>
                    <li>
                        <a href="/">Email</a>
                    </li>
                </ul >
            </div>
        </footer>
    )
}
export default Footer;