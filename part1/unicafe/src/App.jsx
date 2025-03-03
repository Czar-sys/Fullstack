import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticsLine = ({text, value}) => {
  return <p>{text}: {value}</p>;
};


const Statistics = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return <h2>No feedback given</h2>;
  }
  return (
    <>
      <h1>Statistics</h1>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="All" value={all} />
      <StatisticsLine text="Average: " value={(good - bad) / all} />
      <StatisticsLine text="Positive: " value={(good / all) * 100 + "%"} />
    </>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    setAll(newGood + neutral + bad);
  };

  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    setAll(good + newNeutral + bad);
  };

  const handleBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    setAll(good + neutral + newBad);
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button text="good" onClick={handleGood} />
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </>
  );
};

export default App;
