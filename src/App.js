import './App.css';
import React from 'react';
import Count from './components/Count';
import Buttons from './components/Buttons';

class App extends React.Component {
  state = {
    count: 0,
    error: false,
  };

  handleCount = (e) => {
    const operation = +e.target.value;
    if (operation === 0) {
      this.setState({ count: 0 });
    } else if (this.state.count + operation >= 0) {
      this.setState({ count: this.state.count + operation });
    } else {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 100);
    }
  };

  render() {
    return (
      <div className='App'>
        <h1>Counter</h1>
        <Count count={this.state.count} error={this.state.error} />
        <Buttons handler={this.handleCount} />
      </div>
    );
  }
}

export default App;
