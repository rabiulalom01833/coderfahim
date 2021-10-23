 
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio'; 
// import Features from './components/Features/Features';
// import Works from './components/Works/Works';
// import Blog from './components/Blog/Blog';

function App() {
  return (
    <>
      <Header />
      <Banner/>
      <About />
      <Services/>
      <Portfolio/>
      {/* <Features/>
      <Works/>
      <Blog/> */}

    </>
  );
}

export default App;
