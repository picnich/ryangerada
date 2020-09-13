import styles from './Footer.module.css'

const Footer = () => {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
    return (
        <footer className={styles.footer}>
            <div
                className={styles.drawingName}
                style={{
                    backgroundImage: "url(/illus_work.png)"
                }}
            ></div>
            <h6 className={styles.byRyan}>DESIGN, RYAN GERADA</h6>
            <div className={styles.rights}>
                <div
                    className={styles.drawingCopyright}
                    style={{
                        backgroundImage: "url(/illus_work.png)"
                    }}
                ></div>
                <img src="/icons/icon-copyright.svg" alt="Arrow Icon"/>
                <p>2020 All Rights Reserved.</p>
            </div>
            <a className={styles.toTop} onClick={scrollTop}>
                <div
                    className={styles.drawingToTop}
                    style={{
                        backgroundImage: "url(/illus_work.png)"
                    }}
                ></div>
                <img src="/icons/icon-arrow-top.svg" alt="Arrow Icon"/>
                <h6>To Top</h6>
            </a>
        </footer>

    )
}

export default Footer;