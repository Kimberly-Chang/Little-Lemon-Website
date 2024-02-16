import { fireEvent, render, screen } from '@testing-library/react';
import Booking from './components/Booking';
import { fetchAPI } from "./utils/mockAPI.js";
import { updateTimes, initializeTimes } from './components/Booking';
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

/* BOOKING TESTS */
describe("Booking component tests", () => {
  test('Renders the Booking heading', () => {
      render(<Booking />);
      const headingElement = screen.getByText("Book a Table!");
      expect(headingElement).toBeInTheDocument();
  });

  test("initializeTimes initializes to the data for today's date", () => {
      const today = new Date().toJSON().slice(0, 10);
      const initialState = initializeTimes();
      const expectedResult = { times: fetchAPI(today) };
      expect(initialState).toEqual(expectedResult);
  });

  test('updateTimes provides the same data given the same date', () => {
      const today = new Date().toJSON().slice(0, 10);
      const day = new Date(2024,3,3);
      const expectedTimes = fetchAPI(day);
      const state = {
          date: day,
          times: fetchAPI(today),
      };
      const action = {type: "update_times"};
      const newState = updateTimes(state, action);
      expect(newState.times).toEqual(expectedTimes);
  });

  test('updateTimes returns the data it was given if no proper action is used', () => {
      const state = {
          times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      };
      const action = {type: "SOME_ACTION"};
      const newState = updateTimes(state, action);
      expect(newState).toEqual(state);
  });
  test('Cannot submit form (submit button disabled) with a date in the past', () => {
    render(<Booking />);
    const pastDate = "1990/01/01";
    const dateInput = screen.getByLabelText(/Date */);
    fireEvent.change(dateInput, { target: { value: pastDate } });

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });
  test('Cannot submit form (submit button disabled) with number of guests out of range (too small)', () => {
    render(<Booking />);
    const noGuests = "0";
    const guestsInput = screen.getByLabelText(/Number of Guests */);
    fireEvent.change(guestsInput, { target: { value: noGuests } });

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });
  test('Cannot submit form (submit button disabled) with number of guests out of range (too large)', () => {
    render(<Booking />);
    const tooManyGuests = "11";
    const guestsInput = screen.getByLabelText(/Number of Guests */);
    fireEvent.change(guestsInput, { target: { value: tooManyGuests } });

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });
  test('Can submit form with valid fields', () => {
    render(<Booking />);
    // The default selections for all fields are valid.
    const submitButton = screen.getByRole("button");
    expect(submitButton).not.toBeDisabled();
  })
})