const ProjectIntro = ({project, market, children}) => {
    return (
        <>
            <h2>{project} / <span>{market}</span> </h2>
            <div>{children}</div>
        </>
    )
}

export default ProjectIntro;