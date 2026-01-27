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
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[280px] flex flex-col items-center justify-evenly">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="px-6 sm:px-10">
        <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Introduction
        </p>
        <p className={styles.heroHeadText}>Overview</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 px-6 sm:px-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis alias
        quia, architecto necessitatibus assumenda molestiae, consectetur voluptate
        libero iure corporis velit, animi ipsam aliquam eaque optio beatae
        aspernatur laborum explicabo?
      </motion.p>

      {/* 🔥 RESPONSIVE GRID */}
      <div className="mt-20 px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");


// const ServiceCard = ({index , title , icon}) => {
//     const tiltOptions = {
//     max: 45,
//     scale: 1,
//     speed: 450,
//   };

//   return(
//     <Tilt 
//     options = {tiltOptions}
//     className="w-[250px] flex justify-center items-center">
//       <motion.div variants={fadeIn("right" , "spring" , 0.5 * index , 0.75)}
//         className="w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-card-hover"
//         whileInView={{ opacity: [0, 1] }}  // ✅ Trigger animation
//         transition={{ duration: 0.5 }}
//         whileHover={{ scale: 1.05 }}
//         >
//         <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//           <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
//           <h3 className='text-white text-[20px] font-bold text-center'>
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//     )
// }

// const About = () => {
//   return (
//     <>
//     <motion.div variants={textVariant()}>
//       <p className="pl-10 text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Introduction</p>
//       <p className={styles.heroHeadText}>Overview</p>
//     </motion.div>

//     <motion.p variants={fadeIn("", "", 0.1, 1)}
//     className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//     >
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis alias quia, architecto necessitatibus assumenda molestiae, consectetur voluptate libero iure corporis velit, animi ipsam aliquam eaque optio beatae aspernatur laborum explicabo?
//       Debitis nisi velit repudiandae illo repellendus nihil soluta ipsa maxime, blanditiis voluptatem exercitationem delectus, molestiae consequatur quas, laboriosam mollitia sint ullam voluptas sequi sapiente dolorum a esse animi quae! Odit!
//       Ut ducimus eaque accusamus ipsum dolorum nulla error similique expedita repellendus.

//     </motion.p>

//     <div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
//       {services.map((service, index) => (
//         <ServiceCard key={service.title} index={index} {...service} />
//       ))}
//     </div>
//     </>
//   )
// }

// export default SectionWrapper(About , "about");

