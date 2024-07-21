import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from "../api";

// Mock the API functions
jest.mock("../api");

describe('BookingPage', () => {
    beforeEach(() => {
        fetchAPI.mockReset();
        submitAPI.mockReset();
    });

    test('should fetch and display initial times', async () => {
        fetchAPI.mockResolvedValue([
            "12:00", "12:30", "13:00", "13:30", "14:00",
            "14:30", "15:00", "15:30", "16:00", "16:30",
            "17:00", "17:30", "18:00", "18:30", "19:00",
            "19:30", "20:00", "20:30", "21:00", "21:30"
        ]);

        await act(async () => {
            render(
                <Router>
                    <BookingPage />
                </Router>
            );
        });

        await waitFor(() => {
            expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
        });

        // Check for available times in the select element
        const timeElement = screen.getByText("12:00");
        expect(timeElement).toBeInTheDocument();
    });

    test('should update available times on date change', async () => {
        fetchAPI.mockResolvedValue([
            "15:00", "15:30", "16:00", "16:30", "17:00"
        ]);

        await act(async () => {
            render(
                <Router>
                    <BookingPage />
                </Router>
            );
        });

        // Simulate a date change
        const dateInput = screen.getByLabelText(/date/i);
        fireEvent.change(dateInput, { target: { value: '2023-08-01' } });

        await waitFor(() => {
            expect(fetchAPI).toHaveBeenCalledWith(new Date('2023-08-01'));
        });

        // Check for updated available times
        const timeElement = screen.getByText("15:00");
        expect(timeElement).toBeInTheDocument();
    });

    test('should navigate to confirmation page on successful submission', async () => {
        submitAPI.mockResolvedValue(true);

        await act(async () => {
            render(
                <Router>
                    <BookingPage />
                </Router>
            );
        });

        // Example form submission
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        // Ensure navigation to confirmation page
        await waitFor(() => {
            expect(window.location.pathname).toBe("/confirmed");
        });
    });

    test('should handle submission failure', async () => {
        submitAPI.mockResolvedValue(false);

        await act(async () => {
            render(
                <Router>
                    <BookingPage />
                </Router>
            );
        });

        // Example form submission
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        // Ensure navigation does not occur
        await waitFor(() => {
            expect(window.location.pathname).not.toBe("/confirmed");
        });
    });
});
