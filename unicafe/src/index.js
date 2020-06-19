import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

const Statistic = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Button = (props) => { 
  return (
    <div>
      <button onClick={props.clickHandling}>{props.text}</button>
    </div>
  )
}

const Statistics = (props) => {

  const all = () => {
    return props.good+props.neutral+props.bad;
  }
  const positive = () => {
    return props.good * 100 / (all());
  }
  const average = () => {
    return (props.good*1+props.neutral*0+props.bad*(-1))/all();
  }

  if(props.good===0 && props.neutral===0 && props.bad===0) return(
  <div>
    <p>No feedback given</p>
  </div>  
    )
    
  return(
    <div>
      <table>
        <tbody>
        <tr>
          <td><Statistic text="good"/></td><td>{props.good}</td>
        </tr>
        <tr>
          <td><Statistic text="neutral"/></td><td>{props.neutral}</td>
        </tr>  
        <tr>
          <td><Statistic text="bad"/></td><td>{props.bad}</td>
        </tr>

        <tr>
          <td><Statistic text="all"/></td><td>{all()}</td>
        </tr>
        <tr>
          <td><Statistic text="average"/></td><td>{average()}</td>
        </tr>
        <tr>
          <td><Statistic text="positive"/></td><td>{positive()}</td>
        </tr>
        </tbody>
      </table>
    </div>  
  )  
} 

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <table>
        <tbody>
        <tr>
          <td><Button clickHandling={() => setGood(good+1)} text="good"/></td>
          <td><Button clickHandling={() => setNeutral(neutral+1)} text="neutral"/></td>
          <td><Button clickHandling={() => setBad(bad+1)} text="bad"/></td>
        </tr>
        </tbody>
      </table>

      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>  
) }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);