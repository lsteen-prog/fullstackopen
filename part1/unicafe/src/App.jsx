import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Statistics = () => {
    const all = good + neutral + bad
    if (all == 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    const average = (good - bad) / all
    const positive = (good / all * 100) + " %"
    return (
      <table>
         <tbody>
          <StatisticLine  text="good" value={good}/>
          <StatisticLine  text="neutral" value={neutral}/>
          <StatisticLine  text="bad" value={bad}/>
          <StatisticLine  text="all" value={all}/>
          <StatisticLine  text="average" value={average}/>
          <StatisticLine  text="positive" value={positive}/>
        </tbody>
      </table>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  const StatisticLine  = (props) => {
    return (
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(good+1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral+1)} />
       <Button text="bad" onClick={() => setBad(bad+1)} />
      <h1>statistics</h1>
      <Statistics />
    </div>
  )
}

export default App