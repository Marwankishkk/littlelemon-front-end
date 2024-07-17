import React from "react";
import reviewer from '../images/reviwer.jpg'
const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>Our Customers love us!</h2>
            <div className="reviews">
                <div className="review">
                    <img className="reviewer-img" src={reviewer} alt="image" />
                    <div className="name-rating">
                        <h5 className="reviewer-name">John Doe</h5>
                        <h6 className="reviewer-rating">5/5</h6>
                    </div>
                    <div className="review-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa,
                            semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper,
                            diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                    </div>
                </div>
                <div className="review">
                    <img className="reviewer-img" src={reviewer} alt="image" />
                    <div className="name-rating">
                        <h5 className="reviewer-name">John Doe</h5>
                        <h6 className="reviewer-rating">5/5</h6>
                    </div>
                    <div className="review-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa,
                            semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper,
                            diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                    </div>
                </div>
                <div className="review">
                    <img className="reviewer-img" src={reviewer} alt="image" />
                    <div className="name-rating">
                        <h5 className="reviewer-name">John Doe</h5>
                        <h6 className="reviewer-rating">5/5</h6>
                    </div>
                    <div className="review-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa,
                            semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper,
                            diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                    </div>
                </div>
                <div className="review">
                    <img className="reviewer-img" src={reviewer} alt="image" />
                    <div className="name-rating">
                        <h5 className="reviewer-name">John Doe</h5>
                        <h6 className="reviewer-rating">5/5</h6>
                    </div>
                    <div className="review-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa,
                            semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper,
                            diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                    </div>
                </div>


            </div>

        </div>

    )

}
export default Testimonials;