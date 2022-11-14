import './App.css';
import { useEffect , useState } from 'react';
import { Route , Routes } from 'react-router-dom'
import Navbar from './component/DesktopVersion/Navbar';
import Home from './component/DesktopVersion/Home';
import About from './component/DesktopVersion/About';
import Learn from './component/DesktopVersion/Learn/Learn';
import ContactUs from './component/DesktopVersion/ContactUs';
import Footer from './component/DesktopVersion/Footer';

// Mobile Version
import './component/MobileVersion/AppMobile.css';
import NavbarMobile from './component/MobileVersion/NavbarMobile';
import HomeMobile from './component/MobileVersion/HomeMobile';
import AboutMobile from './component/MobileVersion/AboutMobile';
import FooterMobile from './component/MobileVersion/FooterMobile';


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 929;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);
  return width > breakpoint ? (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/learn' element={<Learn />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
    <Footer />
   </>
  ) 
  : (
    <>
  <NavbarMobile />
  <Routes>
    <Route path='/' element={<HomeMobile />} />
    <Route path='/about' element={<AboutMobile />} />
    <Route path='/contact' element={<ContactUs />} />
  </Routes>
  <FooterMobile />
  </>
  );
}

export default App;
