import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas'
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <img src={herobg} alt="hero-background" className="absolute inset-0 w-full h-full object-cover z-[-1]"/>

      <div className={`absolute inset-0 top-[90px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 left-[38%] -translate-x-1/2`}>
        
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

      <div className="absolute inset-0 z-0 pointer-events-none">
        <ComputersCanvas />
      </div>
      
      <div className="absolute xs:bottom-10 bottom-30 sm:bottom-1 w-full flex justify-center items-center z-20">   
        <a href="#about">
          <div className="w-[34px] h-[64px] rounded-3xl border-4 border-bg-gray-300 flex justify-center items-start p-3">        
            <motion.div 
            animate={{ y : [0, 40, 0]}}
            transition = {{
              duration : 1.5,
              repeat : Infinity,
              repeatType : 'loop'
            }}
            className="w-3 h-3 rounded-full bg-gray-300 mb-1"
            />
          </div>
        </a> 
      </div>
    </section>
  );
};

export default Hero;