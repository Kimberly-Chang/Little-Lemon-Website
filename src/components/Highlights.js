
const menuItems = [
    {
        title: "Greek Salad",
        price: "12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../img/greek_salad.jpg"),
    },
    {
        title: "Bruchetta",
        price: "5.99",
        description: "Our Bruchetta is made from grilled bread that has been smeared with farlic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../img/bruchetta.svg"),
    },
    {
        title: "Lemon Dessert",
        price: "5.00",
        description: "This comes straight from my grandma's recipe book; every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../img/lemon_dessert.jpg"),
    },
];

const Highlights = () => {
    const highlightsBoxStyle = {
        padding: "40rem 20%",
        background: "#EDEFEE",
    };

    return (
        <div className="highlightsBox" style={highlightsBoxStyle}>
            <h2>This week's specials!</h2>
        </div>
    );
}

export default Highlights;