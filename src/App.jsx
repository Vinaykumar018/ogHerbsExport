import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/meanmenu.css';
import './assets/css/boxicons.min.css';
import './assets/fonts/flaticon.css';
import './assets/css/odometer.min.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/style.css';
import './assets/css/dark.css';
import './assets/css/responsive.css';

import Navbar from './Component/Navbar/Navbar';
import Navmenu from './Component/NavMenu/Navmenu';
import Home from './Component/HomeContainer';
import About from './Component/About/About'; // Import your About component
import Contact from './Component/Contact/Contact'; // Import your Contact component
import Footer from './Component/Footer/Footer';
import Quality from './Component/Quality/Quality';
import GrainsSeeds from './Component/GrainSeeds/GrainsSeeds';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Navbar />
        <Navmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality" element={<Quality />}/>
          <Route path="/grains-seeds" element={<GrainsSeeds/>}/>
        </Routes>
      <Footer/>        
      </>
    </Router>
  );
}

export default App;
