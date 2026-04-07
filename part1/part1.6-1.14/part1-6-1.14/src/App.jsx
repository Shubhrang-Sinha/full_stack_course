import { useState } from 'react'

const Button = ({onClick,text}) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text,value}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td> {value} </td>
    </tr>
  )
}

const Statistics = ({good, bad,neutral,total,average,positivePercentage}) =>{
    return (
      <table>
        <tbody>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='all' value={total}/>    
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='Percentage' value={positivePercentage}/>
        </tbody>    
      </table>
    )
  }



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
      {total===0 ? (
        <p>No Feedback Given</p>
      ):
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positivePercentage={positivePercentage}/>
      } 
    
    </div>
  )
}

export default App