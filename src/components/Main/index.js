import './index.css';
import { Component } from 'react';
import Count from './Count';
import Buttons from './Buttons';

class Main extends Component {
  state = {
    count: 0,
    error: false,
  };

  handleCount = (e) => {
    const operation = +e.target.value;
    if (operation === 0) {
      this.setState({ count: 0 });
    } else if (this.state.count + operation >= 0) {
      this.setState((state) => {
        return { count: state.count + operation };
      });
    } else {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 100);
    }
  };

  render() {
    return (
      <>
        <Count count={this.state.count} error={this.state.error} />
        <Buttons handler={this.handleCount} />
      </>
    );
  }
}

export default Main;
