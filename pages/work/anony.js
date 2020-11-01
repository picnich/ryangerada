import { useEffect, useRef } from "react"
import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

import styles from "../../styles/work.module.css"
import VideoContainer from '../../components/video/videoContainer'
import { scrollerTextAnim } from "../../lib/animations/animations"

const data = {
    projectName: "Anony",
    market: "Lighting & Product Design",
    projectNumber: "01",
    year: 2018,
    clientName: "Anony",
    role: "Lead Designer",
    description: [
        "Anony, short for anonymous, is a lighting and product design studio. With an affinity for the obscure, founders Christian and David founded the studio as a passion project - the duo finding time to work anonymously after hours at their respective full time jobs.",
        "I was selected to be the lead designer for this rebranding. We worked on the brand identity, digital implementation, environmental design and print collateral."
    ],
    media: {
        video1: {
            mp4: "/work/anony/anony_gif_1.mp4",
            ogg: "/work/anony/anony_gif_1.ogg",
            webm: "/work/anony/anony_gif_1.webm"
        },
        video2: {
            mp4: "/work/anony/anonyanonymousmp4.mp4",
            ogg: "/work/anony/anonyanonymousmp4.ogg",
            webm: "/work/anony/anonyanonymousmp4.webm"
        },
        video3: {
            mp4: "/work/anony/anony_gif_2.mp4",
            ogg: "/work/anony/anony_gif_2.ogg",
            webm: "/work/anony/anony_gif_2.webm"
        },
        video4: {
            mp4: "/work/anony/anony_gif_3.mp4",
            ogg: "/work/anony/anony_gif_3.ogg",
            webm: "/work/anony/anony_gif_3.webm"
        },
        video5: {
            mp4: "/work/anony/anony_gif_4.mp4",
            ogg: "/work/anony/anony_gif_4.ogg",
            webm: "/work/anony/anony_gif_4.webm"
        },
        image2: "/work/anony/export1 1.png",
        process: [
            "/work/anony/Process_01.png",
            "/work/anony/Process_02.png",
            "/work/anony/Process_03.png",
            "/work/anony/Process_04.png"
        ]
    },
}



const Anony = () => {
    let textRef1 = useRef(null);
    let textRef2 = useRef(null);
    // let textRef3 = useRef(null);
    useEffect(() => {
        scrollerTextAnim(textRef1)
        scrollerTextAnim(textRef2)
    }, [])
    return (
        <>
            <Head>
                <title>Anony | Ryan Gerada</title>
            </Head>
            <LayoutMain nextProject={"club-320"}>
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
                    <div 
                    className={`${styles.image1} ${styles.ipadBorder}`}>
                        <VideoContainer 
                            mp4={data.media.video1.mp4}
                            ogg={data.media.video1.ogg}
                            webm={data.media.video1.webm}
                        />
                    </div>
                    <div 
                        ref={ el => textRef2 = el}
                        className={styles.projDescription}>
                        <h6>Lights on, lights off</h6>
                        <p>When approaching the logo, the challenge was identifying how to meaningfully represent anonymity. The solution was what we referred to as "the gap logo" internally. Elegant in its execution, the gap communicates illumination through the exclusion of the long form word.</p>
                        <p>The logic established with this logo went on to play a pivotal role within the rest of the brand. The typographic language and design logic stemming from this solution.</p>
                    </div>
                    <div className={styles.fullImage}>
                        <VideoContainer 
                            mp4={data.media.video2.mp4}
                            ogg={data.media.video2.ogg}
                            webm={data.media.video2.webm}
                        />
                    </div>

                    <img 
                        className={styles.image2}
                        src={'/work/anony/Horizon Sketches.png'}></img>
                    <div className={styles.processContainer}>
                        <div>
                            <div></div>
                            <p>Process Photography</p>
                            <span>2019</span>
                        </div>
                        {
                            data.media.process.map((pro, i) =>  (
                                <img key={i} src={pro}></img>) )
                        }
                    </div>

                    <div 
                    ref={ el => textRef1 = el}
                    className={styles.projDescription}>
                        <h6>Rethinking Instruction Manuals.</h6>

                        <p>The instruction manual was something that had previously been printed on a letter size piece of paper and stuffed in the box with the product before shipment. The opportunity here was to reimagine this as more than a manual - as something that would celebrate the product, yet maintain it's compact functionality during installation. </p>

                        <p>The objective was to create a template that could be applied to each product. This would allow for a uniform design throughout the product line, insuring the key information had a place to live. The manual was designed to serve two purposes. The first being the installation instructions. Secondly, a design that would highlight the product as well as serve as an introduction to the design studio. </p>
                    </div>

                    <div className={styles.col_8_11}>
                        <VideoContainer 
                            mp4={data.media.video3.mp4}
                            ogg={data.media.video3.ogg}
                            webm={data.media.video3.webm}
                        />
                    </div>
                    
                    <div className={`${styles.image4} ${styles.ipadBorder}`}>
                        <VideoContainer 
                            mp4={data.media.video4.mp4}
                            ogg={data.media.video4.ogg}
                            webm={data.media.video4.webm}
                        />
                    </div>
                    <div className={styles.col_4}>
                        <VideoContainer 
                            mp4={data.media.video5.mp4}
                            ogg={data.media.video5.ogg}
                            webm={data.media.video5.webm}
                        />
                    </div>
                    <img 
                        className={styles.anony_img2}
                        src={data.media.image2}></img>
                </div>

            </LayoutMain>
        </>
    )
}

export default Anony