import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

const RealSports = () => {
    return (
        <>
            <Head>
                <title>Real Sports | Ryan Gerada</title>
            </Head>
            <LayoutMain>
                <ProjectIntro
                    project="Real Sports"
                    market="Welcome to the Club"
                >

                </ProjectIntro>
            </LayoutMain>
        </>
    )
}

export default RealSports