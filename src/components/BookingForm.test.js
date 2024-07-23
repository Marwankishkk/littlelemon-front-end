import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router-dom';


test('Renders the BookingForm heading', () => {
    render(
        <MemoryRouter>
            <BookingForm availableTimes={[]} onDateChange={() => { }} />
        </MemoryRouter>
    );
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
});
describe('BookingForm', () => {
    it('renders date input with required attribute', () => {
        const { getByLabelText } = render(<BookingForm />);
        const dateInput = getByLabelText(/Date/i);
        expect(dateInput).toHaveAttribute('required');
    });

    it('renders time select with required attribute', () => {
        const { getByLabelText } = render(<BookingForm />);
        const timeSelect = getByLabelText(/Time/i);
        expect(timeSelect).toHaveAttribute('required');
    });

    it('validates guests field correctly', () => {
        const { getByLabelText, getByText } = render(<BookingForm />);
        const guestsInput = getByLabelText(/Number of Guests/i);

        // Test invalid state
        fireEvent.change(guestsInput, { target: { value: '0' } });
        fireEvent.submit(getByText(/Submit/i)); // Trigger form submission
        expect(getByText('Please enter a number between 1 and 10.')).toBeInTheDocument();

        // Test valid state
        fireEvent.change(guestsInput, { target: { value: '5' } });
        fireEvent.submit(getByText(/Submit/i)); // Trigger form submission
        expect(getByText('Please enter a number between 1 and 10.')).not.toBeInTheDocument();
    });

});