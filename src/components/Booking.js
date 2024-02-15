import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from "../utils/mockAPI.js";

/* functions for availableTimes useReducer */
export const updateTimes = (state, action) => {
    switch (action.type) {
        case "update_times":
            return ({...state,
                times: fetchAPI(action.date)});
        default:
            return state;
    };
};

export const initializeTimes = () => {
    const today = new Date().toJSON().slice(0, 10);
    return ({times: fetchAPI(today)});
};

const Booking = () => {
    const navigate = useNavigate();
    const today = new Date().toJSON().slice(0, 10);

    /* STATE VARIABLES */
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [date, setDate] = useState(today);
    const [time, setTime] = useState(availableTimes.times[0]);
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("birthday");

    /* FORM FUNCTIONS */
    const getIsFormValid = () => {
        return (
            date && time && guests && occasion
        );
    };
    const clearForm = () => {
        setDate(today);
        setTime(availableTimes.times[0]);
        setGuests("1");
        setOccasion("birthday");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {date: date, time: time, guests: guests, occasion: occasion};
        console.log(values);
        submitAPI(values);
        clearForm();
        // navigate("/confirmed");
        navigate("/confirmed",{state: values});
    };

    return (
        <div className="booking-box">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h4>Book a Table!</h4>
                    <div className="field">
                        <label htmlFor="date">Date <sup>*</sup></label>
                        <input 
                            id="date"
                            type="date"
                            value={date}
                            onChange={(e) => {
                                setDate(e.target.value);
                                dispatch({date: e.target.value, type: "update_times"});
                            }}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="time">Time<sup>*</sup></label>
                        <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                            {availableTimes.times.map((time) => (
                                <option>{time}</option>
                            ))}
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="guests">Number of Guests<sup>*</sup></label>
                        <input 
                            id="guests"
                            type="number"
                            min="1"
                            max="10"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="occasion">Occasion<sup>*</sup></label>
                        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>Make Your Reservation</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Booking;