const VadClosing = ({ content, closingParentStyle, closingWrapperStyle, vadPoster, vadProcess, vadImages, vadDownload, pdfProcess, pdfStudio, pdfLibrary, pdfCafe }) => {
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
                        <a href={pdfProcess} target="_blank">Process Book</a>
                        <a href={pdfCafe} target="_blank">01 CAFE</a>
                        <a href={pdfLibrary} target="_blank">02 LIBRARY</a>
                        <a href={pdfStudio} target="_blank">03 STUDIO</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VadClosing;