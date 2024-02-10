

const TestimonialCard = ({rating, name, description, imgSrc}) => {
    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "10%",
        padding: "5%",
        borderRadius: "16px",
        backgroundColor: "#FFFFFF",
    };
    const imgStyle = {
        maxWidth: "50%",
        objectFit: "cover",
        borderRadius: "16px 16px 0 0",
    };
    const textElement = {
        padding: "5rem 0",
    }
    const middleElement = {
        display: "flex",
        alignItems: "center",
        paddingTop: "10rem",
    };
    const pStyle = {
        color: "#333333",
    };
    const star1Style = {
        color: "#F4CE14",
    };
    const star2Style = {
        color: "#333333",
    }

    // converting rating into an image
    var stars1 = "", stars2 = "";
    for (var i = 0; i < rating; i++) {
        stars1 += "★";
    }
    for (var i = 0; i < (5-rating); i++) {
        stars2 += "★";
    }


    return (
        <div className="testimonialCard" style={cardStyle}>
            <div style={textElement}>
                <h6>Rating: <span style={star1Style}>{stars1}</span><span style={star2Style}>{stars2}</span></h6>
            </div>
            <div style={{...textElement, ...middleElement}}>
                <img src={imgSrc} alt={name} style={imgStyle} />
                <h6>{name}</h6>
            </div>
            <div style={textElement}>
                <p style={pStyle}>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default TestimonialCard;