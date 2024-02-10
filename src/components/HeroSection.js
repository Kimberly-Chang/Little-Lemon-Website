import { Link } from 'react-router-dom';
import food from "../img/restaurant_food.jpg";

const HeroSection = () => {
    const heroBoxStyle = {
        padding: "40rem 20%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "linear-gradient(#495E57 65%, #EDEFEE 35%)",
    };
    const heroElementStyle = {
        color: "#F4CE14",
        borderRadius: "16px",
    };
    const pStyle = {
        padding: "10rem 0",
        color: "#EDEFEE",
    }
    const buttonStyle = {
        padding: "10rem 20rem",
        border: "none",
        borderRadius: "16px",
        backgroundColor: "#F4CE14",
        fontSize: "20rem",
        fontWeight: "700",
    };
    const imgStyle = {
        maxWidth: "100%",
        width: "40vmin",
        height: "50vmin",
        margin: "0 30%",
        objectFit: "cover",
        borderRadius: "16px",
    };

    return (
        <div className="heroBox" style={heroBoxStyle}>
            <div className="heroElement" style={heroElementStyle}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p style={pStyle}>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking"><button style={buttonStyle}>Reserve a Table</button></Link>
            </div>
            <div className="heroElement" style={heroElementStyle}>
                <img src={food} alt="food on a plate" style={imgStyle}/>
            </div>
        </div>
    );
}

export default HeroSection;