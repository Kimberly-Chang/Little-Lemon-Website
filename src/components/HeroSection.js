import food from "../img/restaurant_food.jpg";

const HeroSection = () => {
    const heroBoxStyle = {
        padding: "40rem 20%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "linear-gradient(#495E57 80%, #EDEFEE 20%)",
    };
    const heroElementStyle = {
        color: "#F4CE14",
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
        fontSize: "13rem",
        fontWeight: "700",
    };
    const imgStyle = {
        maxWidth: "100%",
        width: "20vmax",
        height: "20vmax",
        padding: "0 30%",
        objectFit: "cover",
        borderRadius: "16px",
    };

    return (
        <div className="heroBox" style={heroBoxStyle}>
            <div className="heroElement" style={heroElementStyle}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p style={pStyle}>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button style={buttonStyle}>Reserve a Table</button>
            </div>
            <div className="heroElement" style={heroElementStyle}>
                <img src={food} alt="food on a plate" style={imgStyle}/>
            </div>
        </div>
    );
}

export default HeroSection;