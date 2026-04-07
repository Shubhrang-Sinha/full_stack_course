import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () =>{
    setGood(good+1)
  }

  const neutralClick = () => {
    setNeutral(neutral+1)
  }

  const badClick = () => {
    setBad(bad+1)
  }

  const Statistics = ({good, bad,neutral,total,average,positivePercentage}) =>{
    return (
      <div>
        <p>good {good}</p>
        <p>bad = {bad}</p>
        <p>neutral = {neutral}</p>
        <p>total = {total}</p>
        <p>average = {average}</p>
        <p>percentage ={positivePercentagex}</p>
      </div>
    )
  }
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;


  return (
    <div>
      <h2>give feedback</h2>

      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>

      <h2>Statistics</h2>   
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positivePercentage={positivePercentage}/> 
    
    </div>
  )
}

export default App