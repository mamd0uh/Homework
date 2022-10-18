export default function Question ({question}) {
    
    function loadingQuestion () {
        return(
            <>
            <h1>Loading Question...</h1>
            </>
        )
    }
    function loadedQuestion() {
        return(
            <>
            <h2> <span>Catergory:</span> {question.category.title.toString()}</h2>
            <h2> <span>Value:</span> {question.value}</h2>
            <h1> <span>Answer:</span> {question.question} </h1>
            </>
        )  
    }
    
    return question ? loadedQuestion() : loadingQuestion()
}