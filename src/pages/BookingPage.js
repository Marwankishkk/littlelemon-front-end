import BookingForm from "../components/BookingForm";
import React, { useReducer } from "react";

export const initializeTimes = () => {
    return [
        "12:00", "12:30", "13:00", "13:30", "14:00",
        "14:30", "15:00", "15:30", "16:00", "16:30",
        "17:00", "17:30", "18:00", "18:30", "19:00",
        "19:30", "20:00", "20:30", "21:00", "21:30"
    ];
};

export const updateTimes = (state, action) => {
    // For now, we return the same times regardless of the date
    // You can later implement logic to filter times based on the selected date
    if (action.type === 'UPDATE_TIMES') {
        return initializeTimes();
    }
    return state;
};

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const handleDateChange = (date) => {
        dispatch({ type: 'UPDATE_TIMES', date });
    };

    return (
        <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} />
    );
}
