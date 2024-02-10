import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Menu from "./components/Menu";
import Booking from "./components/Booking";
import Order from "./components/Order";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element ={<Main />} />
          <Route path="/about" element = {<About />} />
          <Route path="/menu" element = {<Menu />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/order" element = {<Order />} />
          <Route path="/login" element = {<Login />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
