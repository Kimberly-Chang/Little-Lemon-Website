import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element ={<Main />} />
          <Route path="/about" element = {<About />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
