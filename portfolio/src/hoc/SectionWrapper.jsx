import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative h-[102rem] sm:min-h-screen 2xl:h-screen w-full bg-[#050816] py-24"
      >
        <span
          id={idName}
          className="absolute -top-24"
        />

        <div className="w-full mx-auto px-6">
          <Component />
        </div>
      </motion.section>
    );
  }
  return HOC;
};

export default SectionWrapper
