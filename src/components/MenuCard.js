

const MenuCard = ({title, price, description, imgSrc}) => {
    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "10rem 10%",
        borderRadius: "16px",
        backgroundColor: "#FFFFFF",
    };
    const imgStyle = {
        maxWidth: "100%",
        width: "40vmin",
        height: "20vmin",
        objectFit: "cover",
        borderRadius: "16px 16px 0 0",
    };
    const textElement = {
        padding: "1rem 5%",
    }
    const topElement = {
        display: "flex",
        alignItems: "center",
        paddingTop: "10rem",
    };
    const priceElement = {
        textAlign: "right",
        flex: "50%",
    };
    const pStyle = {
        padding: "10rem 0",
    };
    const buttonStyle = {
        fontSize: "16rem",
        backgroundColor: "#FFFFFF",
        border: "none",
        padding: "10rem 0",
        fontWeight: "600",
    };

    return (
        <div className="menuCard" style={cardStyle}>
            <img src={imgSrc} alt={title} style={imgStyle} />
            <div style={{...textElement, ...topElement}}>
                <h6>{title}</h6>
                <span style={priceElement}>${price}</span>
            </div>
            <div style={textElement}>
                <p style={pStyle}>
                    {description}
                </p>
            </div>
            <div style={textElement}>
                <button style={buttonStyle}>Order Delivery</button>
            </div>
        </div>
    );
}

export default MenuCard;