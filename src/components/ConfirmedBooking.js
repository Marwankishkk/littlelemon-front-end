// BookingConfirmed.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmed = () => (
    <div className="booking-confirmed">
        <h1>Booking Confirmed!</h1>
        <p>Your reservation has been successfully submitted. We look forward to seeing you soon!</p>
        <Link to="/home-page" className="back-button">Back to Home</Link>
    </div>
);

export default BookingConfirmed;
