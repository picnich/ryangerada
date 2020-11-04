import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

const data = {
    projectName: "Coterie",
    market: "Welcome to the Club",
    projectNumber: "05",
    year: 2020,
    clientName: "Coterie",
    role: "Lead Designer",
    description: [
        ""
    ]
}

const Coterie = () => {
    return (
        <>
            <Head>
                <title>Coterie | Ryan Gerada</title>
            </Head>
            <LayoutMain>
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

export default Coterie