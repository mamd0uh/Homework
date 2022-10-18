function SentimentAnalysis(props){
    return(
        <div className="sentiment">
            <h1>Sentiment Analysis</h1>
            <ul className="sentiment-list">
                <li>{props.posNumber} Postive Reviews</li>
                <li>{props.neuNumber} Neutral Reviews</li>
                <li>{props.negNumber} Negative Reviews</li>
            </ul>
        </div>
    )
}

export default SentimentAnalysis;