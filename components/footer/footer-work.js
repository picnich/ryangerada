import styles from './Footer.module.css'
import Link from 'next/link'

const FooterWork = ({ nextProject = "/" }) => {
    // const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today  = new Date();

    let mo = months[today.getMonth() - 1];
    // let d = week[today.getDay() - 1];
    let d = today.getDate();
    let hrs = today.getHours() - 12;
    let pm = today.getHours() > 12 ? "PM" : "AM";
    let mins = today.getMinutes();

    return (
        <footer className={styles.footer}>
            <div className={styles.byRyan}>
                <div className={styles.drawingName}>
                    <img src={'/illustrations/illus_work-name.png'}></img>
                </div>
                {/* <h6>DESIGN, RYAN GERADA</h6> */}
                <h6>{`LAST UPDATED: ${mo} ${d}, ${hrs}:${mins}${pm}`}</h6>
            </div>

            <div className={styles.rights}>
                <Link  href={"/"}>
                    <a className={styles.toTop}>
                        <h6>Home</h6>
                    </a>
                </Link>
            </div>
            <Link  href={`/work/${nextProject}`}>
                <a className={styles.nextProj}>
                    {/* <img src="/icons/icon-arrow-top.svg" alt="Arrow Icon"/> */}
                    <h6>Next Work</h6>
                </a>
            </Link>
        </footer>

    )
}

export default FooterWork;