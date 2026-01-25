import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas'
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <img src={herobg} alt="hero-background" className="absolute inset-0 w-full h-full object-cover z-[-1]"/>

      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 left-[38%] -translate-x-1/2`}>
        
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Hitesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full-Stack WebApps, <br className="sm:block hidden" /> 
            Idea to Real World Porduct.
          </p>
        </div>
        
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;