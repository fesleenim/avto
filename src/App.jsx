import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './pages/home'
import Services from './Components/Services/Services'
import Cars from './Components/Cars/Cars'
import Brand from './Components/Brands/Brand'
import About from './Components/Brands/About'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/brands" element={<Brand />} />
        <Route path="/about" element={<About />}/>     
        <Route path="/contact" element={<Contact/>}/>    
        <Route path="/blog" element={<Blog/>}/>  
         </Routes>
    </BrowserRouter>
  )
}

export default App
