import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn } from '../utils/motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="w-full max-w-[260px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        whileHover={{ scale: 1.05 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          
        <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[280px] flex flex-col items-center justify-evenly">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>

      <motion.div variants={textVariant()} className="mb-8 sm:mb-12 w-full">
        <p className={`${styles.sectionSubText} absolute left-40 top-7 `}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} absolute left-40 top-10 `}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" absolute left-40 my-3 sm:mb-16 text-secondary text-[14px] sm:text-[16px] max-w-2xl leading-[26px] sm:leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="w-[74%] relative top-50 left-42 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 auto-rows-max justify-items-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


    </>
  );
};

export default SectionWrapper(About, "about");
