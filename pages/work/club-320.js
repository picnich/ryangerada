import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

const ClubSpotify = () => {
    return (
        <>
            <Head>
                <title>Club 320 | Ryan Gerada</title>
            </Head>
            <LayoutMain>
                <ProjectIntro 
                    project="Club 320"
                    market="Reimagining Club Culture"
                >
                    <p>Spotify has been a platform that has consistently under utilized its social features. I believe there is a lot of untapped potential here. Spotify was the track list to my isolated existence - I wanted to depict this by creating a stream of advertisements of what I envisioned a Spotify hosted virtual club would look like - with DJ sets from Discover Weekly, and Release Radar, and Your Daily Mix.
(Needs revision)</p>
                </ProjectIntro>
            </LayoutMain>
        </>
    )
}

export default ClubSpotify