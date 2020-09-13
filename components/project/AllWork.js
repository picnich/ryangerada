import { useState } from "react"
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Projects from "./projects"
import { motion } from "framer-motion"

// import useMousePosition from '../../lib/hooks/useMousePosition'
import { useInView } from "react-hook-inview"

import { transition } from "../../lib/animations/animations"

const AllWork = () => {
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
                link={`/work/${project.link}`}
              />
            ))}
        </div>
    )
}

export default AllWork;


const Project = ({ projectName, market, scope, year, role, link}) => {

    // const { x, y } = useMousePosition();
    const [ hoverState, setHoverstate ] = useState(false);
    
    // const offset = 30;
    // const [workRef, inView] = useInView(offset);
    const [ workRef, isVisible ] = useInView({
        threshold: .5
    })


    // const [ listPos, setListPos ] = useState({
    //     top: 0,
    //     left: 0
    // })

    // useEffect(() => {
    //     setListPos({
    //         top: ref.current.getBoundingClientRect().top,
    //         left: ref.current.getBoundingClientRect().left,
    //     })
    // }, [hoverState])
        
    return (
        <Link  href={link}>
            <a className={styles.project} style={{ position: "relative",zIndex: 1}}>
                
                <motion.div 
                    className={styles.projectName} 
                    onHoverStart={() => setHoverstate(true)}
                    onHoverEnd={() => setHoverstate(false)}
                >
                    <h2>{projectName} /</h2>
                    <span>{market}</span>
                </motion.div>
                
                <div className={styles.scope} >
                    <h6>{scope}</h6>
                    <p>{role}</p>
                </div>

                <p className={styles.year}>{year}</p>

                <motion.div 
                    initial={{opacity: 0}}
                    animate={{
                        opacity: hoverState ? 1 : 0
                    }}
                    // transition={{ease: "easeIn"}}
                    className={styles.floatingImage}
                >
                    <img src="/Work/anony/hoverstate-anony.png" alt="logo"/>
                </motion.div>

                <motion.div
                    ref={workRef}
                    // variants={coverGrow}
                    initial={{ width : "100%" }}
                    animate={{ width : isVisible ? "0" : "100%"}}
                    className={styles.mask}
                    transition={{ ...transition, duration: 1 }}
                    ></motion.div>
            </a>
        </Link>
    )   
}


