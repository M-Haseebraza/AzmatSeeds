import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// import components
import Header from './components/Header/Header';
import Slider from './components/slider/Slider';
import WhatWeDo  from './components/whatweDo/WhatWeDo';
import Products from './components/products/Product';
import About from './components/about/About';
import Footer from './components/footer/Footer'
import ContactUs from './components/contact/contactUs';
function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/> 
        <About/>
        <WhatWeDo/>
        <Products/>
        <ContactUs/>
        <Footer/>
        
    </div>
  );
}

export default App;
