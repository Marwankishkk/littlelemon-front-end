// BookingForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ date, time, guests, occasion });
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        onDateChange(newDate);
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
                        onChange={handleDateChange}
                    />
                </div>
                <div className="form-group time">
                    <label htmlFor="time">Time</label>
                    <select
                        id="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="" disabled>Select time</option>
                        {Array.isArray(availableTimes) && availableTimes.map((timeOption) => (
                            <option key={timeOption} value={timeOption}>
                                {timeOption}
                            </option>
                        ))}
                    </select>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
