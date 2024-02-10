import { Link } from 'react-router-dom';
import food from "../img/restaurant_food.jpg";

const HeroSection = () => {
    return (
        <div className="hero-box">
            <div className="hero-element">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking"><button>Reserve a Table</button></Link>
            </div>
            <div className="hero-element">
                <img src={food} alt="food on a plate"/>
            </div>
        </div>
    );
}

export default HeroSection;