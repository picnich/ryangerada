const VadClosing = ({ content, closingParentStyle, closingWrapperStyle, vadPoster, vadProcess, vadImages, vadDownload }) => {
    return (
        <div className={closingParentStyle}>
            <div className={closingWrapperStyle}>
                <img className={vadPoster} src={content.poster} alt="VAD Poster"/>
                <div className={vadProcess}>
                    {
                        content.process.map((process, i) => (
                            <img key={i} src={process} alt={`Vad Process Image ${i}`} />
                        ))
                    }
                </div>
                <div className={vadImages}>
                    {
                        content.pages.map((p, i) => (
                            <img key={i} src={p} alt={`Vad Process Image ${i}`} />
                        ))
                    }
                </div>
                <div className={vadDownload}>
                    <div><h6>download</h6> </div>
                    <div>
                        <a href="">Process Book</a>
                        <a href="">01 CAFE</a>
                        <a href="">02 LIBRARY</a>
                        <a href="">03 STUDIO</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VadClosing;