import Link from 'next/link'
import styles from './header.module.css'


const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <Link href="/">
                <a>
                    <div
                        className={styles.drawingLogo}
                        style={{
                            backgroundImage: "url(/illus_work.png)"
                        }}
                    ></div>
                    <img src="/RG_LOGO_ILLUS 1.png" className={styles.logo} alt="logo"/>
                </a>
            </Link>
            <div className={styles.links}>
                <div
                    className={styles.drawingLinks}
                    style={{
                        backgroundImage: "url(/illus_work.png)"
                    }}
                ></div>

                <a href="">
                    <h6>Shop</h6>
                    <img src="/icons/icon-arrow-sos.svg" alt="Arrow Icon"/>
                </a>
                 <a href="">
                    <h6>Sounds of Sunday</h6>
                    <img src="/icons/icon-arrow-sos.svg" alt="Arrow Icon"/>
                </a>  
            </div>
            
            <div className={styles.shopIcon}>
                <img src="/icons/shopping-bag.svg" alt="Arrow Icon"/>
            </div>

        </header>
    )
}

export default Header;