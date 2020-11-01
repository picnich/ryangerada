import { useRef, useEffect } from "react"
import LayoutMain from '../../components/layouts/layout-main'
import Head from 'next/head'
import ProjectIntro from '../../components/projectIntro/projectIntro'

import VideoContainer from '../../components/video/videoContainer'
import styles from "../../styles/work.module.css"
import { scrollerTextAnim } from "../../lib/animations/animations"
import VadLocationWrapper from "../../components/project/vadLocationDetail"
import VadPosters from "../../components/project/vadPosters"
import VadClosing from "../../components/project/vadclosing"

const data = {
    projectName: "Visualizing Auditory Distraction",
    market: "A Case Study",
    projectNumber: "03",
    year: 2017,
    clientName: "OCAD Graphic Design",
    role: "Lead Designer",
    description: [
        "VAD was my graduate project at OCAD. Four year designers are given an opportunity to spend two full semesters focusing on a subject of their  choice. I took a particular interest in distraction, as it is something that often impacts me personally. Distraction as a topic would have been too broad, instead I narrowed the focus down to environmental and auditory distraction.",
        "Research was the first leg of the project, where I found myself particularly interested in the work of acoustic ecologists. Acoustic ecology, sometimes called ecoacoustics or soundscape studies, is a discipline studying the relationship, mediated through sound, between human beings and their environment.",
        "In tandem with broad research on the subject of auditory distraction, I narrowed my focus to three environments where I would begin collecting data. This data would be portrayed in a variety of deliverables. These include brand identity, digital implementation, print collateral, experience design."
    ],
    media: {
        image1: "/work/vad/vad-image-01.png",
        image2: "/work/vad/vad-image-02.png",
        image3: "/work/vad/vad-image-03.png",
        jimmy: [
            "/work/vad/Jimmy/vad-jimmy-01.png",
            "/work/vad/Jimmy/vad-jimmy-02.png",
            "/work/vad/Jimmy/vad-jimmy-03.png",
            "/work/vad/Jimmy/vad-jimmy-04.png",
        ],
        library: [
            "/work/vad/Library/vad-coffeeshop-01.png",
            "/work/vad/Library/vad-coffeeshop-02.png",
            "/work/vad/Library/vad-coffeeshop-03.png",
            "/work/vad/Library/vad-coffeeshop-04.png",
        ],
        studio: [
            "/work/vad/Studio/vad-studio01.png",
            "/work/vad/Studio/vad-studio02.png",
            "/work/vad/Studio/vad-studio03.png",
            "/work/vad/Studio/vad-studio04.png",
        ],
        video1: {
            mp4: "/work/vad/vad_gif_1.mp4",
            ogg: "/work/vad/vad_gif_1.ogg",
            webm: "/work/vad/vad_gif_1.webm"
        },
        video2: {
            mp4: "/work/vad/vad_gif_2.mp4",
            ogg: "/work/vad/vad_gif_2.ogg",
            webm: "/work/vad/vad_gif_2.webm"
        },
        video3: {
            mp4: "/work/vad/vad_gif_3.mp4",
            ogg: "/work/vad/vad_gif_3.ogg",
            webm: "/work/vad/vad_gif_3.webm"
        },
        closing: {
            poster: "/work/vad/closing/posterdemo.png",
            process: [
                "/work/vad/closing/tabledemo.png",
                "/work/vad/closing/posterhung 1.png",
            ],
            pages: [
                "/work/vad/closing/_1180826.png",
                "/work/vad/closing/_1180831.png",
                "/work/vad/closing/_1180853.png",
                "/work/vad/closing/_1180861.png",
            ],
            download: {
                processbook: "/work/vad/closing/vad-closing01.png",
                cafe: "/work/vad/closing/vad-closing01.png",
                library: "/work/vad/closing/vad-closing01.png",
                studio: "/work/vad/closing/vad-studio01.png",
            }
        },
        posters: [
            [
                "/work/vad/Posters/01_front.png",
                "/work/vad/Posters/01_back.png",
            ],
            [
                "/work/vad/Posters/02_front.png",
                "/work/vad/Posters/02_back.png",
            ],
            [
                "/work/vad/Posters/03_front.png",
                "/work/vad/Posters/03_back.png",
            ],
        ]
    }
}


const VisualizingAuditoryDistraction = () => {
    let textRef1 = useRef(null);
    let textRef2 = useRef(null);
    let textRef3 = useRef(null);

    useEffect(() => {
       scrollerTextAnim(textRef1, textRef2, textRef3) 
    })
    return (
        <>
            <Head>
                <title>Visualizing Auditory Distraction | Ryan Gerada</title>
            </Head>
            <LayoutMain nextProject="anony">
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
                    <img src={data.media.image1} className={`${styles.vad_image1} ${styles.ipadBorder}`}/>
                    <div 
                    ref={ el => textRef1 = el}
                    className={styles.projDescription}>
                        <h6>01 COFFEE SHOP</h6>

                        <p>We went in and developed product specific newsprint to be included in various places. These would double as product instructions, as the back had home installation instructions. These newsprints would be included with the product upon purchase, handed out as informational brochures at trade shows.</p>

                        <p>We went in and developed product specific newsprint to be included in various places. These would double as product instructions, as the back had home installation instructions. These newsprints would be included with the product upon purchase, handed out as informational brochures at trade shows.  </p>
                    </div>

                    <img src={data.media.image2} className={`${styles.vad_image2} ${styles.ipadBorder}`}/>
                    <div 
                    ref={ el => textRef2 = el}
                    className={styles.projDescription}>
                        <h6>02 REFERENCE LIBRARY.</h6>

                        <p>We went in and developed product specific newsprint to be included in various places. These would double as product instructions, as the back had home installation instructions. These newsprints would be included with the product upon purchase, handed out as informational brochures at trade shows.</p>

                        <p>We went in and developed product specific newsprint to be included in various places. These would double as product instructions, as the back had home installation instructions. These newsprints would be included with the product upon purchase, handed out as informational brochures at trade shows. </p>
                    </div>

                    <img src={data.media.image3} className={`${styles.vad_image3} ${styles.ipadBorder}`}/>
                    
                    <div 
                    ref={ el => textRef3 = el}
                    className={styles.projDescription}>
                        <h6>03 Home Studio</h6>

                        <p>We went in and developed product specific newsprint to be included in various places. These would double as product instructions, as the back had home installation instructions. These newsprints would be included with the product upon purchase, handed out as informational brochures at trade shows.</p>

                        <p>We went in and developed product specific newsprint to be included in various places. These would double as product instructions, as the back had home installation instructions. These newsprints would be included with the product upon purchase, handed out as informational brochures at trade shows. </p>
                    </div>


                    <div className={styles.linebreak}>
                        <div className={styles.line}></div>
                        <h6>In focus</h6>
                    </div>

                    
                    <VadLocationWrapper 
                        images={data.media.jimmy}
                        wrapperStyle={styles.vadGridImageWrapper}
                        containerStyle={styles.container_vadGridImages}
                        parentStyle={styles.fullwidth}
                        >
                        <div 
                        ref={ el => textRef3 = el}
                        className={styles.projDescription}>
                            <h6>01 COFFEE SHOP</h6>

                            <p>We went in and developed product specific newsprint to be included in various places. These would double as product instructions, as the back had home installation instructions. These newsprints would be included with the product upon purchase, handed out as informational brochures at trade shows.</p>

                            <p>We went in and developed product specific newsprint to be included in various places. These would double as product instructions, as the back had home installation instructions. These newsprints would be included with the product upon purchase, handed out as informational brochures at trade shows. </p>
                        </div>
                    </VadLocationWrapper>
                    <VadLocationWrapper 
                        images={data.media.library}
                        wrapperStyle={styles.vadGridImageWrapper}
                        containerStyle={styles.container_vadGridImages}
                        parentStyle={styles.fullwidth}
                        >
                        <div 
                        ref={ el => textRef3 = el}
                        className={styles.projDescription}>
                            <h6>02 REFERENCE LIBRARY</h6>

                            <p>Each of the five floors have a similar layout. Book cataloguing takes place on the east and west wings of the floor. The north side is generally dedicated to communal tables that are used as a public workspace. Lastly, the south side hosts library staff and floor specific equipment or archives.</p>

                            <p>Each of the five floors have lofty 20 foot ceilings, with a large portion of the centre of the library having no ceiling at all until you reach the roof. Concrete floors are covered with heavy carpet, these carpets help to suppress some of the sound echoing throughout the cacophonous space. A ruckus on the first floor bleeds to the furthest reaches of the fifth floor, and vice versa. </p>
                        </div>
                    </VadLocationWrapper>
                    <VadLocationWrapper 
                        images={data.media.studio}
                        wrapperStyle={styles.vadGridImageWrapper}
                        containerStyle={styles.container_vadGridImages}
                        parentStyle={styles.fullwidth}
                        >
                        <div 
                        ref={ el => textRef3 = el}
                        className={styles.projDescription}>
                            <h6>03 HOME STUDIO</h6>

                            <p>The studio space itself is a 150 square foot room, roughly cut down the middle. The desk and working space occupy the near side of the room, while the bed rests against the far wall.</p>

                            <p>With 8 foot concrete ceilings, and robust concrete floors, the space is acoustically sound. There is little to no sound from neighbors. All of the data collection was gathered when sitting at my workspace.</p>
                        </div>
                    </VadLocationWrapper>

                    <div className={styles.linebreak}>
                        <div className={styles.line}></div>
                        <h6>OUTCOMES</h6>
                    </div>
                    <div className={`${styles.vad_video1} ${styles.ipadBorder}`}>
                        <VideoContainer 
                            mp4={data.media.video1.mp4}
                            ogg={data.media.video1.ogg}
                            webm={data.media.video1.webm}
                        />
                    </div>
                    <div 
                    ref={ el => textRef2 = el}
                    className={styles.projDescription}>
                        <h6>SPECBOOKS</h6>

                        <p>The Spectrogram Handbooks were designed to catalog the collection of data for all three spaces. One book was designed and printed for each space, containing the entirety of collected data. These data were visualized in the form of a spectrogram - a visual representation of the spectrum of frequencies of a signal as it varies with time. These books also acted as a short tutorial for the viewer, who may have been unfamiliar with this form of audio visualization. After a brief introduction to the project, the space, and the visualization, the cataloging was presented.</p>

                        <p>Having these printed was particularly important because of the exhibition in which this work was intended to be displayed. The books were intended to be picked up by the observer and held in hand while observing the corresponding poster that contained a more stylized visualization of the sounds.</p>
                    </div>
                    <div className={`${styles.vad_video2}`}>
                        <VideoContainer 
                            mp4={data.media.video2.mp4}
                            ogg={data.media.video2.ogg}
                            webm={data.media.video2.webm}
                        />
                    </div>
                    <div 
                    ref={ el => textRef2 = el}
                    className={styles.projDescription}>
                        <h6>AUDIO LOGO POSTERS</h6>

                        <p>The Audio Logo posters were designed to visualize the entirety of collected data for each individual space in one emblematic form. The front of the poster is dedicated to showcasing the circular waveform - a combination of waveform and spectrogram audio visualizations.</p>

                        <p>The back of the poster provided further context and included the bulk of information. These data include a brief introduction to the space, callouts for specific sounds, metadata for decibel ranges, LUFS readings, and recording times.</p>
                    </div>
                    <VadPosters 
                        posters={data.media.posters} 
                        postersContainer={styles.postersContainer}    
                        posterContainer={styles.posterContainer} 
                        dropshadow={styles.dropshadow1}   
                    />
                    <div className={`${styles.vad_video3}`}>
                        <VideoContainer 
                            mp4={data.media.video3.mp4}
                            ogg={data.media.video3.ogg}
                            webm={data.media.video3.webm}
                        />
                    </div>
                    <div className={styles.linebreak}>
                        <div className={styles.line}></div>
                        <h6>In Exhibition</h6>
                    </div>
                    <div 
                    ref={ el => textRef2 = el}
                    className={styles.projDescription}>
                        <h6>In exhibition</h6>

                        <p>Before starting the exhibition experience, guests were encouraged to watch a short video. This acted as an introduction to the project, formally introducing each of the spaces and providing visual context to the environments that were studied. 

                        Before heading to the poster area, guests were encouraged to grab a corresponding specbook from the table. This book was intended to compliment the posters and audio guide.</p>

                        <p>Directly behind the table where the introduction video was set up, the posters were hung from the ceiling creating a bit of isolation from the rest of the exhibits. Each poster was intended to be experienced with an audio companion - headphones were attached to the poster mount, and viewers were encouraged to start the experience by equipping the headphones with the dedicated audio experience and tour guide. The guide contained a brief introduction to the respective space, as well as audio samples that are visualized on said poster.</p>
                    </div>


                    <VadClosing 
                        content={data.media.closing}
                        closingParentStyle={styles.vadClosingParent}
                        closingWrapperStyle={styles.vadClosingWrapper}
                        vadPoster={styles.vadPoster}
                        vadProcess={styles.vadProcess_container}
                        vadImages={styles.vadImages_container}
                        vadDownload={styles.vadDownload_container}
                    />

                </div>
            </LayoutMain>

        </>
    )
}

export default VisualizingAuditoryDistraction