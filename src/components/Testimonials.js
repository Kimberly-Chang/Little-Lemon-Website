import TestimonialCard from "./TestimonialCard";

const reviews = [
    {
        id: "1",
        rating: "5",
        name: "Alice",
        description: "Little Lemon is my favorite Mediterranean restaurant! I come back every week!",
        getImageSrc: () => require("../img/person_icon.png"),
    },
    {
        id: "2",
        rating: "4",
        name: "Bob",
        description: "The food and service is excellent! However, the food is a bit pricey.",
        getImageSrc: () => require("../img/person_icon.png"),
    },
    {
        id: "3",
        rating: "3",
        name: "Carol",
        description: "The food was really good, but we had to wait 2 hours to get in.",
        getImageSrc: () => require("../img/person_icon.png"),
    },
    {
        id: "4",
        rating: "5",
        name: "Dan",
        description: "The best spot in town! Definitely give it a try if you're in Chicago.",
        getImageSrc: () => require("../img/person_icon.png"),
    },
];

const Testimonials = () => {
    const testimonialsBoxStyle = {
        padding: "40rem 20%",
        backgroundColor: "#495E57",
    };
    const headingStyle = {
        textAlign: "center",
        color: "#EDEFEE",
    };
    const testimonialsReviewBoxStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
    };

    return (
        <div className="testimonialsBox" style={testimonialsBoxStyle}>
            <h4 style={headingStyle}>Testimonials</h4>
            <div className="testimonialsReviewBox" style={testimonialsReviewBoxStyle}>
                {reviews.map((reviews) => (
                    <TestimonialCard 
                        key={reviews.id}
                        rating={reviews.rating}
                        name={reviews.name}
                        description={reviews.description}
                        imgSrc={reviews.getImageSrc()}
                    />
                ))}
            </div>
        </div>
    );
}

export default Testimonials;