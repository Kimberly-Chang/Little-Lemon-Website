import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

const Nav = () => {
    const navStyle = {
        padding: "1% 20%",
        backgroundColor: "#EDEFEE",
    };
    const logoImgStyle = {
        width: "10vw",
    };
    const navUlStyle = {
        display: "flex",
        listStyle: "none",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0",
    };
    const navLiStyle = {
    };
    const navLinkStyle = {
        padding: "1vmin",
        color: "#333333",
        fontSize: "18rem",
        textDecoration: "none",
        fontWeight: "bold",
    };

    return (
        <nav style={navStyle}>
            <ul style={navUlStyle}>
                <img src={logo} alt="logo" style={logoImgStyle} />
                <li style={navLiStyle}><Link to="/" className="nav-item" style={navLinkStyle}>HOME</Link></li>
                <li style={navLiStyle}><Link to="/about" className="nav-item" style={navLinkStyle}>ABOUT</Link></li>
                <li style={navLiStyle}><Link to="/menu" className="nav-item" style={navLinkStyle}>MENU</Link></li>
                <li style={navLiStyle}><Link to="/booking" className="nav-item" style={navLinkStyle}>RESERVATIONS</Link></li>
                <li style={navLiStyle}><Link to="/order" className="nav-item" style={navLinkStyle}>ORDER ONLINE</Link></li>
                <li style={navLiStyle}><Link to="/login" className="nav-item" style={navLinkStyle}>LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;