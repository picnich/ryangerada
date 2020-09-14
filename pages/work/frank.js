import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

const Frank = () => {
    return (
        <>
            <Head>
                <title>Frank | Ryan Gerada</title>
            </Head>
            <LayoutMain>
                <ProjectIntro
                    project="Frank"
                    market="We Make Windows & Doors"
                ></ProjectIntro>
            </LayoutMain>
        </>
    )
}

export default Frank