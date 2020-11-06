import { useRef } from "react"

// const iPadContainerStyle = {
//     overflow: "hidden"
// }
// const iPadStyle = {
//     maxWidth: '102%', 
//     marginLeft: "-5px",
//     width: "100%"
// }

const noIpadStyle = {
    maxWidth: "100%",
    width: "100%"
}

const VideoContainer = ({mp4, webm, c, ipad = false }) => {
    const videoRef = useRef(null);
    return (
        // <div style={ipad ? {} : iPadContainerStyle}>
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
                style={noIpadStyle}
            >
                <source src={mp4} type="video/mp4" />
                {/* <source src={ogg} type="video/ogg" /> */}
                <source src={webm} type="video/webm" />
            </video>
        // </div>
    )
}

export default VideoContainer