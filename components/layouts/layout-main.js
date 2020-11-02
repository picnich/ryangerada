import { useState, useEffect } from "react"

import Header from '../header/Header'
import Footer from '../footer/footer'
import FooterWork from '../footer/footer-work'
import { motion } from "framer-motion"
// import Panels from '../panels'

// position: "fixed",
//     transitionEnd: {
//       display: "none",
//     },

const LayoutMain = ({ children, nextProject, workPage = true }) => {
    const [windowHeight, setHeight ] = useState(500);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, [])
    return (
        <>
            <Header workPage={workPage} />
            <motion.div 
                initial={{ 
                     opacity: 0,
                }}
                animate={{ 
                    opacity: 1,
                }}
                exit={{ 
                     opacity: 0,
                }}
                transition={{ ease: "easeInOut", duration: 0.65 }}    

            >
                {children}
            </motion.div>
            {
                nextProject ? <FooterWork nextProject={nextProject} /> : <Footer />
            }
        </>
    )
}

export default LayoutMain