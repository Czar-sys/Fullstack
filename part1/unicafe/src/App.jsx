import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {(good - bad) / all}</p>
      <p>Positive: {good / all * 100}%</p>
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
