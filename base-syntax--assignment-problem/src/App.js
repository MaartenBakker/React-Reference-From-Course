import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Berend',
  };

  onChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          onChange={this.onChangeHandler}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput username="Adriaan" />
        <UserOutput username="Bakker" />
      </div>
    );
  }
}

export default App;
