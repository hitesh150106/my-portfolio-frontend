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
    <div className="flex flex-col gap-8">
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} relative text-gray-400 left-6  sm:left-10  md:left-40 `}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} relative left-6 sm:left-10 md:left-38`}>
          Overview.
        </h2>
      </motion.div>

      {/* Paragraph */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="relative left-6 md:left-40 my-3 sm:mb-16 text-gray-400 text-[14px] sm:text-[16px] max-w-2xl leading-[26px] sm:leading-[30px]"
      >
        I’m a backend-focused Full-Stack Developer skilled in JavaScript, React, Node.js, Express, MongoDB, and Three.js. I enjoy building scalable backend systems while maintaining clean and responsive frontends.
        Currently, I’m learning DSA in C++ to sharpen my problem-solving skills and exploring AI and IoT to create impactful, real-world applications.
      </motion.p>

      {/* Services */}
      <div className="relative w-[80%] left-1/2 -translate-x-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
