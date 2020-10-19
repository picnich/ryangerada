import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

const data = {
    projectName: "LPD",
    market: "Little Project on Dundas BIA",
    projectNumber: "06",
    year: 2020,
    clientName: "LPD",
    role: "Lead Designer",
    description: [
        ""
    ]
}


const Dundas = () => {
    return (
        <>
            <Head>
                <title>Little Project on Dundas BIA | Ryan Gerada</title>
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
export default Dundas