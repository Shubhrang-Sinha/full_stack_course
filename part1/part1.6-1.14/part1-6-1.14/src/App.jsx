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


  return (
    <div>
      <h2>give feedback</h2>

      <button onClick={goodClick}>Good</button>
      <button onClick={neutralClick}>Neutral</button>
      <button onClick={badClick}>Bad</button>

      <h2>Statistics</h2>

      <p>
        good {good}
        neutral {neutral}
        bad {bad}
      </p>
      

    </div>
  )
}

export default App