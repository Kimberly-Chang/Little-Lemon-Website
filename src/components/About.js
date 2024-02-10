import brothers from "../img/Mario_and_Adrian.jpg";

const About = () => {
    const aboutBoxStyle = {
        padding: "40rem 20%",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        backgroundColor: "#FBDABB",
        color: "#EE9972",
    };
    const aboutElementStyle = {
        padding: "",
        alignSelf: "stretch",
    };
    const pStyle = {
        padding: "10rem 0",
        color: "#333333",
    }
    const imgStyle = {
        maxWidth: "100%",
        display: "block",
        margin: "0 50%",
    }

    return (
        <div className="aboutBox" style={aboutBoxStyle}>
            <div className="aboutElement" style={aboutElementStyle}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p style={pStyle}>
                    Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. 
                    The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. 
                    The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
                <br /><br />
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. 
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. 
                    Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
            </div>
            <div className="aboutElement" style={aboutElementStyle}>
                <img src={brothers} style={imgStyle} />
            </div>
        </div>
    );
}

export default About;