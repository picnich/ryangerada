import { useEffect, useState } from "react"
import Link from 'next/link'
import styles from './header.module.css'
import { motion } from "framer-motion"
import Credentials from '../credentials'
import useScrollPosition from '../../lib/hooks/useScrollPosition'
import useDocumentScrollThrottled from "../../lib/hooks/useDocumentScrollThrottled"

const ScrollHeader = ({ isHidden, showShadow }) => (
    <div className={`${styles.scrollHeader} ${showShadow ? styles.shadow : ''} ${isHidden ? styles.hidden : ''}`}>Hey</div>
)

const Header = ({ workPage }) => {
    const scrollPosition = useScrollPosition();

    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
    
    const MIN_SCROLL = 800;
    const MINIMUM_SCROLL = 0;
    const TIMEOUT_DELAY = 400;
  
    useDocumentScrollThrottled(callbackData => {
      const { previousScrollTop, currentScrollTop } = callbackData;
      const isScrolledDown = previousScrollTop < currentScrollTop;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
      setShouldShowShadow(currentScrollTop > 2);
  
      setTimeout(() => {
        setShouldHideHeader(isScrolledDown && isMinimumScrolled);
      }, TIMEOUT_DELAY);
    });
  
    // const shadowStyle = shouldShowShadow ? 'shadow' : '';
    // const hiddenStyle = shouldHideHeader ? 'hidden' : '';


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
            
                {/* scrollPosition > MIN_SCROLL ? (
                    <ScrollHeader 
                        showShadow={shouldShowShadow} 
                        isHidden={shouldHideHeader}
                    />
                ) : '' */}
            
            
        </>
    )
}

export default Header;