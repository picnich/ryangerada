import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'
const Anony = () => {
    return (
        <>
            <Head>
                <title>Anony | Ryan Gerada</title>
            </Head>
            <LayoutMain>
                <ProjectIntro 
                    project="Anony"
                    market="Lighting & Product Design"
                >
                    <p>Anony is a lighting and product design studio based in Toronto. We worked with them to develop their brand, starting with their logo and identity and moving onward into collaterals from there.</p>
                    <p>Anony, named by Christian and Dave is short for anonymous. As a team we began developing identies centred around the idea of being anonymous. The gap logo was born, and has played a central role in the design language throughout the entirety of the brand. </p>
                </ProjectIntro>
            </LayoutMain>
        </>
    )
}

export default Anony