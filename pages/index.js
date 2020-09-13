import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LayoutMain from "../components/layouts/layout-main"
import AllWork from '../components/project/AllWork'
// import Panels from '../components/panels'

import { motion } from "framer-motion"

import { stagger, slideUp, transition } from "../lib/animations/animations"
import PanelsHomepage from '../components/panels/panels-homepage'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan Gerada | Designer | Toronto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutMain>
        <main className={styles.main}>
          <section className={styles.descriptionContainer}>
            <div className={styles.bio}>
            <div
                className={styles.drawingBio}
                style={{
                    backgroundImage: "url(/illus_work.png)"
                }}
            ></div>
            <motion.div               
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.p 
                variants={slideUp}
                transition={{...transition, duraction: 1}}
              >
                Hello! My name is Ryan Gerada. I'm a designer currently working out of Toronto. I gathered my first experiences working at a studio specializing in brand identity and advertising where my design practices focused on <strong>creative solutions</strong> and <strong>thoughtful details</strong>. 
              </motion.p>
              <motion.p 
                variants={slideUp}
                transition={{...transition, duraction: 1}}
              >
                I intend to capture a brand's personality by developing comprehensive identities and designs. From the outset of every project, my goal is to strategically expand the established design language across deliverables. Ranging from print and packaging design, to merchandise and web experiences.
              </motion.p>
              <motion.p 
                variants={slideUp} 
                transition={{...transition, duraction: 1}}
              >
              You can find case studies of some of my most recent work below, or click here to see a selection of some of my personal projects. 
              </motion.p>

            </motion.div>

            </div>
            <div className={styles.credentials}>
              <div className={styles.experience}>
                <div
                    className={styles.drawingExperience}
                    style={{
                        backgroundImage: "url(/illus_work.png)"
                    }}
                ></div>
                <h6>Experience</h6>
                <a href="http://biographydesign.com/splash/"><p>Biography Design</p></a>
                <p>OCAD University</p>
              </div>
              <div className={styles.contact}>
                <div
                    className={styles.drawingContact}
                    style={{
                        backgroundImage: "url(/illus_work.png)"
                    }}
                ></div>
                <a href=""><h6>Email</h6></a>
                <a href=""><h6>Instagram</h6></a>
                <a href=""><h6>Twitter</h6></a>
              </div>
            </div>
          </section>
          <section className={styles.workContainer}>
            <div
              className={styles.drawingWork}
              style={{
                  backgroundImage: "url(/illus_work.png)"
              }}
          ></div>

            <AllWork />
          </section>
          {/* <Panels /> */}
          {/* <PanelsHomepage /> */}
        </main>
      </LayoutMain>
    </div>
  )
}


