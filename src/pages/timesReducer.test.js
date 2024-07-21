import { initializeTimes, updateTimes } from './BookingPage'; // Adjust the path as necessary

describe('initializeTimes', () => {
    test('should return the correct initial times array', () => {
        const expectedTimes = [
            "12:00", "12:30", "13:00", "13:30", "14:00",
            "14:30", "15:00", "15:30", "16:00", "16:30",
            "17:00", "17:30", "18:00", "18:30", "19:00",
            "19:30", "20:00", "20:30", "21:00", "21:30"
        ];
        const result = initializeTimes();
        expect(result).toEqual(expectedTimes);
    });
});

describe('updateTimes', () => {
    test('should return the same times array for UPDATE_TIMES action', () => {
        const initialState = initializeTimes();
        const action = { type: 'UPDATE_TIMES', date: '2023-07-20' };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });

    test('should return the initial state for an unknown action', () => {
        const initialState = initializeTimes();
        const action = { type: 'UNKNOWN_ACTION' };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });
});
