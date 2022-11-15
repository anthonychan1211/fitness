// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/DesktopVersion/Navbar";
import Home from "./component/DesktopVersion/Home";
import About from "./component/DesktopVersion/About";
import Learn from "./component/DesktopVersion/Learn/Learn";
import ContactUs from "./component/DesktopVersion/ContactUs";
import Footer from "./component/DesktopVersion/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
