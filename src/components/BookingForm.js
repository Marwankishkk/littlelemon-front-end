import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [formErrors, setFormErrors] = useState({
        timeError: false,
        guestsError: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit({ date, time, guests, occasion });
        }
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {
            timeError: false,
            guestsError: false
        };

        // Validate Time
        if (!time) {
            errors.timeError = true;
            isValid = false;
        }

        // Validate Guests
        if (guests < 1 || guests > 10) {
            errors.guestsError = true;
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
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
                        required
                    />
                </div>
                <div className="form-group time">
                    <label htmlFor="time">Time</label>
                    <select
                        id="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select time</option>
                        {Array.isArray(availableTimes) && availableTimes.map((timeOption) => (
                            <option key={timeOption} value={timeOption}>
                                {timeOption}
                            </option>
                        ))}
                    </select>
                    {formErrors.timeError && <span className="error">Please select a time.</span>}
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
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        required
                    />
                    {formErrors.guestsError && <span className="error">Please enter a number between 1 and 10.</span>}
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
                <button type="submit" disabled={!date || !time || guests < 1 || guests > 10}>Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
