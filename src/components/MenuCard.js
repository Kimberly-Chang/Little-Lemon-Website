

const MenuCard = ({title, price, description, imgSrc}) => {
    return (
        <div className="menu-card">
            <img src={imgSrc} alt={title} />
            <div className="menu-card-element menu-card-title">
                <h6>{title}</h6>
                <span className="menu-card-price">${price}</span>
            </div>
            <div className="menu-card-element">
                <p>{description}</p>
            </div>
            <div className="menu-card-element">
                <button>Order Delivery</button>
            </div>
        </div>
    );
}

export default MenuCard;