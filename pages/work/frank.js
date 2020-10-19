import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

const data = {
    projectName: "Frank",
    market: "We Make Windows & Doors",
    projectNumber: "04",
    year: 2020,
    clientName: "Frank",
    role: "Lead Designer",
    description: [
        ""
    ]
}

const Frank = () => {
    return (
        <>
            <Head>
                <title>Frank | Ryan Gerada</title>
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

export default Frank