import Link from 'next/link'
import styles from './header.module.css'
import { motion } from "framer-motion"
import Credentials from '../credentials'
import Headroom from "react-headroom"

const Header = ({ workPage }) => {
    return (
        <>
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
             
            <Headroom disableInlineStyles wrapperStyle={{position: 'absolute'}}>
                <div className={styles.headerContainer}>
                    <Link href="/">
                        <a style={{zIndex: 2}}>
                            <img src="/RG_LOGO_ILLUS 1.png" className={styles.logo} alt="logo"/>
                        </a>
                    </Link>
                    {/* <Credentials /> */}
                </div>
            </Headroom>



        </>
    )
}

export default Header;