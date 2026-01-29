import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from 'react-router-dom';
import {About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , StarsCanvas} from './components';

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/api/test")
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

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
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
