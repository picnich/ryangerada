import { useEffect, useRef, useState } from "react"
import Head from 'next/head'
// import { useRouter } from 'next/router'
import { motion } from "framer-motion"

import styles from '../styles/Home.module.css'
import LayoutMain from "../components/layouts/layout-main"
import AllWork from '../components/project/AllWork'


import { stagger, slideUp, transition, homeTextIntro } from "../lib/animations/animations"
// import HomeBGCanvas from "../components/project/homeBgCanvas"

export default function Home() {
  let bio1 = useRef(null);
  let bio2 = useRef(null);
  let bio3 = useRef(null);

  // Intro Text Animation
  useEffect(() => {
    homeTextIntro(bio1, bio2, bio3)
  }, [])

  // const router = useRouter() 

  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 6000)
  // }, [])


  return (
      <div className={styles.container}>
        <Head>
          <title>Ryan Gerada | Designer | Toronto</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LayoutMain workPage={false}>
          <main className={styles.main}>
            <section className={styles.descriptionContainer} >
              <div className={styles.bio}>
              <div className={styles.drawingBiography}>
                <img src={'/illus_work-bio.png'}></img>
              </div>
              <div ref={(el) => (parent = el)}>
                <p ref={(el) => (bio1 = el)}>
                  Hello, my name is Ryan Gerada - I'm a designer currently working out of Toronto. I specialize in brand identity, typography and advertising. I strive to integrate creative solutions with <span>thoughtful details</span> to deliver <span>innovative work.</span> 
                </p>
                <p ref={(el) => (bio2 = el)}>
                  In 2018, I started as a designer at an agency here in Toronto where I worked with global brands like MLSE. I’ve also worked with award winning local talent in hospitality, such as Giulietta. From the outset of each project, I’ve strategically established and expanded  design language that translates across a full range of mediums. These include print, packaging design, motion and web experiences. 
                </p>
                <p ref={(el) => (bio3 = el)}>
                  Contact me for collaborations or just to say hi!
                </p>

              </div>

              </div>
              <div className={styles.credentials}>
                <motion.div 
                  className={styles.experience}
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  <div className={styles.drawingContact}>
                    <img src={'/illus_work-contact.png'}></img>
                  </div>
                  <motion.h6 variants={slideUp} transition={{...transition, duration: 1}}>Email</motion.h6>
                  <a href="mailto:info@ryangerada.com"><motion.p variants={slideUp} transition={{...transition, duration: 1}}>info@ryangerada.com</motion.p></a>
                </motion.div>
                <motion.div 
                  className={styles.contact}
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  <motion.h6 variants={slideUp} transition={{...transition, duration: 1}}>Social</motion.h6>
                  <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.a 
                      href="https://www.instagram.com/ryangerada/"
                      variants={slideUp} 
                      transition={{...transition, duration: 1}}
                    >
                      <span>Instagram, </span></motion.a>
                    <motion.a 
                      href="https://twitter.com/ryangerada"
                      variants={slideUp} 
                      transition={{...transition, duration: 1}}
                    >
                      <span>Twitter</span></motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </section>
            <section 
              className={styles.workContainer} 
              id="homepagework" 
              name="homepagework"
            >
              <div className={styles.drawingWork}>
                <img src={'/illustrations/illus_work.png'}></img>
              </div>

              <AllWork 
                // handleMove={handleMouseLeave}
                // handleLeave={handleMouseMove}
              />
            </section>
          </main>
        </LayoutMain>
      </div>
  )
}


