import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/home";
import Services from "./Components/Services/Services";
import Cars from "./Components/Cars/Cars";
import Brand from "./Components/Brands/Brand";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/services" element={<Services />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/brands" element={<Brand />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
