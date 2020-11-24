import Head from "next/head"
import Header from '../header/Header'
import Footer from '../footer/footer'
import FooterWork from '../footer/footer-work'
import { motion } from "framer-motion"
// import Panels from '../panels'

const LayoutMain = ({ children, nextProject, workPage = true, hYear = false, hProjNum = false, hClient = false }) => {
    return (
        <>
            <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-6DWRW384YS"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-6DWRW384YS');
                    `,
                }}
                />
            </Head>
            <Header workPage={workPage} hYear={hYear} hProjNum={hProjNum} hClient={hClient} />
            <motion.div 
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.div>
            {
                nextProject ? <FooterWork nextProject={nextProject} /> : <Footer />
            }
        </>
    )
}

export default LayoutMain