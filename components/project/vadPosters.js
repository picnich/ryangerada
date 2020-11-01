const VadPosters =({ posters, postersContainer, posterContainer, dropshadow }) => {
    return (
        <div className={postersContainer}>
        {
            posters.map((poster, i) => (
                <div className={posterContainer} key={i}>
                    {
                        poster.map((side, i) => (
                            <img className={dropshadow} src={side} key={i} />
                        ))
                    }
                </div>
            ))
        }
        </div>
    )
}

export default VadPosters;

