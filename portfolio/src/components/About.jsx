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
      className="w-full bg-tertiary max-w-[260px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        whileHover={{ scale: 1.05 }}
        className="border-green-pink-gradient w-full bg-[#151030] border-2 p-[1px] rounded-[20px] shadow-card">
          
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
      <motion.div
        variants={textVariant()}
        className=""
      >
        <p className={`${styles.sectionSubText} text-gray-400 absolute left-10 top-14 sm:left-10 sm:top-4 md:left-40 md:top-10`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} absolute left-10 top-18 sm:left-10 sm:top-8 md:left-40 md:top-16 `}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" absolute left-10 top-29 md:top-40 md:left-40 my-3 sm:mb-16 text-secondary text-gray-400 text-[14px] sm:text-[16px] max-w-2xl leading-[26px] sm:leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="relative w-[80%] top-84 left-1/2 -translate-x-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(About, "about");
