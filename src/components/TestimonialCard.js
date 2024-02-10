

const TestimonialCard = ({rating, name, description, imgSrc}) => {
    // converting rating into an image
    var stars1 = "", stars2 = "";
    for (var i = 0; i < rating; i++) {
        stars1 += "★";
    }
    for (var i = 0; i < (5-rating); i++) {
        stars2 += "★";
    }

    return (
        <div className="testimonial-card">
            <div className="testimonial-card-element">
                <h6>Rating: <span className="testimonial-card-stars1">{stars1}</span><span className="testimonial-card-stars2">{stars2}</span></h6>
            </div>
            <div className="testimonial-card-element testimonial-card-reviewer">
                <img src={imgSrc} alt={name} />
                <h6>{name}</h6>
            </div>
            <div className="testimonial-card-element">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default TestimonialCard;