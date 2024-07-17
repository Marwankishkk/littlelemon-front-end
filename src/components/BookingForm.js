import React, { useState } from "react";
import { Link } from 'react-router-dom'

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ date, time, guests, occasion });
    };

    return (
        <div className="form-container">
            <h4>Book a Table</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group date">
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="form-group time">
                    <label htmlFor="time">Time</label>
                    <input
                        id="time"
                        type="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <div className="form-group guests">
                    <label htmlFor="guests">Number of Guests</label>
                    <input
                        id="guests"
                        type="number"
                        name="guests"
                        placeholder="1"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </div>
                <div className="form-group occasion">
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
                <Link to='/home-page'>
                    <button type="submit">Submit</button>
                </Link>
            </form>
        </div>
    );
};

export default BookingForm;
