import { useCallback, useState } from "react"
import Projects from "./projects"
import Project from "./project"
import HomeBGCanvas from "./homeBgCanvas"

const AllWork = () => {
    const [allProjects] = useState(Projects)
    const [isHovering, setHovering] = useState(false);
    const [workHoverNum, setWorkNum] = useState(null);  

    const handleMouseMove = useCallback((e, i) => {
        setWorkNum(i);
        setHovering(true);
    }, [])
    const handleMouseLeave = useCallback((e) => {
        setWorkNum(null);
        setHovering(false)
    }, [])
        // const memoizedMouseMose = useMemo(() => , [isHovering, workHoverNum, handleMouseMove, handleMouseMove])

    return (
        <div>
            {allProjects.map((project, i) => (
              <Project 
                key={project.name} 
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


// const Project = ({ projectName, market, scope, year, role, link, mouseMove, handleMouseLeave, index, published }) => {

//     console.log('renderrring');
        
//     return (
//         <div onMouseMove={ (e) => mouseMove(e, index) } onMouseLeave={ e => handleMouseLeave(e, index) }>
//         {
//             published && (
//                 <Link  href={link}>
//                     <a className={styles.project} style={{ position: "relative",zIndex: 1}}>
//                         <ProjectContent 
//                             projectName={projectName}
//                             market={market}
//                             scope={scope}
//                             role={role}
//                             year={year}
//                         />

//                     </a>
//                 </Link>
//             )
//         }
//         {
//             !published && (
//                 <div className={styles.project} style={{ 
//                     position: "relative", 
//                     zIndex: 1,
//                     cursor: "no-drop"
//                 }}>             
//                     <ProjectContent 
//                         projectName={projectName}
//                         market={market}
//                         scope={scope}
//                         role={role}
//                         year={year}
//                     />
//                 </div>
//             )
//         }
//         </div>
//     )   
// }


// const ProjectContent = ({
//     projectName,
//     market,
//     scope,
//     role,
//     year
// }) => {
//     // Refs for Published Project
//     let TitleRef = useRef(null);
//     let MarketRef = useRef(null);
//     let ScopeRef = useRef(null);
//     let YearRef = useRef(null);
//     let RoleRef = useRef(null);

//     useEffect(() => {
//         workProjectFirstAnim(TitleRef, MarketRef);
//         workProjectLastAnim(ScopeRef, YearRef, RoleRef);
//     }, [])

    
//     return (
//         <>
//             <div className={styles.projectName}>
//                 <h2 ref={(el) => (TitleRef = el)}>{projectName} /</h2>
//                 <span ref={(el) => (MarketRef = el)}>{market}</span>
//             </div>
            
//             <div className={styles.scope} >
//                 <h6 ref={(el) => (ScopeRef = el)}>{scope}</h6>
//                 <p ref={(el) => (RoleRef = el)}>{role}</p>
//             </div>

//             <p ref={(el) => (YearRef = el)} className={styles.year}>{year}</p>
//         </>
//     )
// }