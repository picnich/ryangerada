import styles from './Footer.module.css'

const Footer = () => {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
     const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
     const today  = new Date();
 
     let mo = months[today.getMonth() - 1];
     // let d = week[today.getDay() - 1];
     let d = today.getDate();
     let hrs = today.getHours() - 12;
     let pm = today.getHours() > 12 ? "PM" : "AM";
     let mins = today.getMinutes();
     let singleDigits = today.getMinutes() < 10 ? '0' : '';
    //  console.log(singleDigits);
 
    return (
        <footer className={styles.footer}>
            <div className={styles.byRyan}>
                <div className={styles.drawingName}>
                    <img src={'/illustrations/illus_work-name.png'}></img>
                </div>
                {/* <h6>DESIGN, RYAN GERADA</h6> */}
                <h6>{`LAST UPDATED: ${mo} ${d}, ${hrs}:${singleDigits + mins}${pm}`}</h6>
            </div>

            <div className={styles.rights}>
                <div className={styles.drawingCopyright}>
                    <img src={'/illustrations/illus_work-copyright.png'}></img>
                </div>

                <img src="/icons/icon-copyright.svg" alt="Arrow Icon"/>
                <p>2020 All Rights Reserved.</p>
            </div>
            <a className={styles.toTop} onClick={scrollTop}>
                <div className={styles.drawingToTop}>
                    <img src={'/illustrations/illus_work-top.png'}></img>
                </div>
                <img src="/icons/icon-arrow-top.svg" alt="Arrow Icon"/>
                <h6>To Top</h6>
            </a>
        </footer>

    )
}

export default Footer;