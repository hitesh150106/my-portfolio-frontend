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
          className="relative w-full bg-[#050816] py-24 mb-32"
        >
        <span id={idName} className="absolute -top-24" />

        <div className="w-full max-w-8xl mx-auto px-6">
          <Component />
        </div>
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
