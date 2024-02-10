import { Link } from 'react-router-dom';
import logo from "../img/logo_footer.png";

const Footer = () => {
    return (
        <footer>
            <Link to="/"><img src={logo} alt="logo" className="footer-logo" /></Link>
            <div className="footer-section">
                <ul>
                    Doormat Navigation
                    <li><Link to="/" className="footer-link">Home</Link></li>
                    <li><Link to="/about" className="footer-link">About</Link></li>
                    <li><Link to="/menu" className="footer-link">Menu</Link></li>
                    <li><Link to="/booking" className="footer-link">Reservations</Link></li>
                    <li><Link to="/order" className="footer-link">Order Online</Link></li>
                    <li><Link to="/login" className="footer-link">Login</Link></li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    Contact
                    <li>123 Main St., Chicago, IL 60601</li>
                    <li>312-729-0469</li>
                    <li><a href="mailto:info@littlelemon.com" className="footer-email">info@littelemon.com</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    Social Media Links
                    <li><a href="https://www.facebook.com/littlelemonfood/" className="footer-link">Facebook</a></li>
                    <li><a href="https://www.instagram.com/littlelemonfood/" className="footer-link">Instagram</a></li>
                    <li><a href="https://www.tiktok.com/@littlelemonfood/" className="footer-link">TikTok</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;