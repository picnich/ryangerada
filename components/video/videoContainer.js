import { useRef } from "react"

const VideoContainer = ({mp4, webm, c }) => {
    const videoRef = useRef(null);
    return (
        <div style={{overflow: "hidden"}}>
            <video 
                className={c}
                ref={videoRef}
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
                data-object-fit="cover" 
                preload="auto"
                src={mp4}
                style={{maxWidth: '102%', marginLeft: "-5px"}}
            >
                <source src={mp4} type="video/mp4" />
                {/* <source src={ogg} type="video/ogg" /> */}
                <source src={webm} type="video/webm" />
            </video>
        </div>
    )
}

export default VideoContainer