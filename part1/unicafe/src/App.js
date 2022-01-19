import React, { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const Button = (props) => {
    return <button onClick={props.handleClick}>{props.text}</button>;
  };

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>
          {props.value.toFixed(2)}
          {props.text === "positive" ? "%" : ""}
        </td>
      </tr>
    );
  };

  const Statistics = (props) => {
    const all = props.good + props.bad + props.neutral;
    const average = (props.good * 1 + props.bad * -1 + props.neutral * 0) / all;
    const positive = (good / all) * 100;

    if (all > 0) {
      return (
        <>
          <h1>statistics</h1>
          <table>
            <tbody>
              <StatisticLine text="good" value={props.good} />
              <StatisticLine text="neutral" value={props.neutral} />
              <StatisticLine text="bad" value={props.bad} />
              <StatisticLine text="all" value={all} />
              <StatisticLine text="average" value={average} />
              <StatisticLine text="positive" value={positive} />
            </tbody>
          </table>
        </>
      );
    }
    return <p>No feedback given</p>;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
