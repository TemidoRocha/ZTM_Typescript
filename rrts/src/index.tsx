import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}

// React componenet as a type notation in order to pass the type
class App extends React.Component<AppProps> {
  // in the world of TS it this 2 ways to define the state are completely diferent

  // one way too initialize the state
  state = { counter: 0 };

  // second way too initialize the state
  // class App extends React.Component<AppProps, AppState> {
  // constructor(props: AppProps) {
  //   super(props);
  //   this.state = { counter: 0 };
  // }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
