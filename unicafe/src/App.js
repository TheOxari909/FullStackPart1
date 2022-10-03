import { useState } from 'react'

const Button = ( props ) => (
  <button onClick={props.handleClick}>{props.text}</button> 
)

const Statistics = ({ good, neutral, bad }) => {
  const all = (good + neutral + bad)
  if (all === 0) return <div>No feedback yet</div>
  return (
    <table>
      <tbody>
        <tr>
          <td> good </td>
          <td> {good} </td>
        </tr>
        <tr>
          <td> neutral </td>
          <td> {neutral} </td>
        </tr>
        <tr>
          <td> bad </td>
          <td> {bad} </td>
        </tr>
        <tr>
          <td> all </td>
          <td> {all} </td>
        </tr>
        <tr>
          <td> average </td>
          <td>{(good + neutral * 0 + -bad) / all}</td>
        </tr>
        <tr>
          <td> positive </td>
          <td> {(good / all) * 100} % </td>
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = (oldValue) => {
    const newValue = oldValue + 1
    setGood(newValue)
  }
  const handleNeutral = (oldValue) => {
    const newValue = oldValue + 1
    setNeutral(newValue)
  }
  const handleBad = (oldValue) => {
    const newValue = oldValue + 1
    setBad(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleGood(good)} text={"good"}/>
      <Button handleClick={() => handleNeutral(neutral)} text={"neutral"}/>
      <Button handleClick={() => handleBad(bad)} text={"bad"}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App