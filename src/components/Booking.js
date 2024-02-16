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
    const [errorMessage, setErrorMessage] = useState({date: "", time: "", guests: "", occasion: ""})

    /* FORM FUNCTIONS */
    const getIsFormValid = () => {
        let [year, month, day] = String(date).split('-');
        let [todayYear, todayMonth, todayDay] = String(today).split('-');
        let isInPast = (year < todayYear) || (year === todayYear && ((month < todayMonth) || (month === todayMonth && day < todayDay)));
        return (
            date && !(isInPast) && time && guests && (guests > 0 && guests < 11) && occasion
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
        let successfulSubmit = submitAPI(values);
        if (successfulSubmit) {
            clearForm();
            navigate("/confirmed", {state: values});
        }
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
                            required
                            onChange={(e) => {
                                setDate(e.target.value);
                                let [year, month, day] = String(e.target.value).split('-');
                                let [todayYear, todayMonth, todayDay] = String(today).split('-');
                                let isInPast = (year < todayYear) || (year === todayYear && ((month < todayMonth) || (month === todayMonth && day < todayDay)));
                                if (isInPast) {
                                    setErrorMessage({...errorMessage, date: "Date cannot be in the past."});
                                }
                                else {
                                    setErrorMessage({...errorMessage, date: ""});
                                }
                                dispatch({date: e.target.value, type: "update_times"});
                            }}
                        />
                        <div className="date-error">{errorMessage.date}</div>
                    </div>
                    <div className="field">
                        <label htmlFor="time">Time<sup>*</sup></label>
                        <select id="time" 
                            value={time}
                            required
                            onChange={(e) => {
                                setTime(e.target.value);
                            }}>
                            {availableTimes.times.map((time) => (
                                <option key={time}>{time}</option>
                            ))}
                        </select>
                        <div className="time-error">{errorMessage.time}</div>
                    </div>
                    <div className="field">
                        <label htmlFor="guests">Number of Guests<sup>*</sup></label>
                        <input 
                            id="guests"
                            type="number"
                            min="1"
                            max="10"
                            value={guests}
                            required
                            onChange={(e) => {
                                setGuests(e.target.value);
                                if (e.target.value < 1 || e.target.value > 10) {
                                    setErrorMessage({...errorMessage, guests: "The number of guests must be between 1 and 10."});
                                }
                                else {
                                    setErrorMessage({...errorMessage, guests: ""});
                                }
                            }}
                        />
                        <div className="guests-error">{errorMessage.guests}</div>
                    </div>
                    <div className="field">
                        <label htmlFor="occasion">Occasion<sup>*</sup></label>
                        <select id="occasion" value={occasion} required onChange={(e) => setOccasion(e.target.value)}>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="occasion-error">{errorMessage.occasion}</div>
                    </div>
                    <button type="submit" aria-label="On Click" disabled={!getIsFormValid()}>Make Your Reservation</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Booking;