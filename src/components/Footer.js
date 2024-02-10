import { Link } from 'react-router-dom';
import logo from "../img/logo_footer.png";

const Footer = () => {
    const footerStyle = {
        padding: "1% 20%",
        display: "flex",
        backgroundColor: "#FFFFFF",
    };
    const footerDivStyle = {
        // display: "grid",
        padding: "0 5%",
        fontSize: "16rem",
    };
    const footerImgStyle = {
        height: "160rem",
    };
    const footerUlStyle = {
        listStyle: "none",
        fontSize: "16rem",
        fontWeight: "700",
    }
    const footerLiStyle = {
        fontSize: "16rem",
        fontWeight: "400",
    }
    const footerLinkStyle = {
        padding: "0",
        color: "#333333",
        fontSize: "16rem",
        textDecoration: "none",
    };
    const emailStyle = {
        fontSize: "16rem",
    }

    return (
        <footer style={footerStyle}>
            <Link to="/"><img src={logo} alt="logo" style={footerImgStyle} /></Link>
            <div style={footerDivStyle}>
                <ul style={footerUlStyle}>
                    Doormat Navigation
                    <li style={footerLiStyle}><Link to="/" style={footerLinkStyle}>Home</Link></li>
                    <li style={footerLiStyle}><Link to="/about" style={footerLinkStyle}>About</Link></li>
                    <li style={footerLiStyle}><Link to="/menu" style={footerLinkStyle}>Menu</Link></li>
                    <li style={footerLiStyle}><Link to="/booking" style={footerLinkStyle}>Reservations</Link></li>
                    <li style={footerLiStyle}><Link to="/order" style={footerLinkStyle}>Order Online</Link></li>
                    <li style={footerLiStyle}><Link to="/login" style={footerLinkStyle}>Login</Link></li>
                </ul>
            </div>
            <div style={footerDivStyle}>
                <ul style={footerUlStyle}>
                    Contact
                    <li style={footerLiStyle}>123 Main St., Chicago, IL 60601</li>
                    <li style={footerLiStyle}>312-729-0469</li>
                    <li style={footerLiStyle}><a href="mailto:info@littlelemon.com" style={emailStyle}>info@littelemon.com</a></li>
                </ul>
            </div>
            <div style={footerDivStyle}>
                <ul style={footerUlStyle}>
                    Social Media Links
                    <li style={footerLiStyle}><a href="https://www.facebook.com/littlelemonfood/" style={footerLinkStyle}>Facebook</a></li>
                    <li style={footerLiStyle}><a href="https://www.instagram.com/littlelemonfood/" style={footerLinkStyle}>Instagram</a></li>
                    <li style={footerLiStyle}><a href="https://www.tiktok.com/@littlelemonfood/" style={footerLinkStyle}>TikTok</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;