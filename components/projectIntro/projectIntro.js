import { useEffect, useRef } from "react"
import styles from "./projectIntro.module.css"
import Link from 'next/link'
import { stagger, slideUp, transition, homeTextIntro } from "../../lib/animations/animations";
import { motion } from "framer-motion"


// import { homeTextIntro } from "../../lib/animations/animations"
// import RevealText from "../animated/revealText"

const ProjectIntro = ({
    project, 
    market, 
    projectNumber, 
    year,
    clientName,
    role,
    description,
    children
}) => {
    let descRef = useRef(null);
    let projRef = useRef(null);
    let marketRef = useRef(null);
    
    // let sidebarContainerRef = useRef(null);

    useEffect(() => {
        homeTextIntro(descRef);
        homeTextIntro(projRef);
        homeTextIntro(marketRef);
        // homeTextIntro(sidebarContainerRef, true);
    }, []) 

    return (
        <section className={styles.container}>
            <div className={styles.bio}>
                <Link  href="/#homepagework">
                    <a>
                        <img src="/icons/icon-arrow-top.svg" alt="Arrow Icon" className={styles.backArrow}/>    
                    </a>
                </Link>
                <div className={styles.projectName}>
                    <h2 ref={el => projRef = el}>{project} /</h2>
                    <span ref={el => marketRef = el}>{market}</span>
                </div>
                <div className={styles.projectDescription} ref={el => descRef = el}>{description.map((para,i) => <p key={i}>{para}</p>)}</div>
            </div>
            {/* <div className={styles.credentials}> */}
            <motion.div 
                  className={styles.credentials}
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                {/* <motion.h6 variants={slideUp} transition={{...transition, duration: 1}}></motion.h6> */}
                <div 
                    className={styles.drawingTeam}
                    style={{
                        backgroundImage: "url(/illus_bio.png)"
                    }}
                ></div>
                <motion.div
                    variants={slideUp} transition={{...transition, duration: 1}} className={styles.num}>{projectNumber}</motion.div>
                <motion.div
                    variants={slideUp} transition={{...transition, duration: 1}} className={styles.credentialContainer}>
                    <h6>Year</h6>
                    <p>{year}</p>
                </motion.div>
                <motion.div
                    variants={slideUp} transition={{...transition, duration: 1}} className={styles.credentialContainer}>
                    <h6>Client Name</h6>
                    <p>{clientName}</p>
                </motion.div>
                <motion.div
                    variants={slideUp} transition={{...transition, duration: 1}} className={styles.credentialContainer}>
                    <h6>Role</h6>
                    <p>{role}</p>
                </motion.div>
            </motion.div>
            {/* </div> */}

        </section>
    )
}

export default ProjectIntro;