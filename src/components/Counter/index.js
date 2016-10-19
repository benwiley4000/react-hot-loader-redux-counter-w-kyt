import React from 'react';
import { connect } from 'react-redux';
import styles from './Counter.css';

const Counter = ({ count }) => (
  <div className={styles.counter}>{count}</div>
);

class CounterContainer extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.props.increment, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Counter count={this.props.count} />;
  }
}

const mapStateToProps = ({ count }) => ({
  count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({
    type: 'COUNT'
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
