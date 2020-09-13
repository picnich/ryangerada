import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import styles from "./panels.module.css"


// Transition Animation
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }


const Panels = () => {
    const [ panelComplete, setPanelComplete ] = useState(false);
    const [pageHeight, setPageHeight] = useState(100);
    
    useEffect(() => {
        setPageHeight(window.innerHeight);
        console.log(pageHeight, window.innerHeight)
    }, [])
    
    return (
        <div className={styles.panelContainer}>
            <motion.div
                initial={{ height: 0 }}
                animate={{
                    height: [0, pageHeight, 0],
                    bottom: [null, 0, 0],
                }}
                exit={{
                    height: [0, pageHeight, 0],
                    top: [null, 0, 0],
                }}
                transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
                style={{ background: panelComplete ? "#1c1c1c" : "#505050" }}
                className={styles.panelLeft}
            ></motion.div>
            <motion.div
                style={{
                    background: panelComplete ? "#1c1c1c" : "#505050",
                }}
                initial={{ height: 0 }}
                animate={{
                    height: [0, pageHeight, 0],
                    bottom: [0, 0, pageHeight],
                }}
                exit={{
                    height: [0, pageHeight, 0],
                    bottom: [null, 0, 0],
                }}
                transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
                className={styles.panelRight}
                onAnimationComplete={() => {
                setPanelComplete(!panelComplete)
                }}
            ></motion.div>

        </div>
      )
    
}

export default Panels