import { useEffect, useRef, memo } from "react"
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { workProjectFirstAnim, workProjectLastAnim } from "../../lib/animations/animations"

const publishedStyle = { 
    position: "relative",
    zIndex: 1
}

const unPublishedStyle = { 
    position: "relative", 
    zIndex: 1,
    cursor: "no-drop"
}

const Project = ({ projectName, market, scope, year, role, link, mouseMove, handleMouseLeave, index, published }) => {

    // console.log('renderrring');
    function handleMove(e) {
        mouseMove(e, index)
    }
    function handleLeave(e) {
        handleMouseLeave(e, index)
    }
        
    return (
        <div onMouseMove={ handleMove } onMouseLeave={ handleLeave }>
        {
            published && (
                <Link  href={link}>
                    <a className={styles.project} style={publishedStyle}>
                        <ProjectContent 
                            projectName={projectName}
                            market={market}
                            scope={scope}
                            role={role}
                            year={year}
                        />

                    </a>
                </Link>
            )
        }
        {
            !published && (
                <div className={styles.project} style={unPublishedStyle}>             
                    <ProjectContent 
                        projectName={projectName}
                        market={market}
                        scope={scope}
                        role={role}
                        year={year}
                    />
                </div>
            )
        }
        </div>
    )   
}


const ProjectContent = ({
    projectName,
    market,
    scope,
    role,
    year
}) => {
    // Refs for Published Project
    let TitleRef = useRef(null);
    let MarketRef = useRef(null);
    let ScopeRef = useRef(null);
    let YearRef = useRef(null);
    let RoleRef = useRef(null);

    useEffect(() => {
        workProjectFirstAnim(TitleRef, MarketRef);
        workProjectLastAnim(ScopeRef, YearRef, RoleRef);
    }, [])

    
    return (
        <>
            <div className={styles.projectName}>
                <h2 ref={(el) => (TitleRef = el)}>{projectName} /</h2>
                <span ref={(el) => (MarketRef = el)}>{market}</span>
            </div>
            
            <div className={styles.scope} >
                <h6 ref={(el) => (ScopeRef = el)}>{scope}</h6>
                <p ref={(el) => (RoleRef = el)}>{role}</p>
            </div>

            <p ref={(el) => (YearRef = el)} className={styles.year}>{year}</p>
        </>
    )
}


export default memo(Project);