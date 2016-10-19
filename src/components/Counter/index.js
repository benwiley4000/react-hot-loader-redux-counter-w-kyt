import React from 'react';
import styles from './Counter.css';

const Counter = ({ count }) => (
  <div className={styles.counter}>{count}</div>
);

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Counter count={this.state.count} />
  }
}

export default CounterContainer;
