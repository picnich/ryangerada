import styles from "./projectIntro.module.css"
import Link from 'next/link'


const ProjectIntro = ({project, market, children}) => {
    return (
        <section className={styles.container}>
            <div className={styles.bio}>
                <Link  href={"/"}>
                    <a>
                        <img src="/icons/icon-arrow-top.svg" alt="Arrow Icon" className={styles.backArrow}/>    
                    </a>
                </Link>
                <div className={styles.projectName}>
                    <h2>{project} /</h2>
                    <span>{market}</span>
                </div>
                <div className={styles.projectDescription}>{children}</div>
            </div>
            <div className={styles.credentials}>
                <div className={styles.credentialContainer}>
                    <h6>Team</h6>
                </div>
                <div className={styles.credentialContainer}>
                    <h6>Creative Director</h6>
                    <p>Marlo Onilla</p>
                </div>
                <div className={styles.credentialContainer}>
                    <h6>Design lead</h6>
                    <p>Ryan Gerada</p>
                </div>
                <div className={styles.credentialContainer}>
                    <h6>Photography</h6>
                    <p>Scott Norsworthy</p>
                    <p>Ryan Gerada</p>
                </div>
            </div>

            <div className={styles.num}>01</div>
        </section>
    )
}

export default ProjectIntro;