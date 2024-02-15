import { fireEvent, render, screen } from '@testing-library/react';
import Booking from './components/Booking';
import { fetchAPI } from "./utils/mockAPI.js";
import { updateTimes, initializeTimes } from './components/Booking';

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
})