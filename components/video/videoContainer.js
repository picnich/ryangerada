import { useRef, useEffect } from "react"

const VideoContainer = ({mp4, ogg, webm, c }) => {
    const videoRef = useRef(null);
    return (
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
            style={{maxWidth: '100%'}}
        >
            <source src={mp4} type="video/mp4" />
            <source src={ogg} type="video/ogg" />
            <source src={webm} type="video/webm" />
        </video>
    )
}

export default VideoContainer