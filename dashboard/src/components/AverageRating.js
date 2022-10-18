function AverageRating(props){
    return(
        <div className="average-rating">
            <h1>Average Rating</h1>
            <h2>{props.number}</h2>
        </div>
    )
}

export default AverageRating;