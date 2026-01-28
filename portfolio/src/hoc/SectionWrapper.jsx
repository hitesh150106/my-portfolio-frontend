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
                className="relative top-25 h-[95rem] sm:h-screen w-full bg-[#050816]"
            >
                <span className="hash-span" id={idName}>&nbsp;</span>

                <div className="w-full h-screen">
                    <Component />
                </div>
            </motion.section>
        )
    }
    return HOC;
}

export default SectionWrapper