import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/HomePage/Homepage";
import AboutUs from "./Components/AboutUs/AboutUs";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import WhoWeServe from "./Components/WhoWeServe/WhoWeServe";
import Gallery from "./Components/Gallery/Gallery";
import Careers from "./Components/Careers/Careers";
import ContactUs from "./Components/ContactUs/ContactUs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="whoweserve" element={<WhoWeServe />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
