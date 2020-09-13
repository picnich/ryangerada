import Header from '../header/Header'
import Footer from '../footer/footer'
import { motion } from "framer-motion"
import Panels from '../panels'

const LayoutMain = ({ children }) => {
    return (
        <>
            <Header />
                <motion.div exit={{ opacity: 0 }}>
                    {children}
                </motion.div>
            <Footer />
            {/* <Panels /> */}
        </>
    )
}

export default LayoutMain