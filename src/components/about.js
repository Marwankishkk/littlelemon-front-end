import React from "react";
import Mario from '../images/Mario1.jpg'
import Mario2 from '../images/Mariio2.jpg'

const About = () => {
    return (
        <div className="about">
            <div className='about-text'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa,
                    semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper,
                    diam tortor dignissim velit, ac iaculis libero lacus non diam.</p>
            </div>
            <div className="image-container">
                <img className="image-1" src={Mario} />
                <img className="image-2" src={Mario2} />

            </div>









        </div>
    )
}
export default About;