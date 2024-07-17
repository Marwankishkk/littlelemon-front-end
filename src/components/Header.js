import React from 'react';
import food from '../images/restauranfood.jpg'
const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button className='reserve'>Reserve a Table</button>
                </div>
                <div className='banner-img'>
                    <img src={food} />
                </div>
            </section>

        </header>
    );
}

export default Header;
