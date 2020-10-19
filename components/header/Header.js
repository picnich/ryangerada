import Link from 'next/link'
import styles from './header.module.css'
import { motion } from "framer-motion"
import Credentials from '../credentials'



const Header = ({ workPage }) => {
    return (
        <motion.header 
            className={styles.headerContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <Link href="/">
                <a style={{zIndex: 2}}>
                    <div
                        className={styles.drawingLogo}
                        style={{
                            backgroundImage: "url(/illus_work.png)"
                        }}
                    ></div>
                    <img src="/RG_LOGO_ILLUS 1.png" className={styles.logo} alt="logo"/>
                </a>
            </Link>
            { 
                workPage && <Credentials />
            }

        </motion.header>
    )
}

export default Header;