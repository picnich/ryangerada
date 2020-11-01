const VadLocationWrapper = ({ images, children, containerStyle, wrapperStyle, parentStyle}) => {
    return (
        <div className={parentStyle}>
            {children}
            <div className={wrapperStyle}>
                <div className={containerStyle}>
                    {
                        images.map((img, i) => {
                            return (
                                <img key={i} src={img} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default VadLocationWrapper;