import { Link } from 'react-router-dom';
import MenuCard from "./MenuCard";

const menuItems = [
    {
        title: "Greek Salad",
        price: "12.99",
        description: "Our famous Greek salad consists of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../img/greek_salad.jpg"),
    },
    {
        title: "Bruschetta",
        price: "5.99",
        description: "Our delicious Bruschetta is made from grilled bread that has been smeared with garlic, seasoned with salt and olive oil, and topped with freshly chopped tomatoes.",
        getImageSrc: () => require("../img/bruschetta.jpg"),
    },
    {
        title: "Lemon Dessert",
        price: "5.00",
        description: "This lemon dessert comes straight from my grandma's recipe book. Every last ingredient has been sourced carefully and is as authentic as can be imagined.",
        getImageSrc: () => require("../img/lemon_dessert.jpg"),
    },
];

const Highlights = () => {
    const highlightsBoxStyle = {
        padding: "40rem 20%",
        background: "#EDEFEE",
    };
    const highlightsTitleBox = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
    };
    const highlightsButtonStyle = {
        textAlign: "right",
    }
    const buttonStyle = {
        padding: "10rem 20rem",
        border: "none",
        borderRadius: "16px",
        backgroundColor: "#F4CE14",
        fontSize: "20rem",
        fontWeight: "700",
    };
    const highlightsMenuBoxStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
    };

    return (
        <div className="highlightsBox" style={highlightsBoxStyle}>
            <div className="highlightsTitleBox" style={highlightsTitleBox}>
                <h2>This week's specials!</h2>
                <div className="highlightsButton" style={highlightsButtonStyle}><Link to="/order"><button style={buttonStyle}>Order Online</button></Link></div>
            </div>
            <div className="highlightsMenuBox" style={highlightsMenuBoxStyle}>
                {menuItems.map((menuItems) => (
                    <MenuCard 
                        key={menuItems.title}
                        title={menuItems.title}
                        price={menuItems.price}
                        description={menuItems.description}
                        imgSrc={menuItems.getImageSrc()}
                    />
                ))}
            </div>
        </div>
    );
}

export default Highlights;