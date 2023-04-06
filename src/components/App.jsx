import { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  //   handleClickGood = event => {
  //     const { name } = event.target;
  //     console.dir(event.target);
  //     this.setState(prevState => ({
  //       good: prevState.good + 1,
  //     }));
  //   };
  //   handleClickNeutral = event => {
  //     const { name } = event.target;
  //     console.log(name);
  //     this.setState(prevState => ({
  //       neutral: prevState.neutral + 1,
  //     }));
  //   };
  //   handleClickBad = event => {
  //     const { name } = event.target;
  //     console.log(name);
  //     this.setState(prevState => ({
  //       bad: prevState.bad + 1,
  //     }));
  //   };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback" level={1}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics" level={2}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
