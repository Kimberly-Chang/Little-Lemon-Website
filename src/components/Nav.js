import logo from "../img/logo.png";

const Nav = () => {
    const navStyle = {
        padding: "1% 20%",
    };
    const logoImgStyle = {
        width: "200px",
    }
    const navUlStyle = {
        display: "flex",
        listStyle: "none",
        textAlign: "center",
        alignItems: "stretch",
        justifyContent: "space-between",
        padding: "0",
    }
    const navAStyle = {
        display: "grid",
        padding: "1vmin",
        color: "#000000",
        fontSize: "18px",
        textDecoration: "none",
        fontWeight: "bold",
    }

    return (
        <nav style={navStyle}>
            <ul style={navUlStyle}>
                <img src={logo} alt="logo" style={logoImgStyle} />
                <li><a href="/" class="active" style={navAStyle}>HOME</a></li>
                <li><a href="/about" style={navAStyle}>ABOUT</a></li>
                <li><a href="/menu" style={navAStyle}>MENU</a></li>
                <li><a href="/reserve" style={navAStyle}>RESERVATIONS</a></li>
                <li><a href="/order" style={navAStyle}>ORDER ONLINE</a></li>
                <li><a href="/login" style={navAStyle}>LOGIN</a></li>
            </ul>
        </nav>
    );
}

export default Nav;