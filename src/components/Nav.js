import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

const Nav = () => {
    const navStyle = {
        padding: "1% 20%",
        backgroundColor: "#FFFFFF",
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
                <Link to="/"><img src={logo} alt="logo" style={logoImgStyle} /></Link>
                <li style={navLiStyle}><Link to="/" style={navLinkStyle}>HOME</Link></li>
                <li style={navLiStyle}><Link to="/about" style={navLinkStyle}>ABOUT</Link></li>
                <li style={navLiStyle}><Link to="/menu" style={navLinkStyle}>MENU</Link></li>
                <li style={navLiStyle}><Link to="/booking" style={navLinkStyle}>RESERVATIONS</Link></li>
                <li style={navLiStyle}><Link to="/order" style={navLinkStyle}>ORDER ONLINE</Link></li>
                <li style={navLiStyle}><Link to="/login" style={navLinkStyle}>LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;