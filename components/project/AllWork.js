import { useState, useEffect } from "react"
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Projects from "./projects"
import { motion } from "framer-motion"

import { useInView } from "react-hook-inview"

import { transition } from "../../lib/animations/animations"
import HomeBGCanvas from "./homeBgCanvas"

const AllWork = () => {
    const [isHovering, setHovering] = useState(false);
    const [workHoverNum, setWorkNum] = useState(null)

    
    const handleMouseMove = (e, i) => {
        setWorkNum(i);
        setHovering(true);
    }
    const handleMouseLeave = e => {
        setWorkNum(null);
        setHovering(false)
    }

    return (
        <div>
            {Projects.map((project, i) => (
              <Project 
                key={i} 
                projectName={project.name}
                market={project.market}
                scope={project.scope}
                role={project.role}
                year={project.year}
                link={ project.published ? `/work/${project.link}` : `#`}
                published={project.published}
                index={i}
                mouseMove={handleMouseMove}
                handleMouseLeave={handleMouseLeave}
              />
            ))}
            <HomeBGCanvas 
                num={workHoverNum}
                isHovering={isHovering}
            /> 
        </div>
    )
}

export default AllWork;


const Project = ({ projectName, market, scope, year, role, link, mouseMove, handleMouseLeave, index, published }) => {

    const [ workRef, isVisible ] = useInView({
        threshold: .5
    })
        
    return (
        <div onMouseMove={ (e) => mouseMove(e, index) } onMouseLeave={ e => handleMouseLeave(e, index) }>
        {
            published && (
                <Link  href={link}>
                    <a className={styles.project} style={{ position: "relative",zIndex: 1}}>
                        
                        <motion.div className={styles.projectName}>
                            <h2>{projectName} /</h2>
                            <span>{market}</span>
                        </motion.div>
                        
                        <div className={styles.scope} >
                            <h6>{scope}</h6>
                            <p>{role}</p>
                        </div>

                        <p className={styles.year}>{year}</p>

                        <motion.div
                            ref={workRef}
                            initial={{ width : "100%" }}
                            animate={{ width : isVisible ? "0" : "100%"}}
                            className={styles.mask}
                            transition={{ ...transition, duration: 1 }}
                            ></motion.div>
                    </a>
                </Link>
            )
        }
        {
            !published && (
                <div className={styles.project} style={{ 
                    position: "relative", 
                    zIndex: 1,
                    cursor: "no-drop"
                }}>
                    
                    <motion.div className={styles.projectName}>
                        <h2>{projectName} /</h2>
                        <span>{market}</span>
                    </motion.div>
                    
                    <div className={styles.scope} >
                        <h6>{scope}</h6>
                        <p>{role}</p>
                    </div>

                    <p className={styles.year}>{year}</p>

                    <motion.div
                        ref={workRef}
                        initial={{ width : "100%" }}
                        animate={{ width : isVisible ? "0" : "100%"}}
                        className={styles.mask}
                        transition={{ ...transition, duration: 1 }}
                        ></motion.div>
                </div>
            )
        }
        </div>
    )   
}


