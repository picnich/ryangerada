import { motion } from "framer-motion"
import styles from "./panels.module.css"

import { stagger, slideleft, transition } from "../../lib/animations/animations"

const PanelsHomepage = () => {
    return (
        <>
            <motion.div
                className={styles.panelTrioContainer}
                variants={stagger}
                initial="initial"
                animate="animate"
            >
                <motion.div 
                    transition={{...transition, duration: 1}}
                    variants={slideleft} 
                    className={styles.panelTrio}></motion.div>
                <motion.div 
                    transition={{...transition, duration: 1}}
                    variants={slideleft} 
                    className={styles.panelTrio}></motion.div>
                <motion.div 
                    transition={{...transition, duration: 1}}
                    variants={slideleft} 
                    className={styles.panelTrio}></motion.div>
            </motion.div>
        </>
    )
}
export default PanelsHomepage