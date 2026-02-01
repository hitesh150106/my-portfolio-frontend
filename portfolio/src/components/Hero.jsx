 import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      
      <div
        className={`relative z-10 top-[120px] max-w-7xl mx-auto ${styles.paddingX}
        flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Hitesh</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Full-Stack WebApps, <br className="sm:block hidden" />
            Idea to Real World Product.
          </p>

          <a
            href="/resume/Hitesh_Bidawatka_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-[#915EFF] font-bold
                       text-white rounded-xl hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[34px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-3">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;