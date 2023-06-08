import { useState } from "react";
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section'

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  const onLeaveFeedBack = (data) => {
    if(data === 'good'){
      setGood(prevState => prevState + 1);}
    if(data === 'neutral'){
      setNeutral(prevState => prevState + 1);}
    if(data === 'bad'){
      setBad(prevState => prevState + 1);}
  };

  const countTotalFeedback = () => {
    return total;       
  };

  const countPositiveFeedback = () => {
    return (good / (total) * 100).toFixed(0); 
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        textAlign: 'center',
        fontSize: 28,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedBack={onLeaveFeedBack}/>   
      </Section>
      { total > 0 ?
      <Section title="Statistics">
        <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={countTotalFeedback()} 
        positivePercentage={countPositiveFeedback()}/>
      </Section> : 
      <Notification message="There is not Feadback"/>}
    </div>
  );
};