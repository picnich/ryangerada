import styles from "./Credentials.module.css"
import { motion } from "framer-motion"
import { stagger, slideUp, transition } from "../../lib/animations/animations.js"

function Credentials() {
    return (
        <div className={styles.credentials}>
        <motion.div 
          className={styles.experience}
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h6 variants={slideUp} transition={{...transition, duration: 1}}>Email</motion.h6>
          <a href="mailto:info@ryangerada.com"><motion.p variants={slideUp} transition={{...transition, duration: 1}}>info@ryangerada.com</motion.p></a>
        </motion.div>
        <motion.div 
          className={styles.contact}
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h6 variants={slideUp} transition={{...transition, duration: 1}}>Social</motion.h6>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.a 
              href="https://www.instagram.com/ryangerada/"
              variants={slideUp} 
              transition={{...transition, duration: 1}}
            >
              <span>Instagram, </span></motion.a>
            <motion.a 
              href="https://twitter.com/ryangerada"
              variants={slideUp} 
              transition={{...transition, duration: 1}}
            >
              <span>Twitter</span></motion.a>
          </motion.div>
        </motion.div>
      </div>


    )
}

export default Credentials;