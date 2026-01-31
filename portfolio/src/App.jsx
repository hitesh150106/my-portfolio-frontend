import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import {About , Contact , Experience , Hero , Navbar , Tech , Works , StarsCanvas} from './components';

function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary bg-[#050816]'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
