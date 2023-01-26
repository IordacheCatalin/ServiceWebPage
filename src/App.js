import Navbar from "./Components/Navbar/navbar";
import React from "react";
import { Routes, Route} from "react-router-dom";


import Home from "./Pages/Home/home";
import Servicii from "./Pages/Servicii/servicii"
import DespreNoi from "./Pages/Despre noi/DespreNoi"
import Contact from "./Pages/Contact/contact"
import ServiciiCard from "./Pages/servicii card/serviciiCard"
import Locatii from "./Pages/Locatii/locatii"
import Vremea from "./Components/Vremea/vremea"

function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/ServiceWebPage" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Servicii" element={<Servicii />} />
        <Route path="/DespreNoi" element={<DespreNoi />} />
        <Route path="/serviciiCard" element={<ServiciiCard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locatii" element={<Locatii />} />
        <Route path="/vremea" element={<Vremea />} />
      </Routes>
      
    </>
    
  );
}

export default App;
