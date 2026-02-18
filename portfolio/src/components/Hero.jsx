import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { herobg } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] mx-auto overflow-hidden">
      <img src={herobg} alt="hero-background" className="absolute inset-0 w-full h-full object-cover z-0"/>
      
      <div className={`relative z-10 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915EFF]">Hitesh</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop Full-Stack WebApps, <br className="sm:block hidden"/>Idea to Real World Product.</p>
        </div>

      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[34px] h-[74px] rounded-3xl border-4 border-gray-400 flex flex-col justify-start items-center p-2">
            <motion.div
              animate={{ y: [0, 26, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-gray-400 mt-1"/>
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;