import styles from './Footer.module.css'
import Link from 'next/link'

const FooterWork = ({ nextProject = "/" }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.byRyan}>
                <div className={styles.drawingName}>
                    <img src={'/illustrations/illus_work-name.png'}></img>
                </div>
                <h6>DESIGN, RYAN GERADA</h6>
            </div>

            <div className={styles.rights}>
                <Link  href={nextProject}>
                    <a className={styles.toTop}>
                        <h6>Next Work</h6>
                    </a>
                </Link>
            </div>
            <Link  href={`/work/${nextProject}`}>
                <a className={styles.nextProj}>
                    <img src="/icons/icon-arrow-top.svg" alt="Arrow Icon"/>
                </a>
            </Link>
        </footer>

    )
}

export default FooterWork;