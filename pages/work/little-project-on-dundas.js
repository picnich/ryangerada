import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

const Dundas = () => {
    return (
        <>
            <Head>
                <title>Little Project on Dundas BIA | Ryan Gerada</title>
            </Head>
            <LayoutMain>
                <ProjectIntro
                    project="LPD"
                    market="Little Project on Dundas BIA"
                >

                </ProjectIntro>
            </LayoutMain>
        </>
    )
}
export default Dundas