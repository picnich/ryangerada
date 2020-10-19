import { useState, useEffect, useRef } from "react"
import useMousePosition from "../../lib/hooks/useMousePosition"

import styles from "../../styles/Grain.module.css"

// Canvas vars
let viewWidth, viewHeight, ctx

let size = {
    w: 500,
    h: 333
};

const HomeBGCanvas = ({ num, isHovering }) => {
    const {x, y} = useMousePosition();
    const canvasRef = useRef(null)

    const hoverAnony = useRef(null)
    const hoverClub320 = useRef(null)
    const hoverFrank = useRef(null)
    const hoverLPD = useRef(null)
    const hoverRealSports = useRef(null)
    const hoverVAD = useRef(null)

    const [ locations, setLocations ] = useState([])

    const data = [
        {
            url: "/work/anony/hoverstate-anony.png",
            alt: "Anony Hover Image",
            ref: hoverAnony
        },
        {
            url: "/work/club320/hoverstate-club320.png",
            alt: "Club 320 Hover Image",
            ref: hoverClub320
        },
        {
            url: "/work/frank/hoverstate-frank.png",
            alt: "Frank Hover Image",
            ref: hoverFrank
        },
        {
            url: "/work/lpd/hoverstate-lpd.png",
            alt: "LPD Hover Image",
            ref: hoverLPD
        },
        {
            url: "/work/realsports/hoverstate-realsports.png",
            alt: "Real Sports Hover Image",
            ref: hoverRealSports
        },
        {
            url: "/work/vad/hoverstate-vad.png",
            alt: "VAD Hover Image",
            ref: hoverVAD
        },
    ]
    
    
    
    const initCanvas = () => {
        viewWidth = canvasRef.current.width = canvasRef.current.clientWidth
        viewHeight = canvasRef.current.height = canvasRef.current.clientHeight
        ctx = canvasRef.current.getContext("2d")    
    }

    const draw = ({x, y, itemNum, img}) => {
        if (!isHovering || itemNum !== num) {
            ctx.clearRect(0,0,viewWidth, viewHeight)
        } else {
            // ctx.fillStyle = colours[num];
            // ctx.fillRect(x,y,size/ 5,size/ 5);      
            
            switch(num) {
                case 0:
                    ctx.drawImage(hoverAnony.current, x - (size.w /2) , y - (size.h /2), size.w, size.h);

                    break;
                case 1:
                    ctx.drawImage(hoverClub320.current, x - (size.w /2) , y - (size.h /2), size.w, size.h);

                break;
                case 2:
                    ctx.drawImage(hoverVAD.current, x - (size.w /2) , y - (size.h /2), size.w, size.h);

                break;
                case 3:
                    ctx.drawImage(hoverFrank.current, x - (size.w /2) , y - (size.h /2), size.w, size.h);

                break;
                case 4:
                    ctx.drawImage(hoverRealSports.current, x - (size.w /2) , y - (size.h /2), size.w, size.h);

                break;
                case 5:
                    ctx.drawImage(hoverLPD.current, x - (size.w /2) , y - (size.h /2), size.w, size.h);

                break;
                default:
                    ctx.drawImage(hoverAnony.current, x - (size.w /2) , y - (size.h /2), size.w, size.h);

            }
        
        }
    }

    // ComponentDidMount
    useEffect(() => {
        initCanvas();
    }, [])
    
    // ComponentDidUpdate
    useEffect(() => {        
        let newLocation = {
            x: x, 
            y: y,
            // velX: 2 * (Math.random() - 0.5),   
            // velY: 2 * (Math.random() - 0.5),
            itemNum: num
        }
        // setHoverImg(imageAnony)
        setLocations([...locations, newLocation])

        const loop = () => {
            // draw();
            locations.forEach(location => draw(location))
            // requestAnimationFrame(loop);
        }
        loop();
        // requestAnimationFrame(loop);

        const handleResize = () => {
            viewWidth = canvasRef.current.width = canvasRef.current.clientWidth
            viewHeight = canvasRef.current.height = canvasRef.current.clientHeight
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [x, y])

    return (
        <>
            <canvas ref={canvasRef} className={styles.homeCanvasBG}></canvas>
            {
                data.map((hoverImg, i) => (
                    <img 
                        key={i}
                        ref={hoverImg.ref}
                        src={hoverImg.url}
                        alt={hoverImg.alt}
                        // className={styles.floatingImg}
                        style={{visibility: 'hidden', display: "none"}}
                    />
                ))
            }
        </>
    )
}

export default HomeBGCanvas
