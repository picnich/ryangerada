import { useRef, useEffect } from "react" 
import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'
import VideoContainer from '../../components/video/videoContainer'

import styles from "../../styles/work.module.css"
import { scrollerTextAnim } from "../../lib/animations/animations"

const data = {
    projectName: "Club Spotify",
    market: "Reimagining Club Culture",
    projectNumber: "03",
    year: 2020,
    clientName: "Personal Project",
    role: "Lead Designer",
    description: [
        "Club Spotify leverages Spotify’s emerging social integration. Focused on serving content to club goers impacted by the COVID-19 pandemic. Utilizing Spotify's already robust platform to serve the largest possible audience.",
        "This virtual club featured DJ sets that took inspiration from Spotify’s previously established intellectual property. DJ sets featuring discover weekly, release radar, and your daily mix.",
        "As this was a personal project inspired in the midst of quarantine, I set out to develop the brand identity, digital implementation, and print collateral."
    ],
    media: {
        video1: {
            mp4: "/work/club320/cs_gif_1.mp4",
            webm: "/work/club320/cs_gif_1.webm"
        },
        video2: {
            mp4: "/work/club320/cs_gif_2.mp4",
            webm: "/work/club320/cs_gif_2.webm"
        },
        image1: "/work/club320/fullcomp_final 1.png",
        video3: {
            mp4: "/work/club320/cs_gif_3-2.mp4",
            webm: "/work/club320/cs_gif_3-2.webm"
        },
        iphones: [
            "/work/club320/iphone-01.png",
            "/work/club320/iphone-02.png"
        ],
        image3: "/work/club320/everpress.png",
        image4: "/work/club320/fullcomp 1.png"
    }
}

const ClubSpotify = () => {
    let textRef1 = useRef(null);

    useEffect(() => {
        scrollerTextAnim(textRef1)
    }, [])
    return (
        <>
            <Head>
                <title>Club 320 | Ryan Gerada</title>
            </Head>
            <LayoutMain 
                nextProject={"anony"}
                hYear={data.year}
                hProjNum={data.projectNumber}
                hClient={data.clientName}
            >
                <ProjectIntro 
                    project={data.projectName}
                    market={data.market}
                    projectNumber={data.projectNumber}
                    year={data.year}
                    clientName={data.clientName}
                    role={data.role}
                    description={data.description}
                />
                <div className={styles.workGrid}>
                    <div className={`${styles.cs_video1} ${styles.ipadBorder}`}>
                        <VideoContainer 
                            mp4={data.media.video1.mp4}
                            // ogg={data.media.video1.ogg}
                            webm={data.media.video1.webm}
                            ipad={true}
                        />
                    </div>
                    <div className={styles.cs_video2}>
                        <VideoContainer 
                            mp4={data.media.video2.mp4}
                            // ogg={data.media.video2.ogg}
                            webm={data.media.video2.webm}
                        />
                    </div>
                    <img className={`${styles.cs_image1} ${styles.dropshadow1}`} src={data.media.image1} />
                    <div className={`${styles.cs_browser} ${styles.dropshadow1}`}>
                        {/* <div className={styles.browserCover}></div> */}
                        <img className={styles.toolbar} src={"/work/club320/chrome-toolbar.png"} />
                        <VideoContainer 
                            mp4={data.media.video3.mp4}
                            // ogg={data.media.video3.ogg}
                            webm={data.media.video3.webm}
                        />
                    </div>
                    <div 
                    ref={ el => textRef1 = el}
                    className={styles.projDescription}>
                        <h6>CLUB 320 X EVERPRESS.</h6>

                        <p>320kbps was the moniker adopted to compliment the campaign's message - now streaming at the highest quality. Designed to dovetail with the platform and established brand, 320kbps leans into the digital environment. It also reinforces the quality consumers have come to expect from Spotify.</p>

                        <p>A line of merchandise was designed and launched on Everpress. The campaign utilized social platforms to advertise the launch. </p>
                    </div>
                    <div className={styles.cs_phones}>
                        {data.media.iphones.map((phone, i) => (
                            <img src={phone} key={i} className={`${styles.ipadBorder} ${styles.cs_iphone}`}/>
                        ))}
                    </div>
                    <img src={data.media.image3} className={styles.cs_image3}/>
                    <img src={data.media.image4} className={styles.cs_image4}/>

                </div>
            </LayoutMain>
        </>
    )
}



export default ClubSpotify