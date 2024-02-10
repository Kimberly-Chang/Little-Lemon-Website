import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
// import {Routes, Route} from 'react-router-dom';

const Main = () => {
    return (
        <>
            <HeroSection />
            <Highlights />
            <Testimonials />
            <About />
            {/* <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/booking" element={< BookingPage />}></Route>
            </Routes> */}
        </>
    );
}

export default Main;