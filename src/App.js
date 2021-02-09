import { useState } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';
import Container from './components/Container';

export default function App() {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  };

  const onLeaveFeedback = ({ currentTarget }) => {
    const feedbackType = currentTarget.innerText.toLowerCase();
    switch (feedbackType) {
      case 'good':
        setgood(state => state + 1);
        break;
      case 'neutral':
        setneutral(state => state + 1);
        break;
      case 'bad':
        setbad(state => state + 1);
        break;

      default:
        console.log('Unknown option');
        break;
    }
  };
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback() !== 0 ? (
        <Section title="Statistics">
          <Statistics
            options={{ good: good, bad: bad, neutral: neutral }}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Container>
  );
}
