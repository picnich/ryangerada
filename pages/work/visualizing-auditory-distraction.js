import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

const data = {
    projectName: "Visualizing Auditory Distraction",
    market: "A Case Study",
    projectNumber: "03",
    year: 2017,
    clientName: "OCAD Graphic Design",
    role: "Lead Designer",
    description: [
        "Anony is a lighting and product design studio based in Toronto. We worked with them to develop their brand, starting with their logo and identity and moving onward into collaterals from there.",
        "Anony, named by Christian and Dave is short for anonymous. As a team we began developing identies centred around the idea of being anonymous. The gap logo was born, and has played a central role in the design language throughout the entirety of the brand."
    ]
}


const VisualizingAuditoryDistraction = () => {
    return (
        <>
            <Head>
                <title>Anony | Ryan Gerada</title>
            </Head>
            <LayoutMain nextProject="anony">
            <ProjectIntro 
                    project={data.projectName}
                    market={data.market}
                    projectNumber={data.projectNumber}
                    year={data.year}
                    clientName={data.clientName}
                    role={data.role}
                    description={data.description}
                
                />
            </LayoutMain>

        </>
    )
}

export default VisualizingAuditoryDistraction