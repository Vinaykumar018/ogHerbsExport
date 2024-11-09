import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/boxicons.min.css";
import "./assets/fonts/flaticon.css";
import "./assets/css/odometer.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/style.css";
import "./assets/css/dark.css";
import "./assets/css/responsive.css";

import Navbar from "./Component/Navbar/Navbar";
import Navmenu from "./Component/NavMenu/Navmenu";
import Home from "./Component/HomeContainer";
import About from "./Component/About/About"; // Import your About component
import Contact from "./Component/Contact/Contact"; // Import your Contact component
import Footer from "./Component/Footer/Footer";
import Quality from "./Component/Quality/Quality";
import GrainsSeeds from "./Component/GrainSeeds/GrainsSeeds";
import DryFruit from "./Component/DryFruits/DryFruit";
import Rice from "./Component/GrainSeeds/Categories/Rice/Rice";
import { useSelector, useDispatch } from "react-redux";
import { selectTitle } from "./Model/Reducer/TitleReducer";
import Pulses from "./Component/Pulses/Pulses";

// import SellaBasmatiRice from "./Component/GrainSeeds/Categories/Rice/SubCategories/SellaBasmatiRice";
// import GoldenSellaBasmatiRice from "./Component/GrainSeeds/Categories/Rice/SubCategories/GoldenSellaBasmatiRice";
// import BrownRice from "./Component/GrainSeeds/Categories/Rice/SubCategories/BrownRice";
// import MattaRice from "./Component/GrainSeeds/Categories/Rice/SubCategories/MattaRice";
// import WadaKolam from "./Component/GrainSeeds/Categories/Rice/SubCategories/WadaKolam";
// import SonaMasooriRice from "./Component/GrainSeeds/Categories/Rice/SubCategories/SonaMasooriRice";
// import PonniRice from "./Component/GrainSeeds/Categories/Rice/SubCategories/PonniRice";
import Wheat from "./Component/GrainSeeds/Categories/Wheat/Wheat";
import Maize from "./Component/GrainSeeds/Categories/Maize/Maize";
import Barley from "./Component/GrainSeeds/Categories/Barley/Barley";
import SoyaBeans from "./Component/Pulses/Categories/SoyaBeans/SoyaBeans";
import ChickPeasBlack from "./Component/Pulses/Categories/Chick peas Black/ChickPeasBlack";
import ChickPeasWhite from "./Component/Pulses/Categories/Chick Peas White/ChickPeasWhite";
import GreenGram from "./Component/Pulses/Categories/Green Gram/GreenGram";
import BengalGram from "./Component/Pulses/Categories/Bengal Gram/BengalGram";
import Almonds from "./Component/DryFruits/Categories/Almonds/Almonds";
import CashNewNuts from "./Component/DryFruits/Categories/CashNewNuts/CashNewNuts";
import Dates from "./Component/DryFruits/Categories/Dates/Dates";
import Peanuts from "./Component/DryFruits/Categories/Peanuts/Peanuts";
function App() {
  const contactTitle = useSelector((state) => selectTitle(state, "contact"));

  return (
    <Router>
      <>
        <Navbar />

        <Navmenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/grains-seeds" element={<GrainsSeeds />} />
          <Route path="/dry-fruits" element={<DryFruit />} />
          <Route path="/grains-seeds/rice" element={<Rice />} />
        

          <Route path="/grains-seeds/wheat" element={<Wheat />} />

          <Route path="grains-seeds/maize-corn" element={<Maize />} />
          <Route path="/grains-seeds/barley" element={<Barley />} />
          <Route path="/pulses" element={<Pulses />} />
          <Route path="/pulses/soya-beans" element={<SoyaBeans />} />
          <Route path="/pulses/chickpeas-black" element={<ChickPeasBlack />} />
          <Route path="/pulses/white-chickpeas" element={<ChickPeasWhite />} />
          <Route path="/pulses/green-gram" element={<GreenGram></GreenGram>} />
          <Route path="/pulses/bengal-gram" element={<BengalGram/>} />



          <Route path="/dry-fruits/peanuts" element={<Peanuts></Peanuts>} />

          <Route path="/dry-fruits/almonds" element={<Almonds/>} />

          <Route path="/dry-fruits/cashew-nuts" element={<CashNewNuts/>} />

          <Route path="/dry-fruits/dates" element={<Dates/>} />

        


        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
