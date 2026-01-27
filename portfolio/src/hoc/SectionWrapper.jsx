import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component , idName) => {
    function HOC() {
        return(
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView='show'
        viewport={{once:true , amount:0.25}}
        className="max-w-8xl sm:px-16 px-6 sm:py-16 py-10 mx-auto z-0 relative bg-[#050816]"
        >   
        <span className="hash-span" id={idName}>&nbsp;</span>
            <Component/>
        </motion.section>

        )
    }
    return HOC;
}

export default SectionWrapper

