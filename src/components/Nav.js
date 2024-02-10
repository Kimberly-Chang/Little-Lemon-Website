import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/"><img src={logo} alt="logo" className="nav-logo" /></Link>
                <li><Link to="/" className="nav-link">HOME</Link></li>
                <li><Link to="/about" className="nav-link">ABOUT</Link></li>
                <li><Link to="/menu" className="nav-link">MENU</Link></li>
                <li><Link to="/booking" className="nav-link">RESERVATIONS</Link></li>
                <li><Link to="/order" className="nav-link">ORDER ONLINE</Link></li>
                <li><Link to="/login" className="nav-link">LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;