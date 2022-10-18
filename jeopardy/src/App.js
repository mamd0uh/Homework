import './App.css';
import {useState, useEffect} from 'react';

import Question from './components/Question';
import Score from './components/Score';
import Info from './components/Info';

function App() {

  let [question, setQuestion] = useState('')
  let [answer , setAnswer] = useState('')
  

  const handleQuestion = async () => {
    const response = await fetch('http://jservice.io/api/random')
    const data = await response.json()

    setQuestion(data[0])
    setAnswer()
  }

  useEffect(() => {
    fetch('http://jservice.io/api/random')
    .then(res => {
      return res.json()
    })
    .then( data => {
      setQuestion(data[0])
    })
  }, [])
 
  function handleAnswer () {
    setAnswer(question.answer)
  }

  return (
    <div className="App">
      <Info/>
      <Score question={question}/>
      <h2>Let's Play!</h2>
      <button onClick={handleQuestion}>Get Question</button>
      <Question question={question}/>
      <button onClick={handleAnswer}>Show Answer</button>
      <h1>{answer}</h1>
    </div>
  );
}

export default App;