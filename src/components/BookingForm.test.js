import { render, screen } from "@testing-library/react";
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
