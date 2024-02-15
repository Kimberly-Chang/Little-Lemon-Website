import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
    const { state } = useLocation();

    return (
        <div className="booking-box">
            <h4>Booking Confirmed!</h4>
            <p>Thank you for choosing Little Lemon!</p>
            <p>We've confirmed your reservation for {state.date} at {state.time} for {state.guests} guest(s) celebrating a(n) {state.occasion}!</p>
        </div>
    );
}

export default BookingConfirmation;