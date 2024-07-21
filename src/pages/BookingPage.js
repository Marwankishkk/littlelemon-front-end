import React, { useReducer, useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

// Reducer function to manage state updates
const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

// Initialize times with the fetchAPI function
const initializeTimes = async (date) => {
    try {
        return fetchAPI(date); // Directly use fetchAPI
    } catch (error) {
        console.error("Error fetching initial times:", error);
        return [];
    }
};

// Update times based on the selected date
const updateTimes = async (date) => {
    try {
        return fetchAPI(date); // Directly use fetchAPI
    } catch (error) {
        console.error("Error fetching times:", error);
        return [];
    }
};

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(reducer, []);
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInitialTimes = async () => {
            const initialTimes = await initializeTimes(date);
            dispatch({ type: 'UPDATE_TIMES', payload: initialTimes });
        };
        fetchInitialTimes();
    }, [date]);

    const handleDateChange = async (newDate) => {
        setDate(new Date(newDate));
        const times = await updateTimes(new Date(newDate));
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    };

    const handleSubmit = async (formData) => {
        try {
            const isSubmitted = submitAPI(formData);
            if (isSubmitted) {
                navigate("/confirmed");
            } else {
                console.error("Failed to submit reservation");
            }
        } catch (error) {
            console.error("Error submitting reservation:", error);
        }
    };

    return (
        <BookingForm
            availableTimes={availableTimes}
            onDateChange={handleDateChange}
            onSubmit={handleSubmit}
        />
    );
}
