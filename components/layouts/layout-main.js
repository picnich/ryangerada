import Header from '../header/Header'
import Footer from '../footer/footer'
import FooterWork from '../footer/footer-work'
import { motion } from "framer-motion"
// import Panels from '../panels'

const LayoutMain = ({ children, nextProject, workPage = true }) => {
    return (
        <>
            <Header workPage={workPage} />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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